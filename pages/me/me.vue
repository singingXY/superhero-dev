<template>
	<view class="page page-fill">
		<view class="header">
			<view v-if="userIsLogin">
				<image :src="userInfo.faceImages" class="face" @click="lookFace"></image>
        <!-- <cropper class="face" selWidth="660rpx" selHeight="660rpx"
          @upload="myUpload" :avatarSrc="faceImages"
          avatarStyle="width:120rpx;height:120rpx;border-radius:50%;">
        </cropper> -->
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
				<navigator url="../meInfo/meInfo">
					<image src="../../static/icons/setting.png" class="settings"></image>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
  import cropper from "../../components/cropper/cropper.vue";
	export default {
		data() {
			return {
				userIsLogin:false,
				userInfo:{},
        faceImages:''
			}
		},
		onShow() {
			var _this = this;
			// var userI = uni.getStorageSync("globalUser")
			// if(userInfo){
			// 	_this.userIsLogin = true
			// 	_this.userInfo = userInfo
			// }else{
			// 	_this.userIsLogin = false
			// }
			//使用挂载方法获取用户数据
			var userInfo = _this.getGlobalUser("globalUser")
			if(userInfo !== null ){
				_this.userIsLogin = true
				_this.userInfo = userInfo
        _this.faceImages = _this.userInfo.faceImages
			}else{
				_this.userIsLogin = false
				_this.userInfo = {}
			}
			
		},
		methods: {
			//上传返回图片
			myUpload(rsp) {
        var _this = this;
        var userInfo = _this.getGlobalUser("globalUser")
			  _this.faceImages = rsp.path;
        userInfo.faceImages = rsp.path;
        uni.setStorageSync("globalUser",userInfo)
			  // rsp.avatar.imgSrc = rsp.path; //更新头像方式二
			},
      lookFace(){
          var globalUser = this.getGlobalUser('globalUser');
          //查看头像
          var faceArr = [];
          faceArr.push(globalUser.faceImages);
          uni.previewImage({
            urls: faceArr,
            current: faceArr[0]
          });
      }
		},
    components: {
      cropper
    }
	}
</script>

<style>
@import url("me.css");
</style>
