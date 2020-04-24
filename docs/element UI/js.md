# 表单

## validateField（字段校验）

`this.$refs["formName"].validateField(["mobile"])`

## resetFields（重置表格字段）

1. 该方法是把 formData 的值设为初始值，该初始值是在 mounted 被调用时赋值上去的，所以在编辑赋值操作时，要在 this.\$nextTick 里操作。

`this.$refs["formName"].resetFields()`
