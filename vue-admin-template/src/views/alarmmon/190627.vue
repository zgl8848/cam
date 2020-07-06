<template>
	<div class="app-container flex" id="app-main">
		<div style="" class="lt">
			<div class="dt jg" style="width:100%;height:54vh;">
				<div class="charts" id="chartsdt" style="width: 100%;height:100%;">
					
				</div>
				<div class="visualMapMark">
					
				</div>
				<div class="sel-box">
					<el-select v-model="date" placeholder="请选择" @change="dthastime">
						<el-option v-for="item in sp_sel" :key="item.str" :label="item.str" :value="item.time">
						</el-option>
					</el-select>
				</div>
				<div class="all-box">
					<img src="../../../static/img/all.png" alt="">
					<div class="all-div">
						<div class="all-div-title">隐患总数量</div>
						<div class="fs" style="color: #ffba50;">{{getmap.total}}</div>
					</div>
				</div>
			</div>
			<div class="k " style="width: 100%;height:27.5vh;position: relative;">
				<img src="../../../static/img/k3.png" alt="">

				<div style="" class="zx">
					<div class="zx-title">
						<img src="../../../static/img/linetitle.png" alt="" style="margin: 0 auto;">
						<div class="zx-tit-text">隐患趋势</div>
					</div>
					<div class="charts" id="chartsaq" style="width: 90%;height:70%;">
					</div>
				</div>


			</div>
			<!-- 	<div style="width: 100%;margin-bottom: 10px;" class="">
				
				
				
			</div> -->

		</div>
		<div style="" class="flex fl-wa ri">
			<div class="k kr jg" style="">
				<img src="../../../static/img/k4.png" alt="">
				<div class="k-title">整改情况</div>
				<div class="charts" id="chartszg" style="width: 90%;height:90%;">

				</div>
				<div class="tl flex">
					<div class="half" style="width: 50%;">
						<div class="text flex al-c">总隐患：<span class="val">{{overall.total}}</span></div>
					</div>
					<div class="half" style="width: 50%;">
						<div class="text flex al-c jg" style="">
							<!-- <div style="width: 12px;height: 12px;background-color:#ffdd40;margin-right: calc(0.4vw);"></div> -->处理中：<span
							 class="val">{{overall.processing}}</span>
						</div>
						<div class="text flex al-c">
							<!-- <div style="width: 12px;height: 12px;background-color:#2adeff;margin-right: calc(0.4vw);"></div> -->已处理：<span
							 class="val">{{overall.solved}}</span>
						</div>
					</div>

				</div>

			</div>
			<div class="k kr" style="margin-bottom: 10px;">
				<img src="../../../static/img/k4.png" alt="">
				<div class="k-title">隐患类型</div>
				<div class="charts" id="chartsfb" style="width: 90%;height:90%;">

				</div>
				<div class="tl flex">
					<div class="half" style="width: 50%;">
						<div class="text flex al-c" style="margin-bottom: 10px;" v-if="classify.data.length>0">
							<div style="width: 12px;height: 12px;background-color:#ed5151;margin-right: calc(0.4vw);"></div>{{classify.data[0].name}}：<span
							 class="val">{{classify.data[0].value}}</span>
						</div>
						<div class="text flex al-c" v-if="classify.data.length>2">
							<div style="width: 12px;height: 12px;background-color:#ffdd40;margin-right: calc(0.4vw);"></div>{{classify.data[2].name}}：<span
							 class="val">{{classify.data[2].value}}</span>
						</div>
						<div class="text flex al-c" v-if="classify.data.length>4">
							<div style="width: 12px;height: 12px;background-color:#37ddcd;margin-right: calc(0.4vw);"></div>{{classify.data[4].name}}：<span
							 class="val">{{classify.data[4].value}}</span>
						</div>
					</div>
					<div class="half" style="width: 50%;">
						<div class="text flex al-c" style="margin-bottom: 10px;" v-if="classify.data.length>1">
							<div style="width: 12px;height: 12px;background-color:#baf05b;margin-right: calc(0.4vw);"></div>{{classify.data[1].name}}：<span
							 class="val">{{classify.data[1].value}}</span>
						</div>
						<div class="text flex al-c" v-if="classify.data.length>3">
							<div style="width: 12px;height: 12px;background-color:#85d7fe;margin-right: calc(0.4vw);"></div>{{classify.data[3].name}}：<span
							 class="val">{{classify.data[3].value}}</span>
						</div>
						<div class="text flex al-c" v-if="classify.data.length>5">
							<div style="width: 12px;height: 12px;background-color:#ef922e;margin-right: calc(0.4vw);"></div>{{classify.data[5].name}}：<span
							 class="val">{{classify.data[5].value}}</span>
						</div>
					</div>

				</div>

			</div>
			<div class="k kr" style="margin-bottom: 0px;">
				<img src="../../../static/img/k4.png" alt="">
				<div class="k-title">上报来源</div>
				<div class="charts" id="chartsly" style="width: 90%;height:90%;">

				</div>
				<div class="tl flex">
					<div class="half" style="width: 50%;">
						<div class="text flex al-c" style="margin-bottom: 10px;" v-if="source.data.length>0">
							<div style="width: 12px;height: 12px;background-color:#3f82fd;margin-right: calc(0.4vw);"></div>{{source.data[0].name}}：<span
							 class="val">{{source.data[0].value}}</span>
						</div>
						<div class="text flex al-c" v-if="source.data.length>2">
							<div style="width: 12px;height: 12px;background-color:#19c79c;margin-right: calc(0.4vw);"></div>{{source.data[2].name}}：<span
							 class="val">{{source.data[2].value}}</span>
						</div>
						<div class="text flex al-c" v-if="source.data.length>4">
							<div style="width: 12px;height: 12px;background-color:#f3c420;margin-right: calc(0.4vw);"></div>{{source.data[4].name}}：<span
							 class="val">{{source.data[4].value}}</span>
						</div>
					</div>
					<div class="half" style="width: 50%;">
						<div class="text flex al-c" style="margin-bottom: 10px;" v-if="source.data.length>1">
							<div style="width: 12px;height: 12px;background-color:#ff8124;margin-right: calc(0.4vw);"></div>{{source.data[1].name}}：<span
							 class="val">{{source.data[1].value}}</span>
						</div>
						<div class="text flex al-c" v-if="source.data.length>3">
							<div style="width: 12px;height: 12px;background-color:#fa2e2e;margin-right: calc(0.4vw);"></div>{{source.data[3].name}}：<span
							 class="val">{{source.data[3].value}}</span>
						</div>
						<div class="text flex al-c" v-if="source.data.length>5">
							<div style="width: 12px;height: 12px;background-color:#a751ff;margin-right: calc(0.4vw);"></div>{{source.data[5].name}}：<span
							 class="val">{{source.data[5].value}}</span>
						</div>
					</div>

				</div>

			</div>
			<div class="k kr" style="margin-bottom: 0px;">
				<img src="../../../static/img/k4.png" alt="">
				<div class="k-title">产生原因</div>
				<div class="charts" id="chartsyy" style="width: 90%;height:90%;">
					<div style="displayflex;width:calc(9.3vw);height:calc(7.8vw) ;margin: 0 auto;margin-top:8vh ;align-items: center;justify-content: center;">
						<img src="../../../static/img/nodeta.png" alt="" style="max-width: 100%;max-height: 100%;">
					</div>

					<div style="color: #18c5ff;margin: 0 auto;margin-top: 30px;text-align: center;">暂无数据</div>
				</div>


			</div>
		</div>

	</div>
