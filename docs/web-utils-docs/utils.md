# ExcelHelper.js

## 读取 Excel

### 使用

- 第二个入参headerIndex，从0开始，标识以哪一行为表头，默认以excel的一行为表头

- 出参jsonData为表格数据，header为表头列

```js
import('@utils/excelHelper').then(async (excel) => {
  let {jsonData,header}= await excel.readExcel(file,1)
  this.tableHeader = header
  this.tableData = jsonData
})
```

### 注意

- 如果excel中单元格的值为空，则该单元格对应的属性不会存在于最终的jsonData中。

## 导出 Excel

### 使用

- 导出标准表格

```js
import('@utils/excelHelper').then((excel) => {
  excel.exportExcel({
    theadColumns: this.tableColumns,
    jsonData: this.tableData,
    filename: 'excel',
  })
})
```

- 导出自定义表头表格

```js
let customizeThead = [
  ['序号', '收方信息', '', '', '', '寄方信息'],
  ['', '收件公司', '收件地址', '收件人', '收件人电话', '寄件公司', '寄件地址'],
]
let merges = ['A1:A2', 'B1:E1']
import('@utils/excelHelper').then((excel) => {
  excel.exportExcel({
    theadColumns: this.tableColumns,
    jsonData: this.tableData,
    filename: 'excel',
    customizeThead,
    merges,
  })
})
```

### 参数

|      参数      |       说明       |  类型  |       可选值       | 默认值 |           示例           |
| :------------: | :--------------: | :----: | :----------------: | :----: | :----------------------: |
|  theadColumns  |    表头列数组    | Array  |         /          |   /    | [{prop:'id',text:'序号'} |
|    jsonData    | 导出的 json 数据 | Array  |         /          |   /    |        [{prop:1}]        |
|    filename    |    导出文件名    | string |         /          | excel  |          excel           |
|   excelType    |  excel 文件类型  | string | xlsx,xls, csv, txt |  xlsx  |           xlsx           |
|   sheetName    |    sheet 名称    | string |         /          | sheet1 |          sheet1          |
| customizeThead |    自定义表头    | Array  |         /          |   []   |        [['序号']]        |
|   cellMerges   |  单元格合并规则  | Array  |         /          |   []   |    ['A1:A2','B1:E1']     |
