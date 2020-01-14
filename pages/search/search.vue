<template>
	<view class="page">
		<view class="search-block">
			<view class="search-ico-wapper">
				<image src="/static/icons/search.png" class="search-ico"></image>
			</view>
			<input type="text" value=""
				placeholder="搜索影片"
				maxlength="10"
				class="search-text"
				confirm-type="search"
				@confirm="searchMe"
			/>
		</view>
		<view class="movie-list page-block">
			<view class="movie-wapper" v-for="trailer in trailerList" :key="trailer.id">
				<image 
				 :src="trailer.cover"
				 :data-trailerId="trailer.id"
				 @click="showTrailer"
				 class="poster"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				trailerList: [],
				keywords: [],  // 搜索关键字
				page: 1,       // 当前页数
				totalPages: 1  // 总页数
			}
		},
		onLoad() {
			var _this = this;
			
			uni.showLoading({
				mask:true,
				title:"请稍后…"
			})
			uni.showNavigationBarLoading()
			
			//默认展示所有列表
			uni.request({
				url: _this.serverURL + '/search/list?keyword=&page=&pageSize', 
				method:"POST",
				success: (res) => {
					if(res.data.status == 200){
						_this.trailerList = res.data.data.rows;
						_this.totalPages =  res.data.data.total;
					}
				},
				complete: () => {
					uni.hideLoading()
					uni.hideNavigationBarLoading()
				}
			});
		},
		onReachBottom() {
			var _this = this;
			var page = _this.page + 1 
			var keywords = _this.keywords
			var totalPages = _this.totalPages
			if( page > totalPages){ return;}
			//当前页数小于总页数则继续请求列表
			_this.pagedTrailerList(keywords,page,15)
		},
		methods: {
			pagedTrailerList(keywords,page,pageSize){
				var _this = this;
				
				uni.showLoading({
					mask:true,
					title:"请稍后…"
				})
				uni.showNavigationBarLoading()
				
				//搜索关键词
				uni.request({
					url: _this.serverURL
						+ '/search/list?keywords=' + keywords
						+ '&page=' + page
						+ '&pageSize=' + pageSize, 
					method:"POST",
					success: (res) => {
						if(res.data.status == 200){
							var tempList = res.data.data.rows;
							_this.trailerList = _this.trailerList.concat(tempList)
							_this.totalPages = res.data.data.total //总页数
							_this.page = page
						}
					},
					complete: () => {
						uni.hideLoading()
						uni.hideNavigationBarLoading()
					}
				});
			},
			searchMe(e){
				var _this = this
				//获取搜索内容
				var value = e.detail.value
				this.keywords = value
				this.trailerList = []
				this.pagedTrailerList(value,1,15)
			},
			showTrailer(e){
				var trailerId =e.currentTarget.dataset.trailerid;
				uni.navigateTo({
					url:"../movie/movie?trailerId="+trailerId
				})
			}
		}
	}
</script>

<style>
@import url("search.css");
</style>
