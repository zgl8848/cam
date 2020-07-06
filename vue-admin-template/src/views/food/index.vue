<template>
	<div class="app-container flex" id="app-main">
		<div style="" class="lt">
			<div class="dt jg" style="width:100%;height:49.7vh;">
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
						<div class="all-div-title">食堂总数(个)</div>
						<div class="fs" style="color: #ffba50;">{{getmap.total}}</div>
					</div>
				</div>
				<div class="all-box2">
					<img src="../../../static/img/all.png" alt="">
					<div class="all-div">
						<div class="all-div-title">食品安全警报(个)</div>
						<div class="fs" style="color: #ffba50;">{{getmap.foot}}</div>
					</div>
				</div>
			</div>
			<div class="k" style="width: 100%;height:29.3vh;position: relative;">
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
		<div style="" class="flex fl-wa ri">
			<div class="k kr jg2" style="">
				<img src="../../../static/img/k4.png" alt="">
				<div class="k-title">食品留样情况</div>
				<div class="charts" id="chartszg" style="width: 90%;height:90%;">

				</div>
				<div class="tl flex">

					<div class="half" style="width: 50%;">
						<div class="text flex al-c " style="margin-bottom: 10px;">
							<div style="width: 12px;height: 12px;background-color:#2adeff;margin-right: calc(0.4vw);"></div>留样学校：<span class="val">{{sample.sample}}</span>
						</div>
						<div class="text flex al-c ">
							<div style="width: 12px;height: 12px;background-color:#21ab79;margin-right: calc(0.4vw);"></div>合格：<span class="val">{{sample.qualified}}</span>
						</div>
					</div>
					<div class="half" style="width: 50%;">
						<div class="text flex al-c " style="margin-bottom: 10px;">
							<div style="width: 12px;height: 12px;background-color:#ffdd40;margin-right: calc(0.4vw);"></div>未留样：<span class="val">{{sample.noSample}}</span>
						</div>
						<div class="text flex al-c ">
							<div style="width: 12px;height: 12px;background-color:#ffaa3c;margin-right: calc(0.4vw);"></div>不合格：<span class="val">{{sample.unqualified}}</span>
						</div>
					</div>

				</div>

			</div>
			<div class="k kr jg2" style="">
				<img src="../../../static/img/k4.png" alt="">
				<div class="k-title">营养分布</div>
				<div class="charts" id="chartsfb" style="width: 90%;height:90%;">

				</div>
				<div class="tl flex">
					<div class="half" style="width: 50%;">
						<div class="text flex al-c" style="margin-bottom: 10px;" v-if="nutrition.x.length>0">
							<div style="width: 12px;height: 12px;background-color:#8552f7;margin-right: calc(0.4vw);"></div>{{nutrition.x[0]}}：<span
							 class="val">{{nutrition.data[0]}}</span>
						</div>
						<div class="text flex al-c" style="margin-bottom: 10px;" v-if="nutrition.x.length>2">
							<div style="width: 12px;height: 12px;background-color:#18ffe7;margin-right: calc(0.4vw);"></div>{{nutrition.x[2]}}：<span
							 class="val">{{nutrition.data[2]}}</span>
						</div>
						<div class="text flex al-c" v-if="nutrition.x.length>4">
							<div style="width: 12px;height: 12px;background-color:#ffdd40;margin-right: calc(0.4vw);"></div>{{nutrition.x[4]}}：<span
							 class="val">{{nutrition.data[4]}}</span>
						</div>
					</div>
					<div class="half" style="width: 50%;">
						<div class="text flex al-c" style="margin-bottom: 10px;" v-if="nutrition.x.length>1">
							<div style="width: 12px;height: 12px;background-color:#ffaa3c;margin-right: calc(0.4vw);"></div>{{nutrition.x[1]}}：<span
							 class="val">{{nutrition.data[1]}}</span>
						</div>
						<div class="text flex al-c" style="margin-bottom: 10px;" v-if="nutrition.x.length>3">
							<div style="width: 12px;height: 12px;background-color:#1885ff;margin-right: calc(0.4vw);"></div>{{nutrition.x[3]}}：<span
							 class="val">{{nutrition.data[3]}}</span>
						</div>
						<div class="text flex al-c" v-if="nutrition.x.length>5">
							<div style="width: 12px;height: 12px;background-color:#18c6ff;margin-right: calc(0.4vw);"></div>{{nutrition.x[5]}}：<span
							 class="val">{{nutrition.data[5]}}</span>
						</div>
					</div>

				</div>

			</div>
			<div class="k kr" style="margin-bottom: 00px;">
				<img src="../../../static/img/k4.png" alt="">
				<div class="k-title">从业人员情况</div>
				<div class="charts" id="chartsly" style="width: 90%;height:90%;">

				</div>
				<div class="tl flex">
					<div class="half" style="width: 50%;">
						<div class="text flex al-c" style="margin-bottom: 10px;" v-if="cert.data.length>0">
							<div style="width: 12px;height: 12px;background-color:#f66262;margin-right: calc(0.4vw);"></div>{{cert.data[0].name}}：<span
							 class="val">{{cert.data[0].value}}</span>
						</div>
						<div class="text flex al-c" v-if="cert.data.length>2">
							<div style="width: 12px;height: 12px;background-color:#1046d1;margin-right: calc(0.4vw);"></div>{{cert.data[2].name}}：<span
							 class="val">{{cert.data[2].value}}</span>
						</div>
					</div>
					<div class="half" style="width: 50%;">
						<div class="text flex al-c" style="margin-bottom: 10px;" v-if="cert.data.length>1">
							<div style="width: 12px;height: 12px;background-color:#ffaa3c;margin-right: calc(0.4vw);"></div>{{cert.data[1].name}}：<span
							 class="val">{{cert.data[1].value}}</span>
						</div>
						<div class="text flex al-c" v-if="cert.data.length>3">
							<div style="width: 12px;height: 12px;background-color:#2affcf;margin-right: calc(0.4vw);"></div>{{cert.data[3].name}}：<span
							 class="val">{{cert.data[3].value}}</span>
						</div>
					</div>

				</div>

			</div>
			<div class="k kr" style="margin-bottom: 0px;">
				<img src="../../../static/img/k4.png" alt="">
				<div class="k-title">食堂基础条件</div>
				<div class="charts" id="chartsjc" style="width: 90%;height:90%;">
					<div v-show="true" style="displayflex;width:calc(9.3vw);height:calc(7.8vw) ;margin: 0 auto;margin-top: 7vh;align-items: center;justify-content: center;">
						<img src="../../../static/img/nodeta.png" alt="" style="max-width: 100%;max-height: 100%;">
					</div>

					<div v-show="true" style="color: #18c5ff;margin: 0 auto;margin-top: 30px;text-align: center;">暂无数据</div>
				</div>


			</div>
		</div>

	</div>
