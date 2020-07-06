import request from '@/utils/request'
import request2 from '@/utils/staticrequest'

//获取静态地图
export function getdt(pro,city) {
	var city=city || pro;
	
	if(city==pro){
		var url='/static/'+ pro + '/'+ city +'_full.json';
		}else if(city.charAt(4)=="0"&&city.charAt(5)=="0"){
			var url='/static/'+ pro + '/'+ city +'_full.json';
		}
		else{
			var url='/static/'+ pro + '/'+ city +'.json';
		}
  return request2({
    url:url,
    method: 'get',
  })
}
//获取地图信息
export function getmap(date) {
	
  return request({
    url: '/grid/mgt/map',
    method: 'post',
		data:{
			date:date
		}
  })
}
//获取隐患趋势
export function trend_chart() {
  return request({
    url: '/grid/mgt/trend_chart',
    method: 'post',
  })
}
//获取校园整改情况
export function overall() {
  return request({
    url: '/grid/mgt/overall',
    method: 'post',
  })
}
//获取隐患分布
export function classify() {
  return request({
    url: '/grid/mgt/classify',
    method: 'post',
  })
}
//获取上报来源
export function source() {
  return request({
    url: '/grid/mgt/source',
    method: 'post',
  })
}
