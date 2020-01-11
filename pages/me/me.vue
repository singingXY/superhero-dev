<template>
	<view class="page page-fill">
		<view class="header">
			<view v-if="userIsLogin">
				<image src="../../static/icons/user.png" class="face"></image>
			</view>
			<view v-else>
				<image src="../../static/icons/user.png" class="face"></image>
			</view>
			<view class="info-wapper" v-if="userIsLogin">
				<view class="nickname">dfdsd</view>
				<view class="nav-info">ID: ADFFdffgkn92urfnd</view>
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
				userIsLogin:false
			}
		},
		methods: {
			
		}
	}
</script>

<style>
@import url("me.css");
</style>