</template>

<script>
	import {
		getdt,
		trend_chart,
		cert,
		nutrition,
		sample,
		getmap
	} from '@/api/food'
	import {
		center,
		center2,
		city,
		getdatelist,
		debounce,
		other,
		getnowdate
	} from '@/utils/index'
	export default {
		data() {
			return {
				list: null,
				pm: ["", "", "", "", "", "", "", "", "", ""],
				listLoading: true,
				screenWidth: document.body.clientWidth,
				trend_chart: {}, //食品留样执行趋势
				sample: {}, //食品留样情况
				nutrition: {
					x: [],
					data: []
				}, //营养分布
				cert: {
					res: [], //接收的数据
					data: [] //图表数据
				},
				getmap: [],
				sp_sel: [],
				date: "",
				chart: null,
				chartjc: null,
				chartdt: null,
				chartfb: null,
				chartly: null,
				chartaq: null,

			}
		},
		created() {
			// this.fetchData()
		},
		mounted() {
			console.log(document.body.scrollHeight)
			var that = this;
			this.sp_sel = getdatelist();
			this.date=this.sp_sel[0].str;
			trend_chart().then(response => {
				var series = [];
				var legend = [];
				var months = [];
				for (var j in response.data.records[0].sampleData) {
					months.push(response.data.records[0].sampleData[j].month)
				}

				for (var i in response.data.records) {
					var data = [];
					for (var j in response.data.records[i].sampleData) {
						data.push(parseInt(response.data.records[i].sampleData[j].number))
					}

					var item = {
						name: response.data.records[i].sampleName,
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
						name: response.data.records[i].sampleName,
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

				that.initChartsaq();
			})
			sample().then(response => {
				response.data.sample = parseInt(response.data.sample);
				response.data.qualified = parseInt(response.data.qualified);
				response.data.unqualified = parseInt(response.data.unqualified);
				response.data.noSample = parseInt(response.data.noSample);
				that.sample = response.data;
				that.initChartszg();
			})
			nutrition().then(response => {
				var x = [];
				var data = [];
				for (var i in response.data.records) {
					x.push(response.data.records[i].nutritionName);
					data.push(parseInt(response.data.records[i].percentage));
				}

				that.nutrition.x = x;
				that.nutrition.data = data;
				that.initChartsfb();

			})
			cert().then(response => {
				var series = [];
				that.cert.res = response.data.records;
				for (var i in response.data.records) {
					var item = {
						value: parseInt(response.data.records[i].number),
						name: response.data.records[i].name,
					};
					series.push(item);
				}
				that.cert.data = series;
				that.initChartsly();
			})
			getmap(that.sp_sel[that.sp_sel.length-1].time).then(response => {
				var jia=response.data;
				if(jia.records>1){
					var selcity=jia.records[0].areaCode;
				}else{
					var selcity=jia.cityCode;
				}
				var total = 0;
				var foot = 0;
				var color = [];var max=0;
				for (var i in jia.records) {
					total += parseInt(jia.records[i].eatery);
					foot += parseInt(jia.records[i].foot);
						if(parseInt(jia.records[i].eatery)>max){
						console.log(jia.records[i].eatery)
						max=jia.records[i].eatery;
					}
				}
				var array = city(jia.records);
				that.getmap = {
					total: total,
					foot: foot,
					array: array
				};
				// console.log(that.getmap.foot)
				color.push(Math.round(max / 4));
				color.push(Math.round(max / 2));
				color.push(Math.round(max / 4 * 3));
				color.push(parseInt(max));

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
						value: array[i].eatery
					}
					data.push(item);
				}
				// that.getmap = response.data;
				getdt(jia.provinceCode, selcity).then(response => {
					that.initChartsdt(response, jia.area, data, color);
				})

			})


			// this.initChartsjc();
			// this.initChartsdt();

			var height = document.getElementById("app-main").offsetHeight;

			
			
			this.__resizeHandler = debounce(() => {
				if (this.chart) {
					this.chart.resize()
				}
				if (this.chartfb) {
					this.chartfb.resize()
				}
				if (this.chartly) {
					this.chartly.resize()
				}
				if (this.chartjc) {
					this.chartjc.resize()
				}
				if (this.chartaq) {
					this.chartaq.resize()
				}
				if (this.chartdt) {
					this.chartdt.resize()
				}

			}, 100)
			window.addEventListener('resize', this.__resizeHandler)

		},

		methods: {
			dthastime(e) {
				var that = this;
				getmap(e).then(response => {
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
					var foot = 0;
					var color = [];var max=0;
					for (var i in jia.records) {
						total += parseInt(jia.records[i].eatery);
						foot += parseInt(jia.records[i].foot);
						if(parseInt(jia.records[i].eatery)>max){
							console.log(jia.records[i].eatery)
							max=jia.records[i].eatery;
						}
					}
					var array = city(jia.records);
					that.getmap = {
						total: total,
						foot: foot,
						array: array
					};
					// console.log(that.getmap.foot)
					color.push(Math.round(max / 4));
					color.push(Math.round(max / 2));
					color.push(Math.round(max / 4 * 3));
					color.push(parseInt(max));

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
							value: array[i].eatery
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
					 tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"},
					series: [{
						name: '留样情况',
						type: 'pie',
						clockwise: true,
						startAngle: "90",
						radius: ['35%', '46%'],
						center:['50%','45%'],
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
							value: this.sample.sample,
							name: '留样学校',
							label: {
								normal: {
									show: true,
									position: 'center',
									textStyle: {
										fontSize: '14',
										color: '#55f1f6',
										// fontWeight: 'bold'
									},
									formatter: '整改率\n' + this.sample.rate,

								},
							},
							itemStyle: {
								normal: {
									color: "#2adeff",

								}
							},

						}, {
							name: '未留样学校',
							value: this.sample.noSample,
							itemStyle: {
								normal: {
									color: "#ffdd40",

								}
							}
						}]
					}, {
						name: '合格情况',
						type: 'pie',
						clockwise: false,
						startAngle: "90",
						radius: ['48%', '59%'],
						center:['50%','45%'],
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
							value: this.sample.qualified,
							name: '合格',
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
							name: '不合格',
							value: this.sample.unqualified,
							tooltip:{
								show:false
							},
							itemStyle: {
								normal: {
									color: "rgba(0,0,0,0)",

								}
							}
						}]
					}, {
						name: '合格情况',
						type: 'pie',
						clockwise: true,
						startAngle: "90",
						radius: ['53%', '65%'],
						center:['50%','45%'],
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
							value: this.sample.unqualified,
							name: '不合格',
							label: {
								normal: {
									show: true,

									textStyle: {
										fontSize: '14',
										color: '#fff',
										// fontWeight: 'bold'
									},
									formatter: '{d}%  \n 不合格',

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
							name: '合格',
							value: this.sample.qualified,
								label: {
								normal: {
									show: false,
							
									textStyle: {
										fontSize: '14',
										color: '#fff',
										// fontWeight: 'bold'
									},
									formatter: '{d}%  \n 不合格',
							
								},
								emphasis:{
									show:false
								}
							},
							tooltip:{
								show:false
							},
							itemStyle: {
								normal: {
									color: "rgba(0,0,0,0)",
									label: {
										show: false
									},
									emphasis:{
										show:false
									}
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

						indicator: [{
								name: '卫生条件',
								max: 6500
							},
							{
								name: '安全措施',
								max: 6500
							},
							{
								name: '消毒情况',
								max: 3800
							},
							{
								name: '透明食堂',
								max: 3800
							},
							{
								name: '管理制度',
								max: 5200
							},

						],
						radius: "70%",
					},
					series: [{
						type: 'radar',
						data: [{
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
						}]
					}]
				})
			},
			setOptionsfb() {
				this.chartfb.setOption({
						tooltip: {
						formatter: "{b}: {c}"
					},
					grid: {
						top: '10%',
						left: '12%',
						right: '14%',
						bottom: '23%',
					},
					xAxis: {
						type: 'category',
						data: this.nutrition.x,
						show: false,
					},
					yAxis: {
						type: 'value',
						show: false
					},
					
					series: [{
						data: this.nutrition.data,
						type: 'bar',
						itemStyle: {
							barCategoryGap: "50%",
							color: function(params) {
								var colorList = ["#8552f7", "#ffaa3c", "#18ffe7", "#1885ff", "#ffdd40", "#18c6ff"];
								return colorList[params.dataIndex];
							}
						},
						barWidth: '50%',
					}]

				})
			},
			setOptionsdt(dtdata, name, data, color) {
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
					tooltip: {
						trigger: 'item',
						formatter: function(params) {
							var toolTiphtml = ''
							for (var i = 0; i < that.getmap.array.length; i++) {

								if (params.name == that.getmap.array[i].area) {
									toolTiphtml = that.getmap.array[i].area + '<br>食堂数:' + that.getmap.array[i].eatery + "<br>食品安全预警数:" + that.getmap
										.array[i].foot;

								}
							}
							return toolTiphtml;

						}
						//'{b}<br/>食堂数：{c}<br/>报警数：'+other("","a")
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
						// 	min: 0,
						// 	max: color[0],
						// 	label: '0-' + color[0],
						// 	color: '#18c6ff'
						// }, {
						// 	min: color[0]+1,
						// 	max: color[1],
						// 	label: (color[0]+1) + "-" + color[1],
						// 	color: '#30aafc'
						// }, {
						// 	min: color[1]+1,
						// 	max: color[2],
						// 	label: (color[1]+1) + "-" + color[2],
						// 	color: '#028ffe'
						// }, {
						// 	min: color[2]+1,
						// 	max: color[3],
						// 	label: (color[2]+1) + "-" + color[3],
						// 	color: '#0072d8'
						// }],
						pieces: [{
							min: 0,
							max: color[0],
							label: '0-' + color[0],
							color: '#ffdcbf'
						}, {
							min: color[0]+1,
							max: color[1],
							label: (color[0]+1) + "-" + color[1],
							color: '#ffd69b'
						}, {
							min: color[1]+1,
							max: color[2],
							label: (color[1]+1) + "-" + color[2],
							color: '#ffae46'
						}, {
							min: color[2]+1,
							max: color[3],
							label: (color[2]+1) + "-" + color[3],
							color: '#ff7200'
						}],
						right: '10',
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
						zoom: 1.0,
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
								areaColor: null,
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


					tooltip: {
						formatter: "{a}：<br/>{b}: {c}人<br/>占比：{d}%"
					},
					series: [{
						name: '从业人员情况',
						type: 'pie',
						// roseType: "radius",
						clockwise: true,
						startAngle: "90",
						radius: ['45%', '59%'],
						center:['50%','45%'],
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
						color: ["#f66262", "#ffaa3c", "#2affcf", "#1046d1", "", ""],
						// 						tooltip:{
						// 							textStyle:{
						// 								color:'#fff',
						// 							},
						// 							formatter:"{a}\n{b}"
						// 						},
						data: this.cert.data,
					}],
				})
			},
			setOptionsaq() {
				this.chartaq.setOption({


					// backgroundColor: "#05224d",
					tooltip: {},
					grid: {
						top: '20%',
						left: '30px',
						right: '30px',
						bottom: '0px',
						containLabel: true,
					},
					legend: {
						show: true,
						right: 20,
						top: 0,
						orient: "horizontal",
						icon: "rect", //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none

						itemWidth: 12, // 设置宽度

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
					color: ["#16bcf8", "#ffaa3c", "#ff3535", "", "", ""],
					series: this.trend_chart.series,


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
		height: 40.3vh;
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
		margin-bottom: 20px;
	}

	.jg2 {
		margin-bottom: 10px;
	}



	.zx {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top: 15px;
		width: 100%;
		height: 25.3vh;
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








	/* 	.aq-de-bu {
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
		background-color: #fff;
	} */

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
		/* top: calc(1.1vw); */
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

	.all-box img,
	.all-box2 img {
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

	.all-div-title {
		color: #18c6ff;
		margin-top: 20px;
		margin-bottom: 10px;
	}

	.fs {
		font-size: 40px;
		justify-content: center;
	}

	.sel-box {
		width: calc(8.5vw);
		min-width: 110px;
		height: 30px;
		position: absolute;
		left: calc(1.1vw);
		top: calc(1.1vw);
	}
	#chartsaq{
		height: 85%!important;
	}


	.half {
		font-size: 14px;
	}

	.half .text {
		justify-content: center;
	}
	.visualMapMark{
		width: 5.2vw;
		height: 7vw;
		/* background-color: rgba(255,255,255,0.5); */
		position: absolute;
		right:10px;
		bottom: 10px;
		z-index: 2;
	}
	@media screen and (max-width:1440px) {
		.all-div-title {
			margin-top: 10px;
			margin-bottom: 10px;
			font-size: 14px;
		}

		.fs {
			font-size: 24px;
		}

		.lt {
			width: 45%;
		}

		.ri {
			width: 55%;
		}

		.kr {
			width: calc(50% - 16px);
			height: 408px;
			margin-left: 16px;

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

		.lt {
			width: calc(40.4vw);
		}

		.ri {
			width: calc(43.2vw);
		}

		.kr {
			width: calc(20.1vw);
			height: 40.3vh;
			margin-left: calc(1vw);

		}
		.all-box2{
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
			height: 40.3vh;
			margin-left: 10px;
			
			
		}
		.kr2 {
			width: calc(100% - 10px);
			height: 40.3vh;
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
	@media screen and (min-height:1050px) {
		.jg {
			margin-bottom: 30px;
		}

		.jg2 {
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
