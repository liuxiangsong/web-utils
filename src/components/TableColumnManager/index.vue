<template>
  <div class="my-dialog">
    <el-dialog title="表格列设置" :visible.sync="dialogVisible" :close-on-click-modal="false" width="388px">
      <p>
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="selectedAllChange">列名</el-checkbox>
      </p>
      <div class="list">
        <el-checkbox-group v-model="checkedColumns" @change="handleCheckGroupChange">
          <draggable v-model="columns" @end="dragEnd" :options="{animation:200}">
            <transition-group>
              <li v-for="item in columns" :key="item.text" class="drag-item">
                <el-checkbox :label="item.text" @change="(val)=>{item.visible=val}">
                  {{item.text}}
                </el-checkbox>
                <span><i class="iconfont iconicon-kehubianma2"></i></span>
              </li>
            </transition-group>
          </draggable> 
        </el-checkbox-group>

      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible=false">取 消</el-button>
        <el-button type="primary" @click="saveData">保 存</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
    name: 'TableColumnManager',
    components: {
        draggable
    },
    props:{
        visible:{
            type:Boolean,
            default:false
        },
        tableColumns:{
            required:true,
            type:Array,
            validator:function(cols){
                if(!cols.every(col=>Object.keys(col).indexOf('text')>-1)){
                    console.log('tableColumns中的所有列必须都包含text属性')
                    return false
                }
                if(!cols.every(col=>Object.keys(col).indexOf('visible')>-1)){ 
                    console.log('提示：tableColumns中的某些列不包含visible属性')
                    return true
                }
                return true  
            }
        }
    },
    data() {
        return { 
            isIndeterminate: true,
            checkAll: false,
            columns:this.tableColumns.map(c=>Object.assign({},c)),
            checkedColumns: [],  
        }
    },
    mounted() {
        this.init()
    },
    methods: { 
        init() { 
            this.checkedColumns = this.columns.filter(i => i.visible).map(i => i.text)
            this.checkAll=this.checkedColumns.length == this.columns.length
            this.isIndeterminate = this.checkedColumns.length != 0 &&  this.checkedColumns.length != this.columns.length
        },
        dragEnd(){
            // console.log(this.columns)
        },
        selectedAllChange(isSelectAll) {
            this.isIndeterminate = false
            this.columns.forEach(item => {item.visible = isSelectAll})
            this.checkedColumns = isSelectAll ? this.columns.map(i => i.text) : []
        },
        handleCheckGroupChange(checkedCols) { 
            this.checkedColumns = checkedCols
            this.checkAll = checkedCols.length == this.columns.length
            this.isIndeterminate =checkedCols.length != 0 && checkedCols.length != this.columns.length
        },
        saveData() { 
            if(this.columns.every(c=>!c.visible)){
                this.$message('表格列不能全部隐藏')
                return
            }
            this.$emit('update:tableColumns',this.columns.map(c=>Object.assign({},c)))
            this.dialogVisible=false 
            this.$emit('onSaved', this.columns) 
        }
    },
    computed:{
        dialogVisible:{
            get:function(){
                return this.dialogVisible
            },
            set:function(val){
                this.$emit('update:visible',val)
            }
        }
    }
    // watch:{
    //     visible(val){
    //         this.dialogVisible=val
    //     },
    //     dialogVisible(val){
    //         this.$emit('update:visible',val)
    //     }
    // }
}
</script>

<style lang="scss" scoped>
  .my-dialog {
    p {
      margin-top: 8px;
      height: 46px;
      line-height: 46px;
      border-bottom: 1px solid #f1f1f5;
    }
    .list {
      height: 400px;
      overflow-y: auto;
      padding-right: 8px;
    }
    .list::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    .list::-webkit-scrollbar-thumb {
      background-color: #dedce3;
      border-radius: 3px;
    }
    li {
      height: 46px;
      line-height: 46px;
      border-bottom: 1px solid #f1f1f5;
      display: flex;
      justify-content: space-between;
      i {
        margin-top: 20px;
      }
    }
  }
</style>