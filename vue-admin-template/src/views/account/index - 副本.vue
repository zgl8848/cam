<template>
	<div class="view-container" ref="container" @click="hideSearch">
		<div class="vc-left" ref="vcLeft">
			<div class="school-name" @click="searchSchool">
				<img src="@/assets/account/school.png" class="school" alt="">
				<div class="school-text">{{schoolName}}</div>
				<img src="@/assets/account/arrow.png" alt="" class="arrow">
			</div>
			<!-- 搜索学校列表start -->
			<div class="search-box" v-if="schoolShow" id="search-box">
				<!-- <div class="search-container"> -->
				<div class="search-school-name">
					<div class="search-title">学校名称：</div>
					<div class="search-search-input">
						<el-input class="search-input" v-model="searchSchoolName" placeholder="请输入学校名称"></el-input>
					</div>
					<div class="search-btn" @click="getSchool">
						搜索
					</div>
				</div>
				<div class="school-section">
					<div class="search-title">学段：</div>
					<dl>
						<dt v-for="ss in schoolSection" :style="{color : (ss.id == sectionStatus ? '#18c6ff' : '#ffffff')}" @click="section(ss.id)">{{ss.text}}</dt>
					</dl>
				</div>
				<div class="area">
					<div class="search-title">区域：</div>
					<dl>
						<dt v-for="(area,key) in areaData" :style="{color : (area.id == areaStatus ? '#18c6ff' : '#ffffff')}" @click="region(key)">{{area.name}}</dt>
					</dl>
				</div>
				<div class="area" v-if="townShow">
					<div class="search-title">下级区域：</div>
					<dl>
						<dt v-for="(t,tkey) in townData" :style="{color : (t.id == townStatus ? '#18c6ff' : '#ffffff')}" @click="town(tkey)">{{t.name}}</dt>
					</dl>
				</div>
				<div class="area" v-if="endShow">
					<div class="search-title">下级区域：</div>
					<dl>
						<dt v-for="(end,endkey) in endData" :style="{color : (end.id == endStatus ? '#18c6ff' : '#ffffff')}" @click="lastRegion(endkey)">{{end.name}}</dt>
					</dl>
				</div>
				<div class="school-list">
					<dl v-if="showSchool">
						<dt v-for="school in schoolData" @click="setSchool(school.schoolId)">{{school.schoolName}}</dt>
					</dl>
					<dl v-else>
						<dt>暂无数据</dt>
					</dl>
					<div class="page">
						<div :class="previousStatus ? 'previous-page' : 'next-page'" @click="searchPervious">上一页</div>
						<div :class="nextStatus ? 'next-page' : 'previous-page'" @click="searchNext">下一页</div>
					</div>
				</div>
				<!-- </div> -->
			</div>
			<!-- 搜索学校列表end -->
			<div class="info-box">
				<div class="info-left">
					<div class="basic-info">
						<div class="ib-title">基本信息</div>
						<div class="bi-item">
							<div class="item-box">
								校办：{{schoolNature}}
							</div>
							<div class="item-box">
								学生数量：{{studentTotal}}
							</div>
						</div>
						<div class="bi-item">
							<div class="item-box">
								学段：{{schoolType}}
							</div>
							<div class="item-box">
								教师数量：{{teacherTotal}}
							</div>
						</div>
						<div class="bi-item">
							校长：{{headmasterName}}
						</div>
						<div class="bi-item">
							电话：{{headmasterPhone}}
						</div>
					</div>
					<div class="security-info">
						<div class="ib-title">安防信息</div>
						<div class="si-item">
							<div class="si-title">保安人员：</div>
							<span class="si-left">专职（{{securityPersonnelSoleDuty}}人）</span>
							<span class="si-right"> 兼职（{{securityPersonnelPluralism}}人）</span>
						</div>
						<div class="si-item">
							<div class="si-title">救援器材：</div>
							<span class="si-left">正常（{{rescueEquipmentNormal}}个）</span>
							<span class="si-right"> 异常（{{rescueEquipmentAbNormal}}个）</span>
						</div>
					</div>
				</div>
				<div class="info-right">
					<div class="ib-title">学校简介</div>
					<div class="ir-text">{{schoolRemark}}</div>
				</div>
			</div>
			<div class="account">
				<img src="@/assets/account/arrow.png" alt="" class="arrow-top">
				<div class="account-item">
					<div class="item-box">
						<img src="@/assets/account/1.png" alt="" class="item-box-img">
						<div class="item-box-cont">
							<div class="ibc-title">事故台账</div>
							<div class="ibc-num">0</div>
						</div>
					</div>
					<div class="item-box">
						<img src="@/assets/account/2.png" alt="" class="item-box-img">
						<div class="item-box-cont">
							<div class="ibc-title">隐患台账</div>
							<div class="ibc-num">{{hiddenDanger}}</div>
						</div>
					</div>
				</div>
				<div class="account-item">
					<div class="item-box">
						<img src="@/assets/account/3.png" alt="" class="item-box-img">
						<div class="item-box-cont">
							<div class="ibc-title">教育台账</div>
							<div class="ibc-num">0</div>
						</div>
					</div>
					<div class="item-box">
						<img src="@/assets/account/4.png" alt="" class="item-box-img">
						<div class="item-box-cont">
							<div class="ibc-title">排查台账</div>
							<div class="ibc-num">{{inspect}}</div>
						</div>
					</div>
				</div>
				<div class="account-item">
					<div class="item-box">
						<img src="@/assets/account/5.png" alt="" class="item-box-img">
						<div class="item-box-cont">
							<div class="ibc-title">预案台账</div>
							<div class="ibc-num">0</div>
						</div>
					</div>
					<div class="item-box">
						<img src="@/assets/account/6.png" alt="" class="item-box-img">
						<div class="item-box-cont">
							<div class="ibc-title">工作台账</div>
							<div class="ibc-num">0</div>
						</div>
					</div>
				</div>
				<img src="@/assets/account/arrow.png" alt="" class="arrow-bottom">
			</div>
		</div>
		<div class="vc-center" :style="{width: centerWidth + 'px'}">
			<ul class="center-nav">
				<li v-for="nav in navData" :style="{backgroundImage:(nav.isActive ? 'url(/static/img/account/nav_active.png)' : 'url(/static/img/account/nav.png)')}"
				 @click="navTo(nav.id)">
					<img :src="nav.isActive ? nav.imgActive : nav.img" alt="" class="nav-img">
					<div class="nav-text" :style="{color:(nav.isActive ? '#ffffff' : '#18c6ff')}">{{nav.text}}</div>
				</li>
			</ul>
			<div class="video">
				<div class="video-box">

				</div>
				<!-- <object id="ocx" style="width:100%;height:100%" TYPE="application/x-itst-activex" CLSID="{9551B223-6188-4387-B293-C7D9D8173E3A}" v-if="browserType == 'chrome'"></object>
				<object style="width: 100%;color: #FFFFFF;text-align: center;" v-else-if="browserType == 'opera'">暂不支持该类型浏览器,请使用IE10+、Chrome、Firefox三种浏览器进行访问</object>
				<object id="ocx" style="width:100%;height:100%" TYPE="application/x-itst-activex" ALIGN="baseline" BORDER="0" progid="ShockwaveFlash.ShockwaveFlash" event_OnReadyStateChange="OnReady" param_src="http://www.youtube.com/v/53RdNYwImYc" clsid="{9551B223-6188-4387-B293-C7D9D8173E3A}" v-else-if="browserType == 'firefox'"></object>
				<object id="ocx" style="width:100%;height:100%" codebase="./IVS_OCX.cab#version=1,0,0,1" classid="clsid:9551B223-6188-4387-B293-C7D9D8173E3A" v-else-if="browserType == 'ie'"></object>
				<object style="width: 100%;color: #FFFFFF;text-align: center;" v-else>暂不支持该类型浏览器,请使用IE10+、Chrome、Firefox三种浏览器进行访问</object> -->
			</div>
			<div class="screenshot" @click="screenshot">
				<img src="@/assets/account/screenshot.png" alt="">
				<div class="text">抓图</div>
			</div>
			<div class="clear"></div>
			<div class="banner-box">
				<div class="banner" ref="photoBanner" :style="{width: bannerWidth + 'px'}">
					<!-- <div class="banner" ref="photoBanner" > -->
					<div class="swiper-container photo-box">
						<div class="swiper-wrapper">
							<div class="swiper-slide" v-for="photo in photoList">
								<img :data-src="imgurl+photo.imgUrl+token" alt="" class="swiper-lazy">
								<div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
							</div>
						</div>
					</div>
					<img src="@/assets/account/banner_left.png" alt="" class="banner-left">
					<img src="@/assets/account/banner_right.png" alt="" class="banner-right">
				</div>
				<div class="pics" @click="toAtlas">
					<img src="@/assets/account/pics.png" alt="">
					<div class="text">图册</div>
				</div>
			</div>
		</div>
		<div class="vc-right" ref="vcRight">
			<div class="vr-title">摄像头</div>
			<!-- <swiper class="vr-banner" :options="swiperOption" ref="mySwiper">
				<swiper-slide class="banner-item" v-for="banner in cameraList">
					<img :src="banner.imgUrl" alt="" class="camera">
					<div class="banner-title">{{banner.equipmentName}}</div>
				</swiper-slide>
			</swiper> -->
			<div class="camera-box" ref="myCamera">
				<div class="camera-item" v-for="(citem,citemkey) in cameraList" @click="cameraClick(citemkey)">
					<img src="@/assets/account/camera_icon.png" alt="" class="camera-icon">
					<div class="item-title" :style="{width: cameraWidth + 'px'}">{{citem.position}}</div>
				</div>
			</div>

			<div class="pagnite">
				<div :class="uppageStatus ? 'icon-no-active' : 'icon-active'" @click="cameraUp"><i class="el-icon-arrow-up"></i></div>
				<div :class="downpageStatus ? 'icon-active' : 'icon-no-active'" @click="cameraDown"><i class="el-icon-arrow-down"></i></div>
				<p class="clear"></p>
				<div :class="firstpageStatus ? 'no-active-page' : 'active-page'" @click="searchFirst">首页</div>
				<div :class="endpageStatus ? 'active-page' : 'no-active-page'" @click="searchEnd">尾页</div>
			</div>

		</div>
	</div>
