import { saveAs } from 'file-saver'
import XLSX from 'xlsx'

/* --- Export Functions --- */

/**
 * 导出excel
 * @param {Object} options
 * @param {Array} options.theadColumns 表头列数组 eg:[{prop:'id',text:'序号'}]
 * @param {Array} options.jsonData 导出的json数据 eg:[{prop:1}]
 * @param {string} options.filename [excel] 导出文件名
 * @param {string} options.excelType [xlsx] excel文件类型
 * @param {sheetName} options.sheetName [sheet1] sheet名称
 * @param {Array} customizeThead 自定义表头,支持多级表头 eg:[['序号']]；
 * @param {Array} cellMerges 单元格合并规则 eg:['A1:A2','B1:E1','F1:H1','I1:L1']
 */
export  function exportExcel({
    theadColumns,jsonData,filename='excel',excelType='xlsx',sheetName='sheet1',customizeThead=[],cellMerges=[]
}){ 
    if(!theadColumns||!theadColumns){
        throw new Error('theadColumns 和 jsonData 不能为空')
    }
    let aoa=formatJsonDataToArray(theadColumns,jsonData,customizeThead,cellMerges)
    let sheet=XLSX.utils.aoa_to_sheet(aoa)
    if (cellMerges.length > 0) {
        if (!sheet['!merges']) {
            sheet['!merges'] = []
        }
        cellMerges.forEach(item => {
            sheet['!merges'].push(XLSX.utils.decode_range(item))
        })
    }
    
    let workbook = {
        SheetNames: [sheetName],
        Sheets: {}
    }
    workbook.Sheets[sheetName] = sheet
    // 生成excel的配置项
    let wopts = {
        bookType: excelType, // 要生成的文件类型
        bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
        type: 'binary'
    }
    let wbout = XLSX.write(workbook, wopts)
    let blob = new Blob([s2ab(wbout)], {type:'application/octet-stream'})
    saveAs(blob,`${filename}.${excelType}`)
}

/**
 * 将json数据转化为数组
 * @param {Array} theadColumnss  表头 eg:[{prop:'id',text:'序号'}]
 * @param {Array} jsonData 导出json数据 eg:[{prop:1}]
 * @param {Array} customizeThead 自定义表头 eg:[['序号']]
 * @return eg:[[序号][1]]
 */
function formatJsonDataToArray(theadColumns, jsonData,customizeThead){
    let propArray=[],textArray=[]
    theadColumns.forEach(({prop,text})=>{
        propArray.push(prop)
        textArray.push(text)
    })
    let data=  jsonData.map(j=>propArray.map(p=>j[p]))
    //如果启用自定义表头，则不启用默认表头
    if(customizeThead.length>0){
        for (let i = customizeThead.length - 1; i > -1; i--) {
            data.unshift(customizeThead[i])
        }
    }else{
        data.unshift(textArray)
    } 
    return data
}

//字符串转ArrayBuffer
function s2ab(s) {
    let buf = new ArrayBuffer(s.length)
    let view = new Uint8Array(buf)
    for (let i=0; i!=s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF
    return buf
}

/* --- Import Functions --- */

/**
 * 读取Excel文件,返回json数据
 * @param {Object(File)} file 
 * @param {Number} headerIndex 指定Excel的标题行，从0开始
 * @return {Promise} Promise 参数为：header：表头列，jsonData：表格数据
 */
export  function readExcel(file,headerIndex=0){
    if(!/\.(xlsx|xls|csv)$/.test(file.name)){
        throw new Error('只支持读取.xlsx, .xls, .csv文件')  
    } 
    return new Promise(resolve => {
        const reader = new FileReader()
        reader.onload = e => {
            const data = e.target.result 
            const workbook = XLSX.read(data, { type: 'array' })
            const firstSheetName = workbook.SheetNames[0]
            const worksheet = workbook.Sheets[firstSheetName] 
            let header=getExcelHeader(worksheet,headerIndex)
            const jsonData = XLSX.utils.sheet_to_json(worksheet,{header})
            jsonData.splice(0,headerIndex+1)   
            resolve({header,jsonData}) 
        } 
        reader.readAsArrayBuffer(file.raw)
    })  
}

function getExcelHeader(worksheet,headerIndex){
    let header=[]
    const range=XLSX.utils.decode_range(worksheet['!ref'])
    for (let C = range.s.c; C <= range.e.c; ++C) {
        const cell = worksheet[XLSX.utils.encode_cell({ c: C, r: headerIndex })]
        let text=cell && cell.t? XLSX.utils.format_cell(cell):'COLUMN'+C
        header.push(text)
    } 
    return header
}