# EditableTable 组件

## EditableTable props

| 参数         | 说明                                  | 类型   |
| ------------ | ------------------------------------- | ------ |
| tableColumns | 表头列,详见tableColumns               | Array  |
| tableData    | 表格数据源                            | Array  |
| verifyRules  | 单元格内容的校验规则，详见verifyRules | Object |
| errorSummary | 错误总数及行数                        | Object |

### tableColumns

| 参数     | 说明                                     | 类型    |
| -------- | ---------------------------------------- | ------- |
| prop     | 列属性                                   | String  |
| text     | 列头显示文本(为空时，则不显示该列)       | String  |
| width    | 列宽                                     | String  |
| hide     | 是否隐藏该列                             | Boolean |
| readOnly | 是否允许编辑                             | Boolean |
| type     | 单元格内显示的控件类型                   | String  |
| options  | 下拉选择，如果不为空，则该更使用下拉控件 | Array   |

### verifyRules 内的三种校验方法

| 参数      | 说明       | 类型                                     |
| --------- | ---------- | ---------------------------------------- |
| required  | 是否必填   | Boolean                                  |
| reg       | 正则表达式 | String                                   |
| validator | 校验方法   | function(row,valObject,fieldName,isInit) |
