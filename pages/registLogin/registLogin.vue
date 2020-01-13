<template>
	<view class="body">
		<form @submit="formSubmit">
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
				//发起注册/登录请求
				uni.request({
					url:_this.serverURL + "/user/registOrLogin",
					method:"POST",
					data:{
						"username":username,
						"password":password
					},
					success: (res) => {
						if(res.data.status == 200){
							var userInfo = res.data.data
							console.log(userInfo)
							//保存用户信息到全局的缓存中
							uni.setStorageSync("globalUser",userInfo)
							//tap页面跳转
							uni.switchTab({
								url:"../me/me"
							})
						}else if(res.data.status == 500){
							uni.showToast({
								title:res.data.msg,
								duration:2000
							})
						}
					}
				})
			}
		}
	}
</script>

<style>
@import url("registLogin.css");
</style>
