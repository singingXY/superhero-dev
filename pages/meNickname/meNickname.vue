<template>
  <view class="page page-fill">
    <form @submit="formSubmitNickname">
      <view class="page-block" style="margin-top: 20rpx;">
        <input type="text" :value="globalUser.nickname" name="nickname"
          class="input" placeholder="请输入昵称" placeholder-class="graywords"
          maxlength="10" />
      </view>
      <button type="primary" form-type="submit" class="submitBtn">提交</button>
    </form>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        globalUser: {}
      }
    },
    onLoad() {
      var _this = this;
      _this.globalUser = _this.getGlobalUser('globalUser');
    },
    methods: {
      formSubmitNickname(e) {
        var _this = this;
        var nickname = e.detail.value.nickname
        uni.request({
          url: _this.serverURL + '/user/modifyUserInfo',
          data: {
            "userId": _this.globalUser.id,
            "nickname": nickname
          },
          header: {
            "headerUserId": _this.globalUser.id,
            "headerUserToken": _this.globalUser.userUniqueToken,
          },
          method: "POST",
          success(res) {
            var resData = res.data
            if (resData.status == 200) {
              var userInfo = resData.data
              uni.setStorageSync("globalUser", userInfo)
              uni.navigateBack({
                delta: 1
              })
            } else if (resData.status == 500 || resData.status ==
              502) {
              uni.showToast({
                title: resData.msg,
                duration: 2000
              })
            }
          }
        })
      }
    }
  }
</script>

<style>
  .page-fill {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .graywords {
    color: #EAEAEA;
  }

  .input {
    height: 80rpx;
    line-height: 80rpx;
    width: 500rpx;
    margin-left: 40rpx;
  }

  .submitBtn {
    width: 95%;margin-top: 40rpx;
  }
</style>
