<template>
  <view class="page page-fill">
    <form @submit="formSubmitSex">

      <view class="page-block" style="margin-top: 20rpx;">
        <radio-group name="" class="radio-sex" @change="sexChange">
          <label class="radio-singel">
            <radio value="1" :checked="sex == 1"/><text>男</text>
          </label>
          <label class="radio-singel">
            <radio value="0" :checked="sex == 0"/><text>女</text>
          </label>
          </label>
        </radio-group>
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
        sex: -1
      }
    },
    onLoad() {
      var _this = this;
      _this.globalUser = _this.getGlobalUser('globalUser');
      _this.sex = _this.globalUser.sex
    },
    methods: {
      sexChange(e) {
        this.sex = e.detail.value
      },
      formSubmitSex(){
        var _this = this;
        var sex = _this.sex
        uni.request({
          url: _this.serverURL + '/user/modifyUserInfo',
          data: {
            "userId": _this.globalUser.id,
            "sex": sex
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

  .radio-sex {
    display: flex;
    flex-direction: column;
  }

  .radio-singel {
    padding: 20rpx;
  }

  .submitBtn {
    width: 95%;
    margin-top: 40rpx;
  }
</style>
