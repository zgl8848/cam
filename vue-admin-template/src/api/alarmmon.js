import request from '@/utils/request'
import request2 from '@/utils/staticrequest'
import citycode from '@/utils/text'

//把行政编码转换成城市名
export function city(data) {
	var chineseCities = citycode;

	for (var i in data) {
		data[i].area = "";
		for (var j in chineseCities.citycode) {
			if (data[i].county == chineseCities.citycode[j].REGIONCODE) {
				data[i].area = chineseCities.citycode[j].REGIONNAME;
			}
		}
	}

	return data;
}

//获取告警信息表格滚动信息
export function getGjxx(param) {
  return request({
    url: '/grid/alarm/queryPage',
    method: 'post',
    data : param
  })
}
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
    // url: '/grid/mgt/map',
    url: '/grid/alarm/area',
    method: 'post',
		data:{
			date:date
		}
  })
}
// 告警xx
export function rate(param) {
    return request({
      url:'grid/alarm/rate',
      method:'post',
      data : param
    })
  }


//获取隐患趋势
export function trend_chart(param) {
  return request({
    url: '/grid/alarm/month',
    method: 'post',
    data:param
  })
}
//告警统计
export function overall(param) {
  return request({
    // url: '/grid/mgt/overall',
    url: '/grid/alarm/module',
    method: 'post',
    data : param
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
