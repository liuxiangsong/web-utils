import request from '@utils/request'

export function fetchList(query) {
    return request({
        url: '/web-utils/waybill/list',
        method: 'get',
        params: query,
        hideErrMsg:true
    })
}