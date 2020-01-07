<template>
	<view class="page">
		<view class="player">
			<video
			 class="movie"
			 :src="trailerInfo.trailer" 
			 :poster="trailerInfo.poster"
			 controls></video>
		</view>
		<!-- 视频播放 end-->
		<view class="movie-info">
			<image :src="trailerInfo.cover" class="cover"></image>
			<view class="movie-desc">
				<view class="title">{{trailerInfo.name}}</view>
				<view class="base-info">{{trailerInfo.basicInfo}}</view>
				<view class="base-info">{{trailerInfo.originalName}}</view>
				<view class="base-info">{{trailerInfo.totalTime}}</view>
				<view class="base-info">{{trailerInfo.releaseDate}}</view>
				
				<view class="score-block">
					<view class="big-score">
						<view class="score-word">综合评分:</view>
						<view class="movie-score">{{trailerInfo.score}}</view>
					</view>
					<view class="score-stars">
						<block v-if="trailerInfo.score>=0">
							<trailerStars
							 :innerScore="trailerInfo.score"
							 showNum=0 ></trailerStars>
						</block>
						<view class="prise-counts">
							{{trailerInfo.prisedCounts}}
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 影片基本信息  end-->
	</view>
</template>

<script>
	import trailerStars from "../../components/trailerStars.vue"
	export default {
		data() {
			return {
				trailerInfo:{}
			}
		},
		onLoad(params) {
			var _this = this;
			var trailerId = params.trailerId
			uni.request({
				url: _this.serverURL + '/search/trailer?trailerId='+ trailerId, 
				method:"POST",
				success: (res) => {
					if(res.data.status == 200){
						_this.trailerInfo = res.data.data[0];
					console.log(_this.trailerInfo);
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
@import url("movie.css");
</style>
