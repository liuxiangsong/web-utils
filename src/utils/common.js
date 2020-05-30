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