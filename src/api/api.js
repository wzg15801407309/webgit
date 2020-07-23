import Http from '@/plugins/http/http'

/**
 * 登陆
 */
export const mlogin = data => Http.post('proxyAdmin/login', data)