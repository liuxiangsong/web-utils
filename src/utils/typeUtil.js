/**
 * 移除字符串中的指定字符
 * @param {String} text 需要移除首尾指定字符的字符串
 * @param {String\char} char 指定移除的字符，为空时表示移除空格
 */
export function trim(text,char){
    if(!char){
        char='s'
    }
    const exp=new RegExp('^\\'+char+'+|\\'+char+'+$', 'g')
    return  text.replace(exp,'')
}


