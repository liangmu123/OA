<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
		uni.getSystemInfo({
			success(res) {
				if(res.system.indexOf('Android')!==-1){
					uni.setStorageSync(
						"Device_info",'Android'
					)
				}else if(res.system.indexOf('iOS')!==-1){
					uni.setStorageSync(
						"Device_info",'iOS'
					)
				}
			}
		})
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	},

};
</script>

<style >
@import "/wxcomponents/vant/dist/common/index.wxss";
	
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
	font-family: uniicons;
	src: url('/static/uni.ttf');
}
/* #endif */
</style>
