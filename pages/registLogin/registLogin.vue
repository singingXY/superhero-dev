<template>
	<view class="body">
		<form @submit="formSubmit" @reset="">
			<view class="face-wapper">
				<image src="../../static/icons/user.png" class="face"></image>
			</view>
			<view class="info-wapper">
				<label for="" class="words-lbl">帐号</label>
				<input type="text" name="username" value="" 
				class="input" placeholder="请输入用户名"/>
			</view>
			<view class="info-wapper" style="margin-top: 40upx;">
				<label for="" class="words-lbl">密码</label>
				<input type="text" name="password" value=""
				class="input" placeholder="请输入密码" password/>
			</view>
			<button
			 type="primary"
			 style="margin-top: 60upx;width: 90%;"
			 form-type="submit">登录 / 注册</button>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			formSubmit(e){
				var _this = this;
				var username = e.detail.value.username;
				var password = e.detail.value.password;
				
				
			}
		}
	}
</script>

<style>
@import url("registLogin.css");
</style>
