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
				<div class="video-box">{{ prompt }}
					<div class="video-box-list" id="video_box_1">

					</div>
					<div class="video-box-list" id="video_box_2">

					</div>
					<div class="video-box-list" id="video_box_3">

					</div>
					<div class="video-box-list" id="video_box_4">

					</div>
				</div>
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
	import {
		callBackFunctionw,
		errorHandler,
		bufferHandler,
		allScreenshot1
	} from '@/utils/video'
	// import { ocxAttr } from "@/utils";
	//引入轮播插件
	import Swiper from "swiper"

	export default {
		name: 'Login',
		data() {
			return {
				videoDevices: [],
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
				vpnUser: '', //vpn用户
				vpnPwd: '', //vpn密码
				schoolIp: '', //学校ip
				schoolPort: '', //学校端口
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
				prompt: '请点击摄像头浏览视频',
				videoPosition: 0,
// 				player:[{
// 					'plarer1':{},
// 				},{
// 					'plarer2':{}
// 				},{
// 					'plarer3':{}
// 				},{
// 					'plarer4':{}
// 				}
// 					
// 				]
			player:[{
					'player1':{},
					'player2':{},
					'player3':{},
					'player4':{}
				}
				]
					
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

		},
		mounted: function() {
			// videojs.options.flash.swf = '/static/video-js.swf';
			this.setCenterWidth();
			this._initCamera();

			this.schoolDetail();
		},
		destroyed: function() {
			this.videoDestory();

		},
		methods: {
			//设置中间视频区域的最大宽度
			setCenterWidth() {
				let totalWidth = this.$refs.container.offsetWidth;
				let leftWidth = this.$refs.vcLeft.offsetWidth;
				let rightWidth = this.$refs.vcRight.offsetWidth;
				// 				console.log(document.body.clientHeight)
				// 				console.log(totalWidth)
				// 				console.log(leftWidth)
				// 				console.log(rightWidth)
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
				// this.videoDestory();
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

					var platformUrl = response.data.platformUrl.split(':');
					this.schoolIp = platformUrl[0];
					this.schoolPort = platformUrl[1];

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
					setTimeout(function() {
						photoBox.init();
					}, 500)

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
				this.setPlay(this.cameraList[citemkey].equipmentId, this.cameraList[citemkey].equipmentPort);
			},
			callBackFunctionw(playerName) {
				console.log(playerName);
				// 							var playerName = "player1";
				// 							// player1.changeControlBarShow(false);
				console.log(this.player)
				console.log(this.player[0][playerName])
				// this.player[0][playerName].addListener('screenshot', this.allScreenshot1());
				// 							window[playerName].addListener('screenshot', allScreenshot1);
				// 			
				// 							window[playerName].addListener('error', errorHandler); //监听视频加载出错
				// 							window[playerName].addListener('buffer', bufferHandler); //监听缓冲状态
				// 							
				// 							errorHandler();
				// 							bufferHandler();
			},
			allScreenshot1(obj,playerName='') {
				if (obj == 1) { //点击调用
					this.player[0][playerName].screenshot("video", false, "2-26.jpg");
				} else if (obj != 0 && obj != null) { //监听回调 保存数据
					console.log(obj.base64)
					// document.getElementById('img1').setAttribute('src', obj.base64);
				} else { //返回数据为null

				}
			},
			//播放指定摄像头
			setPlay(equipmentId, equipmentPort) {
				this.prompt = '';
				//获取空闲区域
				var video1 = document.getElementById('video_box_1');
				var video2 = document.getElementById('video_box_2');
				var video3 = document.getElementById('video_box_3');
				var video4 = document.getElementById('video_box_4');
				// 				var check = document.getElementById("video_" + equipmentId);
				// 				if(check !== null){
				// 					this.$message('该摄像头正在播放中，请勿重复点击');
				// 					return;
				// 				}


				var index = 0;
				if (video1.childNodes.length == 0) {
					index = 1;
				} else if (video2.childNodes.length == 0) {
					index = 2;
				} else if (video3.childNodes.length == 0) {
					index = 3;
				} else if (video4.childNodes.length == 0) {
					index = 4;
					this.videoPosition = 1
				} else {
					var videoId = document.getElementById('video_box_' + this.videoPosition).children[0].getAttribute('id');
					videojs(videoId).dispose();
					document.getElementById('video_box_' + this.videoPosition).innerHTML = html;
					this.videoPosition = this.videoPosition + 1
				}
				var videoObject = {
					container: "#video_box_" + index, //容器的ID或className
					variable: "player" + index, //播放函数名称
					autoplay: true,
					live: true,
					video: "rtmp://" + this.schoolIp + ":" + equipmentPort + "/live/" + equipmentId,
					loaded: '',
					flashplayer: true,
					//crossdomain:crossXmlUrl,
					overspread: true,
					volume: 0,
					click: false,
					doubleClick: false,
					timeScheduleAdjust: 0
				};
				this.player[0]["player" + index] = Object.assign({},new ckplayer(videoObject)) ;
				this.callBackFunctionw("player" + index)
				// this.allScreenshot1(1,'player1');

			},
			//截图
			screenshot() {
				allScreenshot1(1,this.player[0]["player1"]);
// 				if (this.ocx == '' || this.ocx == undefined) {
// 					this.$message('ocx控件注册失败，视频浏览功能无法正常使用，请联系管理员');
// 					return;
// 				}
// 				var wnd = this.ocx.IVS_OCX_GetSelectWnd();
// 				console.log(wnd)
// 				if (wnd <= 0) {
// 					this.$message('请选中控件');
// 					return;
// 				}
// 				var result = mayiPlayer.LocalSnapshotToDir(wnd);
// 				// console.log(result);
// 				result = JSON.parse(result)
// 				if (result.code != 0) {
// 					this.$message(result.message);
// 					return;
// 				}
// 				this.tempImg = result.base64image;
// 				var that = this;
// 				upload(this.tempImg).then(response => {
// 					that._initPhoto(that.$store.getters.schoolId)
// 				})

			},
			//销毁视频
			videoDestory() {
				if (document.getElementById('video_box_1').children[0] !== undefined) {
					videojs(document.getElementById('video_box_1').children[0].getAttribute('id')).dispose();
				}
				if (document.getElementById('video_box_2').children[0] !== undefined) {
					videojs(document.getElementById('video_box_2').children[0].getAttribute('id')).dispose();
				}
				if (document.getElementById('video_box_3').children[0] !== undefined) {
					videojs(document.getElementById('video_box_3').children[0].getAttribute('id')).dispose();
				}
				if (document.getElementById('video_box_4').children[0] !== undefined) {
					videojs(document.getElementById('video_box_4').children[0].getAttribute('id')).dispose();
				}
				// 				videojs(document.getElementById('video_box_1').children[0].getAttribute('id')).dispose();
				// 				videojs(document.getElementById('video_box_2').children[0].getAttribute('id')).dispose();
				// 				videojs(document.getElementById('video_box_3').children[0].getAttribute('id')).dispose();
				// 				videojs(document.getElementById('video_box_4').children[0].getAttribute('id')).dispose();
			}
		}
	}
</script>

<style rel="stylesheet/scss" lang="scss">
	@import '../../styles/account.scss';
	@import '../../../node_modules/swiper/dist/css/swiper.min.css'
</style>
<style rel="stylesheet/scss" lang="scss">
	.vjs-modal-dialog-content {
		display: none;
	}

	.vjs-error .vjs-error-display:before {
		display: none;
	}

	.snap {
		background-image: url(/static/img/snap.png) !important;
		background-size: 25px !important;
		background-repeat: no-repeat !important;
		background-position: 10px 3px !important;
		cursor: pointer !important;
	}

	.video-js .vjs-play-control {
		display: none;
	}

	.video-js .vjs-mute-control {
		display: none;
	}

	.video-js .vjs-progress-control {
		display: none;
	}

	.video-js .vjs-volume-panel {
		display: none;
	}

	.video-js .vjs-time-control,
	.video-js .vjs-loading-spinner,
	.video-js .vjs-text-track-display,
	.video-js .vjs-volume-menu-button {
		display: none;
	}

	.el-pager li {
		background-color: transparent;
	}

	.video-js {
		width: 100%;
		height: 100%;
	}

	.video-js button {
		background-color: transparent;
	}

	[v-cloak] {
		display: none;
	}

	.el-row {
		height: 100%;
	}

	.video {
		background-color: #030d20;
		height: 100%;
		width: 100%;
	}

	.snap-img {
		width: 100%;
		height: 125px;
		margin-bottom: 5px;
		border-radius: 5px;
	}

	#snap-btn {
		background-color: #092252;
		color: #118fc3;
		border-color: #2fbce8;
		width: 100%;
		margin-top: 25px;
	}
</style>
