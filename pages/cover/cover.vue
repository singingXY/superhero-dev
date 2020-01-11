<template>
	<view class="black">
		<image :src="cover"
		class="cover"
		mode="widthFix"
		@longpress="operator"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cover:""
			}
		},
		onLoad(params) {
			this.cover = params.cover
			uni.setNavigationBarColor({
				frontColor:"#ffffff",
				backgroundColor:"#000000"
			})
			
		},
		methods: {
			operator(){
				var _this = this;
				// #ifndef H5
				uni.showActionSheet({
					itemList:['保存图片到本地'],
					success: (res) => {
						if(res.tapIndex == 0){
							//console.log('下载')
							uni.showLoading({
								title:"图片保存中"
							})
							uni.downloadFile({
								url:_this.cover,
								success: (result) => {
									//console.log(result.tempFilePath);
									uni.saveImageToPhotosAlbum({
										filePath:result.tempFilePath,
										success: () => {
											uni.showToast({
												title:'保存成功',
												duration:2000
											})
										},
										complete: () => {
											uni.hideLoading()
										}
									})
								}
							})
						}
					}
				})
				// #endif
			}
		}
	}
</script>

<style>
.black{
	background-color: #000000;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: fixed;
}
.cover{align-self: center;}
</style>
