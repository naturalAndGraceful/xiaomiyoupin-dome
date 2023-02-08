<template>
	<div class="userhome">
		<!-- 顶部登录 -->
		<div class="top" @click="getregister()">
			<div class="touxiang">
				<div v-if="this.$store.state.user.userInfo.M_LoginID">
					<van-image round width="1.2rem" height="1.2rem"
						src="https://userglobal-vivofs.vivo.com.cn/useravatar/20211118130330/a3769f82bc374353ac2441dc5a9cf3ae.jpg" />
				</div>
				<div v-else>
					<van-image round width="1.2rem" height="1.2rem"
						src="https://img.youpin.mi-img.com/shopcenter/7dhur6i77hg_11350267611625208274363.png" />
				</div>

				<p v-if="this.$store.state.user.userInfo.M_LoginID">{{$store.state.user.userInfo.M_LoginID}}</p>
				<p v-else>请登录</p>
			</div>
			<div class="icons" style="display: flex; justify-content: center;align-items: center; width: 1rem;height: 1rem;">
				<img
					src="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/icons/icon_arrow_right_darkgray.png" >
			</div>
		</div>
		<!-- 顶部登录结束 -->
		<!-- 主体内容 -->
		<div class="content">
			<ul class="dingdan">
				<li>

					<p style="margin-left: 0.1rem;">我的订单</p>
					<img
						src="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/icons/icon_arrow_right_darkgray.png">


				</li>
				<li class="daohang">
					<!-- 功能导航 -->
					<ul>
						<li>
							<img src="https://img.youpin.mi-img.com/shopcenter/1su4kcv21eg_22212270231600948691418.png">
							<p>待付款</p>
						</li>
						<li>
							<img src="https://img.youpin.mi-img.com/shopcenter/1su4kcv21eg_22212270231600948691418.png">
							<p>待收货</p>
						</li>
						<li>
							<img src="https://img.youpin.mi-img.com/shopcenter/n9q7tuhs6ao_22212270231600948691455.png">
							<p>评价</p>
						</li>
						<li>
							<img src="https://img.youpin.mi-img.com/shopcenter/q69ib1u9teg_22212270231600948691439.png">
							<p>退货/售后</p>
						</li>
					</ul>
					<!-- 功能导航结束 -->
				</li>
				<li>
					<div><img
							src="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/ucenter/ucenter_icon_myassets.png">
						<p>我的资产</p>
					</div>
					<img
						src="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/icons/icon_arrow_right_darkgray.png">
				</li>
				<li>
					<div><img
							src="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/ucenter/ucenter_icon_coupon_new.png">
						<p>优惠券</p>
					</div>
					<img
						src="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/icons/icon_arrow_right_darkgray.png">
				</li>
				<li class="borderdd">
					<div><img
							src="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/ucenter/ucenter_icon_collection.png">
						<p>我的收藏</p>
					</div>
					<img
						src="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/icons/icon_arrow_right_darkgray.png">
				</li>
				<li>
					<div><img
							src="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/ucenter/ucenter_icon_address.png">
						<p>地址管理</p>
					</div>
					<img
						src="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/icons/icon_arrow_right_darkgray.png">
				</li>
				<li>
					<div><img
							src="https://shop.io.mi-img.com/app/shop/img?id=shop_0556651f21ebb90fd2094de25cfeeeff.png&w=114&h=114">
						<p>资质执照</p>
					</div>
					<img
						src="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/icons/icon_arrow_right_darkgray.png">
				</li>
				<li>
					<div><img
							src="https://shop.io.mi-img.com/app/shop/img?id=shop_eec55569c325c1641e1cd47ba572b83b.png&w=114&h=114">
						<p>协议规则</p>
					</div>
					<img
						src="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/icons/icon_arrow_right_darkgray.png">
				</li>
				<li>
					<div><img
							src="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/ucenter/ucenter_icon_feedback.png">
						<p>帮助与反馈</p>
					</div>
					<img
						src="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/icons/icon_arrow_right_darkgray.png">
				</li>
				<li class="btn" :class="{active:this.$store.state.user.userInfo.M_LoginID}">
					<button v-if="this.$store.state.user.userInfo.M_LoginID" @click="loginout()">退出</button>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import {
		Dialog
	} from 'vant';
	Vue.use(Dialog);

	import {
		Login
	} from '../api/user/user.js'
	export default {
		data() {
			return {
				userInfo: {},
				getisLog:false,
			}
		},
		created() {
			this.$store.dispatch("user/getUserInfo");
		},
		methods: {
			getregister() {
				if (this.$store.state.user.userInfo.M_LoginID) {
					alert("已经登录了")
				} else {
					Dialog.confirm({
							title: '声明与政策',
							message: '欢迎您来到小米有品！您可在有品进行商品浏览、 支付购买、 售后服务等功能。 我们将严格遵守相关法律法规和隐私政策以保护您的个人信息。 请您阅读并同意《 小米有品用户协议》、《 隐私政策》、《 小米账号使用协议》 和《 小米账号隐私政策》 ',
						})
						.then(() => {

							this.$router.push('/login')
						})
						.catch(() => {

						});
				}

			},
			// getwin(){
			// 	if(window.localStorage.getItem('isLog')){
			// 		this.getisLog=true
			// 	}else{
			// 		this.getisLog=false
			// 	}
			// },
			loginout() {
				Login({
					dopost: 'exit'
				}).then(res => {
					// console.log(res)
					window.localStorage.removeItem('isLog')
					this.$router.replace('/')
					this.$store.state.user.userInfo="";
				}).catch(err=>{
					console.error(err)
				})
				console.log(this.$store.state.user.userInfo.M_LoginID)
				
			},
		},
	}
