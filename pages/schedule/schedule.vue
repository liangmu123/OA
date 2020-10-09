<template>
	<view :class="[iosHeight?'container':'an_container']">
		<view @click="onClick" class="calendar_box">
			<van-calendar  @select="select"   :formatter="formatter" :show-mark="false" :show-title="false" :show-subtitle="false" color="#389EF9" :min-date="minDate" :max-date="maxDate" :default-date="Today" :poppable="false" :show-confirm="false" class="calendar"  />
		</view>
		<view  :class="[canstretch&&iosHeight?'ios_active':!canstretch&&iosHeight?'ios_nactive':canstretch&&!iosHeight?'an_active':!canstretch&&!iosHeight?'an_nactive':'']" @touchstart="touchStartFnc" @touchend="touchEndFnc">
			<view class="date_title">
				<view>
					{{dateTitle}} 
				</view>
				<view class="week_title">
					{{weekTitle}}
				</view>
			</view>
			<view class="event_list" v-for="(item,index) in eventList" :key='index'>
				<view class="time_slot">
					<view >
						{{item.startTime}}
					</view>
					<view >
						{{item.endTime}}
					</view>
				</view>
				<view class="event_detail">
					{{item.detail}}
				</view>
			</view>
		</view>
		<view @click="addEvent" class="add_event" :style="{'position': 'absolute','bottom': bottom,'right':'36rpx'}">
			<image class="add_event_img" src="../../static/images/add_event.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	import {calendar} from '@/utils/calendar.js'
	import {formatDate,formatDatePoint} from '@/utils/index.js'
	export default {
		data() {
			return {
				iosHeight:true,
				// 日历范围和默认时间
				minDate:new Date().setMonth((new Date().getMonth()-3)),
				maxDate:new Date().setMonth((new Date().getMonth()+3)),
				Today:new Date().getTime(),
				
				//日历格式
				formatter(day){
					var tmp=formatDate(day.date).split('-')
					var lunar=calendar.solar2lunar(tmp[0],tmp[1],tmp[2])
					day.topInfo=lunar.lunarFestival||lunar.festival||lunar.IDayCn
					day.bottomInfo='1'
					day.className=lunar.ncWeek=='星期六'||lunar.ncWeek=='星期日'?'weekend':''
					// const date=day.date.getDate()
					return day
				},
				
				// 根据系统调整按钮位置,默认ios
				bottom:'274rpx',
				
				// 上拉事件所需
				clientyStart:'',
				clientyEnd:'',
				canstretch:false,
				
				// 事件标题日期
				dateTitle:'',
				weekTitle:'',
				weeks:['星期日','星期一','星期二','星期三','星期四','星期五','星期六',],
				
				// 事件内容
				eventList:[
					{startTime:'上午9：30',endTime:'上午11：00',detail:'产品需求讲解会'},
					{startTime:'上午9：30',endTime:'上午11：00',detail:'产品需求讲解会产品需求讲解会产品需求讲解会产品需求讲解会产品需求讲解会'},
					{startTime:'上午9：30',endTime:'上午11：00',detail:'产品需求讲解会产品需求讲解会产品需求讲解会产品需求讲解会产品需求讲解会'},
					{startTime:'上午9：30',endTime:'上午11：00',detail:'产品需求讲解会产品需求讲解会产品需求讲解会产品需求讲解会产品需求讲解会'},
					{startTime:'上午9：30',endTime:'上午11：00',detail:'产品需求讲解会产品需求讲解会产品需求讲解会产品需求讲解会产品需求讲解会'},
					{startTime:'上午9：30',endTime:'上午11：00',detail:'产品需求讲解会产品需求讲解会产品需求讲解会产品需求讲解会产品需求讲解会'},
					{startTime:'上午9：30',endTime:'上午11：00',detail:'产品需求讲解会产品需求讲解会产品需求讲解会产品需求讲解会产品需求讲解会'},
				]
			}
		},
		methods: {
			
			// 选中日期事件
			select(e){
				let weekDay=this.weeks[e.detail.getDay()]
				this.dateTitle=formatDatePoint(e.detail)
				this.weekTitle=weekDay
			},
			
			// 根据系统调整底部tabbar高度（默认ios）
			adjustHeight(){
				let that =this
				uni.getStorage({
					key:'Device_info',
					success:function(res){
						if(res.data=='Android'){
							that.bottom='206rpx'
						}
					}
				})
			},
			
			adjustHeightContain(){
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
			
			// 记录触摸初始位置,用于判断上拉或者下拉
			touchStartFnc(e){
				this.clientyStart=e.touches[0].clientY
			},
			
			// 触摸结束位置,并判断上拉或者下拉
			touchEndFnc(e){
				this.clientyEnd=e.changedTouches[0].clientY
				if(this.clientyEnd<this.clientyStart){
					this.canstretch=true
				}else if(this.clientyEnd>this.clientyStart){
					this.canstretch=false
				}
			},
			
			// 新增事件按钮
			addEvent(e){
				console.log(e)
				console.log(this.$refs.add_event) 
			},
			
			// 点击选择日期
			onClick(e){
				console.log(e)
			}
		},
		onShow(){
			// 自定义tabbar当前页
			this.setTabBarIndex(2)
			
			this.adjustHeight()
			
			this.adjustHeightContain()
			
			// 初始event盒子上时间标题
			let weekDay=this.weeks[new Date().getDay()]
			this.dateTitle=formatDatePoint(new Date())
			this.weekTitle=weekDay
		}
	}
</script>

<style scoped>
.container{
	width: 100%;
	background: #E5EBEF;
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
	background: #E5EBEF;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
}
.calendar_box{
	width: 100%;
	height: 700rpx;
}
.calendar{
	width: 100%;
	height: 700rpx;
}
/deep/.van-calendar{
	background: #E5EBEF;
}
/deep/.van-calendar__selected-day{
	border-radius: 20rpx;
}
/deep/.van-calendar__top-info{
	color: #B5B5B5;
}
/deep/.van-calendar__bottom-info{
	color: transparent;
	width: 6rpx;
	height: 6rpx;
	border-radius: 50%;
	background: #389EF9;
	margin: 0 auto;
}
/deep/.van-calendar__selected-day .van-calendar__bottom-info{
	background: #fff;
}
/deep/.van-calendar__month-title{
	display: none;
}
/deep/.weekend {
	color: #FF954F;
}
.event_box{
	position: absolute;
	bottom: 0rpx;
	width: calc(100% - 64rpx);
	height: calc(100vh - 744rpx);
	transition: height 2s;
	background: #fff;
	border-radius: 40rpx 40rpx 0 0;
	display: flex;
	flex-flow: column nowrap;
	padding: 44rpx 32rpx 0 32rpx;
	overflow: hidden;
}
/* .event_active .event_list:nth-child(1)  {
	margin-bottom: 100rpx;
} */
/* canstretch?'event_active':'', */
.event_active{
	height: calc(100vh - 226rpx);
	transition: height 2s;
	overflow: scroll;
}
.ios_active{
	position: absolute;
	bottom: 230rpx;
	width: calc(100% - 64rpx);
	height: calc(100vh - 456rpx);
	transition: height 2s;
	background: #fff;
	border-radius: 40rpx 40rpx 0 0;
	display: flex;
	flex-flow: column nowrap;
	padding: 44rpx 32rpx 0 32rpx;
	overflow: scroll;
}
.ios_nactive{
	position: absolute;
	bottom: 230rpx;
	width: calc(100% - 64rpx);
	height: calc(100vh - 974rpx);
	transition: height 2s;
	background: #fff;
	border-radius: 40rpx 40rpx 0 0;
	display: flex;
	flex-flow: column nowrap;
	padding: 44rpx 32rpx 0 32rpx;
	overflow: hidden;
}
.an_active{
	position: absolute;
	bottom: 162rpx;
	width: calc(100% - 64rpx);
	height: calc(100vh - 388rpx);
	transition: height 2s;
	background: #fff;
	border-radius: 40rpx 40rpx 0 0;
	display: flex;
	flex-flow: column nowrap;
	padding: 44rpx 32rpx 0 32rpx;
	overflow: scroll;
}
.an_nactive{
	position: absolute;
	bottom: 162rpx;
	width: calc(100% - 64rpx);
	height: calc(100vh - 906rpx);
	transition: height 2s;
	background: #fff;
	border-radius: 40rpx 40rpx 0 0;
	display: flex;
	flex-flow: column nowrap;
	padding: 44rpx 32rpx 0 32rpx;
	overflow: hidden;
}
.add_event{
	width: 120rpx;
	height: 120rpx;
}
.add_event_img{
	width: 120rpx;
	height: 120rpx;
}
.date_title{
	display: flex;
	flex-flow: row nowrap;
	color: #424242;
	font-size: 32rpx;
}
.week_title{
	font-size: 28rpx;
	font-weight: 500;
	margin-left: 16rpx;
}
.event_list{
	width: 100%;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-between;
	margin-top: 26rpx;
}
.time_slot{
	color: #424242;
	font-size: 20rpx;
	font-weight: 500;
}
.event_detail{
	width: 522rpx;
	padding:16rpx 24rpx;
	line-height: 34rpx;
	background: #E5EBEF;
	font-size: 24rpx;
	color: #424242;
	font-weight: 500;
	border-radius: 8rpx;
}
</style>
