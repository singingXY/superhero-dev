<template>
    <view class="page">
        <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="carousel">
        	<swiper-item v-for="carousel in carouselList" :key="carousel.id">
        		<image :src="carousel.image" class="carousel"></image>
        	</swiper-item>
        </swiper>
		<!-- 轮播图 end -->
		<view class="page-block super-hot">
			<view class="hot-title-wapper">
				<image src="../../static/icons/hot.png" class="hot-ico"></image>
				<view class="hot-title">热门超英</view>
			</view>
		</view>
		<scroll-view scroll-x="true" class="page-block hot">
			<view class="single-poster" v-for="superhero in hotSuperheroList" :key="superhero.id">
				<view class="poster-wapper">
					<image :src="superhero.cover" class="poster"></image>
					<view class="movie-name">{{superhero.name}}</view>
					<trailerStars
					 :innerScore = "superhero.score"
					 showNum=1
					 ></trailerStars>
				</view>
			</view>
		</scroll-view>
		<!-- 热门超英 end-->
		<view class="page-block super-hot">
			<view class="hot-title-wapper">
				<image src="../../static/icons/yugao.png" class="hot-ico"></image>
				<view class="hot-title">热门预告</view>
			</view>
		</view>
		<view class="hot-movie page-block">
			<video
			 class="hot-movie-single"
			 v-for="(trailer,index) in hottrailerList.slice(0, 4)"
			 :key="trailer.id"
			 :src="trailer.trailer" 
			 :poster="trailer.poster"
			 controls></video>
		</view>
		<!-- 热门预告 end-->
		
		<view class="page-block super-hot">
			<view class="hot-title-wapper">
				<image src="../../static/icons/guess-u-like.png" class="hot-ico"></image>
				<view class="hot-title">猜你喜欢</view>
			</view>
		</view>
		<!-- 猜你喜欢 end-->
    </view>
</template>

<script>
	import trailerStars from "../../components/trailerStars.vue"
    export default {
        data() {
            return {
                carouselList: [],
				hotSuperheroList:[],
				hottrailerList:[]
            }
        },
        onLoad() {
			var _this = this;
			//请求轮播图数据
			uni.request({
				url: _this.serverURL + '/index/carousel/list', 
				method:"POST",
				success: (res) => {
					console.log(res.data);
					if(res.data.status == 200){
						_this.carouselList = res.data.data;
					}
				}
			});
			//查询热门超英
			uni.request({
				url: _this.serverURL + '/index/movie/hot?type=superhero', 
				method:"POST",
				success: (res) => {
					console.log(res.data);
					if(res.data.status == 200){
						_this.hotSuperheroList = res.data.data;
					}
				}
			});
			//查询热门预告
			uni.request({
				url: _this.serverURL + '/index/movie/hot?type=trailer', 
				method:"POST",
				success: (res) => {
					console.log(res.data);
					if(res.data.status == 200){
						_this.hottrailerList = res.data.data;
					}
				}
			});
        },
        methods: {

        },
		components:{
			trailerStars
		}
    }
</script>

<style>
	@import url("index.css");
</style>
