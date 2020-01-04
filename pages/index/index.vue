<template>
    <view class="page">
        <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="carousel">
        	<swiper-item v-for="carousel in carouselList" >
        		<image :src="carousel.image" class="carousel"></image>
        	</swiper-item>
        </swiper>
		<!-- 轮播图 end -->
		<!-- 热门超英 -->
		<view class="page-block super-hot">
			<view class="hot-title-wapper">
				<image src="../../static/icons/hot.png" class="hot-ico"></image>
				<view class="hot-title">热门超英</view>
			</view>
		</view>
		<scroll-view scroll-x="true" class="page-block hot">
			<view></view>
		</scroll-view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                carouselList: []
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
        },
        methods: {

        }
    }
</script>

<style>
	@import url("index.css");
</style>