</template>

<script>
	import {
		security,
		getSchoolList,
		getSchoolDetail,
		getHiddenDanger,
		getInspect,
		getSchoolHeadmaster,
		getTree,
		getEquipment,
		getImgList,
		upload
	} from '@/api/account'
	import {
		getSchoolId,
		getToken
	} from '@/utils/auth'
	import {
		setAttr,
		getnowdate
	} from '@/utils/index'
	// import { ocxAttr } from "@/utils";
	//引入轮播插件
	import Swiper from "swiper"
	export default {
		name: 'Login',
		data() {
			return {
				navData: [{
						img: '/static/img/account/school2.png',
						imgActive: '/static/img/account/school_active.png',
						text: '平安校园',
						isActive: true,
						id: 1
					},
					{
						img: '/static/img/account/kitchen.png',
						imgActive: '/static/img/account/kitchen_active.png',
						text: '阳光厨房',
						isActive: false,
						id: 2
					},
					{
						img: '/static/img/account/car.png',
						imgActive: '/static/img/account/car_active.png',
						text: '校车监控',
						isActive: false,
						id: 3
					},
					{
						img: '/static/img/account/sort.png',
						imgActive: '/static/img/account/sort_active.png',
						text: '其他分类',
						isActive: false,
						id: 4
					}
				],
				schoolSection: [{
						text: '全部',
						id: 0
					},
					{
						text: '幼儿园',
						id: 1
					},
					{
						text: '小学',
						id: 2
					},
					{
						text: '初中',
						id: 3
					},
					{
						text: '高中',
						id: 4
					}
				],
				areaData: [],
				schoolData: [],
				townData: [],
				endData: [],
				endStatus: false,
				endShow: false,
				centerWidth: 0,
				bannerWidth: 0,
				cameraWidth: 0,
				current: 1,
				size: 10,
				previousStatus: true, //上一页状态
				nextStatus: true, //下一页状态
				schoolShow: false, //搜索列表显示状态
				townShow: false, //镇级显示状态
				sectionStatus: 0, //学段选中数据
				areaStatus: 0, //区级选中数据
				// regionStatus: 0, //地区选中数据
				townStatus: 0, //镇级选中数据
				searchSchoolName: '', //搜索学校 
				deptId: 0,
				isSchool: 1,
				showSchool: false, //学校列表显示状态
				browserType: '', //浏览器版本类型
				vpnUser: 'esdk_ocx_user', //vpn用户
				vpnPwd: 'qwe123qwe', //vpn密码
				schoolIp: '113.107.252.234', //学校ip
				schoolPort: '10002', //学校端口
				uppageStatus: true, //摄像头列表上一页状态
				downpageStatus: true, //摄像头列表下一页状态
				firstpageStatus: true, //摄像头列表首页状态
				endpageStatus: true, //摄像头列表尾页状态
				cameraPage: 1, //摄像头页数
				cameraSize: 5, //摄像头列表数据

				//学校基本信息数据
				schoolName: '', //学校名称
				schoolNature: '', //学校性质 1公立 2民办 3私立
				schoolType: '', //学校类型1-幼儿园 2-小学 3-初中 4高中
				studentTotal: 0, //学生总数
				boarderTotal: 0, //住宿生总数
				teacherTotal: 0, //教师总数
				workersTotal: 0, //职工总数
				temporaryWorkTotal: 0, //临时工人
				headmasterName: '', //校长名称
				headmasterPhone: '', //校长联系方式
				schoolRemark: '', //学校简介
				platformUrl: '', //视频平台URL地址
				rescueEquipmentNormal: 0, //正常救援器材
				rescueEquipmentAbNormal: 0, //异常救援器材
				securityPersonnelSoleDuty: 0, //专职保安人员
				securityPersonnelPluralism: 0, //兼职保安人员
				hiddenDanger: 0, //隐患台账
				inspect: 0, //排查台账
				cameraList: [], //摄像头数据
				photoList: [], //图册
				ocx: '',
				tempImg: '',
				token: '?access_token=' + getToken(),
				imgurl: process.env.IMG_URL,

			}
		},
		watch: {
			$route: {
				handler: function(route) {
					this.redirect = route.query && route.query.redirect
				},
				immediate: true
			}
		},
		created() { //html前渲染
			this.getBrowerType();

		},
		mounted: function() {
			this.initOcx();
			this.setCenterWidth();
			this._initCamera();

			this.schoolDetail();
		},
		destroyed: function() {
			this.ocx.IVS_OCX_Logout(); //退出登陆
			this.ocx.IVS_OCX_CleanUp();; //释放资源
		},
		methods: {
			initOcx() {
				// console.log(ocx)	
				let ocxBox = document.getElementsByClassName("video-box")[0];
				let obj = document.createElement("OBJECT");
				if (this.browserType == 'chrome') {
					obj.setAttribute('id', 'mayiPlayer');
					obj.setAttribute('style', 'width:100%;height:100%');
					obj.setAttribute('type', 'application/x-itst-activex');
					obj.setAttribute('clsid', '{9551B223-6188-4387-B293-C7D9D8173E3A}');
				} else if (this.browserType == 'opera') {
					obj.setAttribute('style', 'width: 100%;color: #FFFFFF;text-align: center;');
					obj.innerHTML = '暂不支持该类型浏览器,请使用IE10+、Chrome、Firefox三种浏览器进行访问';
				} else if (this.browserType == 'firebox') {
					obj.setAttribute('id', 'mayiPlayer');
					obj.setAttribute('style', 'width:100%;height:100%');
					obj.setAttribute('type', 'application/x-itst-activex');
					obj.setAttribute('clsid', '{9551B223-6188-4387-B293-C7D9D8173E3A}');
					obj.setAttribute('ALIGN', 'baseline');
					obj.setAttribute('BORDER', '0');
					obj.setAttribute('progid', 'ShockwaveFlash.ShockwaveFlash');
					obj.setAttribute('event_OnReadyStateChange', 'OnReady');
					obj.setAttribute('param_src', 'http://www.youtube.com/v/53RdNYwImYc');
				} else if (this.browserType == 'ie') {
					let objId = setAttr("id", "mayiPlayer");
					obj.setAttributeNode(objId);
					let objClassid = setAttr(
						"classid",
						"clsid:9551B223-6188-4387-B293-C7D9D8173E3A" //你电脑安装的ocx控件的ID
					);

					obj.setAttributeNode(objClassid);

					let codebase = setAttr("codebase", "HWSetup.CAB#version=1,0,0,1");
					obj.setAttributeNode(codebase);

					let objWidth = setAttr("style", "width:100%;height:100%;");
					obj.setAttributeNode(objWidth);

				} else {
					obj.setAttribute('style', 'width: 100%;color: #FFFFFF;text-align: center;');
					obj.innerHTML = '暂不支持该类型浏览器,请使用IE10+、Chrome、Firefox三种浏览器进行访问';
				}
				ocxBox.appendChild(obj);


				this.ocx = mayiPlayer.axIVS_OCXPlayer1
				console.log(this.ocx)
				if (this.ocx != '' && this.ocx != undefined) {
					// ocx = mayiPlayer.axIVS_OCXPlayer1;

				} else {
					this.$message('ocx控件注册失败，视频浏览功能无法正常使用，请联系管理员');
				}
			},
			//获取浏览器版本
			getBrowerType() {
				var userAgent = navigator.userAgent;
				if (userAgent.indexOf("Chrome") > -1) {
					this.browserType = 'chrome';
				} else if (userAgent.indexOf("Opera") > -1) {
					this.browserType = 'opera';
				} else if (userAgent.indexOf("Firefox") > -1) {
					this.browserType = 'firefox';
				} else if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1) {
					this.browserType = 'ie';
				} else if (!!window.ActiveXObject || "ActiveXObject" in window) {

					this.browserType = 'ie';
				}
			},

			//设置中间视频区域的最大宽度
			setCenterWidth() {
				let totalWidth = this.$refs.container.offsetWidth;
				let leftWidth = this.$refs.vcLeft.offsetWidth;
				let rightWidth = this.$refs.vcRight.offsetWidth;
				console.log(document.body.clientHeight)
				console.log(totalWidth)
				console.log(leftWidth)
				console.log(rightWidth)
				this.centerWidth = totalWidth - leftWidth - rightWidth - 70;
				this.bannerWidth = this.centerWidth - 200;
				this.cameraWidth = this.$refs.myCamera.offsetWidth - 50;
			},
			//获取学校详情
			schoolDetail() {
				this.isSchool = this.$store.getters.isSchool;
				if (this.isSchool == 1) { //学校用户
					this.getInfo(this.$store.getters.schoolId)
				} else { //教育局用户
					var schoolId = getSchoolId();
					if (!schoolId) {
						getSchoolList(1, 10).then(response => {
							var mainData = response.data;
							if (mainData.length < 1) {
								this.$message({
									message: '暂无学校信息',
									type: 'error'
								})
								return false;
							} else {
								this.$store.dispatch('SCHOOLID', mainData[0]['schoolId'])
								this.cameraPage = 1;
								this.getInfo(mainData[0]['schoolId'])
							}
						})
					} else {
						this.getInfo(schoolId)
					}
				}


			},
			//获取信息
			getInfo(schoolId) {
				this._initPhoto(schoolId);
				//获取学校详情
				getSchoolDetail(schoolId).then(response => {
					this.schoolName = response.data.schoolName;
					if (response.data.schoolType == 1) {
						this.schoolType = '幼儿园'
					} else if (response.data.schoolType == 2) {
						this.schoolType = '小学'
					} else if (response.data.schoolType == 3) {
						this.schoolType = '初中'
					} else if (response.data.schoolType == 4) {
						this.schoolType = '高中'
					}
					if (response.data.schoolNature == 1) {
						this.schoolNature = '公立'
					} else if (response.data.schoolNature == 2) {
						this.schoolNature = '民办'
					} else if (response.data.schoolNature == 3) {
						this.schoolNature = '私立'
					}
					this.studentTotal = response.data.studentTotal;
					this.teacherTotal = response.data.teacherTotal;
					this.schoolRemark = response.data.remark;

					// 					this.vpnUser = response.data.thirdPartyUsername;
					// 					this.vpnPwd = response.data.thirdPartyPassword;
					// 					var platformUrl= response.data.platformUrl.split(':');
					// 					this.schoolIp = platformUrl[0];
					// 					this.schoolPort = platformUrl[1];
					if (this.ocx != '' && this.ocx != undefined) {
						// document.removeChild(document.getElementsByClassName('video-box')[0]);
						let ocxBox = document.getElementsByClassName("video-box")[0];
						ocxBox.removeChild(ocxBox.lastElementChild);
						this.initOcx()
						
// 						this.ocx.IVS_OCX_Logout(); //退出登陆
// 						this.ocx.IVS_OCX_CleanUp(); //释放资源

						var result = this.ocx.IVS_OCX_Init();

						console.log("IVS_OCX_Login result = " + result)
						//这里应该是动态数据，目前测试先用静态的
						this.ocx.IVS_OCX_Init();
						var result = this.ocx.IVS_OCX_Login(this.vpnUser, this.vpnPwd, this.schoolIp, this.schoolPort, 1);
						console.log(result)
						if (result != 0) {
							this.$message('视频监控服务器用户登录失败');
							return;
						}

						//设置OCX窗体控件格式
						this.ocx.IVS_OCX_ShowTitlebar(true);
						this.ocx.IVS_OCX_ShowToolbar(true);
						//ocx.IVS_OCX_SetWndLayout(11);  
						this.ocx.IVS_OCX_SetWndLayout(41); //四格

						//语言类型 中文: “zh-CN”， 英文: “en-US”
						this.ocx.IVS_OCX_SetLanguage("zh-CN");
						//显示标题栏
						this.ocx.IVS_OCX_ShowTitlebar(true);
						//显示标题栏
						this.ocx.IVS_OCX_ShowToolbar(true);

					}



				})
				//获取校长信息
				getSchoolHeadmaster(schoolId).then(response => {
					this.headmasterName = response.data.trueName;
					this.headmasterPhone = response.data.phone;
				})
				//获取安防信息
				security(schoolId).then(response => {
					this.rescueEquipmentNormal = response.data['rescueEquipment']['normal'];
					this.rescueEquipmentAbNormal = response.data['rescueEquipment']['abnormal'];
					this.securityPersonnelSoleDuty = response.data['securityPersonnel']['soleDuty'];
					this.securityPersonnelPluralism = response.data['securityPersonnel']['pluralism'];

				})
				//未处理的隐患台账
				getHiddenDanger(schoolId).then(response => {
					this.hiddenDanger = response.data['hiddenDanger']
				})
				//未处理的巡查台账
				getInspect(schoolId).then(response => {
					this.inspect = response.data['inspect']
				})
				//获取地区列表
				getTree().then(response => {
					this.areaData = [{
						id: 0,
						name: '不限',
						children: []
					}]
					if (response.data[0]['parentId'] == 0) {
						response.data = response.data[0]['children'];
					}
					this.areaData = this.areaData.concat(response.data);
				})
				this.getCameraList(schoolId, this.cameraPage, this.cameraSize)


			},
			//获取摄像头列表
			getCameraList(schoolId, current, size) {
				getEquipment(schoolId, current, size).then(response => {
					if (response.data.records.length < 1) {
						this.cameraList = [{
							equipmentId: 0,
							position: '暂无数据暂无数据暂无数据暂无数据',
							equipmentCode: ''
						}]
					} else {
						this.cameraList = response.data.records;
					}
					this.cameraMaxPage = response.data.pages;
					this.cameraPage = response.data.current;

					this.uppageStatus = true;
					this.downpageStatus = true;
					this.firstpageStatus = true;
					this.endpageStatus = true;
					if (this.cameraPage > 1) {
						this.firstpageStatus = false;
						this.uppageStatus = false;
					}
					if (this.cameraPage >= this.cameraMaxPage) {
						this.downpageStatus = false;
						this.endpageStatus = false;
					}

				})
			},
			//更新学校选择
			setSchool(schoolId) {
				this.$store.dispatch('SCHOOLID', schoolId)
				this.cameraPage = 1;
				this.getInfo(schoolId);
				this.schoolShow = false;
			},
			//获取学校列表
			getSchool(type) {
				getSchoolList(this.current, this.size, this.searchSchoolName, this.sectionStatus, this.deptId).then(response => {
					var length = response.data.length;
					if (length < 1) {
						// this.$message('暂无数据');
						this.showSchool = false;
						// 						if(type == 'pervious'){
						// 							this.current = this.current +1;
						// 						}else if(type == 'next'){
						// 							this.current = this.current -1 ;
						// 						}
						if (this.current > 1) {
							this.previousStatus = false;
							this.nextStatus = false;
						} else {
							this.previousStatus = true;
							this.nextStatus = false;
						}
						// 						this.previousStatus = true;
						// 						this.nextStatus = false;
					} else {
						if (this.current > 1) {
							this.previousStatus = false;
						} else {
							this.previousStatus = true;
						}
						this.nextStatus = true;

						this.showSchool = true;
						this.schoolData = response.data;
					}
				})
			},
			//导航跳转
			navTo(id) {
				if (id != 1) {
					this.$message('功能开发中，敬请期待');
				} else {



				}

			},
			//显示搜索学校列表
			searchSchool() {
				if (this.isSchool != 1) {
					this.schoolShow = !this.schoolShow;
					this.getSchool();
				}

			},
			//赋值
			section(id) {
				this.sectionStatus = id;
				this.getSchool()
			},
			//区段赋值
			region(key) {
				this.areaStatus = this.areaData[key].id;
				this.townData = [{
					id: 0,
					name: '不限',
					children: []
				}];
				this.townData = this.townData.concat(this.areaData[key].children);
				this.endShow = false;
				if (this.areaData[key].children.length > 0) {
					this.townStatus = 0;
					this.townShow = true;
				} else {
					this.townShow = false;
				}
				this.deptId = this.areaStatus;
				this.getSchool();
			},
			//镇级赋值
			town(tkey) {

				this.townStatus = this.townData[tkey].id;
				this.endData = [{
					id: 0,
					name: '不限',
					children: []
				}];
				this.endData = this.endData.concat(this.townData[tkey].children);
				if (this.townData[tkey].children.length > 0) {
					this.endStatus = 0;
					this.endShow = true;
					this.deptId = this.townStatus;
				} else {
					this.endShow = false;
					if (this.townStatus == 0) {
						this.deptId = this.areaStatus;
					} else {
						this.deptId = this.townStatus;
					}
				}
				this.getSchool();
			},
			lastRegion(lkey) {
				this.endStatus = this.endData[lkey].id;
				if (this.endStatus == 0) {
					this.deptId = this.townStatus;
				} else {
					this.deptId = this.endStatus;
				}

				this.getSchool()
			},
			searchPervious() {
				if (this.current > 1) {
					this.current = this.current - 1;
				} else {
					this.current = 1;
				}
				if (this.previousStatus === false) {
					this.getSchool('pervious');
				}
			},
			searchNext() {
				this.current = this.current + 1;
				if (this.nextStatus === true) {
					this.getSchool('next');
				}

			},
			//隐藏搜索框
			hideSearch(event) {
				var sp = document.getElementById("search-box");
				if (sp) {
					if (!sp.contains(event.target)) { //点击到了指定以外的区域
						this.schoolShow = false;
					}

				}
			},
			//初始化摄像头位置
			_initCamera() {
				var cameraHeight = this.$refs.myCamera.offsetHeight;
				this.cameraSize = parseInt(cameraHeight / 70);
			},
			//初始化图册
			_initPhoto(schoolId) {
				getImgList(schoolId, getnowdate(), getnowdate()).then(response => {
					this.photoList = response.data.records[0].videoData;
// 					this.photoList = [{
// 						imgUrl: '/static/img/account/1.png',
// 					}, {
// 						imgUrl: '/static/img/account/nodata.png',
// 					}, {
// 						imgUrl: '/static/img/account/1.png',
// 					}, {
// 						imgUrl: '/static/img/account/nodata.png',
// 					}, {
// 						imgUrl: '/static/img/account/1.png',
// 					}, {
// 						imgUrl: '/static/img/account/nodata.png',
// 					}, {
// 						imgUrl: '/static/img/account/1.png',
// 					}, {
// 						imgUrl: '/static/img/account/nodata.png',
// 					}];
					// console.log(this.$refs.photoBanner.offsetWidth)
					var width = parseInt(this.$refs.photoBanner.offsetWidth / 128);
					var between = (this.$refs.photoBanner.offsetWidth - 128 * width) / width;
					// 			
					// 				console.log('bannerwidth'+width);
					// 				console.log(between)
					var that = this;
					var photoBox = new Swiper('.photo-box', {
						initialSlide: 0,
						spaceBetween: between,
						nextButton: '.banner-right',
						prevButton: '.banner-left',
						slidesPerView: width,
						preloadImages: false,
						lazyLoading: true,
						observer: true,
						observeParents: true
					});
					setTimeout(function () {
						  photoBox.init();
					},500)
			
				})
			},
			//跳转到图册
			toAtlas() {
				this.$router.push('/atlas/index')

			},
			//跳转到摄像头上一页
			cameraUp() {

				if (this.uppageStatus === false) {
					this.getCameraList(this.$store.getters.schoolId, this.cameraPage - 1, this.cameraSize)
				}

			},
			//跳转到摄像头下一页
			cameraDown() {
				if (this.downpageStatus === true) {
					this.getCameraList(this.$store.getters.schoolId, this.cameraPage + 1, this.cameraSize)
				}

			},
			//跳转到摄像头首页
			searchFirst() {
				if (this.firstpageStatus === false) {
					this.getCameraList(this.$store.getters.schoolId, 1, this.cameraSize)
				}
			},
			//跳转到摄像头尾页
			searchEnd() {
				if (this.endpageStatus === true) {
					this.getCameraList(this.$store.getters.schoolId, this.cameraMaxPage, this.cameraSize)
				}

			},
			//摄像头点击
			cameraClick(citemkey) {
				// this.setPlay(this.cameraList[citemkey].equipmentCode);
				this.setPlay('08437400000000000101#d1b758938dd74ba4b60a58b40ca3db8f');
			},
			//播放指定摄像头
			setPlay(strCameraCode) {
				// this.initOcx();
				var wnd = this.ocx.IVS_OCX_GetFreeWnd(); //获取空闲窗格
				var xml = this.ocx.IVS_OCX_SetActiveWnd(wnd); //设置激活窗格
				if (xml != 0) {
					wnd = this.ocx.IVS_OCX_GetSelectWnd();
				}

				//视频播放媒体参数XML
				var pMediaParaxml = "<?xml version='1.0' encoding='utf-8'?>" +
					" <Content>" +
					" <RealplayParam>" +
					" <StreamType>1</StreamType>" +
					" <ProtocolType>2</ProtocolType>" +
					" <DirectFirst>0</DirectFirst>" +
					" <Multicast>0</Multicast>" +
					" </RealplayParam>" +
					"</Content>";

				//开始在播放窗口上启动实时浏览
				var result = this.ocx.IVS_OCX_StartRealPlay(pMediaParaxml, strCameraCode, wnd);
				console.log(result)
			},
			//截图
			screenshot() {
				if (this.ocx == '' || this.ocx == undefined) {
					this.$message('ocx控件注册失败，视频浏览功能无法正常使用，请联系管理员');
					return;
				}
				var wnd = this.ocx.IVS_OCX_GetSelectWnd();
				console.log(wnd)
				if (wnd <= 0) {
					this.$message('请选中控件');
					return;
				}
				var result = mayiPlayer.LocalSnapshotToDir(wnd);
				// console.log(result);
				result = JSON.parse(result)
				if (result.code != 0) {
					this.$message(result.message);
					return;
				}
				this.tempImg = result.base64image;
				var that = this;
				upload(this.tempImg).then(response => {
					that._initPhoto(that.$store.getters.schoolId)
				})

			}
		}
	}
</script>

<style rel="stylesheet/scss" lang="scss">
	@import '../../styles/account.scss';
	@import '../../../node_modules/swiper/dist/css/swiper.min.css'
</style>
