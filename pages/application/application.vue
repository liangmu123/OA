<template>
	<view :class="[iosHeight?'container':'an_container']">
		<view class="banner">
			<image class="banner_img" src="../../static/images/OA_pic.png" mode=""></image>
		</view>
		
		<view class="tips">
			<view class="tips_item">
				<view class="nums">
					0
				</view>
				<view class="tip_text">
					待我审批
				</view>
			</view>
			<view class="tips_item">
				<view class="nums">
					0
				</view>
				<view class="tip_text">
					出勤异常
				</view>
			</view>
			<view class="tips_item">
				<view class="nums">
					<image class="nums_img" src="../../static/images/Corporate_consulting.png" mode=""></image>
				</view>
				<view class="tip_text">
					公司咨询
				</view>
			</view>
			<view class="tips_item">
				<view class="nums">
					<image class="nums_img" src="../../static/images/Cultural_activity.png" mode=""></image>
				</view>
				<view class="tip_text">
					文化活动
				</view>
			</view>
		</view>
		
		<view class="common_applications">
			<view class="context_title">
				<view >
					常用应用
				</view>
				<view class="add_more">
					<view >
						添加常用
					</view>
					<view class="add_img_box">
						<image class="add_img" src="../../static/images/add.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="items_box">
				<view class="items" v-for="(item,index) in commonApp" :key="index" @click="linkTo(item.text)">
					<view class="item_pic">
						<image class="pic_img" :src="item.img" mode=""></image>
					</view>
					<view class="text">
						{{item.text}}
					</view>
				</view>
			</view>
		</view>
		
		<view class="common_applications">
			<view class="title_list">
				<view :class=" [ item.active?'active':'' , 'choose_title' ]"  @click="chooseTitle" :data-id="index" v-for="(item,index) in titleList" :key="index">
					<view class="title_text">
						{{item.name}}
					</view>
					<view :class="[item.active?'title_line':'']" >
						
					</view>
				</view>
			</view>
			<view class="items_box">
				<view class="items" v-for="(item,index) in allApp" :key="index" @click="linkApp(item.text)">
					<view class="item_pic">
						<image class="pic_img" :src="item.img" mode=""></image>
					</view>
					<view class="text">
						{{item.text}}
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
				iosHeight:true,
				commonApp:[
					{img:'../../static/images/leave.png',"text":'请假'},
					{img:'../../static/images/business_travel.png',"text":'出差'},
					{img:'../../static/images/goout.png',"text":'外出'},
					{img:'../../static/images/Reimbursement.png',"text":'费用报销'},
					{img:'../../static/images/train.png',"text":'培训'},
				],
				allApp:[
					{img:'../../static/images/interview.png',"text":'面试'},
					{img:'../../static/images/Entry.png',"text":'入职'},
					{img:'../../static/images/become_regular.png',"text":'转正'},
					{img:'../../static/images/Employee_file.png',"text":'员工档案'},
					{img:'../../static/images/Job_transfer.png',"text":'调岗'},
					{img:'../../static/images/change_salary.png',"text":'调薪'},
				],
				titleList:[
					{name:'人事',active:true},
					{name:'法务',active:false},
					{name:'票务',active:false},
					{name:'市场',active:false},
					{name:'产物',active:false}
				]
			}
		},
		methods: {
			chooseTitle(ev){
				let {id} =ev.currentTarget.dataset
				this.titleList.map((elem,index)=>{
					elem.active=false
					if(id===index){
						elem.active=true
					}
				})
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
			linkTo(text){
				if(text=='出差'){
					uni.navigateTo({
						url:'../business_travel/business_travel'
					})
				}
			},
			linkApp(text){
				if(text=='入职'){
					uni.navigateTo({
						url:'../entry/entry'
					})
				}
			}
		},
		onShow(){
			this.setTabBarIndex(1)
			this.adjustHeight()
		}
	}
</script>

<style  scoped>
.container{
	width: 100%;
	font-size: 20rpx;
	background: #F3F3F3;
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
	font-size: 20rpx;
	background: #F3F3F3;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
}
.banner{
	width: 722rpx;
	height: 236rpx;
	margin-top: 6rpx;
}
.banner_img{
	width: 722rpx;
	height: 236rpx;
}
.tips{
	width: 622rpx;
	height: 140rpx;
	background: #fff;
	padding: 0 32rpx;
	border-radius: 16rpx;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-between;
}

.tips_item{
	height: 90rpx;
	width: 80rpx;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: space-between;
}
.nums{
	width: 60rpx;
	height: 60rpx;
	color: #424242;
	font-size: 40rpx;
	text-align: center;
	font-weight: 800;
}
.tip_text{
	color: #8F8F8F;
	font-size: 20rpx
}
.nums_img{
	width: 60rpx;
	height: 60rpx;
}

.common_applications{
	margin-top: 16rpx;
	width: 622rpx;
	background: #fff;
	padding: 0 32rpx;
	border-radius: 16rpx;
}
.context_title{
	width: 100%;
	margin: 16rpx 0 32rpx 0;
	font-size: 28rpx;
	color: #424242;
	font-weight: 500;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-between;
}
.add_more{
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	font-weight: 400;
	color: #389EF9;
	font-size: 24rpx;
}
.add_img_box{
	width: 30rpx;
	height: 30rpx;
	margin-left: 8rpx;
}
.add_img{
	width: 30rpx;
	height: 30rpx;
}
.items_box{
	width: 100%;
	display: flex;
	flex-flow: row wrap;
	align-items: center;
}
.items{
	width: 60rpx;
	height: 80rpx;
	margin-bottom: 32rpx;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: space-between;
	margin-right:calc((100% - 240rpx) / 3);
}
.items_box :nth-child(4n).items{
	margin-right: 0;
}
.item_pic{
	width: 60rpx;
	height: 60rpx;
}
.pic_img{
	width: 60rpx;
	height: 60rpx;
}
.text{
	width: 90rpx;
	text-align: center;
	color: #8F8F8F;
	font-size: 20rpx;
}
.title_list{
	width: 100%;
	margin: 16rpx 0 36rpx 0;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-between;
}
.choose_title{
	color: #424242;
	font-size: 28rpx;
	font-weight: 400;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
}
.active{
	color: #3378EB;
	font-size: 28rpx;
	font-weight: 500;
}
.title_line{
	width: 36rpx;
	height: 4rpx;
	background: #3378EB;
	border-radius: 8rpx;
}
</style>
