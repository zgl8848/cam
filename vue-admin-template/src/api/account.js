import request from '@/utils/request'
//获取安防信息
export function security(schoolId) {
  return request({
    url: '/grid/supervision/security',
    method: 'post',
		data: {
			schoolId
		}
  })
}

//获取学校列表
export function getSchoolList(current,size,schoolName,schoolType,deptId) {
	var data = {};
	data.current = current;
	data.size = size;
	if(schoolName != ''){
		data.schoolName = schoolName;
	}
	if(schoolType != 0){
		data.schoolType = schoolType;
	}
	if(deptId != 0){
		data.deptId = deptId;
	}
  return request({
    url: '/grid/school/page',
    method: 'post',
//     data: {
// 			current,
// 			size,
// 			schoolName,
// 			schoolType,
// 			deptId
//     }
		data : data
  })
}

//学校详情
export function getSchoolDetail(schoolId) {
  return request({
    url: '/grid/school',
    method: 'post',
    data: {
			schoolId
    }
  })
}

//获取校长信息
export function getSchoolHeadmaster(schoolId) {
  return request({
    url: '/grid/school/headmaster',
    method: 'post',
    data: {
			schoolId
    }
  })
}

//未处理的隐患台帐
export function getHiddenDanger(schoolId) {
  return request({
    url: '/grid/supervision/hidden_danger',
    method: 'post',
		data: {
			schoolId
		}
  })
}

//未处理的巡查台账
export function getInspect(schoolId) {
  return request({
    url: '/grid/supervision/inspect',
    method: 'post',
		data: {
			schoolId
		}
  })
}

//获取地区列表
export function getTree(){
	return request({
    url: '/admin/dept/user-tree/true',
    method: 'post'
  })
}

//获取设备信息
export function getEquipment(schoolId,current,size){
	return request({
		url: '/grid/equipment/page',
		method: 'post',
		data: {
			schoolId,
			current,
			size
		}
	})
}

//图册接口
export function getImgList(schoolId,startDate,endDate,position){
	var data = {};
	data.schoolId = schoolId;
	data.startDate = startDate;
	data.endDate = endDate;
	if(position == undefined){
		data.position = '';
	}else{
		data.position = position
	}
	return request({
		url: '/grid/school/imgpage',
		method: 'post',
		data: data
	})
}


export function upload(data){
	return request({
		url: '/admin/file/upload',
		method: 'post',
		data: data
	})
}

export function imgSave(data){
	return request({
		url: '/grid/equipment/imgSave',
		method: 'post',
		data: data
	})
}