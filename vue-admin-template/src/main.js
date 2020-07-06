import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import '@/icons' // icon
import '@/permission' // permission control

//引入基本模板
 let echarts = require('echarts/lib/echarts')
 import 'echarts-liquidfill'
// 引入饼状图组件
require('echarts/lib/chart/pie')
require('echarts/lib/chart/bar')
require('echarts/lib/chart/map')
require('echarts/lib/chart/gauge')
require('echarts/lib/chart/line')
require('echarts/lib/chart/radar')
require('echarts/lib/chart/effectScatter')
require('echarts/lib/chart/scatter')
// 引入提示框和title组件，图例
require('echarts/lib/component/tooltip')
require('echarts/lib/component/geo')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')
require('echarts/lib/component/visualMap')

Vue.prototype.$echarts = echarts //引入组件
Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

import axios from 'axios'
Vue.prototype.$http = axios


// //引入轮播
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// Vue.use(VueAwesomeSwiper)
// 使用 ssr的方式
// if (process.browser) {
//   const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
//   Vue.use(VueAwesomeSwiper)
// }

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
