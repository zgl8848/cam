<template>
	<div class="app-container flex" id="app-main">
		<div style="width: calc(48.4vw);" class="">
			<div class="dt mb-20" style="width:100%;height:540px;">
				<div class="charts" id="chartsdt" style="width: 100%;height:100%;">

				</div>
				<div class="sel-box">
					<el-select v-model="value" placeholder="请选择">
						<el-option v-for="item in sp_sel" :key="item" :label="item" :value="item">
						</el-option>
					</el-select>
				</div>
				<div class="all-box">
					<img src="../../../static/img/all.png" alt="">
					<div class="all-div">
						<div style="color:#18c6ff;margin-top: 20px;margin-bottom: 10px;">总数量</div>
						<div class="fs-40" style="color: #ffba50;">32</div>
					</div>
				</div>
			</div>
			<div class="k " style="width: 100%;height:270px;position: relative;">
				<img src="../../../static/img/k3.png" alt="">

				<div style="" class="zx">
					<div class="zx-title">
						<img src="../../../static/img/linetitle.png" alt="" style="margin: 0 auto;">
						<div class="zx-tit-text">食品留样执行趋势</div>
					</div>
					<div class="charts" id="chartsaq" style="width: 100%;height:90%;">

					</div>
				</div>


			</div>
			<!-- 	<div style="width: 100%;margin-bottom: 10px;" class="">
				
				
				
			</div> -->

		</div>
		<div style="width: calc(35.2vw);" class="flex fl-wa">
			<div class="k" style="width:calc(16.4vw);height: 408px;margin-left:calc(1vw);margin-bottom: 20px;">
				<img src="../../../static/img/k4.png" alt="">
				<div class="k-title">食品留样情况</div>
				<div class="charts" id="chartszg" style="width: 90%;height:90%;">

				</div>
				<div class="tl flex">
					
					<div class="half" style="width: 50%;">
						<div class="text flex al-c " style="margin-bottom: 10px;">
							<div style="width: 12px;height: 12px;background-color:#2adeff;margin-right: calc(0.4vw);"></div>留样学校：<span class="val">200</span>
						</div>
						<div class="text flex al-c ">
							<div style="width: 12px;height: 12px;background-color:#5cf0c1;margin-right: calc(0.4vw);"></div>合格：<span class="val">135</span>
						</div>
					</div>
					<div class="half" style="width: 50%;">
						<div class="text flex al-c " style="margin-bottom: 10px;">
							<div style="width: 12px;height: 12px;background-color:#ffdd40;margin-right: calc(0.4vw);"></div>为留洋：<span class="val">60</span>
						</div>
						<div class="text flex al-c ">
							<div style="width: 12px;height: 12px;background-color:#ffaa3c;margin-right: calc(0.4vw);"></div>不合格：<span class="val">5</span>
						</div>
					</div>

				</div>

			</div>
			<div class="k" style="width:calc(16.4vw);height: 408px;margin-left:calc(1vw);margin-bottom: 20px;">
				<img src="../../../static/img/k4.png" alt="">
				<div class="k-title">隐患分布</div>
				<div class="charts" id="chartsfb" style="width: 90%;height:90%;">

				</div>
				<div class="tl flex">
					<div class="half" style="width: 50%;">
						<div class="text flex al-c" style="margin-bottom: 10px;">
							<div style="width: 12px;height: 12px;background-color:#8552f7;margin-right: calc(0.4vw);"></div>矿物质：<span class="val">100</span>
						</div>
						<div class="text flex al-c" style="margin-bottom: 10px;">
							<div style="width: 12px;height: 12px;background-color:#18ffe7;margin-right: calc(0.4vw);"></div>维生素：<span class="val">100</span>
						</div>
						<div class="text flex al-c">
							<div style="width: 12px;height: 12px;background-color:#ffdd40;margin-right: calc(0.4vw);"></div>脂肪：<span class="val">100</span>
						</div>
					</div>
					<div class="half" style="width: 50%;">
						<div class="text flex al-c" style="margin-bottom: 10px;">
							<div style="width: 12px;height: 12px;background-color:#ffaa3c;margin-right: calc(0.4vw);"></div>蛋白质：<span class="val">100</span>
						</div>
						<div class="text flex al-c" style="margin-bottom: 10px;">
							<div style="width: 12px;height: 12px;background-color:#1885ff;margin-right: calc(0.4vw);"></div>碳水化合物：<span class="val">100</span>
						</div>
						<div class="text flex al-c">
							<div style="width: 12px;height: 12px;background-color:#18c6ff;margin-right: calc(0.4vw);"></div>水：<span class="val">100</span>
						</div>
					</div>

				</div>

			</div>
			<div class="k" style="width:calc(16.4vw);height: 408px;margin-left:calc(1vw);margin-bottom: 20px;">
				<img src="../../../static/img/k4.png" alt="">
				<div class="k-title">从业人员情况</div>
				<div class="charts" id="chartsly" style="width: 90%;height:90%;">

				</div>
				<div class="tl flex">
					<div class="half" style="width: 50%;">
						<div class="text flex al-c" style="margin-bottom: 10px;">
							<div style="width: 12px;height: 12px;background-color:#f66262;margin-right: calc(0.4vw);"></div>未登记人员：<span class="val">100</span>
						</div>
						<div class="text flex al-c">
							<div style="width: 12px;height: 12px;background-color:#1046d1;margin-right: calc(0.4vw);"></div>无健康证：<span class="val">100</span>
						</div>
					</div>
					<div class="half" style="width: 50%;">
						<div class="text flex al-c" style="margin-bottom: 10px;">
							<div style="width: 12px;height: 12px;background-color:#ffaa3c;margin-right: calc(0.4vw);"></div>健康证过期：<span class="val">100</span>
						</div>
						<div class="text flex al-c">
							<div style="width: 12px;height: 12px;background-color:#2affcf;margin-right: calc(0.4vw);"></div>健康证正常：<span class="val">100</span>
						</div>
					</div>

				</div>

			</div>
			<div class="k" style="width:calc(16.4vw);height: 408px;margin-left:calc(1vw);margin-bottom: 20px;">
				<img src="../../../static/img/k4.png" alt="">
				<div class="k-title">食堂基础条件</div>
				<div class="charts" id="chartsjc" style="width: 90%;height:90%;">
					<div v-show="false" style="displayflex;width:calc(9.3vw);height:calc(7.8vw) ;margin: 0 auto;margin-top: 80px;align-items: center;justify-content: center;">
						<img src="../../../static/img/nodeta.png" alt="" style="max-width: 100%;max-height: 100%;">
					</div>

					<div v-show="false" style="color: #18c5ff;margin: 0 auto;margin-top: 30px;text-align: center;">暂无数据</div>
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
		getdatelist
	} from '@/utils/index'
	export default {
		data() {
			return {
				list: null,
				pm: ["", "", "", "", "", "", "", "", "", ""],
				listLoading: true,
				screenWidth: document.body.clientWidth,

				sp_sel: [],
				value: ''

			}
		},
		created() {
			// this.fetchData()
		},
		mounted() {
			this.initChartszg();
			this.initChartsfb();
			this.initChartsly();
			this.initChartsjc();
			this.initChartsdt();

			this.initChartsaq();
			console.log(window.innerHeight)
			var height = document.getElementById("app-main").offsetHeight;
			this.$store.dispatch('setHeight', height);
			this.sp_sel = getdatelist();
		},
		watch: {
			'screenWidth': function(val) { //监听屏幕宽度变化
				console.log("bianh")
				// oIframe.style.width = (Number(val)-120) + 'px'; //'120'是页面布局调整，可去除

			},
		},
		methods: {
			//     fetchData() {
			//       this.listLoading = true
			//       getList(this.listQuery).then(response => {
			//         this.list = response.data.items
			//         this.listLoading = false
			//       })
			//     },
			initChartszg() {
				this.chart = this.$echarts.init(document.getElementById("chartszg"));
				this.setOptionszg();
			},
			initChartsfb() {
				this.chartfb = this.$echarts.init(document.getElementById("chartsfb"));
				this.setOptionsfb();
			},
			initChartsdt() {
				this.chartdt = this.$echarts.init(document.getElementById("chartsdt"));
				this.setOptionsdt();
			},
			initChartsly() {
				this.chartly = this.$echarts.init(document.getElementById("chartsly"));
				this.setOptionsly();
			},
			initChartsjc() {
				this.chartjc = this.$echarts.init(document.getElementById("chartsjc"));
				this.setOptionsjc();
			},
			initChartsaq() {
				this.chartaq = this.$echarts.init(document.getElementById("chartsaq"));
				this.setOptionsaq();
			},
			setOptionszg() {
				this.chart.setOption({
					series: [{
						name: 'Line 0',
						type: 'pie',
						clockwise: true,
						startAngle: "90",
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
						hoverAnimation: false,

						data: [{
							value: 80,
							name: '01',
							label: {
								normal: {
									show: true,
									position: 'center',
									textStyle: {
										fontSize: '14',
										color: '#55f1f6',
										// fontWeight: 'bold'
									},
									formatter: '{d}% \n 整改率',

								},
							},
							itemStyle: {
								normal: {
									color: "#2adeff",

								}
							},

						}, {
							name: '02',
							value: 20,
							itemStyle: {
								normal: {
									color: "#ffdd40",

								}
							}
						}]
					}, {
						name: 'Line 1',
						type: 'pie',
						clockwise: false,
						startAngle: "90",
						radius: ['48%', '59%'],
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
							value: 80,
							name: '01',
							label: {
								normal: {
									show: false,
									position: 'center',
									textStyle: {
										fontSize: '20',
										color: '#55f1f6',
										// fontWeight: 'bold'
									},
									formatter: '{d}% \n \n 整改率',

								},
							},
							itemStyle: {
								normal: {
									color: "#21ab79",

								}
							},

						}, {
							name: '02',
							value: 20,
							itemStyle: {
								normal: {
									color: "rgba(0,0,0,0)",

								}
							}
						}]
					}, {
						name: 'Line 2',
						type: 'pie',
						clockwise: true,
						startAngle: "90",
						radius: ['53%', '65%'],
						itemStyle: {
							normal: {
								label: {
									show: true,
									position: 'outside',
									
								},
								labelLine: {
									show: true,
									
									smooth: 0.5
								},
								
							}
						},
						hoverAnimation: true,

						data: [{
							value: 20,
							name: '01',
							label: {
								normal: {
									show: true,

									textStyle: {
										fontSize: '14',
										color: '#fff',
										// fontWeight: 'bold'
									},
									formatter: '{d}%  \n 整改率',

								},
							},
							itemStyle: {
								normal: {
									color: "#ff9000",
									label: {
										show: false
									},
									labelLine: {
										show: true,
										lineStyle: {
											color: '#55f1f6',
										}

									}
								}
							},

						}, {
							name: '02',
							value: 80,
							itemStyle: {
								normal: {
									color: "rgba(0,0,0,0)",

								}
							}
						}]
					}],
				})
			},
			setOptionsjc() {
				this.chartjc.setOption({
					// backgroundColor:"#FFF",
					grid: {
					    top: '10%',
					    left: '12%',
					    right: '14%',
					    bottom: '23%',
					},
            radar: {
              name: {
                textStyle: {
                  color: '#999999',
                },
				formatter: (text) => {
                text = text.replace(/\S{2}/g, function(match) {
                    console.log(match)
                    return match + '\n'
                })
                return text
            },
              },
              splitArea: {
                areaStyle: {
                  color: ['rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)'],
                  shadowColor: 'rgba(0, 100, 0, 0.3)'
                }
              },
			 
              indicator: [
                {name: '卫生条件', max: 6500},
                {name: '安全措施', max: 6500},
                {name: '消毒情况', max: 3800},
                {name: '透明食堂', max: 3800},
                {name: '管理制度', max: 5200},
                
              ],
			  radius:"70%",
            },
            series: [{
              type: 'radar',
              data: [
                {
                  value: [500, 3400, 2800, 3100, 4200],
                  name: 'DATA',
                  itemStyle: {
                    normal: {
                      color: 'rgba(5, 128, 242, 0.5)'
                    }
                  },
                  areaStyle: {
                    normal: {
                      color: '#37A2DA'
                    }
                  }
                }
              ]
            }]
          })
			},
					setOptionsfb() {
						this.chartfb.setOption({
							grid: {
			    top: '10%',
			    left: '12%',
			    right: '14%',
			    bottom: '23%',
			},
			xAxis: {
			    type: 'category',
			    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
				show:false,
			},
			yAxis: {
			    type: 'value',
				show:false
			},
			series: [{
			    data: [120, 200, 150, 80, 70, 110],
			    type: 'bar',
				itemStyle:{
					barCategoryGap:"50%",
					color:function (params){
			                    var colorList = ["#8552f7","#ffaa3c","#18ffe7","#1885ff","#ffdd40","#18c6ff"];
			                    return colorList[params.dataIndex];
			                }
				},
				barWidth: '50%',
			}]
			
						})
					},
			setOptionsdt() {

				var that = this;
				this.$axios.get('../../static/json/100000_full.json').then((res) => {
					that.$echarts.registerMap('china', res.data);
					that.chartdt.setOption({
						tooltip: {
							trigger: 'item',
							formatter: '{b}<br/>{c} (p / km2)'
						},
						toolbox: {
							show: true,
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
								max: 0.01,
								label: '0-1%',
								color: '#ebdba4'
							}, {
								min: 0.01,
								max: 0.02,
								label: '1%-2%',
								color: '#f2d643'
							}, {
								min: 0.02,
								max: 0.04,
								label: '2%-4%',
								color: '#ffb248'
							}, {
								min: 0.04,
								max: 0.08,
								label: '4%-8%',
								color: '#eb8146'
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
							name: 'china',
							type: 'map',
							roam: true,
							center: center(res.data),
							// layoutCenter: ['50%', '50%'],
							// layoutSize: 800,
							// zoom: 1.5,
							scaleLimit: {
								min: 0.1,
								max: 1.5
							},
							mapType: 'china', // 自定义扩展图表类型
							itemStyle: {
								normal: {
									// borderWidth: 0,
									borderColor: "blue",
									label: {
										show: false
									}
								}, //地图名字标注是否显示
								emphasis: {
									// borderColor:'#fff',
									areaColor: 'yellow',
									label: {
										show: true
									},

								} //鼠标指向目标时地图文字标注是否显示
							},
							data: [{
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
							}, {
								name: "广州市",
								value: 1500
							}]
							// 自定义名称映射

						}]
					})

				})


			},
			setOptionsly() {
				this.chartly.setOption({



					series: [{
						name: 'Line 1',
						type: 'pie',
						// roseType: "radius",
						clockwise: true,
						startAngle: "90",
						radius: ['45%', '59%'],
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
							value: 30,
							name: '01',

							itemStyle: {
								normal: {
									color: "#f66262",

								}
							},

						}, {
							value: 60,
							name: '02',

							itemStyle: {
								normal: {
									color: "#ffaa3c",

								}
							},

						}, {
							value: 90,
							name: '01',

							itemStyle: {
								normal: {
									color: "#2affcf",

								}
							},

						}, {
							value: 120,
							name: '01',

							itemStyle: {
								normal: {
									color: "#1046d1",

								}
							},

						}]
					}],
				})
			},
			setOptionsaq() {
				this.chartaq.setOption({

					// backgroundColor: "#05224d",
					tooltip: {},
					grid: {
						top: '10%',
						left: '3%',
						right: '3%',
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
							show: false,
						},
					}],
					series: [{
						name: '注册总量',
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

							color: "#29c1e7",


						},
						tooltip: {
							show: false
						},
						areaStyle: { //区域填充样式
							normal: {
								//线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
								color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
										offset: 0,
										color: 'rgba(41,193,231,1)'
									},
									{
										offset: 1,
										color: 'rgba(28,99,213, 0.5)'
									}
								], false),
								shadowColor: 'rgba(255,221,139, 0.4)', //阴影颜色
								shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
							}
						},
						data: [393, 438, 485, 631, 689, 824, 987]
					}]

				})
			}
		}
	}
