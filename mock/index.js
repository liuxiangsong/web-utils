// import waybill from './data/waybill'
// import article from './data/article'
// import user from './data/user'

// const mocks=[
//     ...article,
//     ...waybill,
//     ...user
// ]
// export default mocks


const glob = require('glob')
const path=require('path')
let mocks=[]

glob.sync('./mock/data/*.js').forEach(filePath=>{
    const fileName=path.basename(filePath)
    mocks.push(...require(`./data/${fileName}`)) 
})

// console.log('mocks :>> ', mocks)
export default mocks