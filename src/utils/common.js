import REGULAR_EXP from './regularExp'
/** 取得字符串中格式正确的手机号和座机号
 * @method getContactNumbers
 * @param {string} contactNumber 
 */
export function getContactNumbers(contactNumber) {
    if (!contactNumber) {
        return {phones: [],  telephones: [] }
    }
    let phones=[]
    let telephones=[]
    var numbers=contactNumber.split(/[,，/]/).filter(n=>n)
    numbers.forEach(num => {
        if(REGULAR_EXP.mobilePhone.test(num)){
            phones.push(num)
        }else if(REGULAR_EXP.landlinePhone.test(num)){
            telephones.push(num)
        }
    }) 
    return { phones, telephones }
}

/** 获取客户端ip
 * @method getClientIp
 * @param {Number} timeout 
 * @return {Promise} 
 */
export function getClientIp(timeout=500) {
    return new Promise((resolve, reject) => {
        const headNode = document.querySelector('head')
        const script = document.createElement('script')
        script.src = '//pv.sohu.com/cityjson?ie=utf-8'
        headNode.appendChild(script)
        setTimeout(() => {
            headNode.removeChild(script)
            resolve(window.returnCitySN['cip'] || '0:0:0:0:0:0:0:1')
            delete window.returnCitySN
        }, timeout)
    })
}

/** 取得url中的全部参数
 * @method getUrlParams
 * @param {string} url 默认值为window.location.href
 */
export function getUrlParams(url){
    if(!url){
        url=window.location.href
    }
    var regex = /[?&]([^=#]+)=([^&#]*)/g
    let   params = {}
    let  match
    // eslint-disable-next-line no-cond-assign
    while( match = regex.exec(url)) {
        params[match[1]] = match[2]
    }
    return params
}
/**
 * 取得当前浏览器类型
 */
export function getBrowserType(){
    var userAgent = navigator.userAgent //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf('Opera') > -1 //判断是否Opera浏览器
    var isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 && !isOpera //判断是否IE浏览器
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1
    var isEdge = userAgent.indexOf('Edge') > -1 && !isIE //判断是否IE的Edge浏览器  
    var isFF = userAgent.indexOf('Firefox') > -1 //判断是否Firefox浏览器
    var isSafari = userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') == -1 //判断是否Safari浏览器
    var isChrome = userAgent.indexOf('Chrome') > -1 && userAgent.indexOf('Safari') > -1 //判断Chrome浏览器
  
    if (isIE) {
        var reIE = new RegExp('MSIE (\\d+\\.\\d+);')
        reIE.test(userAgent)
        var fIEVersion = parseFloat(RegExp['$1'])
        if(fIEVersion == 7) return 'IE7'
        else if(fIEVersion == 8) return 'IE8'
        else if(fIEVersion == 9) return 'IE9'
        else if(fIEVersion == 10) return 'IE10'
        else return 'IE7以下'//IE版本过低
    }
    if (isIE11) return 'IE11'
    if (isEdge) return 'Edge'
    if (isFF) return 'FF'
    if (isOpera) return 'Opera'
    if (isSafari) return 'Safari'
    if (isChrome) return 'Chrome'
}

export function guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (Math.random() * 16) | 0,
            v = c == 'x' ? r : (r & 0x3) | 0x8
        return v.toString(16)
    })
}