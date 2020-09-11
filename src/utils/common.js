/**
 * 对数组进行分页处理
 * @param {Array} array 需要分页处理的数据
 * @param {Interge} pageIndex 当前所在页，从1开始计数
 * @param {Interge} pageSize 一页的条数
 * @return {Array} 返回当前页的数据
 */
export function pagination(array,pageIndex, pageSize) {
    var offset = (pageIndex - 1) * pageSize
    if(offset + pageSize >= array.length){
        return array.slice(offset, array.length)
    }
    return array.slice(offset, offset + pageSize)
}

/**
 *  取得分批次上传数据拆分结果
 * @param {Array} arrayData 上传数据
 * @param {Number} maxcount 单次最大上传数量
 * @return {Array<Aarray>}
 */
export function getSplitData(arrayData, maxcount) {
    if(!arrayData){
        return []
    }
    if(arrayData.length<=maxcount){
        return [arrayData]
    }
    const total = arrayData.length
    const times = Math.ceil(total / maxcount) //最多需要上传的次数
    const avg = Math.ceil(total / times) //平均每次上传的数量
    let result = []
    for (let i = 0; i < times; i++) {
        result.push(arrayData.splice(0, avg))
    }
    return result
}

export function guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (Math.random() * 16) | 0,
            v = c == 'x' ? r : (r & 0x3) | 0x8
        return v.toString(16)
    })
}