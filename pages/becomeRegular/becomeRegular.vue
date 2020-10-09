<template>
	<view>
		<fill-in :fillList="fillList"
		
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
					{title:'转正人',required:true,type:'selectCompany',company:'请选择'},
					{title:'所在部门',required:true,type:'selectCompany',company:'请选择'},
					{title:'入职日期',type:'selectCompany',company:'请选择'},
					{title:'转正日期',type:'selectCompany',company:'请选择'},
					{title:'试用期评价',type:'textarea'},
					{title:'',type:'file'},
				]
			};
		}
	}
</script>

<style lang="scss" scoped>

</style>
