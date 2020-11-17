(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{386:function(t,a,s){"use strict";s.r(a);var e=s(40),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"工具类方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#工具类方法"}},[t._v("#")]),t._v(" 工具类方法")]),t._v(" "),s("h2",{attrs:{id:"excelutil-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#excelutil-js"}},[t._v("#")]),t._v(" ExcelUtil.js")]),t._v(" "),s("h3",{attrs:{id:"读取-excel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#读取-excel"}},[t._v("#")]),t._v(" 读取 Excel")]),t._v(" "),s("h4",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("第二个入参 headerIndex，从 0 开始，标识以哪一行为表头，默认以 excel 的一行为表头")])]),t._v(" "),s("li",[s("p",[t._v("出参 jsonData 为表格数据，header 为表头列")])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@utils/excelHelper'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("excel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" jsonData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" header "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" excel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("readExcel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tableHeader "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" header\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tableData "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" jsonData\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"注意"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" 注意")]),t._v(" "),s("ul",[s("li",[t._v("如果 excel 中单元格的值为空，则该单元格对应的属性不会存在于最终的 jsonData 中。")])]),t._v(" "),s("h3",{attrs:{id:"导出-excel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导出-excel"}},[t._v("#")]),t._v(" 导出 Excel")]),t._v(" "),s("h4",{attrs:{id:"使用-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-2"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),s("ul",[s("li",[t._v("导出标准表格")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@utils/excelHelper'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("excel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  excel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exportExcel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    theadColumns"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tableColumns"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    jsonData"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tableData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    filename"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'excel'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("ul",[s("li",[t._v("导出自定义表头表格")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" customizeThead "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'序号'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'收方信息'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'寄方信息'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'收件公司'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'收件地址'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'收件人'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'收件人电话'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'寄件公司'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'寄件地址'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" merges "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'A1:A2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'B1:E1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@utils/excelHelper'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("excel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  excel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exportExcel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    theadColumns"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tableColumns"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    jsonData"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tableData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    filename"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'excel'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    customizeThead"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    merges"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("参数")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("说明")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("可选值")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("示例")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("theadColumns")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("表头列数组")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Array")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("/")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("/")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("[{prop:'id',text:'序号'}")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("jsonData")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("导出的 json 数据")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Array")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("/")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("/")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("[{prop:1}]")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("filename")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("导出文件名")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("/")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("excel")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("excel")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("excelType")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("excel 文件类型")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("xlsx,xls, csv, txt")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("xlsx")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("xlsx")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("sheetName")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("sheet 名称")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("/")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("sheet1")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("sheet1")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("customizeThead")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("自定义表头")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Array")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("/")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("[]")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("[['序号']]")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("cellMerges")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("单元格合并规则")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Array")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("/")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("[]")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("['A1:A2','B1:E1']")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);