<template>
	<view class="container">
		<view class="card">
			<view class="info_box">
				<view class="company">
					{{company}}
				</view>
				<view class="name_box">
					<view class="name">
						{{name}}
					</view>
					<view class="position">
						{{department}}
					</view>
					<view class="position">
						{{position}}
					</view>
				</view>
			</view>
			<view class="img_box">
				<image src="../../static/images/about_us.png" mode=""></image>
			</view>
		</view>
		<view class=" btn send_message">
			发消息
		</view>
		<view class=" btn volte">
			语音通话
		</view>
		<view class="back_ground_blue">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				company:'苏州海元电子科技有限公司',
				name:'彭于晏',
				department:'产品部',
				position:'设计师',
			}
		},
		methods: {
			
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
	.card{
		width: 622rpx;
		height: 172rpx;
		border-radius: 16rpx;
		box-shadow: 0px 0px 12px rgba(53, 53, 53, 0.1);
		background: #fff;
		margin-top: 17rpx;
		padding: 32rpx;
		display: flex;
		flex-flow: row nowrap;
		align-items: flex-start;
		justify-content: space-between;
		z-index: 2;
		.info_box{
			height: 100%;
			display: flex;
			flex-flow: column nowrap;
			align-items: flex-start;
			justify-content: space-between;
			.company{
				font-size: 28rpx;
				color: #424242;
				font-weight: 500;
			}
			.name_box{
				display: flex;
				flex-flow: row nowrap;
				align-items: flex-end;
				color: #424242;
				.name{
					font-size: 32rpx;
					font-weight: bold;
				}
				.position{
					font-size: 20rpx;
					margin-left: 16rpx;
				}
			}
		}
		.img_box{
			width: 120rpx;
			height: 120rpx;
			border-radius: 50%;
			image{
				width: 120rpx;
				height: 120rpx;
				border-radius: 50%;
			}
		}
	}
	.btn{
		width: 686rpx;
		height: 88rpx;
		border-radius: 16rpx;
		font-size: 28rpx;
		font-weight: 500;
		text-align: center;
		line-height:88rpx;
	}
	.send_message{
		background: #2781F6;
		color: #fff;
		margin-top: 104rpx;
	}
	.volte{
		background: #fff;
		color: #424242;
		margin-top: 32rpx;
	}
	.back_ground_blue{
		width: 100%;
		height: 162rpx;
		position: absolute;
		top: 0;
		background: #2781F6;
	}
}
</style>
