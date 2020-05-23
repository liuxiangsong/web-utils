import REGULAR_EXP from './regularExp'
/**
 * 取得字符串中格式正确的手机号和座机号
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

/**
 * 取得url中查询参数的值
 * @param {string} param 参数名称
 */
export function getUrlParamValue(param){
    var reg = new RegExp('(^|&|/?)'+param+'=([^&]*)(&|$)', 'i')
    let arr=  reg.exec( window.location.search)
    if(arr&&arr.length>1){
        return arr[2]
    } 
}