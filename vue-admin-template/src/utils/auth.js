import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const CryptoJS = require('crypto-js') // 引用AES源码js

/**
 *加密处理
 */
export const encryption = (params) => {
  let {
    data,
    type,
    param,
    key
  } = params
  const result = JSON.parse(JSON.stringify(data))
  if (type === 'Base64') {
    param.forEach(ele => {
      result[ele] = btoa(result[ele])
    })
  } else {
    param.forEach(ele => {
      var data = result[ele]
      key = CryptoJS.enc.Latin1.parse(key)
      var iv = key
      // 加密
      var encrypted = CryptoJS.AES.encrypt(
        data,
        key, {
          iv: iv,
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.ZeroPadding
        })
      result[ele] = encrypted.toString()
    })
  }
  return result
}

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken(TokenKey) {
  return Cookies.remove(TokenKey)
}

export function getUserId(){
	return Cookies.get('userId')
}

export function setUserId(userId){
	return Cookies.set('userId',userId)
}

export function getSchoolId(){
	return Cookies.get('schoolId')
}

export function setSchoolId(schoolId){
	return Cookies.set('schoolId',schoolId)
}
