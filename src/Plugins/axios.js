'use strict'

import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.withCredentials = false

let config = {
    baseURL: 'http://testadmin.rundishui.com/admin/v1/',
    timeout: 50000
}

const _axios = axios.create(config)

// 请求拦截
_axios.interceptors.request.use(
    config => {
        // 检查是否登陆
        if (config.url != 'user/signin') {
            if (window.sessionStorage.getItem('token')) {
                config.headers['Authorization'] = window.sessionStorage.getItem('token')
                // Nprogress.start()
            } else {
                // 跳转到登陆页面
                // alert('123456')
                window.location.href = '/'
            }
        }
        // Nprogress.start()
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// 相应拦截
_axios.interceptors.response.use(
    response => {
        let data = response.data
        if (data.errcode) {
            switch (data.errcode) {
                case 401:
                    // 未登陆
                    window.location.href = '/'
                    break
                case 413:
                    // 已登录
                    window.location.href = '/manage'
                    break
                case 404:// 资源不存在
                    break
                case 405:
                    break
                default:
                    break
            }
        }
        return response
    },
    error => {
        // console.log(error, '*****************************')
        return Promise.reject(error)
    }
)
export default _axios
