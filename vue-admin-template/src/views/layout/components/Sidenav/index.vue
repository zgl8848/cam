<template>
	<div class="sidenav">
		<div class="admin">
			<!-- 	<img src="../../../../../static/img/admin.png" alt="" class="admin-img"> -->

			<div class="name">
				{{name}}
			</div>
			<!-- <div class="exit-box" @click="exit">
				<img src="../../../../../static/img/exit.png" alt="">
			</div> -->
		</div>
		<div class="nav-item" @click="clicknav(2)">
			<div class="nav-ba" :class="click==2?'nav-sel':''">
				<div class="nav-icon">
					<img :src="click==2?'../../../../../static/img/2-2.png':'../../../../../static/img/2.png'" alt="">
				</div>
				<div>安全态势</div>

			</div>
		</div>
		<div class="nav-item" @click="clicknav(3)">
			<div class="nav-ba" :class="click==3?'nav-sel':''">
				<div class="nav-icon">
					<img :src="click==3?'../../../../../static/img/3-3.png':'../../../../../static/img/3.png'" alt="">
				</div>

				安全管理
			</div>
		</div>
		<div class="nav-item" @click="clicknav(1)">
			<div class="nav-ba" :class="click==1?'nav-sel':''">
				<div class="nav-icon">
					<img :src="click==1?'../../../../../static/img/1-1.png':'../../../../../static/img/1.png'" alt="">
				</div>
				<div>视频与台账</div>

			</div>
		</div>

		<div class="nav-item" @click="clicknav(4)">
			<div class="nav-ba" :class="click==4?'nav-sel':''">
				<div class="nav-icon">
					<img :src="click==4?'../../../../../static/img/4-4.png':'../../../../../static/img/4.png'" alt="">
				</div>

				应急演练
			</div>
		</div>
		<div class="nav-item" @click="clicknav(5)">
			<div class="nav-ba" :class="click==5?'nav-sel':''">
				<div class="nav-icon">
					<img :src="click==5?'../../../../../static/img/5-5.png':'../../../../../static/img/5.png'" alt="">
				</div>

				安全督查
			</div>
		</div>
		<!-- <div class="nav-item" @click="clicknav(6)">
			<div class="nav-ba" :class="click==6?'nav-sel':''">
				 <div class="nav-icon">
					  <img :src="click==6?'../../../../../static/img/6-6.png':'../../../../../static/img/6.png'" alt="">
				 </div>
				
				智慧用电
			</div>
		</div> -->
		<div class="nav-item" @click="clicknav(7)">
			<div class="nav-ba" :class="click==7?'nav-sel':''">
				<div class="nav-icon">
					<img :src="click==7?'../../../../../static/img/7-7.png':'../../../../../static/img/7.png'" alt="">
				</div>

				食品安全
			</div>
		</div>
		<!-- <div class="nav-item" @click="clicknav(8)">
			<div class="nav-ba" :class="click==8?'nav-sel':''">
				<div class="nav-icon">
					<img :src="click==8?'../../../../../static/img/8-8.png':'../../../../../static/img/8.png'" alt="">
				</div>

				安全地图
			</div>
		</div> -->
		<div class="nav-item" @click="clicknav(8)">
			<div class="nav-ba" :class="click==8?'nav-sel':''">
				<div class="nav-icon">
					<img :src="click==8?'../../../../../static/img/8-8.png':'../../../../../static/img/8.png'" alt="">
				</div>

				告警监控
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				click: 1,
				thispath: "",
				array: ['/account', '/situation', '/management', '/emergency', '/survey', '/electricity', '/food','/alarmmon'],
				name: "",

			}
		},
		mounted() {
			// console.log(this.$route.name);
			for (var i in this.array) {
				// console.log(this.array[i].indexOf(this.$route.name));
				if (this.array[i].indexOf(this.$route.name) != -1) {
					this.click = parseInt(i) + 1;
					// console.log("this" + (i) + typeof(i))
				}
			}
			this.getname();
			// this.scroll()

		},

		methods: {
			getname() {
				this.name = this.$store.getters.name;
			},
			// 			scroll() {
			// 				var that = this;
			// 				var x = setInterval(function() {
			// 					//获取第一个字符
			// 					var start = that.name.substring(0, 1);
			// 
			// 					//得到后面的字符
			// 					var end = that.name.substring(1);
			// 					//重新赋值
			// 					that.name = end + start;
			// 				}, 500)
			// 			},
			toggleSideBar() {
				this.$store.dispatch('ToggleSideBar')
			},
			logout() {
				this.$store.dispatch('LogOut').then(() => {
					location.reload() // 为了重新实例化vue-router对象 避免bug
				})
			},
			clicknav(id) {
				var that = this;
				this.click = id;
				this.$router.push({
					path: that.array[id - 1]
				});
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

</style>
<style scoped>
	/* .admin{
		width: 200px;
		height: 80px;
		margin-bottom: 30px;
		
	} */
	.admin {
		width: 100%;
		min-height: 40px;
		height: 40px;
		margin-bottom: 15px;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		background: url(../../../../../static/img/admin.png) center center no-repeat;
		background-size: 100% 100%;

	}

	.admin-img {
		position: absolute;
		/* z-index: -1; */
		top: 0;
		left: 0;
		right: 0;
		margin: 0 auto;
		width: 100%;
		height: 100%;
	}

	.name {
		color: #fff;
		width: 90%;
		text-align: center;
		font-size: 16px;
		line-height: 1.5;
		/* overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		position: absolute; */
		/* left: 0;
		right: 0;

		top: 20%; */
		/* margin:0 auto; */
	}

	.exit-box {
		width: 1.6vw;
		height: 1.6vw;
		position: absolute;
		bottom: 0.5vw;
		right: 1.2vw;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		width: 26px\9;
		height: 20px\9;
	}

	.exit-box img {
		max-width: 100%;
		max-height: 100%;
	}

	/* 	.nav-item{
		margin:  auto;
		margin-bottom:18px ;
	 	width: 190px;
		height: 60px;
		padding: 3px;
		border: 2px solid;
    
    border-image: -webkit-linear-gradient(left, rgba(24,198,255,1), rgba(2,143,254,1)) 2 2; 
   	border-image: -o-linear-gradient(right, rgba(24,198,255,1), rgba(2,143,254,1)) 2 2;
		border-image: -moz-linear-gradient(right, rgba(24,198,255,1), rgba(2,143,254,1));
    border-image: linear-gradient(to right, rgba(2,143,254,1), rgba(24,198,255,1)) 2 2; 

	} */
	.nav-item {
		margin: auto;
		margin-bottom: calc(1.8vh);
		width: calc(9.9vw);

		height: calc(6vh);
		padding: 3px;

		border: 2px solid;
		min-width: 100px;
		border-image: -webkit-linear-gradient(left, rgba(24, 198, 255, 1), rgba(2, 143, 254, 1)) 2 2;
		border-image: -o-linear-gradient(right, rgba(24, 198, 255, 1), rgba(2, 143, 254, 1)) 2 2;
		border-image: -moz-linear-gradient(right, rgba(24, 198, 255, 1), rgba(2, 143, 254, 1));
		border-image: linear-gradient(to right, rgba(2, 143, 254, 1), rgba(24, 198, 255, 1)) 2 2;
		border: 2px solid rgba(24, 198, 255, 1)\9;
	}

	/* .nav-icon{
	width: 32px;
	height: 32px;
	margin-right: 25px;
} */
	.nav-icon {
		width: calc(3.2vh);
		height: calc(3.2vh);
		margin-right: 7.6%;
	}

	/* .sidenav {
	
  width: 250px;
	height:100% ; 
	padding: 30px 25px 30px 25px;

  
   background: -webkit-radial-gradient(rgba(1,24,47,0.8),rgba(8,47,82,0.8));
  background: -o-radial-gradient(rgba(1,24,47,0.8),rgba(8,47,82,0.8));
  background: -moz-radial-gradient(rgba(1,24,47,0.8),rgba(8,47,82,0.8)); 
  background: radial-gradient(rgba(1,24,47,0.8),rgba(8,47,82,0.8)); 
  
} */
	.sidenav {
		width: calc(13vw);
		height: 100%;
		padding: calc(3vh) 10% calc(3vh) 10%;
		/* margin-top: 3vh; */
		background: -webkit-radial-gradient(rgba(1, 24, 47, 0.8), rgba(8, 47, 82, 0.8));
		/* Safari 5.1 - 6.0 */
		background: -o-radial-gradient(rgba(1, 24, 47, 0.8), rgba(8, 47, 82, 0.8));
		/* Opera 11.6 - 12.0 */
		background: -moz-radial-gradient(rgba(1, 24, 47, 0.8), rgba(8, 47, 82, 0.8));
		/* Firefox 3.6 - 15 */
		background: radial-gradient(rgba(1, 24, 47, 0.8), rgba(8, 47, 82, 0.8));
		/* 标准的语法 */

	}

	.nav-ba {
		cursor: pointer;
		font-size: 16px;
		line-height: calc(6vh);
		background-color: #0a2453;
		width: 100%;
		height: 100%;
		color: #18c6ff;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.nav-sel {
		color: #fff;
		background-color: #1276c3;
	}

	@media screen and (min-width:1280px) and (max-width:1439px) {
		.name {
			font-size: 14px;
		}

		.nav-ba {
			font-size: 12px;
		}

		.exit-box {
			width: 1.2vw;
			height: 1.2vw;
			position: absolute;
			bottom: 0.5vw;
			right: 1.8vw;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}

	@media screen and (max-width:1279px) {
		.name {
			font-size: 12px;
		}

		.sidenav {
			width: 150px;
		}

		.nav-item {
			width: 120px;
		}

		.exit-box {
			width: 1.2vw;
			height: 1.2vw;
			position: absolute;
			bottom: 0.5vw;
			right: 1.8vw;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
</style>
