<template>
	<view class="page page-fill">
		<view class="header">
			<view v-if="userIsLogin">
				<image :src="userInfo.faceImages" class="face"></image>
			</view>
			<view v-else>
				<image src="../../static/icons/user.png" class="face"></image>
			</view>
			<view class="info-wapper" v-if="userIsLogin">
				<view class="nickname">{{userInfo.username}}</view>
				<view class="nav-info">ID: {{userInfo.id}}</view>
			</view>
			<view class="info-wapper" v-else>
				<navigator url="../registLogin/registLogin">
					<view class="nickname regist-login">登录/注册</view>
				</navigator>
			</view>
			
			<view class="set-wapper" v-if="userIsLogin">
				<image src="../../static/icons/setting.png" class="settings"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userIsLogin:false,
				userInfo:{}
			}
		},
		onShow() {
			var _this = this;
			var userInfo = uni.getStorageSync("globalUser")
			if(userInfo){
				_this.userIsLogin = true
				_this.userInfo = userInfo
			}else{
				_this.userIsLogin = false
			}
		},
		methods: {
			
		}
	}
</script>

<style>
@import url("me.css");
</style>
