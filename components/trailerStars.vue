<template name="trailerStars">
	<view class="movie-score-wapper">
		<image src="../../static/icons/star-yellow.png" class="star-ico"></image>
		<image src="../../static/icons/star-yellow.png" class="star-ico"></image>
		<image src="../../static/icons/star-yellow.png" class="star-ico"></image>
		<image src="../../static/icons/star-gray.png" class="star-ico"></image>
		<view class="movie-score">9.0</view>
	</view>
</template>

<script>
	export default {
		name:"trailerStars",
		data() {
			return {
				
			};
		},
		props:{
			innerScore:0, // 定义外部传入的分数值
			showNum:0  // 是否显示分数值  1:显示，0:不显示
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
