<template>
  <div class="app-container flex" id="app-main">
    <div style class="lt">
      <div class="dt jg" style="width:100%;height:54vh;">
        <div class="charts" id="chartsdt" style="width: 100%;height:100%;"></div>
        <div class="visualMapMark"></div>
        <div class="sel-box">
          <el-select v-model="date" placeholder="请选择" @change="dthastime">
            <el-option v-for="item in sp_sel" :key="item.str" :label="item.str" :value="item.time"></el-option>
          </el-select>
        </div>
        <div class="all-box">
          <img src="../../../static/img/all.png" alt />
          <div class="all-div">
            <div class="all-div-title">告警总数量</div>
            <div class="fs" style="color: #ffba50;">{{getmap.total == '' ? 0 :getmap.total}}</div>
          </div>
        </div>
      </div>
      <div class="k" style="width: 100%;height:27.5vh;position: relative;">
        <img src="../../../static/img/k3.png" alt />

        <div style class="zx">
          <div class="zx-title">
            <img src="../../../static/img/linetitle.png" alt style="margin: 0 auto;" />
            <div class="zx-tit-text">告警趋势</div>
          </div>
          <div
            class="tit"
            v-for="item in chart_name"
            :key="item.name"
            style="position: absolute;z-index: 88; top: 20px;left: 20px;"
          >{{item.name}}</div>
          <div class="charts" id="chartsaq" style="width: 90%;height:70%;"></div>
        </div>
      </div>
      <!-- 	<div style="width: 100%;margin-bottom: 10px;" class="">



      </div>-->
    </div>
    <div style class="flex fl-wa ri">
      <div class="k kr" style>
        <img src="../../../static/img/k4.png" alt />
        <div class="k-title">告警类型情况</div>
        <div class="charts" id="chartszg" style="width: 90%;height:90%;">
          <div
            style="displayflex;width:calc(9.3vw);height:calc(7.8vw) ;margin: 0 auto;margin-top:8vh ;align-items: center;justify-content: center;"
          >
            <img src="../../../static/img/nodeta.png" alt style="max-width: 100%;max-height: 100%;" />
          </div>

          <div style="color: #18c5ff;margin: 0 auto;margin-top: 30px;text-align: center;">暂无数据</div>
        </div>

        <div class="tl flex">
          <div class="half" style="width: 50%;"></div>
        </div>
      </div>
      <div class="k kr" style="margin-bottom: 10px;">
        <img src="../../../static/img/k4.png" alt />
        <div class="k-title">告警处理情况</div>
        <div class="charts" id="chartsfb" style="width: 90%;height:90%;">
          <!-- <div
            v-if="gjNonZwsj"
            style="displayflex;width:calc(9.3vw);height:calc(7.8vw) ;margin: 0 auto;margin-top:8vh ;align-items: center;justify-content: center;"
          > -->
          <div
            style="displayflex;width:calc(9.3vw);height:calc(7.8vw) ;margin: 0 auto;margin-top:8vh ;align-items: center;justify-content: center;"
          >
            <img src="../../../static/img/nodeta.png" alt style="max-width: 100%;max-height: 100%;" />
          </div>
          <div
            style="color: #18c5ff;margin: 0 auto;margin-top: 30px;text-align: center;"
          >暂无数据</div>
          <!-- <div
            v-if="gjNonZwsj"
            style="color: #18c5ff;margin: 0 auto;margin-top: 30px;text-align: center;"
          >暂无数据</div> -->
        </div>

        <div class="tl flex">
          <div class="half" style="width: 50%;">
            <div class="text flex al-c" style="margin-bottom: 10px;" v-if="classify.data.length>0">
              <div
                style="width: 10px;height: 10px;background-color:#ed5151;margin-right: calc(0.4vw);"
              ></div>
              {{classify.data[0].name}}：
              <span class="val">{{classify.data[0].value}}</span>
            </div>
            <div class="text flex al-c" v-if="classify.data.length>2">
              <div
                style="width: 12px;height: 12px;background-color:#ffdd40;margin-right: calc(0.4vw);"
              ></div>
              {{classify.data[2].name}}：
              <span class="val">{{classify.data[2].value}}</span>
            </div>
            <div class="text flex al-c" v-if="classify.data.length>4">
              <div
                style="width: 12px;height: 12px;background-color:#37ddcd;margin-right: calc(0.4vw);"
              ></div>
              {{classify.data[4].name}}：
              <span class="val">{{classify.data[4].value}}</span>
            </div>
          </div>
          <div class="half" style="width: 50%;">
            <div class="text flex al-c" style="margin-bottom: 10px;" v-if="classify.data.length>1">
              <div
                style="width: 12px;height: 12px;background-color:#f58080;margin-right: calc(0.4vw);"
              ></div>
              {{classify.data[1].name}}：
              <span class="val">{{classify.data[1].value}}</span>
            </div>
            <div class="text flex al-c" v-if="classify.data.length>3">
              <div
                style="width: 12px;height: 12px;background-color:#85d7fe;margin-right: calc(0.4vw);"
              ></div>
              {{classify.data[3].name}}：
              <span class="val">{{classify.data[3].value}}</span>
            </div>
            <div class="text flex al-c" v-if="classify.data.length>5">
              <div
                style="width: 12px;height: 12px;background-color:#ef922e;margin-right: calc(0.4vw);"
              ></div>
              {{classify.data[5].name}}：
              <span class="val">{{classify.data[5].value}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="k kbom" style="margin-bottom: 4%;margin-left: 2.8%;margin-right: 1%;">
        <img src="/static/img/k7.png" alt />
        <div class="k-title" style="left: 43%;top: 1.3vh;">实时告警信息</div>
        <div class="bottom" style="top: 12%;">
          <div style="height: 30vh;" class="warn-data">
            <div class="th">
              <div class="td" style="width: 20%;font-size: 12px;">告警标题</div>
              <div class="td" style="width: 20%;font-size: 12px;">告警学校</div>
              <div class="td" style="width: 12%;font-size: 12px;">告警类型</div>
              <div class="td" style="width: 12%;font-size: 12px;">告警级别</div>
              <div class="td" style="width: 12%;font-size: 12px;">告警状态</div>
              <div class="td" style="width: 15%;font-size: 12px;">开始时间</div>
            </div>
            <swiper :options="swiperOption" ref="mySwiper" class="swiper-swiping">
              <swiper-slide v-for="(item,index) in warnData" :key="index" class="swiper-swiping1">
                <div class="tr">
                  <div class="td" style="width: 20%;font-size: 12px;">{{item.alarmTitle}}</div>
                  <div class="td" style="width: 20%;font-size: 12px;">{{item.schoolName}}</div>
                  <div class="td" style="width: 12%;font-size: 12px;">{{item.alarmType}}</div>
                  <div class="td" style="width: 12%;font-size: 12px;">{{item.alarmLevel}}</div>
                  <div class="td" style="width: 12%;font-size: 12px;">{{item.alarmState}}</div>
                  <div class="td" style="width: 15%;font-size: 12px;">{{item.startTime}}</div>
                </div>
              </swiper-slide>
              <!-- <div class="swiper-pagination" slot="pagination"></div> -->
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import {
  getdt,
  city,
  trend_chart,
  overall,
  rate,
  classify,
  source,
  getmap,
  getGjxx
} from "@/api/alarmmon";
import {
  center,
  getdatelist,
  debounce,
  center2,
  getnowdate
} from "@/utils/index";
export default {
  data() {
    return {
      list: null,
      pm: ["", "", "", "", "", "", "", "", "", ""],
      listLoading: true,
      screenWidth: document.body.clientWidth,
      sp_sel: [],
      date: "",
      trend_chart: [], //告警趋势数据
      overall: {}, //校园整改情况
      classify: {
        res: [], //获取的数据
        data: [] //图表series
      }, //告警分布
      source: {
        res: [], //获取的数据
        data: [] //图表series
      }, //上报来源
      getmap: {
        total: 0
      },
      chart_name: {
        name: ""
      },
      chart: null,
      chartly: null,
      chartdt: null,
      chartfb: null,
      chartaq: null,
      swiperOption: {
        direction: "vertical",
        loop: true,
        autoplay: 1000,
        slidesPerView: 10,
        noSwiping: true,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true //修改swiper的父元素时，自动初始化swiper
      },
      warnData: [
        // {
        //   time: "2019年10月23日17:09:13",
        //   school: "杨和镇中心小学",
        //   address: "教学楼A座西边楼梯1楼",
        //   type: "人员密集",
        //   state: "已处理",
        //   callback: "学生放学，已疏导"
        // }
      ],
      currentPage: 1,
      pageSzie: 10,
      xztime: "",
      gjlxZwsj: false,
      gjNonZwsj: true
    };
  },
  created() {
    this.sp_sel = getdatelist();
    this.date = this.sp_sel[0].str;
    this.xztime = this.sp_sel[0].time;
    this.getDqMap();
    this.gjbzt();
    this.getQst();
    this.fetchData();
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {},
  mounted() {
    setInterval(() => {
      this.fetchData();
    }, 180000);
    // setTimeout(function() {
    //   that.fetchData();
    // }, 1000);
    // this.fetchData();
    // setInterval(() => {
    //   this.fetchData();
    // }, 180000)
    // let param = {
    //   schoolId: "1",
    //   date: this.xztime
    // };
    // let tyParam = JSON.stringify(param);
    // var that = this;
    // classify().then(response => {
    //   var series = [];
    //   that.classify.res = response.data;
    //   for (var i in response.data) {
    //     var item = {
    //       value: parseFloat(response.data[i].number),
    //       name: response.data[i].name
    //     };
    //     series.push(item);
    //   }
    //   that.classify.data = series;
    //   that.initChartsfb();
    // });
    //   source().then(response => {
    //     var series = [];
    //     that.source.res = response.data;
    //     for (var i in response.data) {
    //       var item = {
    //         value: parseFloat(response.data[i].number),
    //         name: response.data[i].name
    //       };
    //       series.push(item);
    //     }
    //     that.source.data = series;
    //     that.initChartsly();
    //   });
    //
    // this.initChartsly();
    // var height = document.getElementById("app-main").offsetHeight;
    // this.__resizeHandler = debounce(() => {
    //   if (this.chart) {
    //     this.chart.resize();
    //   }
    //   if (this.chartfb) {
    //     this.chartfb.resize();
    //   }
    //   if (this.chartdt) {
    //     this.chartdt.resize();
    //   }
    //   if (this.chartly) {
    //     this.chartly.resize();
    //   }
    //   if (this.chartaq) {
    //     this.chartaq.resize();
    //   }
    // }, 100);
    // window.addEventListener("resize", this.__resizeHandler);
  },

  methods: {
    swipering() {
      this.$refs.mySwiper.swiper;
    },
    getQst() {
      let param = {
        schoolId: "1",
        date: this.xztime
      };
      trend_chart(param).then(response => {
        console.log("---trend_chart-----");
        console.log(JSON.stringify(response.data));
        console.log("--------");
        var a = [],
          c = [],
          b = [];
        var b1 = [],
          b2 = [],
          b3 = [],
          b4 = [];
        if (
          JSON.stringify(response.data) != "{}" &&
          response.data != undefined
        ) {
          if (response.data.records.length > 0) {
            for (var e in response.data.records) {
              c.push(response.data.records[e].name);
            }
            for (var u in response.data.records[0].values) {
              a.push(response.data.records[0].values[u].month + "月");
            }
            for (var i in response.data.records[0].values) {
              b1.push(parseFloat(response.data.records[0].values[i].count));
            }
            for (var i in response.data.records[1].values) {
              b2.push(parseFloat(response.data.records[1].values[i].count));
            }
            for (var i in response.data.records[2].values) {
              b3.push(parseFloat(response.data.records[2].values[i].count));
            }
            for (var i in response.data.records[3].values) {
              b4.push(parseFloat(response.data.records[3].values[i].count));
            }

            // for (var y=0; y < c.length; y++ ){
            //  this.trend_chart[3] = {
            //     name: c[y].name,
            //     // value: allList[i].moduleName,
            //   };
            //  debugger;
            //   alert(this.trend_chart[3])
            // }
            this.trend_chart[1] = c;
            this.trend_chart[0] = a;
            this.trend_chart[2] = b;
            this.trend_chart[3] = b1;
            this.trend_chart[4] = b2;
            this.trend_chart[5] = b3;
            this.trend_chart[6] = b4;
            // window.alert(c);
            this.initChartsaq();
          }
        } else {
          this.initChartsaq();
        }
      });
    },
    getDqMap() {
      getmap(this.xztime).then(response => {
        let jia = response.data;
        // console.log(JSON.stringify(jia))
        // console.log('==========')
        let selcity = "";
        if (jia) {
          if (JSON.stringify(jia) != "{}") {
            if (jia.records) {
              selcity = jia.records[0].county;
            } else {
              selcity = jia.city_code;
            }

            if (selcity == "110100") {
              selcity = "110000";
            }
            if (selcity == "310100") {
              selcity = "310000";
            }
            if (selcity == "120100") {
              selcity = "120000";
            }
            if (selcity == "500100") {
              selcity = "500000";
            }
            var total = 0;
            var serious = 0;
            var color = [];
            var max = 0;
            if (jia.records) {
              for (var i in jia.records) {
                total += parseInt(jia.records[i].alarmCount);
                serious += parseInt(jia.records[i].alarmCount);
                if (parseInt(jia.records[i].alarmCount) > max) {
                  max = jia.records[i].alarmCount;
                }
              }
            }
            var array = "";
            if (jia.records) {
              array = city(jia.records);
            }

            this.getmap = {
              total: total,
              serious: serious,
              array: array
            };
            color.push(Math.round(max / 4));
            color.push(Math.round(max / 2));
            color.push(Math.round((max / 4) * 3));
            color.push(parseInt(max));

            var data = [
              {
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
                      color: "#10242b"
                    }
                  },
                  emphasis: {
                    opacity: 0,
                    label: {
                      show: false
                    }
                  }
                }
              }
            ];
            for (var i in array) {
              var item = {
                name: array[i].area,
                value: array[i].alarmCount
              };
              data.push(item);
            }

            // that.getmap = response.data;
            getdt(jia.province_code, jia.city_code).then(response => {
              this.initChartsdt(response, jia.area, data, color);
            });
          }
        }
      });
    },
    fetchData() {
      var param = {
        current: this.currentPage,
        size: this.pageSzie,
        schoolId: "",
        date: this.xztime
      };
      getGjxx(param).then(response => {
        if (response.data) {
          if (JSON.stringify(response.data) != "{}") {
            if (response.data.records.length > 0) {
              // ts.swipering();
              this.warnData = response.data.records;
              setTimeout(function() {
                var mySwiper = new Swiper(".swiper-swiping", {
                  direction: "vertical",
                  loop: true,
                  autoplay: 1000,
                  slidesPerView: 10,
                  noSwiping: true,
                  observer: true, //修改swiper自己或子元素时，自动初始化swiper
                  observeParents: true //修改swiper的父元素时，自动初始化swiper
                });
              }, 100);
            } else {
              this.warnData = [];
              setTimeout(function() {
                var mySwiper = new Swiper(".swiper-swiping", {
                  direction: "vertical",
                  loop: true,
                  autoplay: 1000,
                  slidesPerView: 10,
                  noSwiping: true,
                  observer: true, //修改swiper自己或子元素时，自动初始化swiper
                  observeParents: true //修改swiper的父元素时，自动初始化swiper
                });
              }, 100);
            }
          }
        } else {
          this.warnData = [];
        }
      });
    },
    gjbzt() {
      var param = {
        schoolId: "",
        date: this.xztime
      };
      var param2 = {
        date: this.xztime
      };
      overall(param).then(response => {
        console.log("overall");
        console.log(JSON.stringify(response.data));
        console.log("-----");
        if (response) {
          if (response.data) {
            if (JSON.stringify(response.data) != "{}") {
              this.overall = response.data.records;
              // this.overall = [{"alarmModule":"1","alarmCount":96,"moduleName":"治安监控"},{"alarmModule":"2","alarmCount":222,"moduleName":"校车安全"}]
              this.initChartszg();
            } else {
              this.overall = [];
              var param = {
                alarmCount: 0,
                alarmModule: "0",
                moduleName: "无数据"
              };
              this.overall.push(param);
              this.initChartszg();
            }
          } else {
            this.overall = [];
            var param = {
              alarmCount: 0,
              alarmModule: "0",
              moduleName: "无数据"
            };
            this.overall.push(param);
            this.initChartszg();
          }
        }
      });
      // rate(param2).then(response => {
      //   alert(JSON.stringify(response.data))
      // });
      rate(param2).then(response => {
        // 暂时先用着classify去存放rate的数据
        // alert(JSON.stringify(response.data.records));
        var resdata = response.data.records
        var that = this
        var series = [];
        that.classify.res = resdata;
        for (var i in resdata) {
          var item = {
            value: parseFloat(resdata[i].number),
            name: resdata[i].name
          };
          series.push(item);
        }
        // 先模拟数据
        that.classify.data = series;
        // alert(JSON.stringify(series))
        // that.classify.data = [{"value":3,"name":"学校自查"},{"value":28,"name":"上级督查"}];
        that.initChartsfb();
      });
    },

    dthastime(e) {
      this.xztime = e;
      // alert(this.xztime);
      this.getDqMap();
      this.gjbzt();
      this.getQst();
      this.fetchData();
    },
    initChartszg() {
      this.chart = this.$echarts.init(document.getElementById("chartszg"));
      this.setOptionszg();
      let index = 0;
      // //设置默认选中高亮部分
      this.chart.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: 0
      });
      // 当鼠标移入时，如果不是第一项，则把当前项置为选中，如果是第一项，则设置第一项为当前项
      let obj = this.$echarts.init(document.getElementById("chartszg"));
      obj.on("mouseover", function(e) {
        obj.dispatchAction({ type: "downplay", seriesIndex: 0, dataIndex: 0 });
        if (e.dataIndex != index) {
          obj.dispatchAction({
            type: "downplay",
            seriesIndex: 0,
            dataIndex: index
          });
        }
        if (e.dataIndex == 0) {
          obj.dispatchAction({
            type: "highlight",
            seriesIndex: 0,
            dataIndex: e.dataIndex
          });
        }
      });

      //当鼠标离开时，把当前项置为选中
      obj.on("mouseout", function(e) {
        index = e.dataIndex;
        obj.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: e.dataIndex
        });
      });
    },
    initChartsfb() {
      this.chartfb = this.$echarts.init(document.getElementById("chartsfb"));
      this.setOptionsfb();
    },
    initChartsdt(response, name, data, color) {
      this.chartdt = this.$echarts.init(document.getElementById("chartsdt"));
      var that = this;
      this.setOptionsdt(response, name, data, color);
      setTimeout(function() {}, 300);
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
      let allList = [];
      allList = this.overall;
      let titleDatas = [];
      let datas = [];
      let colors = [
        "#FF0000",
        "#00FF00",
        "#0000FF",
        "#FFFF00",
        "#00FFFF",
        "#FF00FF"
      ];
      for (let i = 0; i < allList.length; i++) {
        if (allList[i].moduleName) {
          let data = {
            name: allList[i].moduleName,
            value: allList[i].alarmCount,
            itemStyle: {
              color: colors[i]
            }
          };
          datas.push(data);
          let titleData = {
            name: allList[i].moduleName,
            // value: allList[i].moduleName,
            itemStyle: {
              color: colors[i]
            }
          };
          titleDatas.push(titleData);
        }
      }
      this.chart.setOption({
        tooltip: {
          formatter: "{b} <br> 占比：{d}%"
        },
        legend: {
          // orient 设置布局方式，默认水平布局，可选值：'horizontal'（水平） ¦ 'vertical'（垂直）
          orient: "horizontal",
          // x 设置水平安放位置，默认全图居中，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
          x: "center",
          // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
          y: "bottom",
          itemWidth: 24, // 设置图例图形的宽
          itemHeight: 14, // 设置图例图形的高
          textStyle: {
            color: "#FFFFFF" // 图例文字颜色
          },
          // itemGap设置各个item之间的间隔，单位px，默认为10，横向布局时为水平间隔，纵向布局时为纵向间隔
          itemGap: 10,
          // backgroundColor: "#eee", // 设置整个图例区域背景颜色
          selectedMode: false,
          // show: false,
          data: titleDatas
        },

        series: [
          {
            name: "整体情况",
            type: "pie",
            clockWise: false,
            radius: ["40%", "70%"],
            center: ["50%", "40%"],
            roseType: "radius",
            label: {
              normal: {
                show: false,
                position: "center",
                formatter: function(data) {
                  // 设置圆饼图中间文字排版
                  return data.value + "\n" + data.name;
                }
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "14",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false,
                  smooth: 0.2,
                  length: 2,
                  length2: 2
                }
              }
            },
            hoverAnimation: true,
            data: datas
          }
        ]
      });
    },
    setOptionsfb() {
      // devin注释
      this.chartfb.setOption({
        tooltip: {
          formatter: "{b} <br> 占比：{d}%"
        },
        series: [
          {
            name: "告警分布",
            type: "pie",
            clockwise: true,
            startAngle: "90",
            center: ["50%", "40%"],
            radius: ["0", "43%"],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: "{d}%",
                  position: "inside",
                  // color:"#000",
                  fontSize: "12"
                },
                labelLine: {
                  show: true
                }
              }
            },
            hoverAnimation: true,
            color: [
              "#e83e3e",
              "#f58080",
              "#ffdd40",
              "#85d7fe",
              "#37ddcd",
              "#ef922e"
            ],
            data: this.classify.data
          }
        ]
      });
    },
    setOptionsdt(dtdata, name, data, color) {
      for (var i in dtdata.features) {
        var flag = 0;
        for (var j in data) {
          if (data[j].name == dtdata.features[i].properties.name) {
            flag = 1;
          }
        }
        if (flag == 0) {
          data.push({
            name: dtdata.features[i].properties.name,
            value: 0
          });
        }
      }
      var that = this;
      that.$echarts.registerMap("gd", dtdata);
      that.chartdt.setOption({
        tooltip: {
          trigger: "item",
          formatter: function(params) {
            var toolTiphtml = "";
            for (var i = 0; i < that.getmap.array.length; i++) {
              if (params.name == that.getmap.array[i].area) {
                toolTiphtml =
                  that.getmap.array[i].area +
                  "<br>告警总数:" +
                  that.getmap.array[i].alarmCount;
              }
            }
            return toolTiphtml;
          }
        },
        toolbox: {
          show: false,
          orient: "vertical",
          left: "right",
          top: "center",
          feature: {
            // dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
          }
        },
        visualMap: {
          type: "piecewise", //分段型。
          splitNumber: 4,
          inverse: false,
          pieces: [
            {
              min: 0,
              max: color[0],
              label: "0-" + color[0],
              color: "#e6ffce"
            },
            {
              min: color[0] + 1,
              max: color[1],
              label: color[0] + 1 + "-" + color[1],
              color: "#c1ff84"
            },
            {
              min: color[1] + 1,
              max: color[2],
              label: color[1] + 1 + "-" + color[2],
              color: "#05db00"
            },
            {
              min: color[2] + 1,
              max: color[3],
              label: color[2] + 1 + "-" + color[3],
              color: "#0daf09"
            }
          ],
          left: "10",
          bottom: "10",
          textStyle: {
            color: "#fff"
          }
          //min: 0,
          //max: 60000,
          //text:['High','Low'],
          //realtime: true,
          //calculable: true,
          //color: ['red','orange','lightgreen']
        },
        series: [
          {
            name: "gd",
            type: "map",
            roam: true,
            center: center2(dtdata),
            // layoutCenter: ['50%', '50%'],
            left: "25%",
            top: "10%",
            // layoutSize: 500,
            zoom: 1.2,
            scaleLimit: {
              min: 0.1,
              max: 3
            },
            hoverAnimation: true,
            mapType: "gd", // 自定义扩展图表类型
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
                }
              } //鼠标指向目标时地图文字标注是否显示
            },
            data: data
            // 自定义名称映射
          }
        ]
      });
    },
    setOptionsly() {
      this.chartly.setOption({
        tooltip: {
          formatter: "{b} <br> 占比：{d}%"
        },
        series: [
          {
            name: "上报来源",
            type: "pie",
            roseType: "radius",
            clockwise: true,
            startAngle: "90",
            radius: ["0", "55%"],
            center: ["50%", "40%"],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: "{d}%",
                  position: "inside",
                  // color:"#000",
                  fontSize: "12"
                },
                labelLine: {
                  show: true
                }
              }
            },
            hoverAnimation: true,
            color: [
              "#3f82fd",
              "#ff8124",
              "#19c79c",
              "# fa2e2e",
              "#f3c420",
              "#a751ff"
            ],
            data: this.source.data
          }
        ]
      });
    },
    setOptionsaq() {
      this.chartaq.setOption({
        // backgroundColor: "#05224d",
        grid: {
          top: "15%",
          left: "10px",
          right: "10px",
          bottom: "0%",
          containLabel: true
        },
        tooltip: {},
        legend: {
          data: this.trend_chart[1],
          textStyle: {
            color: "#107eaa"
            // margin: 15
          }
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          axisLine: {
            //坐标轴轴线相关设置。数学上的x轴
            show: true,
            lineStyle: {
              color: "#107eaa"
            }
          },
          splitLine: {
            //网格线
            show: true,
            lineStyle: {
              color: ["#0f4178"],
              type: "solid"
            }
          },
          axisLabel: {
            //坐标轴刻度标签的相关设置
            show: true,
            textStyle: {
              color: "#d1e6eb",
              margin: 15
            }
          },
          axisTick: {
            show: false
          },
          data: this.trend_chart[0]
        },
        yAxis: {
          type: "value",
          axisLabel: {
            //坐标轴刻度标签的相关设置
            show: true,
            textStyle: {
              color: "#d1e6eb",
              margin: 15
            }
          }
        },
        series: [
          {
            symbol: "circle", // 默认是空心圆（中间是白色的），改成实心圆
            name: "治安监控",
            type: "line",
            // stack: '总量',//加上这个变量会导致多条数据的时候 数据与纵坐标不符合
            data: this.trend_chart[3]
            // data:[0,0,0,0,0,0,930,0,0,782,0,330]
          },
          {
            symbol: "circle", // 默认是空心圆（中间是白色的），改成实心圆
            name: "校车安全",
            type: "line",
            // stack: '总量',//加上这个变量会导致多条数据的时候 数据与纵坐标不符合
            data: this.trend_chart[4]
          },
          {
            symbol: "circle", // 默认是空心圆（中间是白色的），改成实心圆
            name: "消防安全",
            type: "line",
            // stack: '总量',//加上这个变量会导致多条数据的时候 数据与纵坐标不符合
            data: this.trend_chart[5]
          },
          {
            symbol: "circle", // 默认是空心圆（中间是白色的），改成实心圆
            name: "食品安全",
            type: "line",
            // stack: '总量',//加上这个变量会导致多条数据的时候 数据与纵坐标不符合
            data: this.trend_chart[6]
          }
        ]

        //       legend: {
        //         data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
        //       },
        //       xAxis: [
        //         {
        //           type: "category",
        //           boundaryGap: false,
        //           axisLine: {
        //             //坐标轴轴线相关设置。数学上的x轴
        //             show: true,
        //             lineStyle: {
        //               color: "#107eaa"
        //             }
        //           },
        //           splitLine: {
        //             //网格线
        //             show: true,
        //             lineStyle: {
        //               color: ["#0f4178"],
        //               type: "solid"
        //             }
        //           },
        //           axisLabel: {
        //             //坐标轴刻度标签的相关设置
        //             show: true,
        //             textStyle: {
        //               color: "#d1e6eb",
        //               margin: 15
        //             }
        //           },
        //           axisTick: {
        //             show: false
        //           },
        //           data: this.trend_chart[0]
        //         }
        //
        //       ],
        //       yAxis: [
        //         {
        //           type: "value",
        //           min: 0,
        //           // max: 140,
        //           splitNumber: 6,
        //           splitLine: {
        //             show: true,
        //             lineStyle: {
        //               color: "#0f4178"
        //             }
        //           },
        //           axisLine: {
        //             show: true
        //           },
        //           axisLabel: {
        //             margin: 20,
        //             textStyle: {
        //               color: "#d1e6eb"
        //             }
        //           },
        //           axisTick: {
        //             show: false
        //           }
        //         }
        //       ],
        //       tooltip: {
        //         formatter: "{a}：<br/>{b}: {c}次"
        //       },
        //       series: [
        //         {
        //           name: "告警趋势",
        //           type: "line",
        //           // smooth: true, //是否平滑曲线显示
        //           symbol: "circle", // 默认是空心圆（中间是白色的），改成实心圆
        //           showAllSymbol: true,
        //           // symbol: 'emptyCircle',
        //           symbolSize: 6,
        //           lineStyle: {
        //             normal: {
        //               color: "rgba(0,0,0,0)" // 线条颜色
        //             },
        //             borderColor: "#f0f"
        //           },
        //           label: {
        //             show: true,
        //             position: "top",
        //             textStyle: {
        //               color: "#fff"
        //             }
        //           },
        //           itemStyle: {
        //             color: "#ff7639"
        //           },
        //
        //           areaStyle: {
        //             //区域填充样式
        //             normal: {
        //               //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
        //               color: new this.$echarts.graphic.LinearGradient(
        //                 0,
        //                 0,
        //                 0,
        //                 1,
        //                 [
        //                   {
        //                     offset: 0,
        //                     color: "rgba(255,118,57,1)"
        //                   },
        //                   {
        //                     offset: 1,
        //                     color: "rgba(255,221,139, 0.6)"
        //                   }
        //                 ],
        //                 false
        //               ),
        //               shadowColor: "rgba(255,221,139, 0.4)", //阴影颜色
        //               shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
        //             }
        //           },
        //           data: this.trend_chart[1]
        //         }
        //       ]
      });
    }
  }
};
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
.kbom {
  width: calc(120vw);
  height: 41.5vh;
  margin-left: calc(1vw);
}
.k-title {
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
  margin-right: 10px;
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
  background-image: linear-gradient(90deg, #fa0e16 0%, #fa3f2c 100%),
    linear-gradient(#0072d8, #0072d8);
}

.NO2 {
  background-image: linear-gradient(90deg, #ff7200 0%, #ff8e1f 100%),
    linear-gradient(#0072d8, #0072d8);
}

.NO3 {
  background-image: linear-gradient(90deg, #ffb400 0%, #ffd304 100%),
    linear-gradient(#0072d8, #0072d8);
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
.all-box img {
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
.visualMapMark {
  width: 2vw;
  height: 7vw;
  /* background-color: rgba(255,255,255,0.5); */
  position: absolute;
  left: 10px;
  bottom: 10px;
  z-index: 2;
}
@media screen and (max-width: 1440px) {
  .all-div-title {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 14px;
  }
  .fs {
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
@media screen and (max-width: 1366px) {
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
@media screen and (max-width: 1279px) {
  .app-container {
    font-size: 12px;
  }

  .fs {
    font-size: 18px;
  }

  .lt {
    width: 50%;
  }

  .ri {
    width: 50%;
  }

  .kr {
    width: calc(50% - 10px);
    height: 40vh;
    margin-left: 10px;
  }
  .all-box {
    top: 60px;
  }
}
@media screen and (min-height: 1050px) {
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

.warn-data {
  width: 100%;
  height: 100%;
}
.warn-data .th {
  /* margin: 10%,auto,auto,auto; */
  margin: 0 auto;
  margin-top: 1%;
  display: flex;
  align-items: center;
  width: 98%;
  background-color: #052646;
  text-align: center;
  font-size: 25px;
  color: #fff;
  height: 35px;
}
.warn-data .swiper-container {
  width: 98%;
  margin: 0 auto;
  height: 30vh;
}
.warn-data .swiper-slide {
  width: 100%;
}
.warn-data .swiper-slide .tr {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #fff;
}
.warn-data .swiper-slide:nth-child(2n-1) .tr {
  background-color: #0f3b6b;
}
.warn-data .swiper-slide:nth-child(2n) .tr {
  background-color: #052646;
}
.warn-data .swiper-slide .tr .td {
  text-align: center;
}
@media screen and (max-height: 768px) {
  /* .top {
			margin-bottom: 25px;
		} */
  .row-title {
    margin: 0 auto;
  }
  .aq-de-bu {
    margin-top: 0;
    margin-bottom: 0;
  }
  .warn-data .th {
    font-size: 14px;
    color: #fff;
    height: 28px;
  }
  .warn-data .swiper-slide .tr {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #fff;
  }
}
@media screen and (min-height: 1050px) {
  .top {
    margin-bottom: 25px;
  }
  .warn-data .th {
    font-size: 16px;
    color: #fff;
    height: 20px;
  }
}
.bottom {
  position: absolute;
  top: 15px;
  left: 15px;
  display: flex;
  width: calc(100% - 15px - 15px);
  justify-content: space-between;
}
</style>
