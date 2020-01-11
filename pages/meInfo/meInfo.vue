<template>
	<view class="page page-fill">
		<view class="page-block info-list">
			<!-- 头像 -->
			<view class="item-wapper face-line-upbottom">
				<view class="info-words">头像</view>
				<view class="right-wapper">
					<image src="../../static/icons/user.png" class="face"></image>
					<view class="arrow-block">
						<image src="../../static/icons/arrow.png" class="arrow-ico"></image>
					</view>
				</view>
			</view>
			<aline></aline>
			<!-- 用户名 -->
			<view class="item-wapper">
				<view class="info-words">昵称</view>
				<view class="right-wapper">
					<view class="gray-fields">时代顶顶顶</view>
					<view class="arrow-block">
						<image src="../../static/icons/arrow.png" class="arrow-ico"></image>
					</view>
				</view>
			</view>
			<aline></aline>
			<!-- 生日 -->
			<view class="item-wapper">
				<view class="info-words">生日</view>
				<view class="right-wapper">
					<view class="gray-fields">1900-01-01</view>
					<view class="arrow-block">
						<image src="../../static/icons/arrow.png" class="arrow-ico"></image>
					</view>
				</view>
			</view>
			<aline></aline>
			<!-- 性别 -->
			<view class="item-wapper">
				<view class="info-words">性别</view>
				<view class="right-wapper">
					<view class="gray-fields">男</view>
					<view class="arrow-block">
						<image src="../../static/icons/arrow.png" class="arrow-ico"></image>
					</view>
				</view>
			</view>
		</view>
		
		<view class="footer-wapper">
			<view class="footer-words">清理缓存</view>
			<view class="footer-words" style="margin-top: 10upx;">退出登录</view>
		</view>
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
			
		},
		components:{
			aline
		}
	}
</script>

<style>
@import url("meInfo.css");
</style>
