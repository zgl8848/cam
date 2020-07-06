/**
 * Created by jiachenpan on 16/11/18.
 */
import citycode from './text.js'



export function parseTime(time, cFormat) {
	if (arguments.length === 0) {
		return null
	}
	const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
	let date
	if (typeof time === 'object') {
		date = time
	} else {
		if (('' + time).length === 10) time = parseInt(time) * 1000
		date = new Date(time)
	}
	const formatObj = {
		y: date.getFullYear(),
		m: date.getMonth() + 1,
		d: date.getDate(),
		h: date.getHours(),
		i: date.getMinutes(),
		s: date.getSeconds(),
		a: date.getDay()
	}
	const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
		let value = formatObj[key]
		// Note: getDay() returns 0 on Sunday
		if (key === 'a') {
			return ['日', '一', '二', '三', '四', '五', '六'][value]
		}
		if (result.length > 0 && value < 10) {
			value = '0' + value
		}
		return value || 0
	})
	return time_str
}

export function formatTime(time, option) {
	time = +time * 1000
	const d = new Date(time)
	const now = Date.now()

	const diff = (now - d) / 1000

	if (diff < 30) {
		return '刚刚'
	} else if (diff < 3600) {
		// less 1 hour
		return Math.ceil(diff / 60) + '分钟前'
	} else if (diff < 3600 * 24) {
		return Math.ceil(diff / 3600) + '小时前'
	} else if (diff < 3600 * 24 * 2) {
		return '1天前'
	}
	if (option) {
		return parseTime(time, option)
	} else {
		return (
			d.getMonth() +
			1 +
			'月' +
			d.getDate() +
			'日' +
			d.getHours() +
			'时' +
			d.getMinutes() +
			'分'
		)
	}
}

export function isExternal(path) {
	return /^(https?:|mailto:|tel:)/.test(path)
}

//产生随机数
export function randNum(n) {
	var rnd = "";
	for (var i = 0; i < n; i++)
		rnd += Math.floor(Math.random() * 10);
	return rnd;
}

