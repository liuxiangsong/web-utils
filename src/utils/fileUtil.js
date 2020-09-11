/**
 * 通过url批量下载文件
 * @param {Array} urls url数组 
 */
export async function  downloadFileByUrls(urls){
    urls.forEach((url,index)=>{
        createIFrame(url,index*100,1000)
    })
} 
function createIFrame(url,triggerDelay,removeDelay){
    setTimeout(() => {
        const iframe = document.createElement('iframe')
        iframe.style.display = 'none'  // 防止影响页面
        iframe.style.height = 0  // 防止影响页面
        iframe.src = url
        document.body.appendChild(iframe)
        setTimeout(()=>{
            iframe.remove()
        }, removeDelay) 
    }, triggerDelay)
}


/**
 * 通过url下载文件
 * @param {String} url 文件url
 * @param {String} filename 文件名
 */
export async function downloadFileByUrl(url,filename){
    let res= await fetch(url) 
    const blob=await res.blob() 
    import('file-saver').then(file=>{
        file.saveAs(blob ,filename||url.replace(/(.+\/)/,''))
    })
}

/**
 * 通过url下载文件(注：批量下载时只能下载最后一个)
 * @param {String} url 文件url
 * @param {String} filename 文件名
 */
export function downloadFileByLink(url,filename){
    // window.location.href=url
    const link = document.createElement('a')
    link.href=url 
    link.download = filename
    //此写法兼容可火狐浏览器
    document.body.appendChild(link)
    const evt = document.createEvent('MouseEvents')
    evt.initEvent('click', false, false)
    link.dispatchEvent(evt)
    document.body.removeChild(link)
}
 
/**
 * 通过base64下载文件
 * @param {String} base64 base64字符串,格式: data:image/png;base64,****
 * @param {String} filename 文件名
 */
export function downloadFileByBase64(base64,filename){
    let blob=  base64ToBlob(base64)
    if (window.navigator.msSaveOrOpenBlob) {//msSaveOrOpenBlob方法返回bool值
        navigator.msSaveBlob(blob, filename)//本地保存
    } else {
        const url=window.URL.createObjectURL(blob)
        downloadFileByLink(url,filename)
    }
}

/**
* database64文件格式转换为2进制
* @param  {String} data base64字符串,格式: data:image/png;base64,****
* @return {blob}
*/
export function base64ToBlob(data) {
    const  arr = data.split(',')
    const mime = arr[0].match(/:(.*?);/)[1]  
    const raw = window.atob(arr[1])
    const rawLength = raw.length
    const uint8Array = new Uint8Array(rawLength)
    for (let i = 0; i < rawLength; ++i) {
        uint8Array[i] = raw.charCodeAt(i)
    }
    return new Blob([uint8Array], {type: mime})
    // return new File([uint8Array], filename, {type:mime});
}
 
/**
 * 读取文件并转化为base64
 * @param {File} file 
 * @param {boolean} removeFileInfo 是否移除base64文件头信息
 */
export function readFileToBase64(file,removeFileInfo) {
    const rawFile=file.raw
    return new Promise(function(resolve, reject) {
        let reader = new FileReader()
        let result = ''
        reader.readAsDataURL(rawFile)
        reader.onload = function() {
            result = reader.result
        }
        // reader.progress = function(rawFile) {
        //     console.log(rawFile)
        // }
        reader.onerror = function(error) {
            reject(error)
        }
        reader.onloadend = function() {
            if(removeFileInfo){
                result=result.split(',')[1]
            } 
            resolve(result)
        }
    })
}