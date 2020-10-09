<template>
	<view :class="[iosHeight?'container':'an_container']">
		<view class="list" v-for="(item,index) in infoList " @click="intoMsg" :key="index" >
			<view class="info_pic">
				<image class="info_pic_img" :src="item" mode=""></image>
			</view>
			<view class="content">
				<view class="content_title">
					{{item.name}}
				</view>
				<view class="content_detail">
					{{item.context}}
				</view>
			</view>
			<view class="time_tips">
				<view class="time">
					{{item.time}}
				</view>
				<view class="tips" v-if="item.counts">
					{{item.counts}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				iosHeight:true,
				infoList:[
					{
						name:'云颐航空',
						context:'某某某等2位同事开始使用通勤提醒，点击也使用通勤提醒',
						time:'昨天',
						counts:'1'
					},
					{
						name:'云颐航空',
						context:'某某某等2位同事开始使用通勤提醒，点击也使用通勤提醒',
						time:'昨天',
						counts:''
					},
					{
						name:'云颐航空',
						context:'某某某等2位同事开始使用通勤提醒，点击也使用通勤提醒',
						time:'昨天',
						counts:'0'
					},
					{
						name:'云颐航空',
						context:'某某某等2位同事开始使用通勤提醒，点击也使用通勤提醒',
						time:'昨天',
						counts:'0'
					},
					{
						name:'云颐航空',
						context:'某某某等2位同事开始使用通勤提醒，点击也使用通勤提醒',
						time:'昨天',
						counts:''
					},
					{
						name:'云颐航空',
						context:'某某某等2位同事开始使用通勤提醒，点击也使用通勤提醒',
						time:'昨天',
						counts:'0'
					},
					{
						name:'云颐航空',
						context:'某某某等2位同事开始使用通勤提醒，点击也使用通勤提醒',
						time:'昨天',
						counts:'0'
					},
					{
						name:'云颐航空',
						context:'某某某等2位同事开始使用通勤提醒，点击也使用通勤提醒',
						time:'昨天',
						counts:''
					},
					{
						name:'云颐航空',
						context:'某某某等2位同事开始使用通勤提醒，点击也使用通勤提醒',
						time:'昨天',
						counts:'0'
					},
					{
						name:'云颐航空',
						context:'某某某等2位同事开始使用通勤提醒，点击也使用通勤提醒',
						time:'昨天',
						counts:'15'
					},
				]
			}
		},
		methods: {
			intoMsg(){
				console.log(111)
			},
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
			},
		},
		onShow(){
			this.setTabBarIndex(0)
			this.adjustHeight()
		}
	}
</script>

<style scoped>
.container{
		font-size: 24rpx;
		background: #F3F3F3;
		min-height: calc(100vh - 230rpx);
		margin-bottom: 230rpx;
}
.an_container{
	font-size: 24rpx;
	background: #F3F3F3;
	min-height: calc(100vh - 162rpx);
	margin-bottom: 162rpx;
}
.list{
	width:calc(100% - 64rpx);
	height: 88rpx;
	padding: 32rpx;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	background: #fff;
	margin-bottom:4rpx;
}
.info_pic{
	width: 88rpx;
	height: 88rpx;
	background: #007AFF;
	border-radius: 8rpx;
}
.info_pic_img{
	width: 88rpx;
	height: 88rpx;
	border-radius: 8rpx;
}
.content{
	width: 464rpx;
	height: 88rpx;
	margin-left: 16rpx;
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-between;
}
.content_title{
	color: #000000;
	font-size: 32rpx;
	font-weight: bold;
}
.content_detail{
	color: #8F8F8F;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.time_tips{
	height: 88rpx;
	margin-left: 86rpx;
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-between;
	align-items: center;
}
.time{
	color: #B6B6B6;
	font-size: 16rpx;
}
.tips{
	width: 24rpx;
	height: 24rpx;
	border-radius: 50%;
	color: #fff;
	background: #FC4949;
	text-align: center;
	line-height: 24rpx;
	font-size:16rpx;
}
</style>
