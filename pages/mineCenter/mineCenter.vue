<template>
	<view :class="[iosHeight?'container':'an_container']">
		
		<view class="top_bar_box">
			<view class="top_bar">
				<view class="info_box">
					<view class="company">
						苏州海元电子科技有限公司
					</view>
					<view class="personal_info">
						<view class="name">
							彭于晏
						</view>
						<view class="position">
							产品部
						</view>
						<view class="position">
							设计师
						</view>
					</view>
				</view>
				<view class="head_portrait_box">
					<image class="head_portrait_img" src="" mode=""></image>
				</view>
			</view>
			<view class="we_chat">
				<view class="join_us">
					请加入我的企业微信
				</view>
				<view class="check_QRcode">
					<image class="QR_code" src="../../static/images/QRcode.png" mode=""></image>
					<image class="check_more" src="../../static/images/more.png" mode=""></image>
				</view>
			</view>
		</view>
		
		<view class="function_bar_box">
			<view class="function_bar" v-for="(item,index) in funcList" :key="index">
				<view class="bar_left">
					<view class="function_icon">
						<image class="fun_icon_img" :src="item.url" mode=""></image>
					</view>
					<view class="function_name">
						{{item.name}}
					</view>
				</view>
				<view class="bar_right">
					<image class="bar_right_img" src="../../static/images/more.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="position_top">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				iosHeight:true,
				funcList:[
					{url:'../../static/images/personal_info.png',name:'个人信息'},
					{url:'../../static/images/invite_others.png',name:'邀请同事'},
					{url:'../../static/images/feedback.png',name:'客户反馈'},
					{url:'../../static/images/about_us.png',name:'关于我们'},
					{url:'../../static/images/settings.png',name:'设置'},
				]
			}
		},
		methods: {
			adjustHeight(){
				let that =this
				uni.getStorage({
					key:'Device_info',
					success:function(res){
						if(res.data=='Android'){
							that.iosHeight=false
						}
					}
				})
			}
		},
		onShow(){
			this.setTabBarIndex(4)
			this.adjustHeight()
		}
	}
</script>

<style scoped>
.container{
	width: 100%;
	background: #F3F3F3;
	min-height:  calc(100vh - 230rpx);
	margin-bottom: 230rpx;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
}
.an_container{
	min-height: calc(100vh - 162rpx);
	margin-bottom: 162rpx;
	width: 100%;
	background: #F3F3F3;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
}
.top_bar_box{
	width:686rpx;
	height: 304rpx;
	border-radius: 16rpx;
	background: #fff;
	margin: 16rpx 0 0 0;
	display: flex;
	flex-flow: column nowrap;
	z-index: 2;
}
.top_bar{
	width: calc(100% - 64rpx);
	height: 175rpx;
	border-bottom: 2rpx solid #F3F3F3;
	display: flex;
	flex-flow: row nowrap;
	align-items: flex-start;
	justify-content: space-between;
	padding: 32rpx 32rpx 18rpx 32rpx;
}
.head_portrait_box{
	width: 120rpx;
	height: 120rpx;
	border-radius: 50%;
	background: #2781F6;
}
.head_portrait_img{
	width: 120rpx;
	height: 120rpx;
	border-radius: 50%;
}
.info_box{
	height: 100%;
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-between;
}
.personal_info{
	display: flex;
	flex-flow: row nowrap;
	align-items: flex-end;
}
.name{
	color: #424242;
	font-size: 32rpx;
	font-weight: bold;
}
.position{
	color: #424242;
	font-size: 20rpx;
	font-weight: 400;
	margin-left: 16rpx;
}
.company{
	color: #424242;
	font-size: 28rpx;
	font-weight: 500;
}
.we_chat{
	width: calc(100% - 64rpx);
	height: 80rpx;
	padding: 0 32rpx;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-between;
}
.join_us{
	color: #389EF9;
	font-size: 24rpx;
}
.check_QRcode{
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
}
.QR_code{
	width: 40rpx;
	height: 40rpx;
	margin-right: 16rpx;
}
.check_more{
	width: 40rpx;
	height: 40rpx;
}
.function_bar{
	width: 686rpx;
	height: 84rpx;
	margin-bottom: 2rpx;
	border-radius: 8rpx;
	background: #fff;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-between;
}
.function_bar_box{
	margin-top: 40rpx;
}
.function_bar_box :nth-child(3).function_bar{
	margin-bottom: 16rpx;
}
.function_bar_box :nth-child(4).function_bar{
	margin-bottom: 16rpx;
}
.bar_left{
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
}
.function_icon{
	width: 52rpx;
	height: 52rpx;
	margin: 0 16rpx 0 32rpx;
}
.fun_icon_img{
	width: 52rpx;
	height: 52rpx;
}
.function_name{
	font-weight: 500;
	font-size: 28rpx;
	color: #000;
}
.bar_right{
	width: 40rpx;
	height: 40rpx;
}
.bar_right_img{
	width: 40rpx;
	height: 40rpx;
}
.position_top{
	width: 100%;
	height: 162rpx;
	position: absolute;
	top: 0;
	background: #2781F6;
}
</style>
