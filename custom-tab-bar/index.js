Component({
	data:{
		height:'230rpx',
		selected:0,
		color:"#999",
		selectedColor:"#2781F6",
		list:[
			{"selectedIconPath":"../static/images/info_active.png","iconPath":"../static/images/info.png","pagePath":"/pages/home/home","text":"消息"},
			{"selectedIconPath":"../static/images/application_active.png","iconPath":"../static/images/application.png","pagePath":"/pages/application/application","text":"应用"},
			{"selectedIconPath":"../static/images/date.png","iconPath":"../static/images/date.png","pagePath":"/pages/schedule/schedule","bulge":true,"text":"日程"},
			{"selectedIconPath":"../static/images/maillist_active.png","iconPath":"../static/images/maillist.png","pagePath":"/pages/mailList/mailList","text":"通讯录"},
			{"selectedIconPath":"../static/images/minecenter_active.png","iconPath":"../static/images/minecenter.png","pagePath":"/pages/mineCenter/mineCenter","text":"我的"}
		]
	},
	attached(){},
	methods:{
		switchTab(e){
			const data = e.currentTarget.dataset
			const url = data.path
			wx.switchTab({url})
			this.setData({
				selected:data.index
			})
		},
		adjustHeight(){
			let that =this
			wx.getStorage({
				key:'Device_info',
				success:function(res){
					if(res.data=='Android'){
						that.setData({
							height:'162rpx'
						})
					}
				}
			})
		}
	},
	ready:function(){
		this.adjustHeight()
	}
})