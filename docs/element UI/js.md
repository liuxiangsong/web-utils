# Element 组件

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

## cascader

- 动态加载数据的情况下，给控件赋值时不会选中相应的选项，这时可给cascader添加key属性，并在给组件赋值时，给key赋值。
