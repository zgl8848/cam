<template>
	<div class="app-container" id="app-main">
		<div style="width: 100%;">
			<div style="" class="flex al-c top">

				<!--上左两个表 -->
				<div style="width:18.5%;margin-right: 20px;">
					<div class="k mb-20 h30vh" style="width:100%;">
						<img src="/static/img/k.png" alt="">
						<div class="k-title">隐患处理情况</div>
						<div class="charts" id="chartsyh" style="width: 90%;height:55%;">

						</div>
						<div class="label-left-top">{{danger.untreated}}</div>
						<div class="label-left-bottom">未处理（个）</div>
						<div class="label-right-top">{{danger.total}}</div>
						<div class="label-right-bottom">总隐患（个)</div>
					</div>
					<div class="k h30vh" style="width:100%;">
						<img src="/static/img/k.png" alt="">
						<div class="k-title">监控接入情况</div>
						<div class="charts" id="chartsjr" style="width: 90%;height:55%;">

						</div>
						<div class="label-left-top">{{monitor.equipmentNumber}}</div>
						<div class="label-left-bottom">接入终端（路）</div>
						<div class="label-right-top">{{monitor.schoolNumber}}</div>
						<div class="label-right-bottom">接入学校（所)</div>
					</div>
				</div>
				<div class="dt " :class="isschool==0?'hasschool':'noschool'"  style="">
					<div class="charts" id="chartsdt" style="width: 100%;height:100%;">

					</div>
						<div class="visualMapMark">

					</div>
					<div class="dt-data-box">
						<div class="fir" v-if="isschool==1">
							<div class="data-title">学校排名</div>
							<div class="line"></div>
							<div class="data">{{pm}} <div class="data-dw"></div>
							</div>
						</div>
						<div class="fir">
							<div class="data-title">学校总数</div>
							<div class="line"></div>
							<div class="data">{{getmap.school}} <div class="data-dw">所</div>
							</div>
						</div>
						<div class="fir">
							<div class="data-title">教师总数</div>
							<div class="line"></div>
							<div class="data">{{getmap.tea}} <div class="data-dw">人</div>
							</div>
						</div>
						<div class="fir">
							<div class="data-title">学生总数</div>
							<div class="line"></div>
							<div class="data">{{getmap.stu}} <div class="data-dw">人</div>
							</div>
						</div>

					</div>
				</div>
				<div class="k" style="width:23% ;height: 560px;height: calc(54vh + 10px);" v-show="isschool==0">
					<img src="/static/img/k2.png" alt="">
					<div class="k-title">安全考核积分排名</div>
					<div class="list">
						<template v-for="(item,index) in ranking ">
							<div class="list-item" >
								<div class="NO NO1" v-if="index==0">NO.1</div>
								<div class="NO NO2" v-if="index==1">NO.2</div>
								<div class="NO NO3" v-if="index==2">NO.3</div>
								<div class="NO NO4" v-if="index>2">NO.{{index+1}}</div>
								<div class="item-name">{{item.schoolName}}</div>
							</div>
							<div class="item-line"></div>
						</template>

					</div>
				</div>
			</div>
			<div style="width: 100%;" class="flex al-c">
				<div style="width:18.5%;margin-right: 16px;">
					<div class="k h30vh" style="width:100%;height: 270px;">
						<img src="/static/img/k.png" alt="">
						<div class="k-title">隐患排查情况</div>
						<div class="charts" id="chartspc" style="width: 90%;height:60%;">

						</div>
						<div class="label-left-top">{{inspect.questionSpot}}</div>
						<div class="label-left-bottom">问题点（个）</div>
						<div class="label-right-top">{{inspect.total}}</div>
						<div class="label-right-bottom">总检查点（个)</div>
					</div>
				</div>
				<div class="k " style="width:79%;height:270px;height: 27vh;">
					<img src="/static/img/k3.png" alt="">
					<div class="bottom">
						<div class="aq-detail flex jc-c sj" style="width:100%;height: calc(23vh);flex-flow: row wrap;">
							<div style="width: 100%;">
								<div class="flex fl-no jc-a row-title" style="width: 90%;height: auto;">
									<div style="width: 11%;"></div>
									<div class="de-title" style="color: #ff8b1c;width: 26.5%;">教师出勤</div>
									<div class="de-title" style="color: #ffce03;width: 26.5%;">学生出勤</div>
								</div>
								<div class="de-con jc-a flex mb-20" :style="{marginBottom:(innerHeight>=768?'15px':'5px')}">
									<div style="font-size: 14px;color: #fff;width: 11%;">
										实到
									</div>
									<div style="width: 26.5%;">
										<div style="background-color: rgba(255,255,255,0.5);width:100%;height: 2.4vh;position: relative;">
											<div style="height: 100%;background-color:#ff8b1c;width: 60%;"></div>
											<!-- <div class="cq-text" v-if="innerHeight<768">{{atnd.teacherAttendance.actual}}人</div> -->
										</div>
										<div style="color: #ff8b1c;margin-top: 1px;font-size: 14px;" >{{atnd.teacherAttendance.actual}}人</div>
									</div>
									<div style="width: 26.5%;">
										<div style="background-color: rgba(255,255,255,0.5);width: 100%;height:2.4vh;position: relative;">
											<div style="height: 100%;background-color:#ffce03;width: 70%;"></div>
											<!-- <div class="cq-text" v-if="innerHeight<768">{{atnd.studentAttendance.actual}}人</div> -->
										</div>
										<div style="color: #ffce03;margin-top: 1px;font-size: 14px;" >{{atnd.studentAttendance.actual}}人</div>
									</div>
								</div>
								<div class="de-con jc-a flex mb-20" :style="{marginBottom:(innerHeight>=768?'15px':'5px')}">
									<div style="font-size: 14px;color: #fff;width: 11%;">
										请假
									</div>
									<div style="width: 26.5%;">
										<div style="background-color: rgba(255,255,255,0.5);width:100%;height: 2.4vh;position: relative;">
											<div style="height: 100%;background-color:#ff8b1c;width: 60%;"></div>
											<!-- <div class="cq-text" v-if="innerHeight<768">{{atnd.teacherAttendance.leave}}人</div> -->
										</div>
										<div style="color: #ff8b1c;margin-top: 1px;font-size: 14px;" >{{atnd.teacherAttendance.leave}}人</div>
									</div>
									<div style="width: 26.5%;">
										<div style="background-color: rgba(255,255,255,0.5);width: 100%;height: 2.4vh;position: relative;">
											<div style="height: 100%;background-color:#ffce03;width: 70%;"></div>
											<!-- <div class="cq-text" v-if="innerHeight<768">{{atnd.studentAttendance.leave}}人</div> -->
										</div>
										<div style="color: #ffce03;margin-top: 1px;font-size: 14px; " >{{atnd.studentAttendance.leave}}人</div>
									</div>
								</div>
								<div class="de-con jc-a flex">
									<div style="font-size: 14px;color: #fff;width: 11%;">
										缺勤
									</div>
									<div style="width: 26.5%;">
										<div style="background-color: rgba(255,255,255,0.5);width:100%;height: 2.4vh;position: relative;" >
											<div style="height: 100%;background-color:#ff8b1c;width: 60%;"></div>
											<!-- <div class="cq-text" v-if="innerHeight<768">{{atnd.teacherAttendance.absence}}人</div> -->
										</div>
										<div style="color: #ff8b1c;margin-top: 1px;font-size: 14px;" >{{atnd.teacherAttendance.absence}}人</div>
									</div>
									<div style="width: 26.5%;">
										<div style="background-color: rgba(255,255,255,0.5);width: 100%;height: 2.4vh;position: relative;">
											<div style="height: 100%;background-color:#ffce03;width: 70%;"></div>
											<!-- <div class="cq-text" v-if="innerHeight<768">{{atnd.studentAttendance.absence}}人</div> -->
										</div>
										<div style="color: #ffce03;margin-top: 1px;font-size: 14px;" >{{atnd.studentAttendance.absence}}人</div>
									</div>
								</div>
							</div>

						</div>


						<div style="height: 27vh;" class="zx">
							<div class="zx-title">
								<img src="../../../static/img/linetitle.png" alt="" style="margin: 0 auto;height: 100%;">
								<div class="zx-tit-text">教育安全情况（安全知识学习）</div>
							</div>
							<div class="charts" id="chartsaq" style="width: 90%;height:70%;">

							</div>
						</div>
						<div class="aq-detail2 sj" style="width: 15%;">
							<div class="aq-de-bu">
								访客登记
							</div>
							<div class="aq-de-wh">
								{{visitor.visitorTotal}}人
							</div>
							<div class="aq-de-bu">
								学校接待
							</div>
							<div class="aq-de-wh">
								{{visitor.receiveTotal}}人
							</div>
						</div>





					</div>
				</div>
        <!-- <div class="k " style="width:49%;height:270px;height: 27vh;margin-left: 1%;">
        <img src="/static/img/k10.png" alt="">
        <div class="k-title" style="left: 3%;">实时报警信息</div>
        <div class="bottom" style="top: 20%;">
          <div style="height: 27vh;" class="zx warn-data">
                  <div class="th">
                    <div class="td" style="width: 30%;">报警时间</div>
                    <div class="td" style="width: 12%;">报警学校</div>
                    <div class="td" style="width: 19%;">报警位置</div>
                    <div class="td" style="width: 12%;">报警类型</div>
                    <div class="td" style="width: 12%;">处理状态</div>
                    <div class="td" style="width: 12%;">处理反馈</div>
                  </div>
                  <swiper :options="swiperOption" ref="mySwiper" > 
                     <swiper-slide v-for='(item,index) in warnData' :key="index" class='swiper-no-swiping' ><div class="tr">
                        <div class="td" style="width: 30%;">{{item.time}}</div>
                        <div class="td" style="width: 12%;">{{item.school}}</div>
                        <div class="td" style="width: 19%;">{{item.address}}</div>
                        <div class="td" style="width: 12%;">{{item.type}}</div>
                        <div class="td" style="width: 12%;">{{item.state}}</div>
                        <div class="td" style="width: 12%;">{{item.callback}}</div>
                     </div></swiper-slide>


                   </swiper>
          						</div>
        </div>
        </div> -->
			</div>
		</div>
	</div>