</script>
<style>
	.app-container {
		/* background-color: #fff; */
	}

	.charts {
		/* background-color: #fff; */
		position: absolute;
		
		/* transform: translate(-50%); */
		
		left:0;
		right: 0;
		top:0;
		bottom:0;
		margin: auto;
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
		width: calc(7.1vw);
		height: calc(5.4vw);
		left: calc(1.1vw);
		top: calc(4.5vw);
		position: absolute;
		z-index: 10;

	}

	.all-div {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		text-align: center;
	}

	.fs-40 {
		font-size: 40px;
	}

	.sel-box {
		width: calc(7.1vw);
		height: calc(2vw);
		position: absolute;
		left: calc(1.1vw);
		top: calc(1.1vw);
	}

	.el-input__inner {
		box-shadow: 0px 0px 3px #fff;
		background-color: #052547;
		border: solid 1px #18c6ff;
		color: #fff;
		height: calc(4.6vh);
		line-height: calc(4.6vh);
	}

	.el-input__icon {
		line-height: calc(4.6vh);
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
	.half{
		font-size: 14px;
	}
	@media screen and (max-width:1366px) {
		.app-container {
			font-size: 12px;
		}

		.fs-40 {
			font-size: 18px;
		}
		.half{
			font-size: 12px;
		}
	}
</style>
