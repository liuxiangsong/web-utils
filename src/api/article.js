import request from '@utils/request'

export function fetchList() {
    return request({
        url: '/web-utils/article/list',
        method: 'get',
        // params: query
        hideErrMsg:true
    })
}