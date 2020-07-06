<template>
	<div class="app-container flex" id="app-main">
		<div style="width:calc(29.5vw);margin-right: 1.3vw;" class="">
			<div class="flex quan-box" style="width: 100%;">
				<div class="quan">
					<div class="charts" id="chartsq1" style="width: 90%;height:90%;">

					</div>
				</div>
				<div class="quan">
					<div class="charts" id="chartsq2" style="width: 90%;height:90%;">

					</div>
				</div>
				<div class="quan">
					<div class="charts" id="chartsq3" style="width: 90%;height:90%;">

					</div>
				</div>
				<div class="quan">
					<div class="charts" id="chartsq4" style="width: 90%;height:90%;">

					</div>
				</div>
			</div>
			<div class="search-box">
				<div class="search-div">
					<div style="font-size:20px;color: #fff;">设备警报中心</div>
					<div style="margin-top: 1.1vw;" class="flex al-c">
						<div class="block" style="width: 9.4vw;">
							<el-date-picker v-model="value5" type="date" placeholder="">
							</el-date-picker>
						</div>
						<div style="color: #fff;line-height:40px;margin-left:0.5VW;margin-right: 0.5VW;">至</div>
						<div class="block" style="width: 9.4vw;">
							<el-date-picker v-model="value6" type="date" placeholder="">
							</el-date-picker>
						</div>
						<div style="margin-left: 1vw;padding: 2px;"><button class="search">搜索</button></div>
					</div>
					<div style="color: #fff;margin-top: 10px;">当前警报设备：<span style="color: red;">3个</span></div>
				</div>
				<div class="cont-div">
					<div class="con">
						<div class="con-item">
							<div>单位名称：佛山市中心小学</div>
							<div>设备名称：教学楼走廊1</div>
							<div>报警类型：<span>漏电警报</span></div>
							<div>单位名称：2018-12-12 15:00:00</div>
						</div>
						<div class="con-item">
							<div>单位名称：佛山市中心小学</div>
							<div>设备名称：教学楼走廊1</div>
							<div>报警类型：<span>漏电警报</span></div>
							<div>单位名称：2018-12-12 15:00:00</div>
						</div>
						<div class="con-item">
							<div>单位名称：佛山市中心小学</div>
							<div>设备名称：教学楼走廊1</div>
							<div>报警类型：<span>漏电警报</span></div>
							<div>单位名称：2018-12-12 15:00:00</div>
						</div>
						<div class="con-item">
							<div>单位名称：佛山市中心小学</div>
							<div>设备名称：教学楼走廊1</div>
							<div>报警类型：<span>漏电警报</span></div>
							<div>单位名称：2018-12-12 15:00:00</div>
						</div>
					</div>
				</div>
			</div>
			<div class="k" style="width: 100%;height: 200px;margin-top: 18px;">
				<img src="../../../static/img/k9.png" alt="">
				<div class="k-title2">年报警记录</div>
				<div class="charts" id="chartsjl" style="width: 90%;height:90%;">

				</div>

			</div>
		</div>
		<div style="width:calc(35.4vw);" class="">
			<div class="dt" style="width:100%;height:830px;margin-right:1.5vw ;">
				<div class="charts" id="chartsdt" style="width: 100%;height:100%;">

				</div>
			</div>
			<!-- 	<div style="width: 100%;margin-bottom: 10px;" class="">
				
				
				
			</div> -->

		</div>
		<div style="width: calc(15.625vw);margin-left: 1.3vw;" class="flex fl-wa">

			<div class="k" style="width: 100%;height: 270px;margin-bottom: 10px;">
				<img src="../../../static/img/k8.png" alt="">
				<div class="k-title2">设备增长趋势图</div>
				<div class="charts" id="chartsxg" style="width: 90%;height:90%;">

				</div>

			</div>
			<div class="k" style="width:100%;height: 270px;margin-bottom: 10px;">
				<img src="../../../static/img/k.png" alt="">
				<div class="k-title">设备运行状态分布</div>
				<div class="charts" id="chartsqk" style="width: 90%;height:90%;">

				</div>


			</div>
			<div class="k" style="width:100%;height: 270px;">
				<img src="../../../static/img/k.png" alt="">
				<div class="k-title">主要报警类型分布</div>
				<div class="charts" id="chartslx" style="width: 90%;height:90%;">
					<div style="width: 100%;height: 100%;" v-show="false">
						<div style="displayflex;width:calc(9.3vw);height:calc(7.8vw) ;margin: 0 auto;margin-top: 80px;align-items: center;justify-content: center;">
							<img src="../../../static/img/nodeta.png" alt="" style="max-width: 100%;max-height: 100%;">
						</div>

						<div style="color: #18c5ff;margin: 0 auto;margin-top: 30px;text-align: center;">暂无数据</div>
					</div>

				</div>


			</div>
		</div>

	</div>
