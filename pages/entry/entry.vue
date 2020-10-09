<template>
	<view>
		<fill-in :fillList="fillList"
		@enterHours="enterHours"
		@enterInput="enterInput"
		@submit="submit"
		></fill-in>
	</view>
</template>

<script>
	import fillIn from '../../components/fill-in/fill-in.vue'
	export default {
		components:{
			fillIn
		},
		data() {
			return {
				fillList:[
					{title:'公司',type:'selectCompany',required:true,company:'请选择'},
					{title:'部门',type:'input',littleGap:true},
					{title:'姓名',type:'input',required:true,littleGap:true},
					{title:'职务',type:'input',littleGap:true},
					{title:'试用期薪资',type:'input',littleGap:true},
					{title:'转正薪资',type:'input',littleGap:true},
					{title:'使用期限',type:'input',littleGap:true},
					{title:'社保基数',type:'input',littleGap:true},
					{title:'工作地点',type:'input',littleGap:true},
					{title:'',type:'progress',approver:[
						{url:'../../static/images/personal_info.png'},
						{url:'../../static/images/personal_info.png'},
					]},
				],
			};
		},
		methods:{
			enterHours(e,id){
				this.fillList[id].hours=e.detail.value	
			},
			enterInput(e,id){
				this.fillList[id].text=e.detail.value
			},
			submit(){
				console.log(this.fillList)
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
