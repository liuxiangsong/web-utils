/**
 * Vue Jsonp By LancerComet at 16:35, 2016.10.17.
 * # Carry Your World #
 *
 * @author: LancerComet
 * @license: MIT
 */
let _timeout = null

export default function jsonp (url, params, timeout) {
    params = params || {}
    timeout = timeout || _timeout

    return new Promise(function (resolve, reject) {
        if (typeof url !== 'string') {
            throw new Error('param "url" is not string.')
        }

        let callbackQuery = params.callbackQuery || 'callback'
        let callbackName = params.callbackName || 'jsonp_' + randomStr()

        params[callbackQuery] = callbackName

        // Remove callbackQuery and callbackName.
        delete params.callbackQuery
        delete params.callbackName

        // Convert params to querying str.
        let queryStrs = []
        Object.keys(params).forEach(function (queryName) {
            queryStrs = queryStrs.concat(formatParams(queryName, params[queryName]))
        })

        let queryStr = flatten(queryStrs).join('&')

        // Timeout timer.
        let timeoutTimer = null

        // Setup timeout.
        if (typeof timeout === 'number') {
            timeoutTimer = setTimeout(function () {
                removeErrorListener()
                headNode.removeChild(paddingScript)
                delete window[callbackName]
                reject({ statusText: 'Request Timeout', status: 408 })
            }, timeout)
        }

        // Create global function.
        window[callbackName] = function (json) {
            clearTimeout(timeoutTimer)
            removeErrorListener()
            headNode.removeChild(paddingScript)
            resolve(json)
            delete window[callbackName]
        }

        // Create script element.
        let headNode = document.querySelector('head')
        let paddingScript = document.createElement('script')

        // Add error listener.
        paddingScript.addEventListener('error', onError)

        // Append to head element.
        paddingScript.src = url + (/\?/.test(url) ? '&' : '?') + queryStr
        headNode.appendChild(paddingScript)

        /**
     * Padding script on-error event.
     * @param {Event} event
     */
        function onError () {
            removeErrorListener()
            clearTimeout(timeoutTimer)
            reject({
                status: 400,
                statusText: 'Bad Request'
            })
        }

        /**
     * Remove on-error event listener.
     */
        function removeErrorListener () {
            paddingScript.removeEventListener('error', onError)
        }
    })

}
 
/**
 * Generate random string.
 * @return { String }
 */
function randomStr () {
    return (Math.floor(Math.random() * 100000) * Date.now()).toString(16)
}

/**
 * Format params into querying string.
 * @param {{}}
 * @return {string[]}
 */
function formatParams (queryName, value) {
    queryName = queryName.replace(/=/g, '')
    let result = []

    switch (value.constructor) {
        case String:
        case Number:
        case Boolean:
            result.push(encodeURIComponent(queryName) + '=' + encodeURIComponent(value))
            break

        case Array:
            value.forEach(function (item) {
                result = result.concat(formatParams(queryName + '[]=', item))
            })
            break

        case Object:
            Object.keys(value).forEach(function (key) {
                let item = value[key]
                result = result.concat(formatParams(queryName + '[' + key + ']', item))
            })
            break
    }

    return result
}

/**
 * Flat querys.
 *
 * @param {any} array
 * @returns
 */
function flatten (array) {
    let querys = []
    array.forEach(function (item) {
        if (typeof item === 'string') {
            querys.push(item)
        } else {
            querys = querys.concat(flatten(item))
        }
    })
    return querys
}