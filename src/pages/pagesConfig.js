/**
 * 取得多页应用的配置
 */
const glob = require('glob')

let pagesConfig={}
glob.sync('./src/pages/*/main.js').forEach(filePath=>{
    const dirList=filePath.split('/')
    const dirName=dirList[dirList.length-2]
    pagesConfig[dirName]={
        entry: `src/pages/${dirName}/main.js`,          
        template: `src/pages/${dirName}/index.html`, 
        filename:`${dirName}.html`, 
        chunks:['chunk-vendors',dirName]
    }
})
module.exports=pagesConfig