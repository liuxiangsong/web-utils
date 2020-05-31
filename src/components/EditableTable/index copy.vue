<template>
  <div>
    <el-table v-loading="isLoading" :row-class-name="tableRowClassName" max-height="485" :data="editableTableData" @cell-click="cellClick" border stripe style="width: 100%">
      <el-table-column label="" width="50" fixed="left">
        <template slot-scope="{row}" v-if="row.errors&&row.errors.length>0">
          <el-tooltip effect="dark" :content="row.errors.join()" placement="top">
            <div><i slot="reference" style="color:red;" class="el-icon-warning"></i></div>
          </el-tooltip>
        </template>
      </el-table-column>

      <el-table-column v-for="(col,index) in tableColumns" :key="index" :prop="col.prop" :label="col.text" :width="col.width" :show-overflow-tooltip="true">
        <div slot-scope="{row}" :class="{'input-error': row[col.prop].errorInfo}">
          <el-select clearable v-if="isElementVisble( row,col,true)" size="small" v-model="row[col.prop].value" @change="selectChange(col.prop, row[col.prop], row,$event)">
            <el-option v-for="(item, index) in row[col.prop].options" :key="index" :label="item.label||item" :value="item.vaule||item" />
          </el-select>
          <div v-else>
            <el-tooltip :disabled="!row[col.prop].errorInfo" effect="dark" :content="row[col.prop].errorInfo" placement="top">
             <div> 
                <el-input  v-show="isElementVisble(row,col)" style="height:32px" v-model="row[col.prop].value" @blur="inputBlur(col.prop, row[col.prop], row)"></el-input>
               <span  v-show="!isElementVisble(row,col)" :style="{color: row[col.prop].errorInfo ? 'red' : 'black'}">
                   {{ row[col.prop].value }} 
              </span>
             </div>
            </el-tooltip>
          </div>
        </div>
      </el-table-column>

      <el-table-column width="60" fixed="right">
        <template slot="header">操作</template>
        <template slot-scope="scope">
          <el-button @click.native.prevent="removeRow(scope.$index, editableTableData)" type="text" size="small">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
    name: 'EditableTable',
    props: {
        //表头列
        tableColumns: {
            required: true,
            type: Array,
            validator: function(cols) {
                if (
                    !cols.every(
                        col =>
                            Object.keys(col).indexOf('prop') > -1 ||
                Object.keys(col).indexOf('text') > -1
                    )
                ) {
                    console.log('tableColumns中的所有列必须都包含prop和text属性')
                    return false
                }
                return true
            }
        },
        //表格数据
        tableData: {
            required: true,
            type: Array
        },
        //数据校验规则
        verifyRules: {
            type: Object
        },
        //错误总数及行数
        errorSummary: {
            type: Object
        }
    },
    data() {
        return {
            isLoading: true,
            editableTableData: []
        }
    },
    methods: { 
        isElementVisble(row,column, selectElement){
            if(selectElement){
                return row[column.prop].options&&row[column.prop].options.length>0
            }else{
                return   row[column.prop].edit || (! row[column.prop].value&& row[column.prop].errorInfo)
            }
        },
        initTableData(tableData) {
            this.isLoading = true
            console.log('this.isLoading :>> ', this.isLoading)
            //获取表格列的下拉选项
            const options = this.tableColumns.reduce((obj, cur) => {
                if (cur.options) {
                    obj[cur.prop] = cur.options
                }
                return obj
            }, {})
            //将表格原始数据转化为相应的数据结构
            this.editableTableData = tableData.map((item, rowIndex) => {
                let row = {}
                row.__rowIndex = rowIndex
                for (var key in item) {
                    row[key] = {
                        value: item[key],
                        edit: false, //编辑状态
                        errorInfo: '', //错误信息
                        options: item[key].options || options[key] //下拉选项
                    }
                }
                return row
            })
            this.isLoading = false
        },
        cellClick(row, column, cell, event) {
            let cellValue = row[column.property]
            if (cellValue) {
                cellValue.edit = true
                this.$nextTick(()=>{
                    cell.querySelector('input').focus()
                })
            }
        },
        removeRow(index, rows) {
            rows.splice(index, 1)
            this.setErrorCount()
        },
        async inputBlur(fieldName, val, row) { 
            val.edit = false
            await this.verifyFiled(fieldName, val, row) 
        },
        async selectChange(fieldName, val, row, event) {
            val.value = event.label || event
            await this.verifyFiled(fieldName, val, row)
        },
        async verifyFiled(fieldName, val, row, isInit) {
            if (!this.verifyRules) {
                return
            }
            this.isLoading = true
            let errorInfo = ''
            let fieldRule = this.verifyRules[fieldName]
            if (fieldRule) {
                let fieldText = this.tableColumns.find(f => f.prop == fieldName).text
                if (!val.value) {
                    if (fieldRule.required) {
                        errorInfo = fieldText + '不能为空'
                    }
                } else if (fieldRule.reg && !fieldRule.reg.test(val.value)) {
                    errorInfo = fieldRule.msg
                } else if (fieldRule.validator) {
                    errorInfo = await fieldRule.validator(row, val.value)
                }
                val.errorInfo = errorInfo
                this.setErrorCount()
            }
            this.isLoading = false
        },
        setErrorCount() {
            let errorCount = 0
            let errorRowCount = 0
            this.editableTableData.forEach(item => {
                let errorItems = Object.keys(item)
                    .filter(key => item[key].errorInfo)
                    .map(key => item[key].errorInfo)
                item.errors = errorItems
                if (errorItems.length > 0) {
                    errorRowCount += 1
                    errorCount += errorItems.length
                }
            })
            this.$emit('update:errorSummary', { errorRowCount, errorCount })
        },
        tableRowClassName({ row }) {
            if (row.errors && row.errors.length > 0) {
                return 'error-row'
            }
            return ''
        }
    },
    watch: {
        tableData(data) {
            this.initTableData(data)
        }
    }
}
</script>

<style lang="scss">
  .el-table {
    .error-row {
      background: rgb(255, 243, 241);
      border: 1px solid #f05959;
    }
    .input-error {
      input {
        border-color: red;
      }
    }
  }
</style>