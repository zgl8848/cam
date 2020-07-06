import axios from 'axios'
import {
  Message,
  MessageBox
} from 'element-ui'
import store from '../store'
import {
  getToken
} from '@/utils/auth'
import router from '../router'

// 创建axios实例
const service = axios.create({
  
  // baseURL: process.env.BASE_API, // api 的 base_url
  baseURL: window.g.baseURL,
  timeout: 50000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.url = config.url + '?access_token=' + getToken()
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    /**
		 * code为非20000是抛错 可结合自己业务进行修改
		 */
    const res = response.data
    if (res.status !== 0) {
      if (res.status === 1004 && router.history.current.path != '/') {
        MessageBox.alert(
          res.message,
          '信息提醒', {
            confirmButtonText: '确定',
            callback: action => {
              store.dispatch('FedLogOut').then(() => {
                location.reload() // 为了重新实例化vue-router对象 避免bug
              })
            }
          })
      } else {
        Message({
          message: res.message,
          type: 'error',
          duration: 5 * 1000
        })
      }

      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: '服务器错误，请联系管理员',
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