</template>

<script>
	import {
		getdt
	} from '@/api/situation'
	import {
		center,
		getdatelist,debounce
	} from '@/utils/index'
	export default {
		data() {
			return {
				list: null,
				pm: ["", "", "", "", "", "", "", "", "", ""],
				listLoading: true,
				screenWidth: document.body.clientWidth,

				sp_sel: [],
				value: '',
				val: 50,

				value6: '',
				value5: '',
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
			var height = document.getElementById("app-main").offsetHeight;
			this.sp_sel = getdatelist();
			this.initChartsq1();
			this.initChartsq2();
			this.initChartsq3();
			this.initChartsq4();
			this.initChartsjl();
			this.initChartsxg();
			this.initChartslx();
			this.initChartsqk();
			this.initChartsdt();
			 
			 this.__resizeHandler = debounce(() => {
			   if (this.chartq1) {
			     this.chartq1.resize()
			   }
			   if (this.chartq2) {
			     this.chartq2.resize()
			   }
			   if (this.chartq3) {
			     this.chartq3.resize()
			   }
			   if (this.chartq4) {
			     this.chartq4.resize()
			   }
			   if (this.chartjl) {
			     this.chartjl.resize()
			   }
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
			
			initChartsq1() {
				this.chartq1 = this.$echarts.init(document.getElementById("chartsq1"));
				this.setOptionsq1();
			},
			initChartsq2() {
				this.chartq2 = this.$echarts.init(document.getElementById("chartsq2"));
				this.setOptionsq2();
			},
			initChartsq3() {
				this.chartq3 = this.$echarts.init(document.getElementById("chartsq3"));
				this.setOptionsq3();
			},
			initChartsq4() {
				this.chartq4 = this.$echarts.init(document.getElementById("chartsq4"));
				this.setOptionsq4();
			},
			initChartsjl() {
				this.chartjl = this.$echarts.init(document.getElementById("chartsjl"));
				this.setOptionsjl();
			},
			initChartsxg() {
				this.chartxg = this.$echarts.init(document.getElementById("chartsxg"));
				this.setOptionsxg();
			},
			initChartsdt() {
				this.chartdt = this.$echarts.init(document.getElementById("chartsdt"));
				this.setOptionsdt();
			},
			initChartslx() {
				this.chartlx = this.$echarts.init(document.getElementById("chartslx"));
				this.setOptionslx();
			},
			initChartsqk() {
				this.chartqk = this.$echarts.init(document.getElementById("chartsqk"));
				this.setOptionsqk();
			},
			setOptionsq1() {
				this.chartq1.setOption({

					series: [{
						name: 'Line 0',
						type: 'pie',
						clockWise: false,
						radius: ['75%', '90%'],
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
								color: "#177ade"
							}
						}]

					}, {
						name: 'Line 1',
						type: 'pie',
						clockwise: false,
						startAngle: "90",
						radius: ['75%', '90%'],
						itemStyle: {},
						hoverAnimation: false,

						data: [{
							value: 80,
							name: '01',
							label: {
								normal: {
									show: true,
									position: 'center',
									textStyle: {
										fontSize: '26',
										color: '#55f1f6',
										// fontWeight: 'bold'
									},
									formatter: '{d}%',

								},
							},
							itemStyle: {
								normal: {
									color: { // 完成的圆环的颜色
										colorStops: [{
											offset: 0,
											color: '#41f0b4' // 0% 处的颜色
										}, {
											offset: 1,
											color: '#18bc9b' // 100% 处的颜色
										}]
									},

								}
							},

						}, {
							name: '02',
							value: 20,
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
				window.onresize=function(){
					 this.chartq1.resize();
				}
			},
			setOptionsq2() {
				this.chartq2.setOption({

					series: [{
						name: 'Line 0',
						type: 'pie',
						clockWise: false,
						radius: ['75%', '90%'],
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
								color: "#177ade"
							}
						}]

					}, {
						name: 'Line 1',
						type: 'pie',
						clockwise: false,
						startAngle: "90",
						radius: ['75%', '90%'],
						itemStyle: {},
						hoverAnimation: false,

						data: [{
							value: 80,
							name: '01',
							label: {
								normal: {
									show: true,
									position: 'center',
									textStyle: {
										fontSize: '26',
										color: '#55f1f6',
										// fontWeight: 'bold'
									},
									formatter: '{d}%',

								},
							},
							itemStyle: {
								normal: {
									color: { // 完成的圆环的颜色
										colorStops: [{
											offset: 0,
											color: '#fa6f38' // 0% 处的颜色
										}, {
											offset: 1,
											color: '#f93636' // 100% 处的颜色
										}]
									},

								}
							},

						}, {
							name: '02',
							value: 20,
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
				window.onresize=function(){
					this.chartq2.resize();
				}
			},
			setOptionsq3() {
				this.chartq3.setOption({

					series: [{
						name: 'Line 0',
						type: 'pie',
						clockWise: false,
						radius: ['75%', '90%'],
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
								color: "#177ade"
							}
						}]

					}, {
						name: 'Line 1',
						type: 'pie',
						clockwise: false,
						startAngle: "90",
						radius: ['75%', '90%'],
						itemStyle: {},
						hoverAnimation: false,

						data: [{
							value: 80,
							name: '01',
							label: {
								normal: {
									show: true,
									position: 'center',
									textStyle: {
										fontSize: '26',
										color: '#55f1f6',
										// fontWeight: 'bold'
									},
									formatter: '{d}%',

								},
							},
							itemStyle: {
								normal: {
									color: { // 完成的圆环的颜色
										colorStops: [{
											offset: 0,
											color: '#17ccce' // 0% 处的颜色
										}, {
											offset: 1,
											color: '#47daff' // 100% 处的颜色
										}]
									},

								}
							},

						}, {
							name: '02',
							value: 20,
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
				window.onresize=function(){
					this.chartq3.resize();
				}
			},
			setOptionsq4() {
				this.chartq4.setOption({

					series: [{
						name: 'Line 0',
						type: 'pie',
						clockWise: false,
						radius: ['75%', '90%'],
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
								color: "#177ade"
							}
						}]

					}, {
						name: 'Line 1',
						type: 'pie',
						clockwise: false,
						startAngle: "90",
						radius: ['75%', '90%'],
						itemStyle: {},
						hoverAnimation: false,

						data: [{
							value: 80,
							name: '01',
							label: {
								normal: {
									show: true,
									position: 'center',
									textStyle: {
										fontSize: '26',
										color: '#55f1f6',
										// fontWeight: 'bold'
									},
									formatter: '{d}%',

								},
							},
							itemStyle: {
								normal: {
									color: { // 完成的圆环的颜色
										colorStops: [{
											offset: 0,
											color: '#fee95e' // 0% 处的颜色
										}, {
											offset: 1,
											color: '#ffc939' // 100% 处的颜色
										}]
									},

								}
							},

						}, {
							name: '02',
							value: 20,
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
			setOptionsjl() {
				this.chartjl.setOption({
					tooltip: {
						trigger: 'axis',
						axisPointer: { // 坐标轴指示器，坐标轴触发有效
							type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					legend: {
						data: ['云上贵州', '政法平台', '互联网舆情', '部门交换', '网格化管理'],
						show: false
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: {
						type: 'value',
						splitLine: {
							show: true,
							lineStyle: {
								color: "#0f4178"
							}
						},
						axisLabel: {
							show: true,
							textStyle: {
								color: '#fff'
							}
						},
						axisLine: {
							show: false
						},
					},
					yAxis: {
						type: 'category',
						data: ['维护次数', '报警点位', '报警次数', '接入设备'],
						axisLine: {
							show: false
						},
						axisLabel: {

							textStyle: {
								color: '#fff'
							}
						}
					},
					series: [{
						name: '网格化管理',
						type: 'bar',
						barWidth: '50%',
						stack: '总量',
						label: {
							normal: {
								show: true,
								position: 'right'
							}
						},
						itemStyle: {
							color: "#18d2de"
						},
						data: [820, 832, 901, 934]
					}]
				})
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
						show: false,
						right: 0,
						top: 20,
						orient: "horizontal",
						icon: "rect", //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none

						itemWidth: 12, // 设置宽度

						itemHeight: 12, // 设置高度

						data: [{
							name: '检查校次',
							// 强制设置图形为圆。
							icon: 'rect',

							// 设置文本为红色
						}, {
							name: '隐患个数',
							// 强制设置图形为圆。
							icon: 'rect',
							// 设置文本为红色
						}, {
							name: '问题个数',
							// 强制设置图形为圆。
							icon: 'rect',
							// 设置文本为红色
						}],
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
							show: false,
							textStyle: {
								color: '#d1e6eb',
								margin: 15,
							},
						},
						axisTick: {
							show: false,
						},
						data: ['1月', '2月', '3月', '4月', '5月', '6月', "7月"],
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
					series: [{
						name: '隐患个数',
						type: 'line',
						// smooth: true, //是否平滑曲线显示
						symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
						showAllSymbol: true,
						// symbol: 'emptyCircle',
						symbolSize: 6,
						lineStyle: {
							normal: {
								color: "#3290f0", // 线条颜色
							},
						},
						label: {
							show: false,
							position: 'top',
							textStyle: {
								color: '#fff',
							}
						},
						itemStyle: {

							color: "#3290f0",


						},
						tooltip: {
							show: true
						},

						data: [600, 200, 400, 600, 900, 100, 400]
					}, {
						name: '问题个数',
						type: 'line',
						// smooth: true, //是否平滑曲线显示
						symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
						showAllSymbol: true,
						// symbol: 'emptyCircle',
						symbolSize: 6,
						lineStyle: {
							normal: {
								color: "#ffa800", // 线条颜色
							},
						},
						label: {
							show: false,
							position: 'top',
							textStyle: {
								color: '#fff',
							}
						},
						itemStyle: {

							color: "#ffa800",


						},
						tooltip: {
							show: true
						},

						data: [100, 200, 100, 200, 100, 200, 400]
					}],


				})
			},
			setOptionsdt() {

				var that = this;
				this.$axios.get('../../static/json/100000_full.json').then((res) => {
					console.log(res.data)
					var geoCoordMap = {
						"海门": [121.15, 31.89],
						"鄂尔多斯": [109.781327, 39.608266],
						"招远": [120.38, 37.35],
						"舟山": [122.207216, 29.985295],
						"齐齐哈尔": [123.97, 47.33],
						"盐城": [120.13, 33.38],
						"赤峰": [118.87, 42.28],
						"青岛": [120.33, 36.07],
						"乳山": [121.52, 36.89],
						"金昌": [102.188043, 38.520089],
						"泉州": [118.58, 24.93],
						"莱西": [120.53, 36.86],
						"日照": [119.46, 35.42],
						"胶南": [119.97, 35.88],
						"南通": [121.05, 32.08],
						"拉萨": [91.11, 29.97],
						"云浮": [112.02, 22.93],
						"梅州": [116.1, 24.55],
						"文登": [122.05, 37.2],
						"上海": [121.48, 31.22],
						"攀枝花": [101.718637, 26.582347],
						"威海": [122.1, 37.5],
						"承德": [117.93, 40.97],
						"厦门": [118.1, 24.46],
						"汕尾": [115.375279, 22.786211],
						"潮州": [116.63, 23.68],
						"丹东": [124.37, 40.13],
						"太仓": [121.1, 31.45],
						"曲靖": [103.79, 25.51],
						"烟台": [121.39, 37.52],
						"福州": [119.3, 26.08],
						"瓦房店": [121.979603, 39.627114],
						"即墨": [120.45, 36.38],
						"抚顺": [123.97, 41.97],
						"玉溪": [102.52, 24.35],
						"张家口": [114.87, 40.82],
						"阳泉": [113.57, 37.85],
						"莱州": [119.942327, 37.177017],
						"湖州": [120.1, 30.86],
						"汕头": [116.69, 23.39],
						"昆山": [120.95, 31.39],
						"宁波": [121.56, 29.86],
						"湛江": [110.359377, 21.270708],
						"揭阳": [116.35, 23.55],
						"荣成": [122.41, 37.16],
						"连云港": [119.16, 34.59],
						"葫芦岛": [120.836932, 40.711052],
						"常熟": [120.74, 31.64],
						"东莞": [113.75, 23.04],
						"河源": [114.68, 23.73],
						"淮安": [119.15, 33.5],
						"泰州": [119.9, 32.49],
						"南宁": [108.33, 22.84],
						"营口": [122.18, 40.65],
						"惠州": [114.4, 23.09],
						"江阴": [120.26, 31.91],
						"蓬莱": [120.75, 37.8],
						"韶关": [113.62, 24.84],
						"嘉峪关": [98.289152, 39.77313],
						"广州": [113.23, 23.16],
						"延安": [109.47, 36.6],
						"太原": [112.53, 37.87],
						"清远": [113.01, 23.7],
						"中山": [113.38, 22.52],
						"昆明": [102.73, 25.04],
						"寿光": [118.73, 36.86],
						"盘锦": [122.070714, 41.119997],
						"长治": [113.08, 36.18],
						"深圳": [114.07, 22.62],
						"珠海": [113.52, 22.3],
						"宿迁": [118.3, 33.96],
						"咸阳": [108.72, 34.36],
						"铜川": [109.11, 35.09],
						"平度": [119.97, 36.77],
						"佛山": [113.11, 23.05],
						"海口": [110.35, 20.02],
						"江门": [113.06, 22.61],
						"章丘": [117.53, 36.72],
						"肇庆": [112.44, 23.05],
						"大连": [121.62, 38.92],
						"临汾": [111.5, 36.08],
						"吴江": [120.63, 31.16],
						"石嘴山": [106.39, 39.04],
						"沈阳": [123.38, 41.8],
						"苏州": [120.62, 31.32],
						"茂名": [110.88, 21.68],
						"嘉兴": [120.76, 30.77],
						"长春": [125.35, 43.88],
						"胶州": [120.03336, 36.264622],
						"银川": [106.27, 38.47],
						"张家港": [120.555821, 31.875428],
						"三门峡": [111.19, 34.76],
						"锦州": [121.15, 41.13],
						"南昌": [115.89, 28.68],
						"柳州": [109.4, 24.33],
						"三亚": [109.511909, 18.252847],
						"自贡": [104.778442, 29.33903],
						"吉林": [126.57, 43.87],
						"阳江": [111.95, 21.85],
						"泸州": [105.39, 28.91],
						"西宁": [101.74, 36.56],
						"宜宾": [104.56, 29.77],
						"呼和浩特": [111.65, 40.82],
						"成都": [104.06, 30.67],
						"大同": [113.3, 40.12],
						"镇江": [119.44, 32.2],
						"桂林": [110.28, 25.29],
						"张家界": [110.479191, 29.117096],
						"宜兴": [119.82, 31.36],
						"北海": [109.12, 21.49],
						"西安": [108.95, 34.27],
						"金坛": [119.56, 31.74],
						"东营": [118.49, 37.46],
						"牡丹江": [129.58, 44.6],
						"遵义": [106.9, 27.7],
						"绍兴": [120.58, 30.01],
						"扬州": [119.42, 32.39],
						"常州": [119.95, 31.79],
						"潍坊": [119.1, 36.62],
						"重庆": [106.54, 29.59],
						"台州": [121.420757, 28.656386],
						"南京": [118.78, 32.04],
						"滨州": [118.03, 37.36],
						"贵阳": [106.71, 26.57],
						"无锡": [120.29, 31.59],
						"本溪": [123.73, 41.3],
						"克拉玛依": [84.77, 45.59],
						"渭南": [109.5, 34.52],
						"马鞍山": [118.48, 31.56],
						"宝鸡": [107.15, 34.38],
						"焦作": [113.21, 35.24],
						"句容": [119.16, 31.95],
						"北京": [116.46, 39.92],
						"徐州": [117.2, 34.26],
						"衡水": [115.72, 37.72],
						"包头": [110, 40.58],
						"绵阳": [104.73, 31.48],
						"乌鲁木齐": [87.68, 43.77],
						"枣庄": [117.57, 34.86],
						"杭州": [120.19, 30.26],
						"淄博": [118.05, 36.78],
						"鞍山": [122.85, 41.12],
						"溧阳": [119.48, 31.43],
						"库尔勒": [86.06, 41.68],
						"安阳": [114.35, 36.1],
						"开封": [114.35, 34.79],
						"济南": [117, 36.65],
						"德阳": [104.37, 31.13],
						"温州": [120.65, 28.01],
						"九江": [115.97, 29.71],
						"邯郸": [114.47, 36.6],
						"临安": [119.72, 30.23],
						"兰州": [103.73, 36.03],
						"沧州": [116.83, 38.33],
						"临沂": [118.35, 35.05],
						"南充": [106.110698, 30.837793],
						"天津": [117.2, 39.13],
						"富阳": [119.95, 30.07],
						"泰安": [117.13, 36.18],
						"诸暨": [120.23, 29.71],
						"郑州": [113.65, 34.76],
						"哈尔滨": [126.63, 45.75],
						"聊城": [115.97, 36.45],
						"芜湖": [118.38, 31.33],
						"唐山": [118.02, 39.63],
						"平顶山": [113.29, 33.75],
						"邢台": [114.48, 37.05],
						"德州": [116.29, 37.45],
						"济宁": [116.59, 35.38],
						"荆州": [112.239741, 30.335165],
						"宜昌": [111.3, 30.7],
						"义乌": [120.06, 29.32],
						"丽水": [119.92, 28.45],
						"洛阳": [112.44, 34.7],
						"秦皇岛": [119.57, 39.95],
						"株洲": [113.16, 27.83],
						"石家庄": [114.48, 38.03],
						"莱芜": [117.67, 36.19],
						"常德": [111.69, 29.05],
						"保定": [115.48, 38.85],
						"湘潭": [112.91, 27.87],
						"金华": [119.64, 29.12],
						"岳阳": [113.09, 29.37],
						"长沙": [113, 28.21],
						"衢州": [118.88, 28.97],
						"廊坊": [116.7, 39.53],
						"菏泽": [115.480656, 35.23375],
						"合肥": [117.27, 31.86],
						"武汉": [114.31, 30.52],
						"大庆": [125.03, 46.58]
					};

					var convertData = function(data) {
						var res = [];
						for (var i = 0; i < data.length; i++) {
							var geoCoord = geoCoordMap[data[i].name];
							if (geoCoord) {
								res.push({
									name: data[i].name,
									value: geoCoord.concat(data[i].value)
								});
							}
						}
						return res;
					};
					that.$echarts.registerMap('zg', res.data);

					that.chartdt.setOption({

						// backgroundColor: '#404a59',
						
						tooltip: {
							trigger: 'item',
							formatter: function(params) {
								return params.name + ' : ' + params.value[2];
							}
						},
						legend: {
							top:'20',
							right:'20',
// 							y: '20',
// 							x: 'right',
							data: ['报警','正常','故障'],
							textStyle: {
								color: '#fff'
							}
						},
						
						geo: {
							map: 'zg',
							roam:true,
							label: {
								emphasis: {
									show: false
								}
							},
							itemStyle: {
								normal: {
									areaColor: 'rgba(0,0,0,0)',
									borderColor: '#15a9e2'
								},
								emphasis: {
									areaColor: '#15a9e2'
								}
							}
						},
						series: [{
							name: '报警',
							type: 'effectScatter',
							coordinateSystem: 'geo',
							data: convertData([{name:"广州",value:200}]),
							symbolSize: 10,
							label: {
								normal: {
									show: false
								},
								emphasis: {
									show: false
								}
							},
							showEffectOn: 'render',
							 rippleEffect: {
                brushType: 'stroke',
				scale:4,
				period:1
            },
			hoverAnimation: true,
							itemStyle: {
								normal:{
									color:"#18d2de"
								},
								emphasis: {
									borderColor: '#fff',
									borderWidth: 1
								}
							}
						},{
							name: '正常',
							type: 'effectScatter',
							coordinateSystem: 'geo',
							data: convertData([{name:"义乌",value:200}]),
							symbolSize: 10,
							label: {
								normal: {
									show: false
								},
								emphasis: {
									show: false
								}
							},
							showEffectOn: 'render',
							 rippleEffect: {
                brushType: 'stroke',
				scale:4,
				period:1
            },
			hoverAnimation: true,
							itemStyle: {
								normal:{
									color:"#ffde26"
								},
								emphasis: {
									borderColor: '#fff',
									borderWidth: 1
								}
							}
						},{
							name: '故障',
							type: 'effectScatter',
							coordinateSystem: 'geo',
							data: convertData([{name:"张家口",value:200}]),
							symbolSize: 10,
							label: {
								normal: {
									show: false
								},
								emphasis: {
									show: false
								}
							},
							showEffectOn: 'render',
							 rippleEffect: {
                brushType: 'stroke',
				scale:4,
				period:1
            },
			hoverAnimation: true,
							itemStyle: {
								normal:{
									color:"#ff4848"
								},
								emphasis: {
									borderColor: '#fff',
									borderWidth: 1
								}
							}
						}]

					})

				})


			},
			setOptionslx() {
				this.chartlx.setOption({
					legend: {
						left: "center",
						top: "bottom",
						itemWidth: 12, // 设置宽度

						itemHeight: 12, // 设置高度
						data: [{
							name: '电流',
							// 强制设置图形为圆。
							icon: 'rect',

							// 设置文本为红色
							textStyle: {
								color: '#fff'
							}
						}, {
							name: '漏电',
							// 强制设置图形为圆。
							icon: 'rect',

							// 设置文本为红色
							textStyle: {
								color: '#fff'
							}
						}]
					},


					series: [{
						name: 'Line 1',
						type: 'pie',
						center: ["50%", "50%"],

						clockwise: true,
						startAngle: "90",
						radius: ['35%', '55%'],
						itemStyle: {
							normal: {
								label: {
									show: true,
									textStyle: {
										fontSize: '12',
										color: '#fff',
										// fontWeight: 'bold'
									},
									formatter: '{d}%  \n {c}次',
								},
								labelLine: {
									show: true
								}
							}
						},
						hoverAnimation: true,

						data: [{
							value: 300,
							name: '电流',

							itemStyle: {
								normal: {
									color: "#3290f0",

								}
							},

						}, {
							value: 100,
							name: '漏电',

							itemStyle: {
								normal: {
									color: "#5bf1d0",

								}
							},

						}]
					}],
				})
			},
			setOptionsqk() {
				this.chartqk.setOption({
					legend: {
						left: "center",
						top: "bottom",
						itemWidth: 12, // 设置宽度

						itemHeight: 12, // 设置高度
						data: [{
							name: '在线',
							// 强制设置图形为圆。
							icon: 'rect',

							// 设置文本为红色
							textStyle: {
								color: '#fff'
							}
						}, {
							name: '离线',
							// 强制设置图形为圆。
							icon: 'rect',

							// 设置文本为红色
							textStyle: {
								color: '#fff'
							}
						}, {
							name: '故障',
							// 强制设置图形为圆。
							icon: 'rect',

							// 设置文本为红色
							textStyle: {
								color: '#fff'
							}
						}]
					},


					series: [{
						name: 'Line 0',
						type: 'pie',
						clockWise: true,
						center: ["50%", "50%"],
						radius: ['35%', '50%'],
						itemStyle: {
							normal: {
								label: {
									show: true,
									textStyle: {
										fontSize: '12',
										color: '#fff',
										// fontWeight: 'bold'
									},
									formatter: '{c}%  \n 合格率',
								},
								labelLine: {
									show: true
								}
							}
						},
						hoverAnimation: true,
						data: [{
							value: 120,
							name: '在线',
							label: {
								normal: {
									show: true,

									textStyle: {
										fontSize: '12',
										color: '#fff',
										// fontWeight: 'bold'
									},


								},
							},
							itemStyle: {
								normal: {
									color: "#17d2de",

								},


							}
						}, {
							value: 40,
							name: '离线',
							itemStyle: {
								normal: {
									color: "#2b59db",

								}

							}
						}, {
							value: 40,
							name: '故障',
							itemStyle: {
								normal: {
									color: "#fd9336",

								}

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

	.NO1 {}

	.NO2 {}

	.NO3 {}

	.NO4 {}

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


	.half {
		font-size: 14px;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}

	.quan-box {
		width: 100%;
		height: 8.3vw;

	}

	.quan {
		/* background-color: #0072D8; */
		width: 25%;
		height: 100%;
		position: relative;
	}

	.search-box {
		width: 99%;
		margin: 0 auto;
		height: 450px;
		background-image: linear-gradient(0deg,
			#08386b 0%,
			#002241 100%),
			linear-gradient(#000000,
			#000000);
		box-shadow: 0px 0px 5px #18C5FF;
		border: solid 2px #18c6ff;

	}

	.search-div {
		width: 100%;
		height: 146px;
		background-color: rgba(15, 65, 120, 0.8);
		padding: 1vw;
		border-bottom: 1px solid #18c6ff;
		box-sizing: border-box;
	}


	.search {
		color: #fff;
		width: 4.2vw;
		height: 38px;
		background-image: linear-gradient(90deg,
			#028ffe 0%,
			#18c6ff 100%),
			linear-gradient(#09244f,
			#09244f);
		background-blend-mode: normal,
			normal;
		border: solid 1px #18c6ff;
		box-shadow: 0px 0px 4px #0072D8;
	}

	.cont-div {
		width: 100%;
		height: calc(300px - 1vw);
		position: relative;
		box-sizing: border-box;

		color: #fff;
	}

	.con {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		padding: 0 1vw;
		overflow: auto;
		
	}

	.con-item {
		padding: 1vw 0;
		border-bottom: 1px solid #0f4178;
	}

	.con div {
		line-height: 24px;
	}

	::-webkit-scrollbar {
		width: 16px;
		height: 16px;
		background-color: #F5F5F5;
	}

	/*定义滚动条轨道 内阴影+圆角*/
	::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
		/* border-radius: 10px;  */
		background-image: linear-gradient(0deg,
			#08386b 0%,
			#002241 100%),
			linear-gradient(#000000,
			#000000);
	}

	/*定义滑块 内阴影+圆角*/
	::-webkit-scrollbar-thumb {
		border-radius: 10px;
		/* -webkit-box-shadow: inset 0 0 0px rgba(0,0,0,1);  */
		background-color: #18c6ff;
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
	}
</style>
<style>
	
	.el-input__inner {
		background-color: #09244f;
		border: 1px solid #1169c2;
		color: #FFF;
	}
	
	.el-input__inner input {
		background-color: #09244f;
		color: #fff !important;
	}
	
	.el-range-separator {
		color: #fff !important;
	}
	
	.el-date-editor.el-input,
	.el-date-editor.el-input__inner {
		width: 100%;
	}
	
	.el-picker-panel {
		background: #09244f;
		color: #fff;
		border: 1px solid #1169c2;
	}
	
	.el-date-picker__header-label {
		color: #fff;
	}
	
	.el-date-table th {
		color: #fff;
	}
	
	.el-popper[x-placement^=bottom] .popper__arrow::after {
		border-bottom-color: #09244f;
	}
</style>