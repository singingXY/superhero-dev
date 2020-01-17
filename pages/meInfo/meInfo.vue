<template>
  <view class="page page-fill">
    <view class="page-block info-list">
      <!-- 头像 -->
      <view class="item-wapper face-line-upbottom" @click="operator">
        <view class="info-words">头像</view>
        <view class="right-wapper">
          <image :src="globalUser.faceImages" class="face"></image>
          <view class="arrow-block">
            <image src="../../static/icons/arrow.png" class="arrow-ico"></image>
          </view>
        </view>
      </view>
      <aline></aline>
      <!-- 用户名 -->
      <view class="item-wapper" @click="modifyNickname">
        <view class="info-words">昵称</view>
        <view class="right-wapper">
          <view class="gray-fields">{{ globalUser.nickname }}</view>
          <view class="arrow-block">
            <image src="../../static/icons/arrow.png" class="arrow-ico"></image>
          </view>
        </view>
      </view>
      <aline></aline>
      <!-- 生日 -->
      <view class="item-wapper" @click="modifyBirthday">
        <view class="info-words">生日</view>
        <view class="right-wapper">
          <view class="gray-fields">{{ globalUser.birthday }}</view>
          <view class="arrow-block">
            <image src="../../static/icons/arrow.png" class="arrow-ico"></image>
          </view>
        </view>
      </view>
      <aline></aline>
      <!-- 性别 -->
      <view class="item-wapper" @click="modifySex">
        <view class="info-words">性别</view>
        <view class="right-wapper">
          <view class="gray-fields">
            <view v-if="globalUser.sex == 1">男</view>
            <view v-else-if="globalUser.sex == 0">女</view>
            <view v-else>未选择</view>
          </view>
          <view class="arrow-block">
            <image src="../../static/icons/arrow.png" class="arrow-ico"></image>
          </view>
        </view>
      </view>
    </view>
    <view class="footer-wapper">
      <view class="footer-words" @click="clearStorage">清理缓存</view>
      <view class="footer-words" style="margin-top: 10upx;" @click="logout">退出登录</view>
    </view>
  </view>
</template>

<script>
  import aline from '../../components/aline.vue';
  export default {
    data() {
      return {
        globalUser: {},
        imgurl: 'http://dummyimage.com/100x100/f2a379&text=faceImages'
      };
    },
    onShow() {
      var _this = this;
      _this.globalUser = _this.getGlobalUser('globalUser');
    },
    methods: {
      modifyNickname(){
        uni.navigateTo({
          url:"../meNickname/meNickname"
        })
      },
      modifyBirthday(){
        uni.navigateTo({
          url:"../meBirthday/meBirthday"
        })
      },
      modifySex(){
        uni.navigateTo({
          url:"../sex/sex"
        })
      },
      clearStorage() {
        uni.clearStorage();
        uni.showToast({
          title: '清理缓存成功',
          mask: true,
          duration: 1500
        });
      },
      logout() {
        var _this = this;
        var globalUser = _this.getGlobalUser('globalUser');
        uni.request({
          url: _this.serverURL + '/user/logout?userId=' +
            globalUser.id,
          method: 'POST',
          success: res => {
            if (res.data.status == 200) {
              uni.removeStorageSync('globalUser');
              uni.switchTab({
                url: '../me/me'
              });
            }
          }
        });
      },
      operator() {
        var _this = this;
        var globalUser = _this.getGlobalUser('globalUser');
        uni.showActionSheet({
          itemList: ['查看头像', '上传头像'],
          success(res) {
            var index = res.tapIndex;
            if (index == 0) {
              //查看头像
              var faceArr = [];
              faceArr.push(globalUser.faceImages);
              uni.previewImage({
                urls: faceArr,
                current: faceArr[0]
              });
            } else if (index == 1) {
              //上传头像
              uni.chooseImage({
                count: 1,
                success(res) {
                  //获得临时路径
                  var tempFilePath = res.tempFilePaths[0];
                  uni.navigateTo({
                    url: '../meFace/meFace?tempFilePath=' +
                      tempFilePath
                  });
                }
              });
            }
          }
        });
      }
    },
    components: {
      aline
    }
  };
</script>

<style>
  @import url('meInfo.css');
</style>
