/**
 * 处理input可输入字符
 * @param {Object} ele input对象
 * @param {string} type 可输入类型
 * @param {Number} decimalPoint  小数点位数
 */
export function handleInput(ele,type,decimalPoint){ 
    switch(type){
        case 'integer': 
            ele.value = ele.value.replace(/[^\d]/g, '')
            break
        case 'currency':
            handleFloat(ele,2)
            break
        case 'float':
            handleFloat(ele,decimalPoint)
            break    
    }
}

/**
  * 处理小数类型
  * @param {Object} ele input对象
  * @param {Number} decimalPoint  小数点位数
  */
function handleFloat(ele,decimalPoint=0) {
    let val = ele.value
    // 清除"数字"和"."以外的字符
    val = val.replace(/[^\d.]/g, '')
    // 只保留第一个“点”号, 清除多余的
    const idx = val.indexOf('.')
    if (!(idx === -1 || idx === val.length - 1)) {
        val = val.substr(0, idx) + '.' + val.substr(idx + 1).replace(/\./g, '')
    }
    // 第一个字符如果是.号，则补充前缀0
    val = val.replace(/^\./g, '0.')

    if(parseInt(decimalPoint)>0){
        const str=`^(\\d+)\\.(\\d{${decimalPoint}}).*$`
        const reg=new RegExp(str)
        val = val.replace(reg, '$1.$2')
    } 
    ele.value = val
}