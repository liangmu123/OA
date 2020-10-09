<template>
	<view>
		<fill-in :fillList="fillList" 
		@chooseDate="chooseDate" 
		@confirmDate="confirmDate" 
		@enterHours="enterHours"
		@enterTextarea="enterTextarea"
		@chooseArea="chooseArea"
		@confirmArea="confirmArea"
		@submit="submit"></fill-in>
	</view>
</template>

<script>
	import {formatTime} from '@/utils/index.js'
	import fillIn from '../../components/fill-in/fill-in.vue'
	export default {
		components:{
			fillIn
		},
		data() {
			return {
				fillList:[
					{title:'出差事由',type:'textarea',required:true},
					{title:'出差地点',type:'location',required:true,location:'请选择'},
					{title:'开始时间',type:'select',required:true,time:'请选择',littleGap:true},
					{title:'结束时间',type:'select',required:true,time:'请选择',littleGap:true},
					{title:'出差时长',type:'time',required:true,hours:'',littleGap:true},
					{title:'',type:'file'},
					{title:'',type:'progress',approver:[
						{url:'../../static/images/personal_info.png'},
						{url:'../../static/images/personal_info.png'},
					]},
				],
				mediumParams:'',
				dateIndex:''
			}
		},
		methods: {
			chooseDate(id){
				console.log(id)
				this.dateIndex=id
			},
			confirmDate(e){
				console.log(e)
				let {dateIndex} =this
				this.fillList[dateIndex].time=formatTime(new Date(e.detail))
				this.dateIndex=''
			},
			
			chooseArea(id){
				this.dateIndex=id
			},
			confirmArea(e){
				console.log(e)
				let {dateIndex} =this
				this.fillList[dateIndex].location=`${e.detail.values[0].name} ${e.detail.values[1].name}`
				this.dateIndex=''
			},
			
			enterHours(e,id){
				this.fillList[id].hours=e.detail.value
			},
			enterTextarea(e,id){
				this.fillList[id].textarea=e.detail.value
			},
			
			
			submit(){
				console.log(this.fillList)
			}
		}
	}
</script>

<style>

</style>