//查找地图中心点
export function center(data) {
	var maxlat = 0,
		maxlng = 0,
		minlat = 200,
		minlng = 200;
	for (var i in data.features) {

		if (Array.isArray(data.features[i].properties.center)) { //在这里为true是数组，false为对象

			if (data.features[i].properties.center[0] > maxlng) {
				maxlng = data.features[i].properties.center[0];
			}
			if (data.features[i].properties.center[1] > maxlat) {
				maxlat = data.features[i].properties.center[1];
			}
			if (data.features[i].properties.center[0] < minlng) {
				minlng = data.features[i].properties.center[0];
			}
			if (data.features[i].properties.center[1] < minlat) {
				minlat = data.features[i].properties.center[1];
			}
		} else {
			if (data.features[i].properties.name != "") {

				if (data.features[i].properties.center.lng > maxlng) {
					maxlng = data.features[i].properties.center.lng;
				}
				if (data.features[i].properties.center.lat > maxlat) {
					maxlat = data.features[i].properties.center.lat;
				}
				if (data.features[i].properties.center.lng < minlng) {
					minlng = data.features[i].properties.center.lng;
				}
				if (data.features[i].properties.center.lat < minlat) {
					minlat = data.features[i].properties.center.lat;
				}
			} else {
				// console.log(data.features[i].properties.adcode)
			}
		}
	}
	var array = [];
	array.push((maxlng + minlng) / 2);
	array.push((maxlat + minlat) / 2);
	console.log(array)
	return array;
}
//查找地图中心点2
export function center2(data) {
	var maxlat = 0,
		maxlng = 0,
		minlat = 200,
		minlng = 200;

	if (data.features.length == 1) {
		for (var i in data.features[0].geometry.coordinates[0]) {
			if (data.features[0].geometry.coordinates[0][i][0] > maxlng) {
				maxlng = data.features[0].geometry.coordinates[0][i][0];
			}
			if (data.features[0].geometry.coordinates[0][i][0] < minlng) {
				minlng = data.features[0].geometry.coordinates[0][i][0];
			}
			if (data.features[0].geometry.coordinates[0][i][1] > maxlat) {
				maxlat = data.features[0].geometry.coordinates[0][i][1];
			}
			if (data.features[0].geometry.coordinates[0][i][1] < minlat) {
				minlat = data.features[0].geometry.coordinates[0][i][1];
			}

		}
	} else {
		for (var i in data.features) {
			for (var j in data.features[i].geometry.coordinates[0][0]) {
				if (data.features[i].geometry.coordinates[0][0][j][0] > maxlng) {
					maxlng = data.features[i].geometry.coordinates[0][0][j][0];
				}
				if (data.features[i].geometry.coordinates[0][0][j][0] < minlng) {
					minlng = data.features[i].geometry.coordinates[0][0][j][0];
				}
				if (data.features[i].geometry.coordinates[0][0][j][1] > maxlat) {
					maxlat = data.features[i].geometry.coordinates[0][0][j][1];
				}
				if (data.features[i].geometry.coordinates[0][0][j][1] < minlat) {
					minlat = data.features[i].geometry.coordinates[0][0][j][1];
				}
			}
		}
	}

	var array = [];
	array.push((maxlng + minlng) / 2);
	array.push((maxlat + minlat) / 2);
	// console.log(array)
	return array;
}
export function getdatelist() {
	var date = new Date();
	var nowy = date.getFullYear();
	var nowm = date.getMonth() + 1;
	var array = [];
	for (var i = 0; i < 12; i++) {

		if (nowm + i >= 13) {
		var nowm2 = nowm+i - 12;
			var str = nowy + "年" + nowm2  + "月";
			if(nowm2<10&&nowm2>0){
				var strm="0"+nowm2;
			}else{
				var strm=nowm2.toString();
			}
			var item = {
				str: str,
				// time: Math.round(new Date(nowy, nowm + i - 1).getTime() / 1000)
				time:nowy+"-"+strm
			};
			array.push(item);
		} else {
			var str = nowy - 1 + "年" + (nowm + i) + "月";
			if(nowm+i<10&&nowm+i>0){
				var strm="0"+(nowm+i);
			}else{
				var strm=(nowm+i).toString();
			}
			var item = {
				str: str,
				//time: Math.round(new Date(nowy - 1, nowm + i - 1).getTime() / 1000)
				time:(nowy-1)+"-"+strm
			};

			array.push(item);
		}

	}
	console.log(date.getMonth() + 1)
	if(date.getMonth() + 1<10&&date.getMonth() + 1>0){
		array.push({
			str:nowy+"年"+(date.getMonth() + 1)+"月",
			time:nowy+"-0"+(date.getMonth() + 1)
		})
	}else{
		array.push({
			str:nowy+"年"+(date.getMonth() + 1)+"月",
			time:nowy+"-"+(date.getMonth() + 1)
		})
	}
	array.reverse();
	console.log(array)
	return array;
}
export function getnowdate(){
	var date=new Date();
	var y=date.getFullYear();
	var m=date.getMonth()+1;
	var d=date.getDate();
	if(m>0&&m<10){
		m="0"+m;
	}
	if(d>0 && d<10){
		d = "0"+d;
	}
	return y+'-'+m+'-'+d;
}
export function getnextdate(){
	var date=new Date(new Date().getTime() + 24*60*60*1000);
	var y=date.getFullYear();
	var m=date.getMonth()+1;
	var d=date.getDate();
	if(m>0&&m<10){
		m="0"+m;
	}
	if(d>0 && d<10){
		d = "0"+d;
	}
	return y+'-'+m+'-'+d;
}
export function debounce(func, wait, immediate) {
	let timeout, args, context, timestamp, result

	const later = function() {
		// 据上一次触发时间间隔
		const last = +new Date() - timestamp

		// 上次被包装函数被调用时间间隔last小于设定时间间隔wait
		if (last < wait && last > 0) {
			timeout = setTimeout(later, wait - last)
		} else {
			timeout = null
			// 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
			if (!immediate) {
				result = func.apply(context, args)
				if (!timeout) context = args = null
			}
		}
	}

	return function(...args) {
		context = this
		timestamp = +new Date()
		const callNow = immediate && !timeout
		// 如果延时不存在，重新设定延时
		if (!timeout) timeout = setTimeout(later, wait)
		if (callNow) {
			result = func.apply(context, args)
			context = args = null
		}

		return result
	}
}
//把行政编码转换成城市名
export function city(data) {
	var chineseCities = citycode;

	for (var i in data) {
		data[i].area = "";
		for (var j in chineseCities.citycode) {
			if (data[i].areaCode == chineseCities.citycode[j].REGIONCODE) {
				data[i].area = chineseCities.citycode[j].REGIONNAME;
			}
		}
	}

	return data;
}
//返回同一区域的其他数据
export function other(data, bl) {
	var x = {a:"1"} ;
		console.log(x[bl]);
}

export function setAttr(attr, val) {
    let obj = document.createAttribute(attr);
    obj.nodeValue = val;
    return obj;
}