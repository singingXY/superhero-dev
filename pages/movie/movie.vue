<template>
  <view class="page">
    <view class="player">
      <video id="myTrailer" class="movie" :src="trailerInfo.trailer"
        :poster="trailerInfo.poster" controls></video>
    </view>
    <!-- 视频播放 end-->
    <view class="movie-info">
      <navigator :url="'../cover/cover?cover=' + trailerInfo.cover">
        <!-- #ifndef H5 -->
        <image :src="trailerInfo.cover" class="cover"></image>
        <!-- #endif -->
        <!-- #ifdef H5 -->
        <pictureBox class="cover" :backgroundColor="trailerInfo.color" :text="trailerInfo.name"></pictureBox>
        <!-- #endif -->
      </navigator>

      <view class="movie-desc">
        <view class="title">{{ trailerInfo.name }}</view>
        <view class="base-info">{{ trailerInfo.basicInfo }}</view>
        <view class="base-info">{{ trailerInfo.originalName }}</view>
        <view class="base-info">{{ trailerInfo.totalTime }}</view>
        <view class="base-info">{{ trailerInfo.releaseDate }}</view>

        <view class="score-block">
          <view class="big-score">
            <view class="score-word">综合评分：</view>
            <view class="movie-score">{{ trailerInfo.score }}</view>
          </view>
          <view class="score-stars">
            <block v-if="trailerInfo.score >= 0">
              <trailerStars :innerScore="trailerInfo.score" showNum="0"></trailerStars>
            </block>
            <view class="prise-counts">{{ trailerInfo.prisedCounts }}</view>
          </view>
        </view>
      </view>
    </view>
    <!-- 影片基本信息  end-->
    <aline></aline>
    <view class="plots-block">
      <view class="plots-title">剧情介绍</view>
      <view class="plots-desc">{{ trailerInfo.plotDesc }}</view>
    </view>
    <!-- 剧情介绍  end-->
    <view class="scroll-block">
      <view class="plots-title">演职人员</view>
      <scroll-view scroll-x="true" class="scroll-list">
        <view class="actor-wapper" v-for="(director, dIndex) in directorArray"
          :key="director.staffId">
          <image :src="director.photo" class="single-actor"></image>
          <view class="actor-name">{{ director.name }}</view>
          <view class="actor-role">{{ director.actName }}</view>
        </view>
        <view class="actor-wapper" v-for="(actor, aIndex) in actorArray"
          :key="actor.staffId">
          <image :src="actor.photo" class="single-actor" mode="aspectFill"
            @click="lookStaffs" :data-staffIndex="aIndex + directorArray.length"></image>
          <view class="actor-name">{{ actor.name }}</view>
          <view class="actor-role">饰 {{ actor.actName }}</view>
        </view>
      </scroll-view>
    </view>
    <!-- 演职人员 end -->
    <view class="scroll-block">
      <view class="plots-title">剧照</view>
      <scroll-view scroll-x="true" class="scroll-list">
        <image v-for="(img, index) in plotPicsArray" :key="index"
          :src="img" class="plot-images" mode="aspectFill" @click="lookMe"
          :data-imgIndex="index"></image>
      </scroll-view>
    </view>
    <!-- 剧照 end -->
  </view>
</template>

<script>
  import trailerStars from '../../components/trailerStars.vue';
  import aline from '../../components/aline.vue';
	import pictureBox from "../../components/pictureBox.vue"
  export default {
    data() {
      return {
        trailerInfo: {}, //详情
        plotPicsArray: [], //剧照列表
        directorArray: [], //导演列表
        actorArray: [] //演员列表
      };
    },
    //监听页面初次渲染完成
    onReady() {
      this.videoContext = uni.createVideoContext('myTrailer');
    },
    onHide() {
      //页面隐藏时暂停播放
      this.videoContext.pause();
    },
    onShow() {
      //页面显示时播放
      if (this.videoContext) {
        this.videoContext.play();
      }
    },
    onLoad(params) {
      var _this = this;
      var trailerId = params.trailerId;
      uni.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#000000'
      });
      //请求影片详情
      uni.request({
        url: _this.serverURL + '/search/trailer/' + trailerId,
        method: 'POST',
        success: res => {
          if (res.data.status == 200) {
            _this.trailerInfo = res.data.data[0];
            _this.plotPicsArray = _this.trailerInfo.plotPics;
          }
        }
      });
      //获取导演信息
      uni.request({
        url: _this.serverURL + '/search/staff/' + trailerId +
          '/1',
        method: 'POST',
        success: res => {
          if (res.data.status == 200) {
            _this.directorArray = res.data.data;
          }
        }
      });
      //获取演员信息
      uni.request({
        url: _this.serverURL + '/search/staff/' + trailerId +
          '/2',
        method: 'POST',
        success: res => {
          if (res.data.status == 200) {
            _this.actorArray = res.data.data;
          }
        }
      });
    },
    //此函数仅支持小程序端
    onShareAppMessage(res) {
      return {
        title: this.trailerInfo.name,
        path: '/pages/movie/movie?trailerId=' + this.trailerInfo.id
      };
    },
    //监听原生标题栏按钮点击事件
    onNavigationBarButtonTap(e) {
      var _this = this;
      var index = e.index;
      var trailerInfo = _this.trailerInfo;
      var trailerId = trailerInfo.id;
      var trailerName = trailerInfo.name;
      var cover = trailerInfo.cover;
      var poster = trailerInfo.poster;

      if (index == 0) {
        uni.share({
          provider: 'weixin',
          scene: 'WXSceneSession',
          type: 0,
          href: 'http://localhost:8080/#/pages/movie/movie?trailerId=' +
            trailerId,
          title: '《' + trailerName + '》',
          summary: '《' + trailerName + '》',
          imageUrl: cover,
          success: function(res) {
            console.log('success:' + JSON.stringify(res));
          }
        });
      }
    },
    methods: {
      lookMe(e) {
        var _this = this;
        var imgIndex = e.currentTarget.dataset.imgindex;
        uni.previewImage({
          current: _this.plotPicsArray[imgIndex],
          urls: _this.plotPicsArray
        });
      },
      lookStaffs(e) {
        var _this = this;
        var staffIndex = e.currentTarget.dataset.staffindex;
        //拼接导演和演员数组
        var newStaffArray = [];
        newStaffArray = newStaffArray
          .concat(_this.directorArray)
          .concat(_this.actorArray);
        var urls = [];
        for (let i = 0; i < newStaffArray.length; i++) {
          urls.push(newStaffArray[i].photo);
        }
        uni.previewImage({
          current: urls[staffIndex],
          urls: urls
        });
      }
    },
    components: {
      trailerStars,
      aline,
      pictureBox
    }
  };
</script>

<style>
  @import url('movie.css');
</style>
