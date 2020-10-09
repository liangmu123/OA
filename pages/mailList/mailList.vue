<template>
	<view :class="[iosHeight?'container':'an_container']">
		<view class="search_box">
			<image class="search_icon" src="../../static/images/search.png" mode=""></image>
			<input class="search_input" type="text" :value="search" @input="goSearch" />
		</view>
		<view class="select_box">
			<view class="select_item" v-for="(item,index) in departList" :key="index">
				<image class="depart_img" :src="item.url" mode=""></image>
				<view class="depart_name">
					{{item.name}}
				</view>
			</view>
		</view>
		<view class="select_component">
			<van-index-bar class="van-index-bar">
			  <view  v-for="(item,index) in indexList" :key="index" >
			    <van-index-anchor  :index="item.letter"/>
			    <view class="index_item_box" v-for="(detail,id) in item.content" :key="index">
					<view class="head_portrait_box">
							<image class="head_portrait_img" :src="detail.url" mode=""></image>
					</view>
					<view class="info_box">
						<view class="name_position">
							<view class="name">
								{{detail.name}}
							</view>
							<view class="position">
								{{detail.position}}
							</view>
						</view>
						<view class="department">
							{{detail.department}}
						</view>
					</view>
				</view>
			  </view>
			
		
			  
			</van-index-bar>
		</view>
	</view>

</template>

<script>
	import uniIndexedList from '@/components/uni-indexed-list/uni-indexed-list.vue'
	export default {
		components:{
			uniIndexedList
		},
		data() {
			return {
				iosHeight:true,
				search:'',
				departList:[
					{url:'../../static/images/headquarters.png',name:'总公司'},
					{url:'../../static/images/haiyuan.png',name:'海元'},
					{url:'../../static/images/my_depart.png',name:'我的部门'}
				],
				indexList:[
					{
						letter:'A',
						content:[
							{name:'Yurua',position:'开发',department:'总经办'}
						],
					},
					{
						letter:'B',
						content:[
							{name:'Yurua',position:'开发',department:'总经办'}
						],
					},
					{
						letter:'C',
						content:[
							{name:'Yurua',position:'开发',department:'总经办'}
						],
					},
					{
						letter:'D',
						content:[
							{name:'Yurua',position:'开发',department:'总经办'}
						],
					},
					{
						letter:'E',
						content:[
							{name:'Yurua',position:'开发',department:'总经办'}
						],
					},
					{
						letter:'F',
						content:[
							{name:'Yurua',position:'开发',department:'总经办'}
						],
					},
					{
						letter:'G',
						content:[
							{name:'Yurua',position:'开发',department:'总经办'}
						],
					},
					{
						letter:'H',
						content:[
							{name:'Yurua',position:'开发',department:'总经办'}
						],
					},
					{
						letter:'I',
						content:[
							{name:'Yurua',position:'开发',department:'总经办'}
						],
					},
					{
						letter:'J',
						content:[
							{name:'Yurua',position:'开发',department:'总经办'}
						],
					},
					{
						letter:'K',
						content:[
							{name:'Yurua',position:'开发',department:'总经办'}
						],
					},
					{
						letter:'L',
						content:[
							{name:'Yurua',position:'开发',department:'总经办'}
						],
					},
					{
						letter:'M',
						content:[
							{name:'Yurua',position:'开发',department:'总经办'}
						],
					},
				    {
				    	letter:'N',
				    	content:[
				    		{name:'Yurua',position:'开发',department:'总经办'}
				    	],
				    },
					{
						letter:'O',
						content:[
							{name:'Yurua',position:'开发',department:'总经办'}
						],
					},
					{
						letter:'P',
						content:[
							{name:'Yurua',position:'开发',department:'总经办'}
						],
					},
					{
						letter:'Q',
						content:[
							{name:'Yurua',position:'开发',department:'总经办'}
						],
					},
					{
						letter:'R',
						content:[
							{name:'Yurua',position:'开发',department:'总经办'}
						],
					},
				]
				}
		},
		methods: {
			goSearch(e){
				this.search=e.detail.value
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
			}
		},
		onShow(){
			this.setTabBarIndex(3)
			this.adjustHeight()
		}
	}
</script>

<style scoped>
.container{
	width: 100%;
	background: #fff;
	min-height: calc(100vh - 230rpx);
	margin-bottom: 230rpx;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
}
.an_container{
	min-height: calc(100vh - 162rpx);
	margin-bottom: 162rpx;
	width: 100%;
	background: #fff;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
}
.search_box{
	width: 686rpx;
	height: 68rpx;
	background: #E0E0E0;
	border-radius: 16rpx;
	margin-top: 16rpx;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	
}
.search_icon{
	width: 40rpx;
	height: 40rpx;
	margin-left: 36rpx;
}
.search_input{
	width: 100%;
}
.select_box{
	width: 686rpx;
	display: flex;
	flex-flow: row nowrap;
	margin: 48rpx 0 32rpx 0;
}
.select_item{
	width: 120rpx;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	margin-right: 68rpx;
}
.depart_img{
	width: 120rpx;
	height: 120rpx;
}
.depart_name{
	color: #424242;
	font-size: 28rpx;
	font-weight: 500;
}
.select_component{
	width: 100%;
	min-height: 10rpx;
}
/deep/.van-index-anchor{
	background: #F1F1F1;
}
.index_item_box{
	width: 750rpx;
	height: 152rpx;
	margin-bottom: 2rpx;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	background: #fff;
}
/deep/.van-index-bar{
	background: #F1F1F1;
}
.head_portrait_box{
	width: 88rpx;
	height: 88rpx;
	border-radius: 50%;
	background: #07C160;
	margin-left: 32rpx;
}
.head_portrait_img{
	width: 88rpx;
	height: 88rpx;
	border-radius: 50%;
}
.info_box{
	height: 88rpx;
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-between;
	margin-left: 16rpx;
}
.name_position{
	display: flex;
	flex-flow: row nowrap;
	align-items: flex-end;
}
.name{
	color: #000000;
	font-size: 32rpx;
	font-weight: bold;
}
.position{
	color: #2781F6;
	font-size: 20rpx;
	font-weight: 800;
	margin-left: 24rpx;
}
.department{
	color: #8F8F8F;
	font-size: 24rpx;
	font-weight: 300;
}
</style>
