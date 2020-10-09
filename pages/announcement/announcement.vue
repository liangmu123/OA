<template> 
	<view class="container">
		<view class="contain_box" v-for="(item,index) in containList" :key="index">
			<view class="time">
				{{item.time}}
			</view>
			<view class="context_box" v-for="(detail,idx) in item.contextList" :key="idx">
				<view class="top_box">
					<view class="context_title">
						{{detail.title}}
					</view>
					<view class="context_detail">
						{{detail.context}}
					</view>
				</view>
				<view class="bottom_box">
					<view class="bottom_left">
						<image :src="detail.pic" mode=""></image>
						{{detail.publisher}}
					</view>
					<view class="bottom_right">
						详情
						<image src="../../static/images/select.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				containList:[
					{
						time:'今天9:30',
						contextList:[
							{
								title:'标题标题标题',
								context:'被服务提供者收集、存储和使用，目的是为了向您提供出行与交通-城市共享交通服务。若你不同意',
								pic:'',
								publisher:'市场营销部'
							},
							{
								title:'标题标题标题',
								context:'被服务提供者收集、存储和使用，目的是为了向您提供出行与交通-城市共享交通服务。若你不同意',
								pic:'',
								publisher:'市场营销部'
							},
						]
					},
					{
						time:'今天9:30',
						contextList:[
							{
								title:'标题标题标题',
								context:'被服务提供者收集、存储和使用，目的是为了向您提供出行与交通-城市共享交通服务。若你不同意',
								pic:'',
								publisher:'市场营销部'
							},
							{
								title:'标题标题标题',
								context:'被服务提供者收集、存储和使用，目的是为了向您提供出行与交通-城市共享交通服务。若你不同意',
								pic:'',
								publisher:'市场营销部'
							},
							{
								title:'标题标题标题',
								context:'被服务提供者收集、存储和使用，目的是为了向您提供出行与交通-城市共享交通服务。若你不同意',
								pic:'',
								publisher:'市场营销部'
							},
						]
					},
					{
						time:'今天9:30',
						contextList:[
							{
								title:'标题标题标题',
								context:'被服务提供者收集、存储和使用，目的是为了向您提供出行与交通-城市共享交通服务。若你不同意',
								pic:'',
								publisher:'市场营销部'
							},
						
						]
					},
				]
			};
		}
	}
</script>

<style lang="scss" scoped>
.container{
	width: 100%;
	background: #f3f3f3;
	min-height: 100vh;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	.contain_box{
		width: 686rpx;
		padding: 26rpx 32rpx 14rpx 32rpx;
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		.time{
			color: #bfbfbf;
			font-size: 28rpx;
			font-weight: 500;
			margin-bottom: 24rpx;
		}
		.context_box{
			width: 100%;
			background: #FFFFFF;
			border-radius: 16rpx;
			margin-bottom: 24rpx;
			.top_box{
				width: 100%;
				display: flex;
				flex-flow: column nowrap;
				border-bottom: 2rpx solid #F3F3F3;
				.context_title{
					margin: 16rpx 32rpx;
					font-weight: 500;
					font-size: 28rpx;
					color: #424242;
				}
				.context_detail{
					margin: 0 32rpx 16rpx 32rpx;
					font-size: 24rpx;
					color:#8F8F8F ;
					
				}
			}
			.bottom_box{
				width: 100%;
				height: 75rpx;
				display: flex;
				flex-flow: row nowrap;
				align-items: center;
				justify-content: space-between;
				font-size: 24rpx;
				.bottom_left{
					height: 100%;
					margin-left: 32rpx;
					display: flex;
					flex-flow: row nowrap;
					align-items: center;
					font-weight: 500;
					color: #424242;
					image{
						width: 40rpx;
						height: 40rpx;
						border-radius: 50%;
						margin-right: 22rpx;
					}
				}
				.bottom_right{
					height: 100%;
					margin-right: 32rpx;
					display: flex;
					flex-flow: row nowrap;
					align-items: center;
					color: #8F8F8F;
					image{
						width: 24rpx;
						height: 24rpx;
						border-radius: 50%;
						margin-left: 16rpx;
					}
				}
			}
		}
	}
}
</style>
