<template>
  <div>
    <el-table v-loading.fullscreen.lock="isLoading" class="clinet-common-table" :row-class-name="tableRowClassName" :max-height="maxHeight" :data="editableTableData" @cell-click="cellClick" border stripe style="width: 100%">
      <el-table-column label="" width="50" fixed="left">
        <template slot-scope="{row}" v-if="row.errors&&row.errors.length>0">
           <el-popover trigger="hover" placement="top" popper-class="popover-errors-summary">
                <p v-for="(item,index) in row.errors" :key="index">{{item}}</p>
          <div slot="reference" >   <svg-icon icon-class="icon-warning"  />  
          </div>
        </el-popover>
        </template>
      </el-table-column>

      <el-table-column v-for="(col,index) in tableColumns.filter(c=>!c.hide && c.text)" :key="index" :prop="col.prop" :label="col.text" :width="col.width" :show-overflow-tooltip="true" >
        <template slot-scope="{row}">
          <el-checkbox v-if="col.type==='checkbox'" v-model="row[col.prop].value"></el-checkbox>
          <el-select clearable v-else-if="col.type==='select'|| row[col.prop].options" size="small" v-model="row[col.prop].value" @change="selectChange(col.prop, row[col.prop], row,$event)">
            <template v-if="col.prop!='serviceWay'">
              <el-option v-for="(item, index) in row[col.prop].options" :key="index" :label="item.label||item" :value="item.value||item" /> 
            </template>
            <el-option v-else v-for="item in row[col.prop].options" class="serviceWay-option" :key="item.serviceMode" :label="item.serviceMode" :value="item.serviceMode">
              <div>{{ item.serviceMode }}</div>
              <div>{{ item.timelinessExplain }}</div>
            </el-option>
          </el-select>
          <div v-else-if="isInputVisble(row,col)">
            <el-input   size="small" :class="{'input-error': row[col.prop].errorInfo}" :maxlength="col.maxlength||50" v-model="row[col.prop].value" @blur="inputBlur(col.prop, row[col.prop], row)"></el-input>  
          </div>
           <span v-else >
              {{ row[col.prop].value }}
            </span>
          <div class="error-info" v-show="row[col.prop].errorInfo">{{row[col.prop].errorInfo}}</div>
          <div class="warning-info" v-if="!row[col.prop].errorInfo&&row[col.prop].warningInfo">{{row[col.prop].warningInfo}}</div>
        </template>

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
        maxHeight:{
            type:[Number,String],
        },
        //表头列
        tableColumns: {
            required: true,
            type: Array,
            validator: function (cols) {
                if (
                    !cols.every(
                        (col) =>
                            Object.keys(col).indexOf('prop') > -1 ||
                Object.keys(col).indexOf('text') > -1
                    )
                ) {
                    console.log('tableColumns中的所有列必须都包含prop和text属性')
                    return false
                }
                return true
            },
        },
        //表格数据
        tableData: {
            required: true,
            type: Array,
        },
        //数据校验规则
        verifyRules: {
            type: Object,
        },
        //错误总数及行数
        errorSummary: {
            type: Object,
        },
        //是否允许清除所有行
        clearable:{
            type:Boolean,
            default:true,
        }
    },
    data() {
        return {
            isLoading: true,
            columnsOptions:{}, //所有列的下拉选项
            editableTableData: [],
        }
    },
    mounted() {
        this.initTableData(this.tableData)
    },
    methods: {
        isInputVisble(row, column) {
            return !column.readOnly&&(row[column.prop].edit || row[column.prop].errorInfo)
        },
        async initTableData(tableData) {
            this.isLoading = true
            //获取表格所有列的下拉选项
            this.columnsOptions = this.tableColumns.reduce((obj, cur) => {
                if (cur.options) {
                    obj[cur.prop] = cur.options
                }
                return obj
            }, {}) 
            if(tableData&&tableData.length>0){
                await  this.addTableRows(tableData)
            } 
            this.isLoading = false
        },
        async addTableRows(originTableRows){
            this.isLoading = true
            //将表格原始数据转化为相应的数据结构
            const rows = originTableRows.map((item, rowIndex) => {
                let row = {}
                row.__rowIndex =item.no|| rowIndex
                for (let key in item) {
                    row[key] = {
                        value: item[key],
                        edit: false, //编辑状态
                        errorInfo: '', //错误信息
                        warningInfo:'',//警示信息
                        options:this.columnsOptions[key], //下拉选项
                    }
                }
                return row
            }) 
            await this.initVerifyTableData(rows)
            this.editableTableData.push(...rows)
            this.isLoading = false
        },
        async initVerifyTableData(editableTableData) { 
            for(let row of editableTableData){
                for (let col in row) {
                    await this.verifyField(col, row[col], row, true) 
                }
            } 
            this.setErrorCount()
        },
        cellClick(row, column, cell, event) {
            let cellValue = row[column.property]
            if (cellValue) {
                cellValue.edit = true
                this.$nextTick(() => {
                    cell.querySelector('input').focus()
                })
            }
        },
        removeRow(index, rows) {
            if(!this.clearable&&rows.length===1){
                this.$message.warning('表格只剩一行数据，不允许删除')
                return
            }
            rows.splice(index, 1)
            this.setErrorCount()
        },
        async inputBlur(fieldName, val, row) {
            val.edit = false
            await this.verifyField(fieldName, val, row)
        },
        async selectChange(fieldName, val, row, event) {
            val.value = event.label || event
            await this.verifyField(fieldName, val, row)
        },
        /**
       * @param {String} 字段属性名
       * @param {Object} 单元格绑定的对象
       * @param {Object} 当前单元格所有行的数据对象
       * @param {Boolean} 是否是第一初加载时调用
       */
        async verifyField(fieldName, val, row, isInit) {
            if (!this.verifyRules) {
                return
            }
            this.isLoading = true
            let errorInfo = ''
            let fieldRuleArray = this.verifyRules[fieldName] 
            if (fieldRuleArray && fieldRuleArray.length > 0) {
                for (let i = 0; i < fieldRuleArray.length; i++) {
                    const rule = fieldRuleArray[i]
                    const col= this.tableColumns.find((f) => f.prop == fieldName)
                    if(col.hide){
                        continue
                    }
                    const fieldText = col.text
                    if (!val.value) {
                        if (rule.required) {
                            errorInfo = fieldText + '不能为空'
                            break
                        }
                    } else if (rule.reg && !rule.reg.test(val.value)) {
                        errorInfo = rule.msg||''
                        break
                    } else if (rule.validator) { 
                        errorInfo = await rule.validator(row, val,fieldName, isInit) ||''
                        if (errorInfo) {
                            break
                        }
                    }
                }
                val.errorInfo = errorInfo
                !isInit&& this.setErrorCount()
            }
            this.isLoading = false
        },
        setErrorCount() {
            let errorCount = 0
            let errorRowCount = 0
            const totalRowCount= this.editableTableData.length
            this.editableTableData.forEach((item) => {
                let errorItems = Object.keys(item)
                    .filter((key) => item[key].errorInfo)
                    .map((key) => item[key].errorInfo)
                this.$set(item,'errors',errorItems) 
                if (errorItems.length > 0) {
                    errorRowCount += 1
                    errorCount += errorItems.length
                }
            })
            this.$emit('update:errorSummary', { errorRowCount, errorCount,totalRowCount })
        },
        tableRowClassName({ row }) {
            if (row.errors && row.errors.length > 0) {
                return 'error-row'
            }
            return ''
        },
    },
    watch: {
        tableData(data) {
            this.initTableData(data)
        },
    },
}
</script>

<style lang="scss" scoped>
  /deep/ .el-table {
    td {
      vertical-align: unset !important;
      height: 25px;
      .cell {
        margin-top: 10px;
      }
    }
    .error-row {
      background: rgb(255, 243, 241);
      border: 1px solid #f05959;
    }
    .input-error {
      input {
        border-color: #f13e3e;
      }
    }
    .error-info ,.warning-info{
      color: #f13e3e;
      margin-bottom: 8px;
      font-size: 12px;
      line-height: 16px;
    }
    .warning-info{
         color: #ffaa00;
    }
    // .el-table__body-wrapper{
    //     max-height: calc(100vh - 472px) !important;
    // }
  }

// .popover-errors-summary{
//     background:#303133 !important;
//     color:#fff;
// }
.el-select-dropdown{
  .serviceWay-option{
         height: unset;
          font-size: 12px;
          color: #999999;
          :first-child{
            height: 20px;
            font-size: 14px !important;
            color: #333333;
          }
        }
        }
</style>