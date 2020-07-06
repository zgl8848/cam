<template>
	<div class="view-container-atlas" ref="container">
		<div class="container-box" :style="{'min-height': minHeight +'px'}">
			<div class="search-box">
				<el-button type="primary" @click="backVideo">返回</el-button>
				<div class="search-time">
					<span class="st-title">时间：</span>
					<el-date-picker v-model="searchTime" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"
					 unlink-panels="true" clearable="true" value-format="yyyy-MM-dd">
					</el-date-picker>
					<img src="@/assets/atlas/date.png" alt="" class="start-icon">
					<img src="@/assets/atlas/date.png" alt="" class="end-icon">
				</div>

				<div class="camera-input">
					<span>摄像头位置：</span>
					<el-input v-model="positionData" placeholder="请输入摄像头位置"></el-input>
				</div>

				<el-button type="primary" @click="searchBtn">搜索</el-button>
			</div>
			<div class="pic-box" v-if="hasData">
				<div class="pic-item" v-for="pic in picData">
					<div class="pic-date">{{pic.day}}（{{pic.total}}）</div>
					<div class="pic-list">
						<!-- <img :src="picImg.imgUrl" alt="" class="pic-img" v-for="picImg in pic.videoData"> -->
						<img :src="imgurl+picImg.picUrl+token" alt="" class="pic-img" v-for="(picImg,key) in pic.equipmentImg" @click="banner(pic,key)">
					</div>
				</div>
			</div>
			<div class="no-data" v-else>
				<img src="@/assets/atlas/nodata.png" alt="">
				<div>暂无数据</div>
			</div>
			<div class="banner-bg" v-show="bannerStatus" @click="hideSearch">
				<div class="banner-bg-box">
					<div class="banner-box" id="banner-box">
						<div class="banner-title">{{bannerDate}}（{{bannerTotal}}）</div>
						<div class="banner-left">
							<div class="swiper-container gallery-top">
								<div class="swiper-wrapper">
									<div class="swiper-slide">
										<img :src="bigImg" alt="">
									</div>
								</div>
							</div>
						</div>
						<div class="banner-right">
							<!-- <swiper class="vr-banner" :options="swiperRightOption" ref="mySwiper">
									<swiper-slide class="banner-item" v-for="banner in cameraList">
										<img :src="banner.imgUrl" alt="" class="camera">
										<div class="banner-title">{{banner.equipmentName}}</div>
									</swiper-slide>
								</swiper> -->
							<div class="swiper-container gallery-thumbs">
								<div class="swiper-wrapper" id="swiper">
									<div class="swiper-slide" v-for="(banner,bkey) in cameraList" :data-val="imgurl+banner.picUrl+token" :id="'swiper-'+bkey">
										<img :data-src="imgurl+banner.picUrl+token" alt="" class="swiper-lazy">
										<div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
									</div>
								</div>
							</div>
							<img src="@/assets/account/banner_top.png" alt="" class="banner-top">
							<img src="@/assets/account/banner_bottom.png" alt="" class="banner-bottom">
						</div>
					</div>
				</div>
			</div>



		</div>
	</div>
</template>

<script>
	import {
		getImgList
	} from '@/api/account'
	import {
		getnowdate,getnextdate
	} from '@/utils/index'
	import {
		getToken
	} from '@/utils/auth'
	import Axios from 'axios'
	//引入轮播插件
	import Swiper from "swiper"
	export default {
		name: 'Login',
		data() {
			return {
				hasData: true,
				searchTime: '',
				minHeight: 0,
				positionData: '',
				picData: [],
				bannerStatus: false,
				cameraList: [],
				bigImg: '',
				bannerDate: '', //轮播日期
				bannerTotal: 0,
				token: '?access_token=' + getToken(),
				imgurl: process.env.IMG_URL,
				mySwiper : ''
			}
		},
		watch: {
			$route: {
				handler: function(route) {
					this.redirect = route.query && route.query.redirect
				},
				immediate: true
			}
		},
		created() { //html前渲染
		},
		mounted: function() {

			this.searchTime = [getnowdate(), getnextdate()];
			this.minHeight = document.body.clientHeight - 150;
			this.getImg()
			// this.banner(this.picData,1);

		},
		methods: {
			backVideo() {
				this.$router.push('/account/index');
			},
			getImg() {
				var schoolId = this.$store.getters.schoolId;
				getImgList(schoolId, this.searchTime[0], this.searchTime[1], this.positionData).then(response => {
					if (response.data.records.length > 0) {
						this.hasData = true;
						console.log(response.data);
						this.picData = response.data.records;

					} else {
						this.hasData = false;
					}

				})
			},
			searchBtn() {
				this.getImg()
			},
			banner(pic, key) {
				this.bannerStatus = true;
				this.bannerDate = pic.day;
				this.bannerTotal = pic.total;
				this.cameraList = pic.equipmentImg;
				var that = this;
				var galleryThumbs = new Swiper('.gallery-thumbs', {
					// initialSlide :key,
					direction: 'vertical',
					spaceBetween: 28,
					nextButton: '.banner-bottom',
					prevButton: '.banner-top',
					slidesPerView: 3,
					preloadImages: false,
					// Enable lazy loading
					lazyLoading: true,
					observer: true,
					observeParents: true,
					onClick: function(swiper) {
						let index = swiper.clickedIndex;
						galleryThumbs.slideTo(index)
						// console.log(galleryThumbs.slides.eq(index)[0])
						galleryThumbs.slides.eq(swiper.activeIndex).removeClass('swiper-slide-active')
						galleryThumbs.slides.eq(index).addClass('swiper-slide-active');
						that.bigImg = galleryThumbs.slides.eq(index)[0].getAttribute('data-val')
					},
					onSlideChangeEnd: function(swiper) {
						let index = swiper.activeIndex;
						that.bigImg = that.imgurl + that.cameraList[index].picUrl+that.token;
					},
					onInit: function(swiper){
						swiper.slideTo(key)
						setTimeout(function s(){
							swiper.slides.eq(swiper.activeIndex).removeClass('swiper-slide-active')
							swiper.slides.eq(key).addClass('swiper-slide-active');
						},1)
						setTimeout(function s(){
							swiper.slides.eq(key).addClass('swiper-slide-active');
						},50)
						
					 
					  that.bigImg = that.imgurl + that.cameraList[key].picUrl+that.token;
					}
				});
				
				
				
			},
			//隐藏搜索框
			hideSearch(event) {
				var sp = document.getElementById("banner-box");
				console.log(sp)
				if (sp) {

					if (!sp.contains(event.target)) { //点击到了指定以外的区域

						this.bannerStatus = false;

					}

				}
			},

		}
	}
</script>

<style rel="stylesheet/scss" lang="scss">
	@import '../../styles/atlas.scss';
	@import '../../../node_modules/swiper/dist/css/swiper.min.css'
</style>
