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
    url: '/grid/emrg/map',
    method: 'post',
		data:{
			date:timestamp
		}
  })
}
//获取演练效果
export function effect() {
  return request({
    url: '/grid/emrg/effect',
    method: 'post',
  })
}
//获取校园总体情况
export function overall() {
  return request({
    url: '/grid/emrg/overall',
    method: 'post',
  })
}
//获取区域排名
export function ranking() {
  return request({
    url: '/grid/emrg/ranking',
    method: 'post',
  })
}

//获取演练类型
export function classify() {
  return request({
    url: '/grid/emrg/classify',
    method: 'post',
  })
}
//获取演练次数
export function number() {
  return request({
    url: '/grid/emrg/number',
    method: 'post',
  })
}
