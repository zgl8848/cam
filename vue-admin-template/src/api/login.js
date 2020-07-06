import request from '@/utils/request'

export function login(username, password, code, randomStr) {
  return request({
    url: '/auth/token',
    headers: {
      isToken:false,
      'TENANT_ID': '1',
      'Authorization': 'Basic cGlnOnBpZw=='
    },
    method: 'post',
    data: {
      username,
      password,
      code,
      randomStr,
      grantType: 'password',
      scope: 'server'
    }
  })
}

export function getInfo(userId) {
  return request({
    url: '/admin/user',
    method: 'post',
    data: {
      userId
    }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export function getVerificationCode(randomStr) {
  return request({
    url: '/auth/code',
    method: 'get',
    data: {
      randomStr
    }
  })
}
