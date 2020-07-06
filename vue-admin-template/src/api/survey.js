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
//获取演练效果
export function getmap(timestamp) {
  return request({
    url: '/grid/supv/map',
    method: 'post',
		data:{
			date:timestamp
		}
  })
}
//获取演练效果
export function trend_chart() {
  return request({
    url: '/grid/supv/trend_chart',
    method: 'post',
  })
}
//获取校园总体情况
export function overall() {
  return request({
    url: '/grid/supv/overall',
    method: 'post',
  })
}
//获取检查分类
export function classify() {
  return request({
    url: '/grid/supv/classify',
    method: 'post',
  })
}
