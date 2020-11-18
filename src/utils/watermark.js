/**
 * 给指定元素添加水印
 * addWatermark('水印文本', 'body,.container')
 * @param {String,Array} text 水印文本
 * @param {String} el 类选择器，用逗号分隔
 * @param {String} color 颜色
 * @param {Number} rotate 水印旋转角度
 */
const addWatermark = (text , el , color = 'rgba(0,0,0, 0.1)', rotate = 20) => {
    let canvas = document.createElement('canvas')
    let ctx = canvas.getContext('2d')
    ctx.font = '12px sans-serif'
    // 角度转弧度
    rotate = rotate * Math.PI / 180
    let text1 = ''
    let text2 = ''
    // text参数是数组则文本分两行
    if (Array.isArray(text)) {
        text1 = text[0]
        text2 = text[1]
    } else {
        text1 = text
    }
    let text1Width = ctx.measureText(text1).width
    let text2Width = ctx.measureText(text2).width
    let l = text1Width > text2Width ? text1Width : text2Width
    // 将文本长度作为斜边求两个直角边
    let top = Math.floor(l * Math.sin(rotate))
    let left = Math.floor(l * Math.cos(rotate))
    canvas.width = left + 50
    canvas.height = top + 80
    ctx.fillStyle = color
    ctx.textBaseline = 'middle'
    ctx.rotate(-rotate)
    ctx.fillText(text1, 0, top)
    ctx.fillText(text2, 0, top + 10)
    let encode = canvas.toDataURL('image/png')
    let style = document.createElement('style')
    style.innerHTML = `${el}{background-image:url(${encode})}`
    document.querySelector('head').appendChild(style)
}

export default addWatermark