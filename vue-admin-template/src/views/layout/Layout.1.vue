<template>
	<div class="app-wrapper" :style="{'min-height':minheight}">
		<div class="topimg">
			<!-- <div class="name-box">
				<div class="name">
					{{name}}
				</div>
			</div> -->
			<img src="../../../static/img/top.png" alt="">
			<div class="logo">
				<img src="../../../static/img/logo.png" alt="">
			</div>
			<p class="h1">大数据可视化平台</p>
			<div class="time-box">
				<div class="time">{{date}}</div>
				<div class="qp" id="qp" @click="fullscreen">
					<img src="../../../static/img/qp.png" alt="">
				</div>
				<div class="exit" id="" @click="exit">
					<img src="../../../static/img/exit.png" alt="">
				</div>
				<!-- <div class="qp" @click="fullScreen" v-show="isFullScreen">
					<img src="../../../static/img/tcqp.png" alt="">
				</div> -->
			</div>

		</div>
		<!-- <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"/> -->
		<!-- <sidenav class="sidebar-container"/> -->
		<div class="flex">
			<div class="layout">
				<Sidenav />

			</div>
			<div class="main">
				<app-main />
			</div>
		</div>


	</div>
</template>

<script>
	import {
		Navbar,
		Sidebar,
		AppMain,
		Sidenav
	} from './components'
	import screenfull from 'screenfull'
	// import ResizeMixin from './mixin/ResizeHandler'
	export default {
		name: 'Layout',
		components: {
			Navbar,
			Sidebar,
			AppMain,
			Sidenav,
		},
		data() {
			return {
				minheight: "0px",
				layoutheight: "0px",
				screenWidth: document.body.clientWidth,
				thispath: "",
				isFullscreen: false,
				date: "",
				name: "佛山市南海区里水中心小学里水中心小学"
			}
		},
		// mixins: [ResizeMixin],
		mounted() {
			this.minheight = window.innerHeight + "px";
			this.layoutheight = window.innerHeight - 38 + "px";
			const that = this;
			window.addEventListener('resize', function() {
				that.minheight = window.innerHeight + "px";
				that.layoutheight = window.innerHeight - 38 + "px";
			});

			this.timer = setInterval(function() {
				var d = new Date();
				var seperator1 = "-";
				var seperator2 = ":";
				var year = d.getFullYear();
				var month = d.getMonth() + 1;
				var strDate = d.getDate();
				var hour = d.getHours();
				var minute = d.getMinutes();
				var second = d.getSeconds();
				if (month >= 1 && month <= 9) {
					month = "0" + month;
				}
				if (strDate >= 0 && strDate <= 9) {
					strDate = "0" + strDate;
				}
				if (hour >= 0 && hour <= 9) {
					hour = "0" + hour
				}
				if (minute >= 0 && minute <= 9) {
					minute = "0" + minute
				}
				if (second >= 0 && second <= 9) {
					second = "0" + second
				}
				var currentdate = year + seperator1 + month + seperator1 + strDate + " " + hour + seperator2 + minute +
					seperator2 + second;
				that.date = currentdate;
			}, 1000)


		},
	
		computed: {
			isFullScreen: function() {
				return document.isFullScreen || document.mozIsFullScreen || document.webkitIsFullScreen
			},
		},
		methods: {
			fullscreen(){
				// var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
				if (!screenfull.enabled) { // 如果不允许进入全屏，发出不允许提示
// 				    this.$message({
// 				      message: '不支持全屏',
// 				      type: 'warning'
// 				    })
				    return false
				 }
				   screenfull.toggle()
				 
			},
					exit() {
							var that = this;
							this.$confirm('确定要退出登录吗？', '警告', {
								confirmButtonText: '确定',
								cancelButtonText: '取消',
								type: 'warning'
							}).then(() => {
								that.$store.dispatch('FedLogOut').then(() => {
			// 						that.$router.push({
			// 							path: '/login'
			// 						})
			location.reload() // 为了重新实例化vue-router对象 避免bug
								}).catch(() => {
			
								})
							}).catch(() => {
								
							});
			
				}

		}
	}
</script>
<style>
	html,body{
		width: 100%;
	}
</style>
<style scoped>
	.layout {
		width: calc(13vw);
		/* height:100%; */
		/* margin-top:38px ; */
		/* position: absolute;
		z-index: 5;
		top: 38px;
		left: 0; */


	}

	.main {
		/* position: absolute;
		z-index: 5;
		left: calc( 13vw );
		top: calc(12vh); */
		width: 86%;

		/* height: calc( 100% - 120px ); ; */
		/* background-color: #18C6FF; */
		/* overflow: hidden; */
	}

	.topimg {
		/* position: absolute;
		top: 36px; */
		padding-top: 36px;
		width: 100%;
		min-width: 1280px;
		position: relative;
	}

	.h1 {
		position: absolute;
		top: 20px;
		left: 0;
		right: 0;
		z-index: 2;
		text-align: center;
		margin: 0 auto;
		font-size: 24px;
		color: #ffffff;
		font-weight: 600;
	}
	.logo{
		position: absolute;
		top: 15px;
		left:42%;
		z-index: 2;
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		
	}
	.time-box {
		position: absolute;
		top: 51px;
		right: 2.7%;
		display: flex;
		align-items: center;
	}

	.time-box .time {
		font-size: 28px;
		color: #fff;
	}

	.qp {
		width: calc(2.3vw);
		height: calc(2.5vw);
		/* margin-left: .5vw; */
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.qp img {
		height: 100%;
		width: 100%;

	}
.exit {
		width: calc(2.3vw);
		height: calc(2.5vw);
		/* margin-left: 0.5vw; */
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.exit img {
		max-height: 60%;
		max-width: 60%;

	}
	.name-box {
		position: absolute;
		top: 51px;
		left: 1.3vw;
		display: flex;
		align-items: center;
		height: 2.5vw;
	}

	.name-box .name {
		font-size: 24px;
		color: #fff;
	}

	.app-wrapper {
		/* position: relative; */
		background: -webkit-radial-gradient(#031228, #001e35);
		background: -o-radial-gradient(#031228, #001e35);
		background: -moz-radial-gradient(#031228, #001e35);
		background: radial-gradient(#031228, #001e35);
		/* background-color: red; */
		min-width: 1280px;
	}

	@media screen and (min-width:1440px) and (max-width:1900px) {
		.time-box {
			top: 47px;
		}
		.logo{
			left: 40%;
		}
		.time-box .time {
			font-size: 20px;
		}

		.name-box {
			top: 47px;
		}

		.name-box .name {
			font-size: 20px;
		}
	}

	@media screen and (max-width:1439px) {
		.time-box {
			top: 47px;
		}
		.logo{
			left: 39%;
		}
		.time-box .time {
			font-size: 16px;
		}

		.name-box {
			top: 47px;
		}

		.name-box .name {
			font-size: 16px;
		}
	}
	@media screen and (max-width:1279px) {
		.logo{
			left: 38%;
		}
		.layout{
			width: 150px;
		}
		.main{
			width:1130px;
		}
		.qp,.exit{
			width: 30px;
			height: 30px;
		}
	}
</style>
