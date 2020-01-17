<template>
  <view class="page page-fill">
    <form @submit="formSubmitBirthday">

      <view class="page-block" style="margin-top: 20rpx;">
        <picker mode="date" @change="dateChange">
          <view class="birthday">{{ birthday }}</view>
        </picker>
      </view>
      <button type="primary" form-type="submit" class="submitBtn">提交</button>
    </form>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        globalUser: {},
        birthday:''
      }
    },
    onLoad() {
      var _this = this;
      _this.globalUser = _this.getGlobalUser('globalUser');
      _this.birthday = _this.globalUser.birthday
    },
    methods: {
      dateChange(e) {
        this.birthday = e.detail.value
      },
      formSubmitBirthday(){
        var _this = this;
        var birthday = _this.birthday
        uni.request({
          url: _this.serverURL + '/user/modifyUserInfo',
          data: {
            "userId": _this.globalUser.id,
            "birthday": birthday
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
    },
  }
</script>

<style>
  .page-fill {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .birth-input {
    background-color: white;
    height: 80rpx;
    line-height: 40rpx;
    padding-left: 20rpx;
  }

  .birthday {
    background-color: white;
    height: 80rpx;
    padding-left: 20rpx;
    padding-top: 30rpx;
  }

  .submitBtn {
    width: 95%;
    margin-top: 40rpx;
  }
</style>
