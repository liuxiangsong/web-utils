import axios from 'axios'

export const service = axios.create({
    baseURL:'baseURL',
    timeout: 10000, // 请求超时时间
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    }
})

// request拦截器
service.interceptors.request.use(
    config => {
        return config
    },
    error=>{
        console.log('请求报错', error) // for debug
        Promise.reject(error)
    }
)

// respone拦截器
service.interceptors.response.use(
    response => {
        return response
    },
    error=>{
        // Message({
        //     message: error.message,
        //     type: 'error',
        //     duration: 1000
        // })
        return Promise.reject(error)
    }
)
