import request from '@/utils/request'
import request2 from '@/utils/staticrequest'

//获取静态地图
export function getdt(pro, city) {
  var city = city || pro;

  if (city == pro) {
    var url = '/static/' + pro + '/' + city + '_full.json';
  } else if (city.charAt(4) == "0" && city.charAt(5) == "0") {
    var url = '/static/' + pro + '/' + city + '_full.json';
  }
  else {
    var url = '/static/' + pro + '/' + city + '.json';
  }
  return request2({
    url: url,
    method: 'get',
  })
}
//获取地图信息
export function getmap() {
  return request({
    url: '/grid/sitn/map',
    method: 'post',
  })
}
//获取隐患处理数据
export function hidden_danger() {
  return request({
    url: '/grid/sitn/hidden_danger',
    method: 'post',
  })
}
//获取隐患排查数据
export function inspect() {
  return request({
    url: '/grid/sitn/inspect',
    method: 'post',
  })
}
//获取安全考核积分数据
export function ranking() {
  return request({
    url: '/grid/sitn/ranking',
    method: 'post',
  })
}
//获取安全教育学习次数趋势数据
export function edu() {
  return request({
    url: '/grid/sitn/edu',
    method: 'post',
  })
}
//获取安全考勤数据
export function atnd() {
  return request({
    url: '/grid/sitn/atnd',
    method: 'post'
  })
}
//获取学校访客信息
export function visitor() {
  return request({
    url: '/grid/sitn/visitor',
    method: 'post',
  })
}
//获取学校访客信息
export function monitor() {
  return request({
    url: '/grid/sitn/monitor',
    method: 'post',
  })
}