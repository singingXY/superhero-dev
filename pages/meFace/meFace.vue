<template>
  <view class="page page-fill">
    <view class="pending-wapper">
      <image id="face" :src="tempFace" class="pending-face" mode="scaleToFill"></image>
    </view>

    <view class="notice">
      <view class="notice-words">
        * 请选择等比宽高的图片上传
      </view>
    </view>
    <view class="footer-operator">
      <view class="operator-words" @click="changePendingFace">
        重新选择
      </view>
      <view class="operator-words" @click="upload">
        确认上传
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        tempFace: ""
      }
    },
    onLoad(params) {
      var tempFilePath = params.tempFilePath;
      this.tempFace = tempFilePath;
    },
    methods: {
      //重新选择头像
      changePendingFace() {
        var _this = this;
        //上传头像
        uni.chooseImage({
          count: 1,
          success(res) {
            //获得临时路径
            var tempFilePath = res.tempFilePaths[0];
            _this.tempFace = tempFilePath;
          }
        })
      },
      upload() {
        var _this = this;
        var globalUser = _this.getGlobalUser("globalUser")
        uni.showLoading({
          mask: true,
          title: "上传中……"
        })
        // 无上传接口，跳过请求，仅存入缓存中
        // uni.uploadFile({
        //   url: _this.serverURL + "/user/uploadFace?userId=" +
        //     globalUser.id,
        //   filePath: _this.tempFace,
        //   name: "file",
        //   header: {
        //     "headerUserId": globalUser.id,
        //     "headerUserToken": globalUser.userUniqueToken,
        //   },
        //   success(res) {
        //     var resData = res.data
        //     if(resData.status == 200){
               globalUser.faceImages = _this.tempFace;
               var userInfo = globalUser
               uni.setStorageSync("globalUser",userInfo)
               uni.navigateBack({
                 delta:1
               })
        //     }else if(resData.status == 500 || resData.status == 502){
        //       uni.showToast({
        //         title:resData.msg,
        //         duration:2000
        //       })
        //     }
        //   },
        //   complete() {
               uni.hideLoading()
        //   }
        // })

      }
    }
  }
</script>

<style>
  .page-fill {
    width: 100%;
    height: 100%;
    position: absolute;
    background: black;
  }

  .pending-wapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 40upx;
  }

  .pending-face {
    width: 600upx;
    height: 600upx;
  }

  .notice {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .notice-words {
    width: 600upx;
    color: gray;
    font-size: 13px;
    margin-top: 30upx;
  }

  /* 底部 */
  .footer-operator {
    position: fixed;
    bottom: 0;

    display: flex;
    flex-direction: row;
    justify-content: space-around;

    width: 100%;
    padding: 30upx;
    border-top: solid 1p #515050x;
  }

  .operator-words {
    color: #e8e5e5;
    font-size: 16px;
    width: 200upx;
  }
</style>