</template>

<script>
	import {
		getdt,
		trend_chart,
		overall,
		classify,
		source,
		getmap
	} from '@/api/management'
	import {
		center,
		getdatelist,
		debounce,
		center2,
		city,getnowdate
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
				trend_chart: [], //隐患趋势数据
				overall: {}, //校园整改情况
				classify: {
					res: [], //获取的数据
					data: [] //图表series
				}, //隐患分布
				source: {
					res: [], //获取的数据
					data: [] //图表series
				}, //上报来源
				getmap: {},
				chart: null,
				chartly: null,
				chartdt: null,
				chartfb: null,
				chartaq: null,
			}
		},
		created() {
			// this.fetchData()
		},
		mounted() {
			
			var that = this;
			this.sp_sel = getdatelist();
			this.date=this.sp_sel[0].str;
			// this.date=
			trend_chart().then(response => {
				console.log(response)
				var a = [],
					b = [];
				for (var i in response.data) {
					a.push(response.data[i].month);
					b.push(parseFloat(response.data[i].number))
				}

				that.trend_chart[0] = a;
				that.trend_chart[1] = b;

				that.initChartsaq();
			})
			overall().then(response => {
				response.data.rate = parseFloat(response.data.rate.replace("%", ""))
				that.overall = response.data;
				that.initChartszg();
			})
			classify().then(response => {
				var series = [];
				that.classify.res = response.data;
				for (var i in response.data) {
					var item = {
						value: parseFloat(response.data[i].number),
						name: response.data[i].name,
					};
					series.push(item);
				}
				that.classify.data = series;
				that.initChartsfb();
			})
			source().then(response => {
				var series = [];
				that.source.res = response.data;
				for (var i in response.data) {
					var item = {
						value: parseFloat(response.data[i].number),
						name: response.data[i].name,
					};
					series.push(item);

				}
				that.source.data = series;
				that.initChartsly();
			})
			getmap(that.sp_sel[0].time).then(response => {
					var jia=response.data;
					
				if(jia.records.length==1){
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
				var total = 0;
				var serious = 0;
				var color = [];
				for (var i in jia.records) {
					total += parseInt(jia.records[i].total);
					serious += parseInt(jia.records[i].serious);

				}
				var array = city(jia.records);
				that.getmap = {
					total: total,
					serious: serious,
					array:array
				};
				color.push(Math.round(total / 4));
				color.push(Math.round(total / 2));
				color.push(Math.round(total / 4*3));
				color.push(total);
				
				var data = [{
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
				for (var i in array) {
					var item = {
						name: array[i].area,
						value: array[i].total
					}
					data.push(item);
				}
				// that.getmap = response.data;
				getdt(jia.provinceCode,selcity).then(response => {
					that.initChartsdt(response, jia.area, data, color);
				})
			})
			this.initChartsly();
			var height = document.getElementById("app-main").offsetHeight;

			
			this.__resizeHandler = debounce(() => {
				if (this.chart) {
					this.chart.resize()
				}
				if (this.chartfb) {
					this.chartfb.resize()
				}
				if (this.chartdt) {
					this.chartdt.resize()
				}
				if (this.chartly) {
					this.chartly.resize()
				}
				if (this.chartaq) {
					this.chartaq.resize()
				}

			}, 100)
			window.addEventListener('resize', this.__resizeHandler)
		},

		methods: {
			dthastime(e) {
				var that = this;
				
				getmap(e).then(response => {
					
				
// 					var jia = {
// 						area: "440000",
// 						records: [{
// 								total: "10",
// 								serious: "20",
// 								areaCode: "440103"
// 							},
// 							{
// 								total: "20",
// 								serious: "50",
// 								areaCode: "440104"
// 							},
// 							{
// 								total: "53",
// 								serious: "75",
// 								areaCode: "440106"
// 							},
// 						]
// 					};
var jia=response.data;
if(jia.records.length==1){
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
					var total = 0;
					var serious = 0;
					var color = [];
					for (var i in jia.records) {
						total += parseInt(jia.records[i].total);
						serious += parseInt(jia.records[i].serious);

					}
					var array = city(jia.records);

					that.getmap = {
						total: total,
						serious: serious,
						array: array,
					};
					
						color.push(Math.round(total / 4));
					color.push(Math.round(total / 2));
					color.push(Math.round(total / 4*3));
					color.push(total);

					var data = [{
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
					for (var i in array) {
						var item = {
							name: array[i].area,
							value: array[i].total
						}
						data.push(item);
					}
					// that.getmap = response.data;
					getdt(jia.provinceCode, selcity).then(response => {
						that.initChartsdt(response, jia.area, data, color);
					})
				})
			},
			initChartszg() {
				this.chart = this.$echarts.init(document.getElementById("chartszg"));
				this.setOptionszg();
			},
			initChartsfb() {
				this.chartfb = this.$echarts.init(document.getElementById("chartsfb"));
				this.setOptionsfb();
			},
			initChartsdt(response, name, data, color) {
				this.chartdt = this.$echarts.init(document.getElementById("chartsdt"));
				var that = this;
				this.setOptionsdt(response, name, data, color);
				setTimeout(function() {

				}, 300)
			},
			initChartsly() {
				this.chartly = this.$echarts.init(document.getElementById("chartsly"));
				this.setOptionsly();
			},
			initChartsaq() {
				this.chartaq = this.$echarts.init(document.getElementById("chartsaq"));
				this.setOptionsaq();
			},
			setOptionszg() {
				this.chart.setOption({
					tooltip:{
						formatter:"{b} <br> 占比：{d}%",
					},
					series: [{
						name: '整体情况',
						type: 'pie',
						clockWise: false,
						radius: ['34%', '50%'],
						center: ['50%', '40%'],
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
							value: 100 - this.overall.rate,
							name: '处理中',
							itemStyle: {
								color: "#ffdd40"
							}
						}, {
							value: this.overall.rate,
							name: '已处理',
							itemStyle: {
								color: "rgba(0,0,0,0)"
							}
						}]

					}, {
						name: '整体情况2',
						type: 'pie',
						clockwise: true,
						startAngle: "90",
						radius: ['46%', '60%'],
						center: ['50%', '40%'],
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
							name: '已处理',
							label: {
								normal: {
									show: true,
									position: 'center',
									textStyle: {
										fontSize: '14',
										color: '#55f1f6',
										// fontWeight: 'bold'
									},
									formatter: '{d}%  \n 整改率',

								},
							},
							itemStyle: {
								normal: {
									color: "#2adeff",

								}
							},

						}, {
							name: '处理中',
							value: 100 - this.overall.rate,
							itemStyle: {
								normal: {
									color: "rgba(0,0,0,0)",

								}
							}
						}]
					}],
				})
			},
			setOptionsfb() {
				this.chartfb.setOption({


					tooltip:{
						formatter:"{b} <br> 占比：{d}%",
					},
					series: [{
						name: '隐患分布',
						type: 'pie',
						clockwise: true,
						startAngle: "90",
						center: ['50%', '40%'],
						radius: ['0', '43%'],
						itemStyle: {
							normal: {
								label: {
									show: true,
									formatter:"{d}%",
									position:"inside",
									// color:"#000",
									fontSize:"12",
								},
								labelLine: {
									show: true,
									
								}
							}
						},
						hoverAnimation: true,
						color: ["#ed5151", "#baf05b", "#ffdd40", "#85d7fe", "#37ddcd", "#ef922e"],
						data: this.classify.data,
					}],
				})
			},
			setOptionsdt(dtdata, name, data, color) {

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
										'<br>隐患总数:' + that.getmap.array[i].total +
										"<br>严重隐患:" + that.getmap.array[i].serious;

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
							label: '0-' + color[0],
							color: '#fffbcd'
						}, {
							min: color[0]+1,
							max: color[1],
							label: (color[0]+1) + "-" + color[1],
							color: '#ffdd8b'
						}, {
							min: color[1]+1,
							max: color[2],
							label: (color[1]+1) + "-" + color[2],
							color: '#ffba50'
						}, {
							min: color[2]+1,
							max: color[3],
							label: (color[2]+1) + "-" + color[3],
							color: '#ff7639'
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
						zoom: 1.2,
						scaleLimit: {
							min: 0.1,
							max: 3
						},
						hoverAnimation: true,
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
									color: "#fff"
								},

							} //鼠标指向目标时地图文字标注是否显示
						},
						data: data
						// 自定义名称映射

					}]
				})




			},
			setOptionsly() {
				this.chartly.setOption({
					tooltip:{
						formatter:"{b} <br> 占比：{d}%",
					},
					series: [{
						name: '上报来源',
						type: 'pie',
						roseType: "radius",
						clockwise: true,
						startAngle: "90",
						radius: ['0', '55%'],
						center: ['50%', '40%'],
						itemStyle: {
							normal: {
								label: {
									show: true,
									formatter:"{d}%",
									position:"inside",
									// color:"#000",
									fontSize:"12",
					
								},
								labelLine: {
									show: true
								}
							}
						},
						hoverAnimation: true,
						color: ["#3f82fd", "#ff8124","#19c79c","# fa2e2e","#f3c420","#a751ff"],
						data: this.source.data,
					}],
				})
			},
			setOptionsaq() {
				this.chartaq.setOption({

					// backgroundColor: "#05224d",
					tooltip: {},
					grid: {
						top: '15%',
						left: '10px',
						right: '10px',
						bottom: '0%',
						containLabel: true,
					},
					legend: {
						show: false,
						itemGap: 50,
						selectedMode:false,
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
						splitLine: { //网格线
							show: true,
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
						data: this.trend_chart[0],
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
							show: false,
						},
					}],
					tooltip: {
						formatter: "{a}：<br/>{b}: {c}次"
					},
					series: [{
						name: '隐患趋势',
						type: 'line',
						// smooth: true, //是否平滑曲线显示
						symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
						showAllSymbol: true,
						// symbol: 'emptyCircle',
						symbolSize: 6,
						lineStyle: {
							normal: {
								color: "rgba(0,0,0,0)", // 线条颜色
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

							color: "#ff7639",


						},

						areaStyle: { //区域填充样式
							normal: {
								//线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
								color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
										offset: 0,
										color: 'rgba(255,118,57,1)'
									},
									{
										offset: 1,
										color: 'rgba(255,221,139, 0.6)'
									}
								], false),
								shadowColor: 'rgba(255,221,139, 0.4)', //阴影颜色
								shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
							}
						},
						data: this.trend_chart[1]
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

	.lt {
		width: calc(48.4vw);
	}

	.ri {
		width: calc(35.2vw);
	}

	.kr {
		width: calc(16.4vw);
		height: 40.5vh;
		margin-left: calc(1vw);

	}
	.k-title{
		top: 1.8vh;
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

	.jg {
		margin-bottom: 10px;
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
		height: 24.5vh;
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

	.half .text {
		justify-content: center;
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
	.all-box img{
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
		color:#18c6ff;
		margin-top: 20px;
		margin-bottom: 10px;
	}
	.fs {
		font-size: 40px;
	}

	.sel-box {
		width: calc(8.5vw);
		min-width: 110px;
		height: 30px;
		min-height: 40px;
		position: absolute;
		left: calc(1.1vw);
		top: calc(1.1vw);
	}
	/* 防止visualMap被点击 */
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
		width: calc(20.1vw);
		height: 43.5vh;
		margin-left: calc(1vw);
	
	}
}
	@media screen and (max-width:1366px) {
		.app-container {
			font-size: 12px;
		}

		.fs {
			font-size: 18px;
		}

		.lt {
			width: calc(40.4vw);
		}

		.ri {
			width: calc(43.2vw);
		}

		.kr {
			width: calc(20.1vw);
			height: 40vh;
			margin-left: calc(1vw);

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
			height: 40vh;
			margin-left: 10px;

		}
		.all-box{
			top: 60px;
		}
	}
	@media screen and (min-height:1050px) {
		.jg {
			margin-bottom: 25px;
		}

	}
</style>
<style>
	.el-input__inner {
		box-shadow: 0px 0px 3px #fff;
		background-color: #052547;
		border: solid 1px #18c6ff;
		color: #fff;
		height: 29px;
		line-height: 29px;
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
