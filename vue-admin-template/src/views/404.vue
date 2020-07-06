<template>
	<div class="container">
		<div class="cont">
			<img src="@/assets/404_images/404_img.png" alt="">
			<div class="title">{{ title }}</div>
			<div class="info">{{ info }}</div>
			<a href="" class="home-btn">返回首页</a>
		</div>
	</div>
</template>

<script>

export default {
  name: 'Page404',
	data(){
		return {
			title : '该页面不存在',
			info : '请检查您输入的网址是否正确，请点击以下按钮返回主页'
		}
	}
}
</script>


<style>
	.container{position: fixed;height: 100%;width: 100%;background: url(../assets/404_images/404_bg.png) no-repeat center center;background-size: 100% 100%;position: relative;}
	.container .cont{position: absolute;left: 50%;top: 40%;transform: translate(-50%,-50%);color: #FFFFFF;display: flex;flex-direction: column;justify-content: center;align-items: center;}
	.container .cont img{width: 500px;margin-bottom: 50px;}
	.container .cont .title{font-size: 16px;margin-bottom: 10px;}
	.container .cont .info{font-size: 14px;margin-bottom: 20px;}
	.container .cont .home-btn{background-color: #0699fe;width: 110px;height: 36px;border-radius: 100px;text-align: center;font-size: 14px;line-height: 36px;cursor: pointer;}
</style>
