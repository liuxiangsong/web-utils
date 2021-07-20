/**
 * 对数组进行分页处理
 * @param {Array} array 需要分页处理的数据
 * @param {Interge} pageIndex 当前所在页，从1开始计数
 * @param {Interge} pageSize 一页的条数
 * @return {Array} 返回当前页的数据
 */
export function pagination(array, pageIndex, pageSize) {
    var offset = (pageIndex - 1) * pageSize
    if (offset + pageSize >= array.length) {
        return array.slice(offset, array.length)
    }
    return array.slice(offset, offset + pageSize)
}

export function debounce(fn, delay) {
    let timer = null
    return function() {
        timer && clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, delay)
    }
}

export function throttle(fn, delay) {
    let timer = null
    return function() {
        if (!timer) {
            timer = setTimeout(() => {
                timer = null
                fn.apply(this, arguments)
            }, delay)
        }
    }
}

/**
 *  将数组拆分为拆分为组（适用于将数据拆分成批次上传数据）
 * @param {Array} arrayData 需要拆分的数组
 * @param {Number} maxCount 一组数据里最大包含的数量
 * @param {Boolean} isInAvgMethod 是否以平均方式分组
 * @return {Array<Array>}
 */
export function splitArrayToGroup(arrayData, maxCount,isInAvgMethod = true) {
    if (!arrayData || !Array.isArray(arrayData)) {
        return 
    }
    if (arrayData.length <= maxCount) {
        return [arrayData]
    }
    const total = arrayData.length
    const times = Math.ceil(total / maxCount) //最多需要上传的次数
    let avg = Math.ceil(total / times) //平均每次上传的数量
    if(!isInAvgMethod){
        avg =maxCount
    }
    let group = []
    let startIndex=0
    for (let i = 0; i < times; i++) {
        const arr=arrayData.slice(startIndex, startIndex+avg)
        group.push(arr)
        startIndex+=arr.length
    }
    return group
}

/**
 * 同步批量请求
 * @param {Function} requestFunc 请求接口方法，参数为数据数组，如：arr=>{}
 * @param {Array} arrayData 需要拆分的数据数组
 * @param {Array} signleDataCount 一次请求发送的数据条数上限
 * @param {Array} continueCodes 可为空，不为空时，只有当上次请求响应码包含在该数组中时才继续发送下一轮请求
 * @param {Number} requestCount 同时发送的请求数量上限
 * @returns 返回每次接口返回的数据数组
 */
export async function batchRequest({requestFunc,arrayData,signleDataCount,continueCodes,requestCount=5}){
    const arrayGroup = splitArrayToGroup(arrayData, signleDataCount)
    const groupOfGroup=splitArrayToGroup(arrayGroup, requestCount)
    const resList=[]
    for(let i=0;i<groupOfGroup.length;i++){
        const promiseList= groupOfGroup[i].map(list=>requestFunc(list))
        const tempResList = await Promise.all(promiseList)
        if (continueCodes&&tempResList.some((r) =>!continueCodes.includes(r.code))) {
            return
        }
        resList.push(...tempResList)
    }
    return resList
}
  
/**
 * 求和
 * @param {Array} arrayData 数字类型数组
 * @returns 返回总和
 */
export function sum(arrayData) {
    if (!arrayData || !Array.isArray(arrayData)) {
        return 0
    }
    return arrayData.reduce((total,cur)=>total+cur,0)
}

/**
 * 生成guid
 * @returns 返回guid
 */
export function guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (Math.random() * 16) | 0,
            v = c == 'x' ? r : (r & 0x3) | 0x8
        return v.toString(16)
    })
}

/**
 * 检测元素是否滚动到可视范围
 * @param {*} el 
 * @returns 
 */
export function  isElementInViewport (el) {
    if (el) {
        let rect = el.getBoundingClientRect()
        return (rect.top <= window.innerHeight && rect.bottom >= 0)
    }
} 