</template>

<script>
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import {
		getdt,
		hidden_danger,
		inspect,
		ranking,
		edu,
		atnd,
		visitor,
		getmap,
		monitor
	} from '@/api/situation'
	import {
		center,
		center2,
		debounce,
		city
	} from '@/utils/index'

	export default {
    components:{
       swiper,
          swiperSlide
    },
		data() {
			return {
          swiperOption: {
              direction : 'vertical',
              loop:true,
              autoplay:2000,
              slidesPerView :3,
              noSwiping : true,
                },
                warnData:[
                  {time:"2019年10月22日9:51:23",
                  school:"佛山市第一中学",
                  address:"雄飞楼东梯1楼",
                  type:"人员密集",
                  state:"未处理",
                  callback:"-"
                  },{time:"2019年10月22日9:50:11",
                  school:"佛山市第一中学",
                  address:"雄飞楼西梯1楼",
                  type:"人员密集",
                  state:"未处理",
                  callback:"-"
                  },{time:"2019年10月22日9:51:54",
                  school:"佛山市第一中学",
                  address:"本立楼东梯1楼",
                  type:"人员密集",
                  state:"未处理",
                  callback:"-"
                  },{time:"2019年10月22日9:50:34",
                  school:"佛山市第一中学",
                  address:"本立楼西梯1楼",
                  type:"人员密集",
                  state:"未处理",
                  callback:"-"
                  },{time:"2019年10月22日9:51:02",
                  school:"佛山市第一中学",
                  address:"五常楼东梯1楼",
                  type:"人员密集",
                  state:"未处理",
                  callback:"-"
                  },{time:"2019年10月22日9:53:44",
                  school:"佛山市第一中学",
                  address:"五常楼西梯1楼",
                  type:"人员密集",
                  state:"未处理",
                  callback:"-"
                  },{time:"2019年10月23日15:02:11",
                  school:"杨和镇中心小学",
                  address:"教学楼A座东梯天台",
                  type:"人员入侵",
                  state:"已处理",
                  callback:"学生误闯，已口头警告"
                  },{time:"2019年10月23日16:53:08",
                  school:"佛山市第一中学",
                  address:"饭堂楼梯天台",
                  type:"人员入侵",
                  state:"已处理",
                  callback:"维护人员调试设备"
                  },{time:"2019年10月23日17:10:42",
                  school:"杨和镇中心小学",
                  address:"教学楼A座中间楼梯1楼",
                  type:"人员密集",
                  state:"已处理",
                  callback:"学生放学，已疏导"
                  },{time:"2019年10月23日17:06:27",
                  school:"杨和镇中心小学",
                  address:"教学楼A座东边楼梯1楼",
                  type:"人员密集",
                  state:"已处理",
                  callback:"学生放学，已疏导"
                  },{time:"2019年10月23日17:09:13",
                  school:"杨和镇中心小学",
                  address:"教学楼A座西边楼梯1楼",
                  type:"人员密集",
                  state:"已处理",
                  callback:"学生放学，已疏导"
                  },{time:"2019年10月24日10:57:51",
                  school:"佛山市有为小学",
                  address:"西门",
                  type:"人员跨越",
                  state:"已处理",
                  callback:"学生跨越道闸，已警告并驱逐"
                  },{time:"2019年10月24日11:40:21",
                  school:"佛山市有为小学",
                  address:"食堂东门1楼",
                  type:"人员密集",
                  state:"已处理",
                  callback:"学生进入食堂，已组织排队"
                  },{time:"2019年10月24日11:41:09",
                  school:"佛山市第一中学",
                  address:"雄飞楼东梯1楼",
                  type:"人员密集",
                  state:"未处理",
                  callback:"-"
                  },{time:"2019年10月22日9:51:23",
                  school:"佛山市有为小学",
                  address:"食堂东门2楼",
                  type:"人员密集",
                  state:"已处理",
                  callback:"学生进入食堂，已组织排队"
                  },{time:"2019年10月24日11:43:57",
                  school:"佛山市第一中学",
                  address:"雄飞楼东梯1楼",
                  type:"人员密集",
                  state:"未处理",
                  callback:"-"
                  },{time:"2019年10月22日9:51:23",
                  school:"佛山市有为小学",
                  address:"食堂南门1楼",
                  type:"人员密集",
                  state:"已处理",
                  callback:"学生进入食堂，已组织排队"
                  },{time:"2019年10月24日11:40:34",
                  school:"佛山市有为小学",
                  address:"食堂南门2楼",
                  type:"人员密集",
                  state:"已处理",
                  callback:"学生进入食堂，已组织排队"
                  },{time:"2019年10月24日12:41:22",
                  school:"佛山市第一中学",
                  address:"危化品仓库门口",
                  type:"人员徘徊",
                  state:"未处理",
                  callback:"-"
                  },{time:"2019年10月24日12:48:51",
                  school:"佛山市第一中学",
                  address:"雄飞楼东梯1楼",
                  type:"人员密集",
                  state:"未处理",
                  callback:"-"
                  },{time:"2019年10月22日9:51:23",
                  school:"佛山市第一中学",
                  address:"危化品仓库门口",
                  type:"人员密集",
                  state:"未处理",
                  callback:"-"
                  },{time:"2019年10月22日9:51:23",
                  school:"佛山市第一中学",
                  address:"危化品仓库门口",
                  type:"人员徘徊",
                  state:"已处理",
                  callback:"维护人员测试"
                  },{time:"2019年10月24日15:17:20",
                  school:"佛山市有为小学",
                  address:"有为楼南梯天台",
                  type:"人员入侵",
                  state:"已处理",
                  callback:"施工人员作业"
                  },{time:"2019年10月24日15:33:29",
                  school:"佛山市有为小学",
                  address:"有为楼南梯天台",
                  type:"人员入侵",
                  state:"已处理",
                  callback:"施工人员作业"
                  }
                ],
				list: null,
				isschool:0,
				pm: ["", "", "", "", "", "", "", "", "", ""],
				listLoading: true,
				screenWidth: document.body.clientWidth,
				innerHeight:window.innerHeight,
				// pm:"",//学校排名
				danger: {}, //隐患处理的数据
				inspect: {}, //隐患排查数据
				ranking: [], //安全考核积分数据
				edu: [], //安全教育学习次数趋势数据
				atnd: { //安全考勤数据
					teacherAttendance: {
						actual: "0",
						leave: "0",
						absence: "0"
					},
					studentAttendance: {
						actual: "0",
						leave: "0",
						absence: "0"
					}
				},
				visitor: { //访客数据
					visitorTotal: "0",
					receiveTotal: "0"
				},
				monitor:{},
				getmap: {}, //地图数据
				chart: null,
				chartjr: null,
				chartdt: null,
				chartpc: null,
				chartaq: null,

			}
		},
		created() {
			// this.fetchData()
		},
		mounted() {
      // 20191024--
    // this.swiper.slideTo(3, 1000, false)
    //--20191024
			this.isSchool();
			var that = this;
			monitor().then(response=>{
				that.monitor=response.data;
				that.monitor.rate = parseInt(that.monitor.rate.replace("%", ""));
				that.initChartsjr();
			})
			hidden_danger().then(response => {
				that.danger = response.data;
				that.danger.rate = that.danger.completionRate;
				that.danger.completionRate = parseFloat(that.danger.completionRate.replace("%", "")) / 100;


				that.initChartsyh();
			})
			inspect().then(response => {

				that.inspect = response.data;
				that.inspect.rate = that.inspect.completionRate;
				that.inspect.completionRate = parseFloat(that.inspect.completionRate.replace("%", ""));


				that.initChartspc();
			})
			ranking().then(response => {
				if (response.data != undefined) {
					if (JSON.stringify(response.data) != "{}") {
						that.ranking = response.data.records;
						this.getSchoolId();
					}
				}
			})
			// edu().then(response => {
			// 	var a = [],
			// 		b = [];
			// 		if (response.data != undefined) {
			// 		if (JSON.stringify(response.data) != "{}") {
			// 			for (var i in response.data) {
			// 		// a.push(response.data[i].yearMonth.slice(2, 4) + "年" + response.data[i].yearMonth.slice(4)+"月");
			// 				a.push(response.data[i].yearMonth+"月");
			// 				b.push(parseInt(response.data[i].total))
			// 			}
			// 			this.edu[0] = a;
			// 			that.edu[1] = b;
			// 			that.initChartsaq();
			// 		}}
				
			// })
			atnd().then(response => {
				if (response.data != "" && response.data != undefined) {
					if (JSON.stringify(response.data) != "{}") {
						that.atnd = response.data;
					}
					// console.log(that.atnd)
				}

			})
			// visitor().then(response => {
			// 	if(response.data!=undefined){
			// 		that.visitor = response.data;
			// 	}

			// })
			getmap().then(response => {


				var jia=response.data;
				if(jia.records>1){
					var selcity=jia.records[0].areaCode;
				}else{
					var selcity=jia.cityCode;
				}

				var total=0;var teatotal=0,stutotal=0;
				var color=[];

				var maxx=0;
					for(var i in jia.records){
						if(parseInt(jia.records[i].schoolTotal)>maxx){
							console.log(jia.records[i].schoolTotal)
							maxx=jia.records[i].schoolTotal;
						}
						console.log('max'+maxx)
						total+=parseInt(jia.records[i].schoolTotal);
						teatotal+=parseInt(jia.records[i].teacherTotal);
						stutotal+=parseInt(jia.records[i].studentTotal);
					}
					var array=city(jia.records);
					that.getmap={
						stu:stutotal,
						tea:teatotal,
						school:total,
						array:array
					};
					color.push(Math.round(maxx/4));
					color.push(Math.round(maxx/2));
					color.push(Math.round(maxx/4*3));
					color.push(parseInt(maxx));

					var data=[{
								name: "南海诸岛",
								itemStyle: {
									normal: {
										opacity: 0,
										label: {
											show: false
										},
										borderWidth: "0",
										borderColor: "#10242b",
										areaStyle: {
											color: '#10242b'
										}
									},
									emphasis: {
										opacity: 0,
										label: {
											show: false
										}
									}
								}
							}];
					for(var i in array){
						var item={
							name:array[i].area,
							value:array[i].schoolTotal
						}
						data.push(item);
					}
				// that.getmap = response.data;
				getdt(jia.provinceCode,selcity).then(response=>{

					that.initChartsdt(response,jia.area,data,color);
				})
			})
			// setTimeout(function() {
			// 	// that.initChartsyh();
			// 	// that.initChartsjr();
			// 	// that.initChartsdt();


			// }, 300)
			// var height = document.getElementById("app-main").offsetHeight;


			// this.__resizeHandler = debounce(() => {
			// 	this.innerHeight=window.innerHeight;
			// 	if (this.chart) {
			// 		this.chart.resize()
			// 	}
			// 	if (this.chartjr) {
			// 		this.chartjr.resize()
			// 	}
			// 	if (this.chartdt) {
			// 		this.chartdt.resize()
			// 	}
			// 	if (this.chartpc) {
			// 		this.chartpc.resize()
			// 	}
			// 	if (this.chartaq) {
			// 		this.chartaq.resize()
			// 	}

			// }, 100)
			// window.addEventListener('resize', this.__resizeHandler)
		},
    // 20191024--
computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    // --20191024
		methods: {
			isSchool(){
				this.isschool=this.$store.getters.isSchool;
				console.log(this.isschool)
			},
			getSchoolId(){
// 				var id=this.$store.getters.schoolId;
// 				console.log(id)
// 				for(var i in this.ranking){
// 					if(this.ranking[i].schoolId==id){
// 						that.pm=this.ranking[i].integral;
// 					}
// 				}
				this.pm=this.ranking[0].integral;
			},
			initChartsyh() {
				this.chart = this.$echarts.init(document.getElementById("chartsyh"));
				this.setOptionsyh();
			},
			initChartsjr() {
				this.chartjr = this.$echarts.init(document.getElementById("chartsjr"));
				this.setOptionsjr();
			},
			initChartsdt(response,name,data,color) {
				this.chartdt = this.$echarts.init(document.getElementById("chartsdt"));
				var that=this;
				this.setOptionsdt(response,name,data,color);
				setTimeout(function(){

				},300)
			},
			initChartspc() {
				this.chartpc = this.$echarts.init(document.getElementById("chartspc"));
				this.setOptionspc();
			},
			// initChartsaq() {
			// 	debugger
			// 	this.chartaq = this.$echarts.init(document.getElementById("chartsaq"));
			// 	this.setOptionsaq();
			// },
			setOptionsyh() {
				// var that=this;
					var that=this;
				this.chart.setOption({

					series: [{
						type: 'liquidFill',
						radius: '95%',
						amplitude: 5, //振幅 是波浪的震荡幅度 可以取具体的值 也可以是百分比 百分比下是按图标的直径来算
						waveLength: '80%', //波的长度 可以是百分比也可以是具体的像素值  百分比下是相对于直径的 取得越大波浪的起伏越小
						phase: 3, //波的相位弧度 默认情况下是自动
						data: [{
							value: this.danger.completionRate,
							name: '完成率',
							itemStyle: {
								color: {
									type: 'linear',
									x: 0,
									y: 1,
									x2: 0,
									y2: 0,
									colorStops: [{
										offset: 0,
										color: '#deb120' // 0% 处的颜色
									}, {
										offset: 1,
										color: '#ff7c03' // 100% 处的颜色
									}],
									global: false // 缺省为 false
								}



							},

						}],
						backgroundStyle: {
							borderWidth: 5, //内边框宽度

							color: 'rgba(0,0,0,0)', //背景颜色


						},
						itemStyle: {
							shadowBlur: 2,
							opacity: 1, //波浪的透明度
						},
						outline: {
							show: true,
							borderDistance: 4,
							itemStyle: {
								borderWidth: 3,
								borderColor: '#deb120',
								shadowBlur: 20,
							}
						},


						label: {
							normal: {
								formatter:function(){
									// console.log(that.danger.completionRate)
									return "完成率\n"+that.danger.rate
								},
								textStyle: {
									color: 'red',
									insideColor: 'yellow',
									fontSize: 14,

								}
							}
						},
					}]
				});
			},
			setOptionsjr() {
				this.chartjr.setOption({



					series: [{
						name: 'x',
						type: 'pie',
						clockWise: false,
						radius: ['64%', '81%'],
						itemStyle: {
							normal: {
								label: {
									show: false
								},
								labelLine: {
									show: false
								}
							}
						},
						hoverAnimation: false,
						data: [{
							value: 100,
							name: '00',
							itemStyle: {
								color: "rgba(64,125,190,1)"
							}
						}]

					}, {
						name: '接入设备',
						type: 'pie',
						clockwise: false,
						startAngle: "180",
						radius: ['60%', '86%'],
						itemStyle: {},
						hoverAnimation: true,

						data: [{
							value: this.monitor.rate,
							name: '接入率',
							label: {
								normal: {
									show: true,
									position: 'center',
									textStyle: {
										fontSize: '14',
										color: '#55f1f6',
										// fontWeight: 'bold'
									},
									formatter: '{b}:\n{d}%',

								},
							},
							itemStyle: {
								normal: {
									color: { // 完成的圆环的颜色
										colorStops: [{
											offset: 0,
											color: '#367bec' // 0% 处的颜色
										}, {
											offset: 1,
											color: '#00cefc' // 100% 处的颜色
										}]
									},

								}
							},

						}, {
							name: '02',
							value: 100-this.monitor.rate,
							itemStyle: {
								normal: {
									color: "rgba(64,125,190,0)",
									label: {
										show: false
									},
									labelLine: {
										show: false
									}
								}
							}
						}]
					}],
				})
			},
			setOptionsdt(dtdata,name,data,color) {

					for(var i in dtdata.features){
						var flag=0;
						for(var j in data){
							if(data[j].name==dtdata.features[i].properties.name){
								flag=1;
							}
						}
						if(flag==0){
							data.push({
							name:dtdata.features[i].properties.name,
							value:0
							})
						}
					}
				var that = this;
					that.$echarts.registerMap('gd', dtdata);
					that.chartdt.setOption({
						 label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: false
                }
            } ,
						tooltip: {
							trigger: 'item',
							formatter:function(params) {
								var toolTiphtml = ''
								for (var i = 0; i < that.getmap.array.length; i++) {

									if (params.name == that.getmap.array[i].area) {
										toolTiphtml = that.getmap.array[i].area +
										 '<br>学校总数:'+that.getmap.array[i].schoolTotal+
										 '<br>教师总数:'+that.getmap.array[i].teacherTotal+
										  '<br>学生总数:'+that.getmap.array[i].studentTotal;

									}
								}
								return toolTiphtml;

						}
						},
						toolbox: {
							show: false,
							orient: 'vertical',
							left: 'right',
							top: 'center',
							feature: {
								// dataView: {readOnly: false},
								restore: {},
								saveAsImage: {}
							}
						},
										   visualMap: {
						    type: 'piecewise', //分段型。
						    splitNumber: 4,
						    inverse: false,
						    // pieces: [{
						    //     min: 0,
						    //     max: color[0],
						    //     label:'0-'+color[0],
						    //     color: '#87e1ff'
						    // }, {
						    //     min: color[0]+1,
						    //     max:  color[1],
						    //     label: (color[0]+1)+"-"+ color[1],
						    //     color: '#00bfff'
						    // }, {
						    //     min:  color[1]+1,
						    //     max:  color[2],
						    //     label:(color[1]+1)+"-"+ color[2],
						    //     color: '#0084ff'
						    // }, {
						    //     min:  color[2]+1,
						    //     max:  color[3],
						    //     label:(color[2]+1)+"-"+ color[3],
						    //     color: '#0d40ff'
						    // }],
							 pieces: [{
							    min: 0,
							    max: color[0],
							    label:'0-'+color[0],
							    color: '#ffeaa7'
							}, {
							    min: color[0]+1,
							    max:  color[1],
							    label: (color[0]+1)+"-"+ color[1],
							    color: '#fab1a0'
							}, {
							    min:  color[1]+1,
							    max:  color[2],
							    label:(color[1]+1)+"-"+ color[2],
							    color: '#00b894'
							}, {
							    min:  color[2]+1,
							    max:  color[3],
							    label:(color[2]+1)+"-"+ color[3],
							    color: '#5cc5e7'
							}],
						    left: '10',
						    bottom: '10',
						    textStyle: {
						        color: '#fff'
						    },
						    //min: 0,
						    //max: 60000,
						    //text:['High','Low'],
						    //realtime: true,
						    //calculable: true,
						    //color: ['red','orange','lightgreen']
						},

						series: [{
							name: 'gd',
							type: 'map',
							roam: true,
							center: center2(dtdata),
							// layoutCenter: ['50%', '50%'],
							left:'40%',
							top:'10%',
							// layoutSize: 500,
							zoom: 1.2,
							scaleLimit: {
								min: 0.1,
								max: 3
							},
							hoverAnimation:true,
							mapType: 'gd', // 自定义扩展图表类型
							itemStyle: {
								normal: {

									// borderWidth: 0,
									// borderColor: "#fff",
									label: {
										show: true
									}
								}, //地图名字标注是否显示
								emphasis: {
									// borderColor:'#fff',
									areaColor: null,
									label: {
										show: true,
										color:"#fff"
									},

								} //鼠标指向目标时地图文字标注是否显示
							},
							data: data
							// 自定义名称映射

						}]
					})




			},
			setOptionspc() {
				var that = this;
				this.chartpc.setOption({

					// backgroundColor: "#12001b",
					series: [

						{
							name: "x",
							type: 'gauge',
							startAngle: 190,
							endAngle: -10,
							splitNumber: 5, //刻度数量
							min: 0,
							max: 100,
							radius: '100%', //图表尺寸
							center: ['50%', '70%'],
							axisLine: {
								show: true,
								lineStyle: {
									width: 0,
									shadowBlur: 0,
									color: [
										[0.05, '#fcbb2c'],
										[0.10, '#fbb92c'],
										[0.15, '#fbb72c'],
										[0.20, '#fbb12c'],
										[0.25, '#faae2d'],
										[0.30, '#f9a62e'],
										[0.35, '#f89930'],
										[0.40, '#f78e32'],
										[0.45, '#f69333'],
										[0.50, '#f47435'],
										[0.55, '#f36837'],
										[0.60, '#f25a39'],
										[0.65, '#f04f3a'],
										[0.70, '#ef473c'],
										[0.75, '#ef443c'],
										[0.80, '#ef413d'],
										[0.85, '#ee3d3d'],
										[0.90, '#ee383e'],
										[0.95, '#ee393e'],
										[1, '#ee3a3d'],
									],
								}
							},
							axisTick: {
								show: true,
								lineStyle: {
									color: "auto",
									width: 5
								},
								length: 12,
								splitNumber: 5
							},
							splitLine: {
								show: false,
								length: 22,
								lineStyle: {
									color: 'auto',
								}
							},
							axisLabel: {
								show: false
							},
							pointer: { //仪表盘指针
								show: true,
								length: '70%',
								width: 2
							},
							detail: {

								borderColor: '#fff',
								shadowColor: '#fff', //默认透明
								// shadowBlur: 2,
								offsetCenter: [0, '40%'], // x, y，单位px
								textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
									color: '#ffae00',
									fontSize: 14,
								},
								formatter: '完成率{value}%'
							},
							data: [{
								name: "",
								value: that.inspect.completionRate,
							}]
						}

					]

				})
			},
			setOptionsaq() {
				debugger
				this.chartaq.setOption({

					// backgroundColor: "#05224d",
					tooltip: {},
					grid: {
						top: '15%',
						left: '1%',
						right: '4%',
						bottom: '1px',
						containLabel: true,
					},
					legend: {
						show: false,
						itemGap: 50,
						data: ['注册总量', '最新注册量'],
						textStyle: {
							color: '#f9f9f9',
							borderColor: '#fff'
						},
					},
					xAxis: [{
						type: 'category',
						boundaryGap: false,
						axisLine: { //坐标轴轴线相关设置。数学上的x轴
							show: true,
							lineStyle: {
								color: '#107eaa'
							},
						},
						axisLabel: { //坐标轴刻度标签的相关设置
							show: true,
							textStyle: {
								color: '#d1e6eb',
								margin: 15,
							},
						},
						axisTick: {
							show: true,
						},
						data: this.edu[0],
					}],
					yAxis: [{
						type: 'value',
						min: 0,
						// max: 140,
						splitNumber: 4,
						splitLine: {
							show: true,
							lineStyle: {
								color: '#18c6ff'
							}
						},
						axisLine: {
							show: true,
						},
						axisLabel: {
							margin: 20,
							textStyle: {
								color: '#d1e6eb',

							},
						},
						axisTick: {
							show: false,
						},
					}],
					tooltip: {
						formatter: "{a}：<br/>年月：{b}<br/>次数: {c}次"
					},
					series: [{
						name: '学习次数趋势',
						type: 'line',
						// smooth: true, //是否平滑曲线显示
						symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
						showAllSymbol: true,
						// symbol: 'emptyCircle',
						symbolSize: 6,
						lineStyle: {
							normal: {
								color: "#75dbff", // 线条颜色
							},
							borderColor: '#f0f'
						},
						label: {
							show: true,
							position: 'top',
							textStyle: {
								color: '#fff',
							}
						},
						itemStyle: {
							normal: {
								color: "#75dbff",

							}
						},
						// 						tooltip: {
						// 							show: false
						// 						},
						areaStyle: { //区域填充样式
							normal: {
								//线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
								color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
										offset: 0,
										color: 'rgba(117,219,255,1)'
									},
									{
										offset: 1,
										color: 'rgba(0,0,0, 0)'
									}
								], false),
								shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
								shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
							}
						},
						data: this.edu[1]
					}]

				})
			}
		}
	}
