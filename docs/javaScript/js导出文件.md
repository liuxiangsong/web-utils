# 导出 excel

```js
export function downloadFile(fileName, base64) {
    const blob = base64ToBlob(base64)
    if (window.navigator.msSaveOrOpenBlob) {
        navigator.msSaveBlob(blob, fileName)
    } else {
        const link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.download = fileName
        //此写法兼容可火狐浏览器
        document.body.appendChild(link)
        const evt = document.createEvent('MouseEvents')
        evt.initEvent('click', false, false)
        link.dispatchEvent(evt)
        document.body.removeChild(link)
    }
}
  
function base64ToBlob(code) {
    const raw = window.atob(code)
    const rawLength = raw.length
    const uInt8Array = new Uint8Array(rawLength)
    for (let i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i)
    }
    return new Blob([uInt8Array], {
        type: 'application/vnd.ms-excel'
    })
}
```

# 导出 pdf

```js
export function downloadFile (fileName,base64) {//blob就是一中返回的文件,fileName是下载文件名
    let file = base64toFile(base64, 'test', 'application/pdf;charset=utf-8')
    if (window.navigator.msSaveOrOpenBlob) {//msSaveOrOpenBlob方法返回bool值
        navigator.msSaveBlob(file, fileName)//本地保存
    } else {
        var link = document.createElement('a')//a标签下载
        link.href = window.URL.createObjectURL(file)
        link.download = fileName
        link.click()
        window.URL.revokeObjectURL(link.href)
    }
}
function base64toFile (b64Data, filename, contentType) {
    let sliceSize = 512
    let byteCharacters = atob(b64Data)
    let byteArrays = []
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        let slice = byteCharacters.slice(offset, offset + sliceSize)
        let byteNumbers = new Array(slice.length)
   
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i)
        }
        let byteArray = new Uint8Array(byteNumbers)
        byteArrays.push(byteArray)
    }
    let file = new File(byteArrays, filename, { type: contentType })
    return file
}
```
