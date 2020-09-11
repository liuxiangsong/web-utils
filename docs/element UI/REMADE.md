# elemnt UI

## 表单

### validateField（字段校验）

`this.$refs["formName"].validateField(["mobile"])`

### resetFields（重置表格字段）

- 该方法是把 formData 的值设为初始值，该初始值是在 mounted 被调用时赋值上去的，所以在编辑赋值操作时，要在 this.\$nextTick 里操作。

`this.$refs["formName"].resetFields()`

- 使用
  1. 表单添加 ref 属性
  2. 表单项 el-form-item 必须添加 prop 属性
  3. 编辑赋值 this.\$nextTick 里操作

## el-table

- 表格高度自适应
    1. 定义变量：tableHeight：0
    2. el-table 标签上设置:heigth="tableHeight"
    3. 定义方法：setTableHeight(){
            this.tableHeight=window.innerHeight-427 //427为除表格以外的总高度
            this.$nextTick(()=>{  this.tableHeight='calc(100% - 81px)'})
        },
    4. 加载数据后调用setTableHeight()
    5. 如果有右侧固定列时，el-table-column 须设置min-width，不然右侧固定列位置可能会有错位的问题。

## el-popover

- 设置弹窗不随窗体滚动重新计算其定位：:popper-options="{boundariesElement:'body'}"