</script>

<style scoped="scoped">
	.userhome {
		width: 100%;
		height: 100vh;
		/* padding: 0 0.2rem; */
		background-color: #F3F3F3;
		
	}
	.icons img{
		/* display: flex; */
		width: 0.5rem;
		height: 0.5rem;

	}
	.top {
		width: 100%;
		height: 1.8rem;
		background-image: url(//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/ucenter/ucenter_bg_top.png);
		background-size: 6rem 1.6rem;
		overflow: hidden;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #FFFFFF;
		padding: 0.3rem;
		border-bottom: 5px solid rgb(229, 229, 229);
	}

	.top .touxiang {
		display: flex;
		align-items: center;
	}

	.top .touxiang p {
		margin-left: 0.3rem;
		font-size: 0.26rem;
		/* font-weight: 600; */
	}

	.content {
		width: 100%;
		/* height: calc(100vh - 1.8rem); */
		background-color: #FFFFFF;
		/* margin-bottom: 0.3rem; */
	}

	.content .dingdan {
		width: 100%;
	}

	.content .dingdan>li {
		height: 0.9rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 0.28rem;
		padding: 0 0.3rem;
		border-bottom: 1px solid rgb(229, 229, 229);

	}

	.content .dingdan>li div {
		display: flex;
		align-items: center;
	}

	.content .dingdan>li div>img {
		width: 0.61rem;
	}

	.content .dingdan>li>img {
		width: 0.3rem;
	}

	.content .dingdan>li>ul {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.content .dingdan .daohang {
		height: 1.3rem;
		border-bottom: 5px solid rgb(229, 229, 229);
	}

	.content .dingdan .borderdd {
		border-bottom: 5px solid rgb(229, 229, 229);
	}

	.content .dingdan>li>ul li {
		width: 25%;
		text-align: center;
		color: #333333;
	}

	.content .dingdan>li>ul li img {
		width: 0.64rem;
		height: 0.64rem;
	}

	.content .dingdan .btn {
		display: flex;
		justify-content: center;
		align-items: center;
		border: none;
		background-color: #F3F3F3;	
	}
.active{
	margin-bottom: 1.2rem;
}
	.content .dingdan .btn button {
		width: 2rem;
		height: 0.8rem;
		background-color: #FFFFFF;
		border: 1px solid #F8F8F8;
		border-radius: 0.1rem;
	}
</style>
