<template>
	<view class="container">
		<view class="content_box" v-for="(item,index) in fillList" :key="index" :style="{'margin-top':(item.littleGap?'8rpx':'16rpx')}">
			<view v-if="item.type=='textarea'" class="rich_text">
				<view class="rich_title">
					<span v-if="item.required" style="color: #FF0000;font-size: 32rpx;">*</span>
					{{item.title}}
				</view>
				<view class="rich_input">
					<textarea maxlength="-1"  :value="item.textarea" @input="enterTextarea" :data-id="index" placeholder="请输入" />
				</view>
			</view>
			
			<view class="location" v-if="item.type=='location'||item.type=='select'||item.type=='time'||item.type=='input'||item.type=='selectCompany' ">
				<view class="title">
					<span  v-if="item.required" style="color: #FF0000;font-size: 32rpx;">*</span>
					{{item.title}}
				</view>
				<view v-if="item.type=='location'" @click="chooseLocation(index)" class="location_name">
					{{item.location}}
				</view>
				<view v-if="item.type=='select'" @click="chooseDate(index)" class="select_box">
					<view class="selected">
						{{item.time}}
					</view>
					<view class="select_png">
						<image src="../../static/images/select.png" mode=""></image>
					</view>
				</view>
				<view v-if="item.type=='selectCompany'" @click="chooseCompany(index)" class="select_box">
					<view class="selected">
						{{item.company}}
					</view>
					<view class="select_png">
						<image src="../../static/images/select.png" mode=""></image>
					</view>
				</view>
				<view v-if="item.type=='time'"  class="fill_time">
					<input type="text" :value="item.hours" @input="enterHours" :data-id="index" />
					小时
				</view>
				<view v-if="item.type=='input'" class="input">
					<input type="text" :value="item.text" @input="enterInput" :data-id="index"  placeholder="请输入" />
				</view>
			</view>
			
			<view class="file_box" v-if="item.type=='file'">
				<view class="text">
					附件
				</view>
				<view class="file_list">
					<van-uploader :file-list="item.fileList" @after-read="afterRead" upload-icon="plus"	 preview-size="80rpx"></van-uploader>
				</view>
			</view>
			
			<view class="process" v-if="item.type=='progress' ">
				<view class="title">
					审批流程
				</view>
				<view class="process_box">
					<view class="approver">
						<image src="../../static/images/person.png" mode=""></image>
						审批人
					</view>
					<view class="approver_detail">
						<view class="person_img" v-for="(detail,id) in item.approver" :key="id">
							<image :src="detail.url" mode=""></image>
						</view>
						<view class="add_approver">
							<image src="../../static/images/add_file.png" mode=""></image>
						</view>
					</view>
					<view class="approver">
						<image src="../../static/images/person.png" mode=""></image>
						指定审批人
					</view>
					<view class="approver_detail assign_approver_detail ">
						<view class="person_img" v-for="(detail,id) in item.approver" :key="id">
							<image :src="detail.url" mode=""></image>
						</view>
						<view class="add_approver">
							<image src="../../static/images/add_file.png" mode=""></image>
						</view>
					</view>
				</view>
			</view>
			
			<view class="add_detail" v-if=" item.type=='addDetail'">
				<view class="title">
					<image src="../../static/images/add_detail.png" mode=""></image>
					添加明细
				</view>
				<input type="text" value="" placeholder="请输入" />
			</view>
			
		</view>
		
		<view class="submit" @click="submit">
			提交
		</view>
		
		<van-popup :show="show" position="bottom" @click-overlay="clickOverlay">
			<van-datetime-picker :formatter="formatter" type="datetime" :value="currentDate" @input="onInupt" @confirm="onConfirm" @cancel="onCancel" />
		</van-popup>
		
		<van-popup :show="showLocation" position="bottom" @click-overlay="clickOverlayArea">
			<van-area :columns-num="2" :area-list='areaList' @confirm="onConfirmArea" @cancel="onCancelArea" />
		</van-popup>
		
	</view>
</template>