</script>
<style scoped>
	.app-container {
		/* background-color: #fff; */
	}

	.top {
		width: 100%;
		margin-bottom: 10px;
	}

	.charts {
		/* background-color: #fff; */
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		/* transform: translate(-50%); */
		top: 0;
		margin: auto;
		/* transform: translate(-50%, -50%); */
		/* transform: translateY(-50%); */
	}

	.dt {
		border: 2px solid #18c6ff;
		border-box: box-sizing;
		border-radius: 2px;
		position: relative;
		background: -webkit-radial-gradient(#08386b, #002241);
		background: -o-radial-gradient(#08386b, #002241);
		background: -moz-radial-gradient(#08386b, #002241);
		background: radial-gradient(#08386b, #002241);

	}
	.visualMapMark{
		width: 5.2vw;
		height: 7vw;
		/* background-color: rgba(255,255,255,0.5); */
		position: absolute;
		left:10px;
		bottom: 10px;
		z-index: 2;
	}
	.hasschool{
		width: 55%;height:554px;margin-right: 20px;height: calc(54vh + 10px);
	}
	.noschool{
		width: 78%;height:554px;
	}
	.dt-data-box {
		position: absolute;
		top: 30px;
		left: 30px;

	}

	.data-title {
		width: 100%;
		font-size: 14px;
		line-height: 26px;
		height: 26px;
		color: #fff;
		text-align: center;

	}

	.data {
		display: flex;
		align-items: baseline;
		justify-content: flex-end;
		color: #18c6ff;
		font-size: 24px;
		font-weight: 600;
		line-height: 40px;
		height: 40px;
		width: 100%;
		text-align: center;
		margin-bottom: 5px;
	}

	.data-dw {
		font-size: 16px;
		line-height: 40px;

	}

	.line {
		width: 4.4vw;
		height: 0;
		border-bottom: 1px solid #0072D8;
	}

	.bottom {
		position: absolute;
		top: 15px;
		left: 15px;
		display: flex;
		width: calc(100% - 15px - 15px);
		justify-content: space-between;
	}

	.aq-detail {
		/* position: absolute;
		left: 15px;
		top: 15px; */

		height: 250px;
		background-color: rgba(6, 44, 85, 0.6);
		border: solid 1px #0f4178;
	}

	.aq-detail2 {
		/* position: absolute;
		right: 15px;
		top: 15px; */

		height: 23vh;
		background-color: rgba(6, 44, 85, 0.6);
		border: solid 1px #0f4178;
	}

	.zx {
		/* position: absolute;
		left: calc(15px + 29.7%);
		top: 15px; */
		width: 53%;
		height: 240px;
		position: relative;
		/* background-color: rgba(6,44,85,0.6); */
		/* border: solid 1px #0f4178; */
	}

	.zx-title {
		width: 48%;
		height: 30px;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top: 0px;
		/* border: 1px solid #fff; */
		color: #fff;
	}

	.zx-tit-text {
		position: absolute;
		left: 50%;
		width: 100%;
		height: 100%;
		text-align: center;
		line-height: 30px;
		transform: translateX(-50%);
		z-index: 4;
		top: 0px;
		font-size: 12px;
	}

	.list {
		position: absolute;
		top: 46px;
		height: calc(100% - 46px - 15px);
		width: calc(100% - 15px - 15px);
		margin: 0 auto;
		left: 15px;
	}

	.list-item {
		width: 100%;
		height: 48px;
		display: flex;
		align-items: center;
		font-size: 16px;
		color: #fff;
		overflow: hidden;
	}

	.NO {
		width: 22%;
		margin-left: 7px;
		/* padding:0px 5px; */
		font-size: 14px;
		height: 23px;
		/* border: 1px solid #fff; */
		line-height: 23px;
		text-align: center;
		margin-right: 12px;
	}

	.NO1 {
		background-image: linear-gradient(0deg,
			#d71116 0%,
			#fe8b8e  100%),
			linear-gradient(#0072d8,
			#0072d8);
	}

	.NO2 {
		background-image: linear-gradient(0deg,
			#0c6387 0%,
			#9ce2ff 100%),
			linear-gradient(#0072d8,
			#0072d8);
	}

	.NO3 {
		background-image: linear-gradient(0deg,
			#0d8b15  0%,
			#8bffc5 100%),
			linear-gradient(#0072d8,
			#0072d8);
	}

	.NO4 {
		color: #18c5ff;
	}

	.item-name {
		display: flex;
		flex-wrap: nowrap;
		width: 100%;
		height: 100%;
		line-height: 48px;
	}

	.item-line {
		width: 82%;
		height: 0px;
		border-bottom: 1px solid #18c6ff;
		opacity: 0.3;
		margin: 0 auto;
	}

	.de-title {
		font-size: 14px;
		height: 30px;
		padding-top: 6px;
		padding-bottom: 6px;
		width: 50%;
		/* text-align: end; */
	}

	.de-con {
		align-items: flex-start;
		width: 100%;
	}

	.aq-de-bu {
		width: 70%;
		margin: 0 auto;
		margin-top: 2vh;
		margin-bottom:2vh ;
		padding: 8px 0px;
		font-size: 18px;
		color: #18c6ff;
		text-align: center;
		border-bottom: 2px solid #18c6ff;
	}

	.aq-de-wh {
		width: 70%;
		margin: 0 auto;
		margin-top: 1vh;
		margin-bottom: 1vh;
		font-size: 18px;
		color: #fff;
		text-align: center;

	}

	.h30vh{
		height: 27vh!important;
	}
	.mb-20{
		margin-bottom: 10px;
	}
	.cq-text{
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		text-align: center;
		color: #fff;
		font-size: 14px;
		/* display: flex;
		align-items: center; */

	}
	.k-title{
		top: 1.8vh;
	}
	.row-title{
		margin: 10px auto;

	}
  /* 20191024 */
  .warn-data{
    width: 100%;
  }
  .warn-data .th{
    margin: 0 auto;
    display: flex;
    align-items: center;
    width: 98%;
    background-color: #052646;
    text-align: center;
    font-size: 20px;
    color: #fff;
    height: 36px;

  }
  .warn-data .swiper-container{
    width:98%;
    margin: 0 auto;
    height: 14vh;
  }
  .warn-data .swiper-slide{
    width: 100%;
  }
  .warn-data .swiper-slide .tr{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #fff;

  }
  .warn-data .swiper-slide:nth-child(2n-1) .tr{
    background-color: #0f3b6b;
  }
  .warn-data .swiper-slide:nth-child(2n) .tr{
    background-color: #052646;
  }
  .warn-data .swiper-slide .tr .td{
  text-align: center;
  }
	@media screen and (max-height:768px) {
		/* .top {
			margin-bottom: 25px;
		} */
	.row-title{
		margin: 0 auto;

	}
	.aq-de-bu{
		margin-top: 0;
		margin-bottom:0 ;
	}
  .warn-data .th{

    font-size: 14px;
    color: #fff;
    height: 28px;

  }
  .warn-data .swiper-slide .tr{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #fff;
  
  }
	}
	@media screen and (min-height:1050px) {
		.top {
			margin-bottom: 25px;
		}
    .warn-data .th{

      font-size: 16px;
      color: #fff;
      height: 20px;

    }
	}
</style>
