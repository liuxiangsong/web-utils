import request from '@utils/request'

export function login(data) {
    return request({
        url: '/web-utils/user/login',
        method:'post',
        data,
        hideErrMsg:true
    })
}

export function logout() {
    return request({
        url: '/web-utils/user/loginout',
        method:'post',
        hideErrMsg:true
    })
}