<script>
	import areaList  from '../../utils/area.js'
	export default {
		name:'fillIn',
		props:['fillList'],
		data() {
			return {
				show:false,
				showLocation:false,
				currentDate:new Date().getTime(),
				mediumParams:'',
				formatter:(type,value)=>{
					if(type==='year'){
						return `${value}年`
					}
					if(type==='month'){
						return `${value}月`
					}
					if(type==='day'){
						return `${value}日`
					}
					if(type==='hour'){
						return `${value}时`
					}
					if(type==='minute'){
						return `${value}分`
					}
					return value
				},
				areaList:''
			};
		},
		mounted() {
			this.areaList=areaList
		},
		methods:{
			chooseDate(id){
				this.show=true
				this.$emit('chooseDate',id)
			},
			clickOverlay(){
				this.show=false
			},
			onInupt(e){
				console.log(e)
			},
			onConfirm(e){
				this.$emit('confirmDate',e)
				this.show=false
			},
			onCancel(e){
				this.show=false
			},
			
			chooseLocation(id){
				this.showLocation=true
				this.$emit('chooseArea',id)
			},
			clickOverlayArea(){
				this.showLocation=false
			},
			onConfirmArea(e){
				this.$emit('confirmArea',e)
				this.showLocation=false
			},
			onCancelArea(e){
				this.showLocation=false
			},
			

			
			enterHours(e){
				let {id}=e.target.dataset
				this.$emit('enterHours',e,id)
			},
			enterTextarea(e){
				let {id}=e.target.dataset
				this.$emit('enterTextarea',e,id)
			},
			enterInput(e){
				let {id}=e.target.dataset
				this.$emit('enterInput',e,id)
			},
			afterRead(e){
				console.log(e)
			},
			
			
			submit(){
				this.$emit('submit')
			}
		}
	}
</script>

<style lang="scss" scoped>
.container{
	width: 100%;
	background: #E5EBEF;
	min-height: 100vh;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	.content_box{
		width: 622rpx;
		padding: 16rpx 32rpx;
		background: #fff;
		border-radius: 16rpx;
		.rich_text{
			width: 100%;
			display: flex;
			flex-flow: column nowrap;
			.rich_title{
				color: #424242;
				font-size: 28rpx;
				font-weight: 500;
			}
			.rich_input{
				margin-top: 8rpx;
				textarea{
					width: 100%;
					font-size: 28rpx;
					height:150rpx;
				}
			}
		}
		.location{
			width: 100%;
			display: flex;
			flex-flow: row nowrap;
			align-items: center;
			justify-content: space-between;
			.title{
				color: #424242;
				font-size: 28rpx;
				font-weight: 500;
			}
			.location_name{
				color: #424242;
				font-size: 24rpx;
				font-weight: 500;
				width: 50%;
				text-align: right;
			}
			.select_box{
				display: flex;
				flex-flow: row nowrap;
				align-items: center;
				font-size: 24rpx;
				font-weight: 400;
				.unselect{
					color: #8F8F8F;
				}
				.selected{
					color: #000;
				}
				.select_png{
					width: 24rpx;
					height: 24rpx;
					margin-left: 16rpx;
					image{
						width: 24rpx;
						height: 24rpx;
					}
				}
			}
			.fill_time{
				display: flex;
				flex-flow: row nowrap;
				align-items: center;
				font-size: 24rpx;
				color: #8F8F8F;
				input{
					color: #000;
					text-align: right;
				}
			}
			.input{
				color: #8F8F8F;
				font-size: 24rpx;
				input{
					text-align: right;
				}
			}
		}
		.file_box{
			display: flex;
			flex-flow: column nowrap;
			font-size: 32rpx;
			font-weight: 500;
			color: #000;
			.file_list{
				margin-top: 16rpx;
			}
		},
		.process{
			display:flex;
			flex-flow: column nowrap;
			.process_box{
				margin-top: 40rpx;
				display: flex;
				flex-flow: column nowrap;
				
				.approver{
					display: flex;
					flex-flow: row nowrap;
					align-items: center;
					image{
						width: 52rpx;
						height: 52rpx;
						margin-right: 8rpx;
					}
				}
				.approver_detail{
					margin-left: 26rpx;
					padding: 16rpx 32rpx 42rpx 32rpx;
					border-left: 2rpx solid #CFD4D8;
					display: flex;
					flex-flow: row wrap;
					align-items: center;
					.person_img{
						width: 88rpx;
						height: 88rpx;
						margin-right: 48rpx;
						image{
							width: 88rpx;
							height: 88rpx;
						}
					}
					.add_approver{
						width: 88rpx;
						height: 88rpx;
						image{
							width: 88rpx;
							height: 88rpx;
						}
					}
					
				}
				
				.assign_approver_detail{
					margin-left: 26rpx;
					padding: 16rpx 32rpx 42rpx 32rpx;
					display: flex;
					border: none;
					flex-flow: row wrap;
					align-items: center;
				}
			}
		}
		.add_detail{
			width: 100%;
			display: flex;
			flex-flow: row nowrap;
			align-items: center;
			justify-content: space-between;
			.title{
				color: #389EF9;
				font-size: 28rpx;
				font-weight: 500;
				display: flex;
				flex-flow: row nowrap;
				align-items: center;
				image{
					width: 50rpx;
					height: 50rpx;
				}
			}
			input{
				font-size: 24rpx;
				text-align: right;
			}
		}
	}
	.submit{
		width: 686rpx;
		height: 88rpx;
		background: #2781F6;
		border-radius: 16rpx;
		font-size: 28rpx;
		color: #fff;
		text-align: center;
		line-height: 88rpx;
		margin: 32rpx 0;
	}
}

</style>

