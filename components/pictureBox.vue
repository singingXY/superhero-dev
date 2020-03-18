<template name="pictureBox">
	<view class="picture-box" :style="{'background-color':backgroundColor}">
		<view class="picture-box-text">{{ text }}</view>
	</view>
</template>

<script>
	export default {
		name:"pictureBox",
		props:{
			backgroundColor:'', // 图片颜色
			text:''  // 显示的文字
		}
	}
</script>

<style>
.picture-box{
    position:relative;
}
.picture-box-text{
  width: 100%;
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  white-space: normal;
  text-align: center;
}
</style>
