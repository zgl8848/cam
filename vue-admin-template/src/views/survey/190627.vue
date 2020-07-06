<template>
	<div class="app-container flex" id="app-main">
		<div  class="lt">
			<div class="dt" style="width:100%;height:83.6vh;">
				<div class="charts" id="chartsdt" style="width: 100%;height:100%;">

				</div>
				<div class="visualMapMark"></div>
				<div class="sel-box">
					<el-select v-model="date" placeholder="请选择" @change="dthastime">
						<el-option v-for="item in sp_sel" :key="item.str" :label="item.str" :value="item.time">
						</el-option>
					</el-select>
				</div>
				<div class="all-box">
					<img src="../../../static/img/all.png" alt="">
					<div class="all-div">
						<div class="all-div-title">检查次数</div>
						<div class="fs" style="color: #ffba50;">{{getmap.total}}</div>
					</div>
				</div>
				<div class="all-box2">
					<img src="../../../static/img/all.png" alt="">
					<div class="all-div">
						<div class="all-div-title">覆盖学校</div>
						<div class="fs" style="color: #ffba50;">{{getmap.school}}</div>
					</div>
				</div>
			</div>
			<!-- 	<div style="width: 100%;margin-bottom: 10px;" class="">
				
				
				
			</div> -->

		</div>
		<div style="" class="flex fl-wa ri">

			<div class="k kr2" style="">
				<img src="../../../static/img/k7.png" alt="">
				<div class="k-title2">历史记录</div>
				<div class="charts" id="chartsxg" style="width: 90%;height:90%;">

				</div>

			</div>
			<div class="k kr" style="">
				<img src="../../../static/img/k6.png" alt="">
				<div class="k-title">总体情况</div>
				<div class="charts" id="chartsqk" style="width: 90%;height:90%;">

				</div>
				<div class="tl flex">
					<div class="half" style="width: 50%;">
						<div class="text flex al-c" style="margin-bottom: 10px;">
							<div style="width: 12px;height: 12px;background-color:rgba(0,0,0,0);margin-right: calc(0.4vw);"></div>检查校次：<span class="val">{{overall.inspect}}</span>
						</div>
						<div class="text flex al-c">
							<div style="width: 12px;height: 12px;background-color:rgba(0,0,0,0);margin-right: calc(0.4vw);"></div>隐患个数：<span class="val">{{overall.hiddenDanger}}</span>
						</div>
					</div>
					<div class="half" style="width: 50%;">
						<div class="text flex al-c" style="margin-bottom: 10px;">
							<div style="width: 12px;height: 12px;background-color:rgba(0,0,0,0);margin-right: calc(0.4vw);"></div>问题个数：<span class="val">{{overall.question}}</span>
						</div>
						<div class="text flex al-c">
							<div style="width: 12px;height: 12px;background-color:rgba(0,0,0,0);margin-right: calc(0.4vw);"></div>合格率：<span class="val">{{overall.rate}}%</span>
						</div>
					</div>
				</div>

			</div>
			<div class="k kr" style="">
				<img src="../../../static/img/k6.png" alt="">
				<div class="k-title">检查分类</div>
				<div class="charts" id="chartslx" style="width: 90%;height:90%;">
					<div style="width: 100%;height: 100%;" v-show="false">
						<div style="displayflex;width:calc(9.3vw);height:calc(7.8vw) ;margin: 0 auto;margin-top: 80px;align-items: center;justify-content: center;">
							<img src="../../../static/img/nodeta.png" alt="" style="max-width: 100%;max-height: 100%;">
						</div>

						<div style="color: #18c5ff;margin: 0 auto;margin-top: 30px;text-align: center;">暂无数据</div>
					</div>

				</div>
				<div class="tl flex" style="">
					<div class="half" style="width: 50%;">
						<div class="text flex al-c" style="margin-bottom: 10px;"  v-if="classify.data.length>0">
							<div style="width: 12px;height: 12px;background-color:#16bcf8;margin-right: calc(0.4vw);"></div>{{classify.data[0].name}}：<span
							 class="val">{{classify.data[0].value}}</span>
						</div>
						<div class="text flex al-c"  v-if="classify.data.length>2">
							<div style="width: 12px;height: 12px;background-color:#15c7ac;margin-right: calc(0.4vw);"></div>{{classify.data[2].name}}：<span
							 class="val">{{classify.data[2].value}}</span>
						</div>
						<div class="text flex al-c"  v-if="classify.data.length>4">
							<div style="width: 12px;height: 12px;background-color:#f23737;margin-right: calc(0.4vw);"></div>{{classify.data[4].name}}：<span
							 class="val">{{classify.data[4].value}}</span>
						</div>
					</div>
					<div class="half" style="width: 50%;"  >
						<div class="text flex al-c" style="margin-bottom: 10px;"v-if="classify.data.length>1">
							<div style="width: 12px;height: 12px;background-color:#ffa245;margin-right: calc(0.4vw);"></div>{{classify.data[1].name}}：<span
							 class="val">{{classify.data[1].value}}</span>
						</div>
						<div class="text flex al-c" v-if="classify.data.length>3">
							<div style="width: 12px;height: 12px;background-color:#9b3aff;margin-right: calc(0.4vw);"></div>{{classify.data[3].name}}：<span
							 class="val">{{classify.data[3].value}}</span>
						</div>
						<div class="text flex al-c" v-if="classify.data.length>5">
							<div style="width: 12px;height: 12px;background-color:#a751ff;margin-right: calc(0.4vw);"></div>{{classify.data[5].name}}：<span
							 class="val">{{classify.data[5].value}}</span>
						</div>
					</div>

				</div>

			</div>
		</div>

	</div>
