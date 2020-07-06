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
    url: '/grid/food/map',
    method: 'post',
		data:{
			date:timestamp
		}
  })
}
//获取食品留样情况
export function sample() {
  return request({
    url: '/grid/food/sample',
    method: 'post',
  })
}
//获取营养分布情况
export function nutrition() {
  return request({
    url: '/grid/food/nutrition',
    method: 'post',
  })
}
//获取从业人员情况
export function cert() {
  return request({
    url: '/grid/food/cert',
    method: 'post',
  })
}
//获取食品留样执行趋势
export function trend_chart() {
  return request({
    url: '/grid/food/trend_chart',
    method: 'post',
  })
}
