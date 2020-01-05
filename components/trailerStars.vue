<template name="trailerStars">
	<view class="movie-score-wapper">
		<image
		 v-for="yellow in yellowScore"
		 :key="'yellow'+yellow"
		 src="../../static/icons/star-yellow.png" 
		 class="star-ico"></image>
		<image
		 v-for="grey in greyScore"
		 :key="'grey'+grey"
		 src="../../static/icons/star-gray.png" 
		 class="star-ico"></image>
		 <view class="movie-score" v-if="showNum == 1">
		 {{ innerScore }}
		 </view>
	</view>
</template>

<script>
	export default {
		name:"trailerStars",
		data() {
			return {
				yellowScore:0,
				greyScore:5
			};
		},
		props:{
			innerScore:0, // 定义外部传入的分数值
			showNum:0  // 是否显示分数值  1:显示，0:不显示
		},
		created() {
			var tempScore = 0;
			if(this.innerScore){
				tempScore = this.innerScore;
			}
			// 灰星数=5-黄星
			var yellowScore = parseInt(tempScore/2)
			this.greyScore = 5 - yellowScore
			this.yellowScore = yellowScore
		}
	}
</script>

<style>
.movie-score-wapper{
	display: flex;flex-direction: row;
}
.star-ico{
	width: 20upx;
	height: 20upx;
	margin-top: 6upx;
}
.movie-score{
	font-size: 12px;
	color: grey;
	margin-left: 8upx;
}
</style>
