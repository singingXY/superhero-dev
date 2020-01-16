<template>
  <view class="body">
    <form @submit="formSubmit">
      <view class="face-wapper">
        <image src="../../static/icons/user.png" class="face"></image>
      </view>
      <view class="info-wapper">
        <label for="" class="words-lbl">帐号</label>
        <input type="text" name="username" value="" class="input"
          placeholder="请输入用户名" />
      </view>
      <view class="info-wapper" style="margin-top: 40upx;">
        <label for="" class="words-lbl">密码</label>
        <input type="text" name="password" value="" class="input"
          placeholder="请输入密码" password />
      </view>
      <button type="primary" style="margin-top: 60upx;width: 90%;"
        form-type="submit">登录 / 注册</button>
    </form>
    <!-- #ifndef H5 -->
    <view class="third-wapper">
      <view class="third-line">
        <view class="singel-line">
          <aline></aline>
        </view>
        <view class="third-words">第三方账号登录</view>
        <view class="singel-line">
          <aline></aline>
        </view>
      </view>
      <view class="third-icos-wapper">
        <!-- #ifdef APP-PLUS -->
        <image src="../../static/icons/weixin.png" class="third-ico"
          data-logintype="weixin" @click="appOAuthLogin"></image>
        <image src="../../static/icons/QQ.png" class="third-ico"
          data-logintype="QQ" style="margin-left: 80upx;" @click="appOAuthLogin"></image>
        <image src="../../static/icons/weibo.png" class="third-ico"
          data-logintype="weibo" style="margin-left: 80upx;" @click="appOAuthLogin"></image>
        <!-- #endif -->
        <!-- #ifdef MP-WEIXIN -->
        <button open-type='getUserInfo' @getuserinfo="wxLogin" class="third-btn-ico">
        </button>
        <!-- #endif -->
      </view>
    </view>
    <!-- #endif -->
  </view>
</template>

<script>
  import aline from "../../components/aline.vue"
  export default {
    data() {
      return {

      }
    },
    methods: {
      formSubmit(e) {
        var _this = this;
        var username = e.detail.value.username;
        var password = e.detail.value.password;
        //发起注册/登录请求
        uni.request({
          url: _this.serverURL + "/user/registOrLogin",
          method: "POST",
          data: {
            "username": username,
            "password": password
          },
          success: (res) => {
            if (res.data.status == 200) {
              var userInfo = res.data.data
              // console.log(userInfo)
              //保存用户信息到全局的缓存中
              uni.setStorageSync("globalUser", userInfo)
              //tap页面跳转
              uni.switchTab({
                url: "../me/me"
              })
            } else if (res.data.status == 500) {
              uni.showToast({
                title: res.data.msg,
                duration: 2000
              })
            }
          }
        })
      },
      //微信小程序端微信登录
      wxLogin(e) {
        var _this = this;
        // 通过微信开放能力,获得微信用户基本信息
        var userInfo = e.detail.userInfo;
        // console.log(userInfo)
        // 登录
        uni.login({
          provider: "weixin",
          success(loginResult) {
            // console.log(loginResult)
            // 获得微信登录code:授权码
            var code = loginResult.code;
            uni.request({
              url: _this.serverURL + "/mpWXlogin/" + code,
              method: "POST",
              data: {
                "avatarUrl": userInfo.avatarUrl,
                "nickName": userInfo.nickName
              },
              success: (userResult) => {
                console.log(userResult)
                var userInfo = userResult.data.data
                //保存用户信息到全局的缓存中
                uni.setStorageSync("globalUser", userInfo)
                //tap页面跳转
                uni.switchTab({
                  url: "../me/me"
                })
              }
            })
          }
        })
      },
      appOAuthLogin(e) {
        //获取用户登录类型
        var logintype = e.currentTarget.dataset.logintype
        //授权登录
        uni.login({
          provider: logintype,
          success(loginRes) {
            //授权登录成功后获取用户信息
            uni.getUserInfo({
              provider: logintype,
              success(info) {
                var userInfo = info.userInfo
                //。。。获得信息，请求后端api。。。
              }
            })
          }
        })
      }
    },
    components: {
      aline
    }
  }
</script>

<style>
  @import url("registLogin.css");
</style>
