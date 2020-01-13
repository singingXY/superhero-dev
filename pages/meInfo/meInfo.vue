<template>
	<view class="page page-fill">
		<view class="page-block info-list">
			<!-- 头像 -->
			<view class="item-wapper face-line-upbottom">
				<view class="info-words">头像</view>
				<view class="right-wapper">
					<image :src="globalUser.faceImages" class="face"></image>
					<view class="arrow-block">
						<image src="../../static/icons/arrow.png" class="arrow-ico"></image>
					</view>
				</view>
			</view>
			<aline></aline>
			<!-- 用户名 -->
			<view class="item-wapper">
				<view class="info-words">昵称</view>
				<view class="right-wapper">
					<view class="gray-fields">{{globalUser.nickname}}</view>
					<view class="arrow-block">
						<image src="../../static/icons/arrow.png" class="arrow-ico"></image>
					</view>
				</view>
			</view>
			<aline></aline>
			<!-- 生日 -->
			<view class="item-wapper">
				<view class="info-words">生日</view>
				<view class="right-wapper">
					<view class="gray-fields">{{globalUser.birthday}}</view>
					<view class="arrow-block">
						<image src="../../static/icons/arrow.png" class="arrow-ico"></image>
					</view>
				</view>
			</view>
			<aline></aline>
			<!-- 性别 -->
			<view class="item-wapper">
				<view class="info-words">性别</view>
				<view class="right-wapper">
					<view class="gray-fields">
						<view v-if="globalUser.sex == 1">
							男
						</view>
						<view v-else-if="globalUser.sex == 0">
							女
						</view>
						<view>未选择</view>
					</view>
					<view class="arrow-block">
						<image src="../../static/icons/arrow.png" class="arrow-ico"></image>
					</view>
				</view>
			</view>
		</view>
		
		<view class="footer-wapper">
			<view class="footer-words" @click="clearStorage">清理缓存</view>
			<view class="footer-words"
			 style="margin-top: 10upx;"
			  @click="logout">退出登录</view>
		</view>
	</view>
</template>

<script>
	import aline from "../../components/aline.vue"
	export default {
		data() {
			return {
				globalUser:{}
			}
		},
		onShow() {
			var _this = this;
			_this.globalUser = _this.getGlobalUser("globalUser");
		},
		methods: {
			clearStorage(){
				uni.clearStorage();
				uni.showToast({
					title:"清理缓存成功",
					mask:true,
					duration:1500
				})
				
			},
			logout(){
			var _this = this;
				var globalUser = _this.getGlobalUser("globalUser");
				uni.request({
					url:_this.serverURL + "/user/logout?userId=" + globalUser.id,
					method:"POST",
					success: (res) => {
						console.log(res.data)
						if(res.data.status == 200){
							uni.removeStorageSync("globalUser")
							uni.switchTab({
								url:"../me/me"
							})
						}
					}
				})
			}
		},
		components:{
			aline
		}
	}
</script>

<style>
@import url("meInfo.css");
</style>
