<template>
	<div class="app-container flex" id="app-main">
		<div style="" class="lt">
			<div class="dt" style="width:100%;height:82.7vh;">
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
						<div class="all-div-title">总数量</div>
						<div class="fs" style="color: #ffba50;">32</div>
					</div>
				</div>
        <div class="all-box-right">
          <img src="../../../static/img/all.png" alt="">
          <div class="all-div">
            <div class="all-div-title">应急演练区域排名</div>
            <div v-for="(item,index) in ranking"   :key="item.area_name" class="box_name" >
              <div><span>{{index + 1}}、</span>{{item.area_name}}</div>
            </div>
          </div>
        </div>
			</div>
			<!-- 	<div style="width: 100%;margin-bottom: 10px;" class="">



			</div> -->

		</div>
		<div style="" class="flex fl-wa ri">
			<div class="k kr" style="margin-bottom: 20px;">
				<img src="../../../static/img/k5.png" alt="">
				<div class="k-title2">演练次数</div>
				<div class="charts" id="chartscs" style="width: 90%;height:90%;">

				</div>
			</div>
			<div class="k kr" style="">
				<img src="../../../static/img/k5.png" alt="">
				<div class="k-title2">演练效果</div>
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
							<div style="width: 12px;height: 12px;background-color:#18c6ff;opacity: 0; margin-right: calc(0.4vw);"></div>学校总数：<span class="val">{{overall.total}}</span>
						</div>
						<!-- <div class="text flex al-c">
							<div style="width: 12px;height: 12px;background-color:#7ecef4;margin-right: calc(0.4vw);"></div>专项检查：<span class="val">100</span>
						</div> -->
					</div>
					<div class="half" style="width: 50%;">
						<div class="text flex al-c" style="margin-bottom: 10px;">
							<div style="width: 12px;height: 12px;background-color:#f70b0b;opacity: 0;margin-right: calc(0.4vw);"></div>执行学校：<span class="val">{{overall.drill}}</span>
						</div>
						<!-- <div class="text flex al-c">
							<div style="width: 12px;height: 12px;background-color:#7ecef4;margin-right: calc(0.4vw);"></div>专项检查：<span class="val">100</span>
						</div> -->
					</div>
				</div>

			</div>
			<div class="k kr" style="">
				<img src="../../../static/img/k6.png" alt="">
				<div class="k-title">演练类型</div>
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
						<div class="text flex al-c" style="margin-bottom: 10px;" v-if="classify.data.length>0">
							<div style="width: 12px;height: 12px;background-color:#16bcf8;margin-right: calc(0.4vw);"></div>{{classify.data[0].name}}：<span
							 class="val">{{classify.data[0].value}}</span>
						</div>
						<div class="text flex al-c"style="margin-bottom: 10px;"  v-if="classify.data.length>2">
							<div style="width: 12px;height: 12px;background-color:#15c7ac;margin-right: calc(0.4vw);"></div>{{classify.data[2].name}}：<span
							 class="val">{{classify.data[2].value}}</span>
						</div>
						<div class="text flex al-c"style="margin-bottom: 10px;"  v-if="classify.data.length>4">
							<div style="width: 12px;height: 12px;background-color:#9b3aff;margin-right: calc(0.4vw);"></div>{{classify.data[4].name}}：<span
							 class="val">{{classify.data[4].value}}</span>
						</div>
					</div>
					<div class="half" style="width: 50%;">
						<div class="text flex al-c"style="margin-bottom: 10px;"  v-if="classify.data.length>1">
							<div style="width: 12px;height: 12px;background-color:#ffa245;margin-right: calc(0.4vw);"></div>{{classify.data[1].name}}：<span
							 class="val">{{classify.data[1].value}}</span>
						</div>
						<div class="text flex al-c" style="margin-bottom: 10px;" v-if="classify.data.length>3">
							<div style="width: 12px;height: 12px;background-color:#115bd5;margin-right: calc(0.4vw);"></div>{{classify.data[3].name}}：<span
							 class="val">{{classify.data[3].value}}</span>
						</div>
						<div class="text flex al-c" style="margin-bottom: 10px;"  v-if="classify.data.length>5">
							<div style="width: 12px;height: 12px;background-color:#f23737;margin-right: calc(0.4vw);"></div>{{classify.data[5].name}}：<span
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
		getdt,
		effect,
		overall,
    ranking,
		classify,
		number,
		getmap
	} from '@/api/emergency'
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
				date: "",
				effect: [
					[],
					[]
				], //演练效果数据
				number: [
					[],
					[]
				], //演练次数数据
				overall: {}, //总体情况
        ranking: {
          area_name:null,
        }, //总体情况
        classify: { //演练的类型
					res: [], //获取的数据
					data: [] //图表series
				},
				getmap: {
					total: 0,
					data: [],
				},
				chart: null,
				chartqk: null,
				chartxg: null,
				chartdt: null,
				chartlx: null,

			}
		},
		created() {
			// this.fetchData()
      ranking().then(response => {
        this.ranking = response.data;
      })
		},
		mounted() {
			var that = this;
			this.sp_sel = getdatelist();
			this.date=this.sp_sel[0].str;
			effect().then(response => {
				var a = [];
				var b = [];
				for (var i in response.data) {
					a.push(response.data[i].month);
					b.push(parseInt(response.data[i].number));
				}
				that.effect[0] = a;
				that.effect[1] = b;
				that.initChartsxg();
			})
			number().then(response => {
				var a = [];
				var b = [];
				for (var i in response.data) {
					a.push(response.data[i].month);
					b.push(parseInt(response.data[i].number));
				}
				that.number[0] = a;
				that.number[1] = b;
				that.initChartscs();
			})
			overall().then(response => {
				response.data.rate = parseInt(response.data.rate.replace("%", ""));
				that.overall = response.data;
				that.initChartsqk();
			})

			classify().then(response => {
				var series = [];
				that.classify.res = response.data;
				for (var i in response.data) {
					var item = {
						value: parseInt(response.data[i].number),
						name: response.data[i].name,
					};
					series.push(item);
				}
				that.classify.data = series;
				that.initChartslx();
			})
			getmap(that.sp_sel[that.sp_sel.length-1].time).then(response => {
						var jia=response.data;

				if(jia.records>1){
					var selcity=jia.records[0].areaCode;
				}else{
					var selcity=jia.cityCode;
				}

				var total = 0;
				var serious = 0;
				var color = [];
				var max=0;
				for (var i in jia.records) {
					total += parseInt(jia.records[i].total);
					serious += parseInt(jia.records[i].serious);
					if(parseInt(jia.records[i].total)>max){
						console.log(jia.records[i].total)
						max=jia.records[i].total;
					}
				}
				var array = city(jia.records);
				that.getmap = {
					total: total,
					serious: serious,
					array:array
				};
				color.push( Math.round( max / 4));
				color.push( Math.round( max / 2));
				color.push( Math.round( max / 4*3));
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
						value: array[i].total
					}
					data.push(item);
				}
				// that.getmap = response.data;
				getdt(jia.provinceCode,selcity).then(response => {
					that.initChartsdt(response, jia.area, data, color);
				})
			})

			var height = document.getElementById("app-main").offsetHeight;


			this.__resizeHandler = debounce(() => {
				if (this.chart) {
					this.chart.resize()
				}
				if (this.chartxg) {
					this.chartxg.resize()
				}
				if (this.chartdt) {
					this.chartdt.resize()
				}
				if (this.chartlx) {
					this.chartlx.resize()
				}
				if (this.chartqk) {
					this.chartqk.resize()
				}

			}, 100)
			window.addEventListener('resize', this.__resizeHandler)
		},

		methods: {
			dthastime(e){
				var that=this;
				getmap(e).then(response => {
				var jia=response.data;
				console.log(jia)
if(jia.records.length>1){
	var selcity=jia.cityCode;
}else{
	var selcity=jia.records[0].areaCode;
}
				var total = 0;
				var serious = 0;
				var color = [];var max=0;
				for (var i in jia.records) {
					total += parseInt(jia.records[i].total);
					serious += parseInt(jia.records[i].serious);
					if(parseInt(jia.records[i].total)>max){
						console.log(jia.records[i].total)
						max=jia.records[i].total;
					}
				}
				that.getmap = {
					total: total,
					serious: serious,
				};
				color.push( Math.round( max / 4));
				color.push( Math.round( max / 2));
				color.push( Math.round( max / 4*3));
				color.push(parseInt(max));
				var array = city(jia.records);
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
			initChartscs() {
				this.chart = this.$echarts.init(document.getElementById("chartscs"));
				this.setOptionscs();
			},
			initChartsxg() {
				this.chartxg = this.$echarts.init(document.getElementById("chartsxg"));
				this.setOptionsxg();
			},
			initChartsdt(response, name, data, color) {
				this.chartdt = this.$echarts.init(document.getElementById("chartsdt"));
				var that = this;
				this.setOptionsdt(response, name, data, color);
				setTimeout(function() {

				}, 300)
			},
			initChartslx() {
				this.chartlx = this.$echarts.init(document.getElementById("chartslx"));
				this.setOptionslx();
			},
			initChartsqk() {
				this.chartqk = this.$echarts.init(document.getElementById("chartsqk"));
				this.setOptionsqk();
			},
			setOptionscs() {
				this.chart.setOption({

					// backgroundColor: "#05224d",

					grid: {
						top: '20%',
						left: '0px',
						right: '10px',
						bottom: '10px',
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
								margin: 15,
							},
						},
						axisTick: {
							show: false,
						},
						data: this.number[0],
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
					tooltip: {
						formatter: "{a}<br/>{b}:{c}次",
					},
					series: [{
						name: '演练次数',
						type: 'line',
						// smooth: true, //是否平滑曲线显示
						symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
						showAllSymbol: true,
						// symbol: 'emptyCircle',
						symbolSize: 6,
						lineStyle: {
							normal: {
								color: "#22e5b9", // 线条颜色
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

							color: "#22e5b9",


						},

						areaStyle: { //区域填充样式
							normal: {
								//线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
								color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
										offset: 0,
										color: 'rgba(34,229,185,1)'
									},
									{
										offset: 1,
										color: 'rgba(27,102,174, 0.4)'
									}
								], false),
								shadowColor: 'rgba(255,221,139, 0.4)', //阴影颜色
								shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
							}
						},
						data: this.number[1],
					}]

				})
			},
			setOptionsxg() {
				this.chartxg.setOption({


					// backgroundColor: "#05224d",

					grid: {
						top: '20%',
						left: '0px',
						right: '10px',
						bottom: '10px',
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
								margin: 15,
							},
						},
						axisTick: {
							show: false,
						},
						data: this.effect[0],
					}],
					tooltip: {
						formatter: "{a}<br/>{b}:{c}次",
					},
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
						name: '演练效果',
						type: 'line',
						// smooth: true, //是否平滑曲线显示
						symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
						showAllSymbol: true,
						// symbol: 'emptyCircle',
						symbolSize: 6,
						lineStyle: {
							normal: {
								color: "#29c1e7", // 线条颜色
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
						// 							tooltip: {
						// 								show: false
						// 							},
						areaStyle: { //区域填充样式
							normal: {
								//线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
								color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
										offset: 0,
										color: 'rgba(41,193,231,1)'
									},
									{
										offset: 1,
										color: 'rgba(28,99,213, 0.9)'
									}
								], false),
								shadowColor: 'rgba(255,221,139, 0.4)', //阴影颜色
								shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
							}
						},
						data: this.effect[1]
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
				console.log(data);
				var that = this;
				that.$echarts.registerMap('gd', dtdata);
				that.chartdt.setOption({
					// tooltip: {
					// 	trigger: 'item',
					// 	formatter: '{b}<br/>应急次数：{c}'
					// },
					tooltip: {
						trigger: 'item',
						formatter: function(params) {
						var toolTiphtml = ''
						for (var i = 0; i < data.length; i++) {

							if (params.name == data[i].name) {
								toolTiphtml = data[i].name +
									'<br>应急次数:' + data[i].value;

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
							color: '#fdd4d4'
						}, {
							min: color[0]+1,
							max: color[1],
							label: (color[0]+1) + "-" + color[1],
							color: '#ff9494'
						}, {
							min: color[1]+1,
							max: color[2],
							label: (color[1]+1) + "-" + color[2],
							color: '#f64647'
						}, {
							min: color[2]+1,
							max: color[3],
							label: (color[2]+1) + "-" + color[3],
							color: '#d40e0e'
						}],
							pieces: [{
							min: 0,
							max: color[0],
							label: '0-' + color[0],
							color: '#38ddfc'
						}, {
							min: color[0]+1,
							max: color[1],
							label: (color[0]+1) + "-" + color[1],
							color: '#31d1e1'
						}, {
							min: color[1]+1,
							max: color[2],
							label: (color[1]+1) + "-" + color[2],
							color: '#21bba8'
						}, {
							min: color[2]+1,
							max: color[3],
							label: (color[2]+1) + "-" + color[3],
							color: '#12a670'
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
			setOptionslx() {
				this.chartlx.setOption({


					tooltip:{
						formatter:"{b} <br> 占比：{d}%",
					},
					series: [{
						name: '演练类型',
						type: 'pie',
						center: ["50%", "40%"],
						roseType: "radius",
						clockwise: true,
						startAngle: "90",
						radius: ['20%', '55%'],
						itemStyle: {
							normal: {
								label: {
									show: true,
									formatter:"{d}%",
									position:"inside"
								},
								labelLine: {
									show: true
								}
							}
						},
						hoverAnimation: true,
						color: ["#16bcf8", "#ffa245", "#115bd5", "#15c7ac","#9b3aff", "#f23737"],
						data: this.classify.data,
					}],
				})
			},
			setOptionsqk() {
				this.chartqk.setOption({
					series: [{
						name: 'Line 0',
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
						hoverAnimation: false,
						data: [{
							value: 100,
							name: '00',
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

							}
						}]

					}, {
						name: 'Line 1',
						type: 'pie',
						clockwise: false,
						startAngle: "90",
						center: ["50%", "40%"],
						radius: ['47%', '58%'],
						itemStyle: {
							normal: {
								color: { // 完成的圆环的颜色
									colorStops: [{
										offset: 0,
										color: '#ff5252' // 0% 处的颜色
									}, {
										offset: 1,
										color: '#ffb142' // 100% 处的颜色
									}]
								},

							}
						},
						hoverAnimation: true,

						data: [{
							value: this.overall.rate,
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
									formatter: '执行率\n{d}%',

								},
							},
							itemStyle: {},

						}, {
							name: '02',
							value: 100 - this.overall.rate,
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
			}
		}
	}
</script>
<style scoped>

  .all-box-right{
    width: calc(11.5vw);
    min-width: 160px;
    height: calc(16.8vw);
    min-height: 210px;
    left: calc(1.1vw);
    top: calc(14vw);
    position: absolute;
    z-index: 10;
    color: #ffba50;
  }
  .all-box-right img,.all-box2 img{
    width: 100%;
  }
.box_name{
  font-size: 14px; color: #fff;margin-bottom: 5px;
  /*text-align: left;*/
  /*padding-left: 20%;*/
}

	.app-container {
		/* background-color: #fff; */
	}

	.charts {
		/* background-color: #fff; */
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
	}
	.k-title{
		top:1.8vh;
	}
	.k-title2{
		top: 1.4vh;
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
		width: calc(8.5vw);
		min-width: 110px;
		height: calc(5.4vw);
		min-height: 90px;
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


	.all-box img,.all-box2 img{
		width: 100%;
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
		height:30px;

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
		height: 40vh;
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

		.half {
			font-size: 12px;
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