</template>

<script>
	import {
		getdt,overall,classify,getmap,trend_chart
	} from '@/api/survey'
	import {
		center,
		getdatelist,debounce,city,center2,getnowdate
	} from '@/utils/index'
	export default {
		data() {
			return {
				list: null,
				pm: ["", "", "", "", "", "", "", "", "", ""],
				listLoading: true,
				screenWidth: document.body.clientWidth,
				sp_sel: [],
				date:"",
				val:50,
				getmap:{},
				 classify:{//检查分类
									 res:[],//获取的数据
									data:[]//图表series
				},
				trend_chart:{
					x: [],
					data: []
				},
				overall:{},
				chartq1:null,
				chartq2:null,
				chartq3:null,
				chartq4:null,
				chartjl:null,
				chartxg:null,
				chartdt:null,
				chartlx:null,
				chartqk:null,
				chartql:null,
			}
		},
		created() {
			// this.fetchData()
		},
		mounted() {
			console.log(document.body.scrollHeight)
			const that = this;
			this.sp_sel = getdatelist();
			this.date=this.sp_sel[0].str;
			classify().then(response => {
				
					var series=[];
					that.classify.res=response.data;
					for(var i in response.data){
						var item={
							value: parseInt(response.data[i].number),
							name:response.data[i].name ,
						};
						series.push(item);
					}
					that.classify.data=series;
				that.initChartslx();
			})
			trend_chart().then(response => {
				
				var series = [];
				var legend = [];
				var months = [];
				for (var j in response.data[0].inspectData) {
					months.push(response.data[0].inspectData[j].month)
				}
				
				for (var i in response.data) {
					var data = [];
					for (var j in response.data[i].inspectData) {
						data.push(parseInt(response.data[i].inspectData[j].number))
					}
				
					var item = {
						name: response.data[i].inspectName,
						type: 'line',
						// smooth: true, //是否平滑曲线显示
						symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
						showAllSymbol: true,
						// symbol: 'emptyCircle',
						symbolSize: 6,
						lineStyle: {
							// 									normal: {
							// 										color: "#16bcf8", // 线条颜色
							// 									},
						},
						label: {
							show: false,
							position: 'bottom',
							textStyle: {
								color: '#fff',
							}
						},
						itemStyle: {
				
							// color: "#16bcf8",
				
				
						},
						tooltip: {
							show: true
						},
				
						data: data,
				
					};
					var item2 = {
						name: response.data[i].inspectName,
						// 强制设置图形为圆。
						icon: 'rect',
						// 设置文本为红色
				
					};
					series.push(item);
					legend.push(item2);
				}
				
				that.trend_chart.x = months;
				that.trend_chart.series = series;
				that.trend_chart.legend = legend;
				that.initChartsxg();
			})
			overall().then(response => {
					response.data.rate=parseInt(response.data.rate.replace("%",""));
					that.overall=response.data;
				that.initChartsqk();
			})
			
			getmap(that.sp_sel[that.sp_sel.length-1].time).then(response => {
				var jia=response.data;
				// var jia = {
// 					area:"440000",
// 					records:[
// 					{
// 						number: "10",
// 						schoolId: "20",
// 						areaCode: "440103"
// 					},
// 					{
// 						number: "14",
// 						schoolId: "21",
// 						areaCode: "440103"
// 					},
// 					{
// 						number: "20",
// 						schoolId: "50",
// 						areaCode: "440104"
// 					},
// 					{
// 						number: "53",
// 						schoolId: "75",
// 						areaCode: "440106"
// 					},
// 					{
// 						number: "20",
// 						schoolId: "23",
// 						areaCode: "440103"
// 					},
// 				]};	
if(jia.records>1){
					var selcity=jia.records[0].areaCode;
				}else{
					var selcity=jia.cityCode;
				}
				if(selcity=="110100"){
					selcity="110000"
				}
				if(selcity=="310100"){
					selcity="310000"
				}
				if(selcity=="120100"){
					selcity="120000"
				}
				if(selcity=="500100"){
					selcity="500000"
				}
				var total=0;var serious=0;
				var color=[];
					for(var i in jia.records){
						total+=parseInt(jia.records[i].number);
						// serious+=parseInt(jia.records[i].serious);
						
					}
					
					color.push(Math.round( total/4));
					color.push(Math.round( total/2));
					color.push(Math.round( total/4*3));
					color.push(total);
					var array0=[{
						number:53,
						schoolnum:1,
						areaCode: "100000"
					}];
					
					for(var i in jia.records){
						var flag=0;
						for(var j in array0){
							if(jia.records[i].areaCode==array0[j].areaCode){
								array0[j].schoolnum+=1;
								array0[j].number+=parseInt(jia.records[i].number);
								flag=1;
								break;
							}
						}
						if(flag==0){
							var item={
								number:parseInt(jia.records[i].number),
								schoolnum:1,
								areaCode:jia.records[i].areaCode
							};
							array0.push(item)
						}
						
					}
					array0.splice(0,1);
					
					var array=city(array0);
					that.getmap={
						total:total,
						school:jia.records.length,
						array:array
					};
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
							value:array[i].number
						};
						data.push(item);
					}
				// that.getmap = response.data;
				getdt(jia.provinceCode,selcity).then(response=>{
					that.initChartsdt(response,jia.area,data,color);
				})
			})
			
			
			// this.initChartsdt();
			console.log(window.innerHeight)
			var height = document.getElementById("app-main").offsetHeight;
			
			
			 
			this.__resizeHandler = debounce(() => {
			 
			  
			  if (this.chartxg) {
			    this.chartxg.resize()
			  }
			  if (this.chartlx) {
			    this.chartlx.resize()
			  }
			  if (this.chartqk) {
			    this.chartqk.resize()
			  }
			  if (this.chartdt) {
			    this.chartdt.resize()
			  }
			  
			}, 100)
			window.addEventListener('resize', this.__resizeHandler)
		},
		
		methods: {
			dthastime(e){
				var that=this;
						getmap(e).then(response => {

					var jia=response.data;
					if(jia.records.length==1){
						var selcity=jia.records[0].areaCode;
					}else{
						var selcity=jia.cityCode;
					}
						var total=0;var serious=0;
					var color=[];
						for(var i in jia.records){
							total+=parseInt(jia.records[i].number);
							// serious+=parseInt(jia.records[i].serious);
							
						}
						var array = city(jia.records);
						that.getmap={
							total:total,
							school:jia.records.length,
						};
						color.push(Math.round( total/4));
						color.push(Math.round( total/2));
						color.push(Math.round( total/4*3));
						color.push(total);
						var array0=[{
							number:53,
							schoolnum:1,
							areaCode: "100000"
						}];
						
						for(var i in jia.records){
							var flag=0;
							for(var j in array0){
								if(jia.records[i].areaCode==array0[j].areaCode){
									array0[j].schoolnum+=1;
									array0[j].number+=parseInt(jia.records[i].number);
									flag=1;
									break;
								}
							}
							if(flag==0){
								var item={
									number:parseInt(jia.records[i].number),
									schoolnum:1,
									areaCode:jia.records[i].areaCode
								};
								array0.push(item)
							}
							
						}
						array0.splice(0,1);
						
						var array=city(array0);
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
								value:array[i].number
							};
							data.push(item);
						}
						that.getmap.array=array;
						console.log(that.getmap)
					// that.getmap = response.data;
					getdt(jia.provinceCode,selcity).then(response=>{
						that.initChartsdt(response,jia.area,data,color);
					})
				})
			},

			initChartsxg() {
				this.chartxg = this.$echarts.init(document.getElementById("chartsxg"));
				this.setOptionsxg();
			},
			initChartsdt(response,name,data,color) {
				this.chartdt = this.$echarts.init(document.getElementById("chartsdt"));
				var that=this;
				this.setOptionsdt(response,name,data,color);
				setTimeout(function(){
					
				},300)
			},
			initChartslx() {
				this.chartlx = this.$echarts.init(document.getElementById("chartslx"));
				this.setOptionslx();
			},
			initChartsqk() {
				this.chartqk = this.$echarts.init(document.getElementById("chartsqk"));
				this.setOptionsqk();
			},
			setOptionsxg() {
				this.chartxg.setOption({


					// backgroundColor: "#05224d",
					tooltip: {},
					grid: {
						top: '20%',
						left: '0px',
						right: '10px',
						bottom: '10px',
						containLabel: true,
					},
					legend: {
						show: true,
						right:0,
						top:20,
						orient:"horizontal",
						icon: "rect",   //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none

itemWidth: 12,  // 设置宽度

itemHeight: 12, // 设置高度
						selectedMode:false,
						data: this.trend_chart.legend,
						textStyle: {
							color: '#fff',
							// borderColor: '#fff'
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
						splitLine: { //网格线
							show: false,
							lineStyle: {
								color: ['#0f4178'],
								type: 'solid'
							}
						},
						axisLabel: { //坐标轴刻度标签的相关设置
							show: true,
							textStyle: {
								color: '#d1e6eb',
								margin: 15,
							},
						},
						axisTick: {
							show: false,
						},
						data: this.trend_chart.x,
					}],
					yAxis: [{
						type: 'value',
						min: 0,
						// max: 140,
						splitNumber: 6,
						splitLine: {
							show: true,
							lineStyle: {
								color: '#0f4178'
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
							show: true,
						},
					}],
					color:["#16bcf8","#ffaa3c","#ff3535","#15c7ac"],
					series: this.trend_chart.series,


				})
			},
				setOptionsdt(dtdata,name,data,color) {
					
				var that = this;
					that.$echarts.registerMap('gd', dtdata);
					that.chartdt.setOption({
						tooltip: {
							trigger: 'item',
							formatter: function(params) {
							var toolTiphtml = ''
							for (var i = 0; i < that.getmap.array.length; i++) {

								if (params.name == that.getmap.array[i].area) {
									toolTiphtml = that.getmap.array[i].area +
										'<br>学校总数:' + that.getmap.array[i].schoolnum +
										"<br>检查总次数:" + that.getmap.array[i].number;

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
						    pieces: [{
						        min: 0,
						        max: color[0],
						        label:'0-'+color[0],
						        color: '#b2ff90'
						    }, {
						        min: color[0]+1,
						        max:  color[1],
						        label: (color[0]+1)+"-"+ color[1],
						        color: '#b5e217'
						    }, {
						        min:  color[1]+1,
						        max:  color[2],
						        label:(color[1]+1)+"-"+ color[2],
						        color: '#fed71f'
						    }, {
						        min:  color[2]+1,
						        max:  color[3],
						        label:(color[2]+1)+"-"+ color[3],
						        color: '#f19013'
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
							layoutCenter: ['50%', '50%'],
							// layoutSize: 500,
							zoom: 0.9,
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
									areaColor: '#18c6ff',
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
			setOptionslx() {
				this.chartlx.setOption({


					tooltip:{
						formatter:"{b} <br> 占比：{d}%",
					},
					series: [{
						name: 'Line 1',
						type: 'pie',
						center: ["50%", "40%"],
						roseType: "radius",
						clockwise: true,
						startAngle: "90",
						radius: ['20%', '65%'],
						itemStyle: {
							normal: {
								label: {
									show: true,
									formatter:"{d}%",
									position:"inside",
									fontSize:"14",
								},
								labelLine: {
									show: true
								}
							}
						},
						hoverAnimation: true,
						color:["#16bcf8","#ffa245","#15c7ac","#9b3aff","#f23737","#a751ff"],
						data: this.classify.data,
					}],
				})
			},
			setOptionsqk() {
				this.chartqk.setOption({

					 tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: ({d}%)"
    },
					
					series: [{
						name: '合格情况',
						type: 'pie',
						clockWise: false,
						center: ["50%", "40%"],
						radius: ['35%', '46%'],
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
						hoverAnimation: true,
						data: [{
							value: this.overall.rate,
							name: '合格',
								label: {
								normal: {
									show: true,
									position: 'center',
									textStyle: {
										fontSize: '14',
										
										color: '#fff',
										// fontWeight: 'bold'
									},
									formatter: '合格率\n{c}%',
							
								},
							},
							itemStyle: {
								normal: {
									color: { // 完成的圆环的颜色
										colorStops: [{
											offset: 0,
											color: '#11d1a9' // 0% 处的颜色
										}, {
											offset: 1,
											color: '#01aa84' // 100% 处的颜色
										}]
									},

								},
								

							}
						},{
							value: 100-this.overall.rate,
							name: '不合格',
							itemStyle: {
								normal: {
									color: "rgba(0,0,0,0)",

								},
								tooltip:{
									show:false,
								}

							}
						}]

					}, {
						name: '合格率',
						type: 'pie',
						clockWise: true,
						center: ["50%", "40%"],
						radius: ['40%', '52%'],
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
						hoverAnimation: true,
						data: [{
							value: 100-this.overall.rate,
							name: '不合格率',
							itemStyle: {
								normal: {
									color: "#ffaa3c",

								},
								

							}
						},{
							value: this.overall.rate,
							name: '02',
							itemStyle: {
								normal: {
									color: "rgba(0,0,0,0)",
										
								}

							},
							tooltip:{
								show:false
							}
						}]

					}],
				})
			}
		}
	}
</script>
<style scoped>
	.app-container {
		/* background-color: #fff; */
	}

	.charts {
		/* background-color: #fff; */
		position: absolute;
		left:0;
		right:0;
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
	.k-title{
		top: 1.8vh;
	}
	.k-title2{
		top: 1.2vh;
	}
	.aq-detail {
		position: absolute;
		left: 15px;
		top: 15px;

		height: 250px;
		background-color: rgba(6, 44, 85, 0.6);
		border: solid 1px #0f4178;
	}

	.aq-detail2 {
		position: absolute;
		right: 15px;
		top: 15px;

		height: 240px;
		background-color: rgba(6, 44, 85, 0.6);
		border: solid 1px #0f4178;
	}

	.zx {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top: 15px;
		width: 100%;
		height: 240px;
		/* background-color: rgba(6,44,85,0.6); */
		/* border: solid 1px #0f4178; */
	}

	.zx-title {
		width: 48%;
		height: 30px;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top: -12px;
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
		background-image: linear-gradient(90deg,
			#fa0e16 0%,
			#fa3f2c 100%),
			linear-gradient(#0072d8,
			#0072d8);
	}

	.NO2 {
		background-image: linear-gradient(90deg,
			#ff7200 0%,
			#ff8e1f 100%),
			linear-gradient(#0072d8,
			#0072d8);
	}

	.NO3 {
		background-image: linear-gradient(90deg,
			#ffb400 0%,
			#ffd304 100%),
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
		height: 62px;
		padding-top: 19px;
		padding-bottom: 24px;
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
		margin-top: 26px;
		margin-bottom: 15px;
		padding: 8px 0px;
		font-size: 18px;
		color: #18c6ff;
		text-align: center;
		border-bottom: 2px solid #18c6ff;
	}

	.aq-de-wh {
		width: 70%;
		margin: 0 auto;
		margin-bottom: 30px;
		font-size: 14px;
		color: #fff;
		text-align: center;

	}

	.tl {
		position: absolute;
		bottom: 24px;
		width: 90%;
		left: 0;
		right: 0;
		margin: 0 auto;
	}

	.tl .text {
		color: #fff;

	}

	.tl .val {
		color: #18c6ff;
		font-weight: 500;
	}

	.all-box {
		width: calc(8.5vw);
		min-width: 110px;
		height: calc(5.4vw);
		min-height: 90px;
		left: calc(1.1vw);
		top: calc(4.5vw);
		position: absolute;
		z-index: 10;

	}
	.all-box2 {
		width: calc(8.5vw);
		min-width: 110px;
		height: calc(5.4vw);
		min-height: 90px;
		left: calc(1.1vw);
		top: calc(9.9vw);
		position: absolute;
		z-index: 10;
	
	}
	.all-box img,.all-box2 img{
		width: 100%;
	}

	.all-div {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		text-align: center;
	}
	.all-div-title{
		color:#18c6ff;margin-top: 20px;margin-bottom: 10px;
	}
	.fs {
		font-size: 40px;
	}

	.sel-box {
		width: calc(8.5vw);
		min-width: 110px;
		height: 30px;
		
		position: absolute;
		left: calc(1.1vw);
		top: calc(1.1vw);
	}

	

	.half {
		font-size: 14px;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
	.lt {
		width: calc(40vw);
	}
	
	.ri {
		width: calc(44vw);
	}
	.kr {
		width: calc(50% - 20px);
		height: 40.2vh;
		margin-left: 20px;
	
	}
	.kr2 {
		width: calc(100% - 20px);
		height: 40.2vh;
		margin-left: 20px;
		margin-bottom: 20px;
		
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
	@media screen and (max-width:1440px) {
		.all-div-title{
			margin-top: 10px;
			margin-bottom: 10px;
			font-size: 14px;
		}
		.fs{
			font-size: 24px;
		}
		.lt {
			width: calc(40.4vw);
		}
		
		.ri {
			width: calc(43.2vw);
		}
		.kr {
			width: calc(50% - 16px);
			height: 40.2vh;
			margin-left: 10px;
		
		}
		.kr2 {
			width: calc(100% - 16px);
			height: 40.2vh;
			margin-left: 10px;
			margin-bottom: 16px;
		}
		.all-box2{
			top: 150px;
		}
	}
	@media screen and (max-width:1366px) {
		.app-container {
			font-size: 12px;
		}

		.fs-40 {
			font-size: 18px;
		}

		.half {
			font-size: 12px;
		}
		.all-box2 {
			
			top: 150px;
			
		
		}
	}
	@media screen and (max-width:1279px) {
		.app-container {
			font-size: 12px;
		}
	
		.fs {
			font-size: 18px;
		}
	
		.lt {
			width:50%;
		}
	
		.ri {
			width: 50%;
		}
	
		.kr {
			width: calc(50% - 10px);
			height: 40.2vh;
			margin-left: 10px;
			
			
		}
		.kr2 {
			width: calc(100% - 10px);
			height: 40.2vh;
			margin-left: 10px;
			margin-bottom: 10px;
			
		}
		.all-box{
			top: 50px;
		}
		.all-box2{
			top:150px
		}
	}
</style>
<style>
	.el-input__inner {
		box-shadow: 0px 0px 3px #fff;
		background-color: #052547;
		border: solid 1px #18c6ff;
		color: #fff;
		height:29px;
		line-height:29px;
	}
	
	.el-input__icon {
		line-height: 29px;
	}
	
	.el-select-dropdown {
		background-color: #052547;
		border: solid 1px #18c6ff;
	}
	
	.el-popper .popper__arrow::after {
		border-bottom-color: #052547 !important;
	}
	
	.el-select-dropdown__item.hover,
	.el-select-dropdown__item:hover {
		background-color: #18c6ff;
	}
	
	.el-select-dropdown__item {
		color: #fff;
	}
</style>