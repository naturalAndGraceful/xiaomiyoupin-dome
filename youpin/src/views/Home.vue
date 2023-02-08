<template>
	<div class="home">
		<div class="top">
			<img src="https://img.youpin.mi-img.com/static/weex_images/v1/m/navi_title_v6.png">
			<van-search shape="round" background=" #845D32" placeholder="搜一搜" @click="$router.push('./sosuo')" />
		</div>
		<div class="floors" v-for="(item,index) in dataHome.floors" style="width: 100%;overflow: hidden;">

			<!-- 轮播图开始 -->
			<div class="swipt" v-if="item.module_key=='declare_banner_new'">
				<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
					<van-swipe-item v-for="bnn in item.data.items"><a :href="bnn.item.jump_url"><img
								:src="bnn.item.pic_url" width="100%"></a></van-swipe-item>
				</van-swipe>
			</div>
			<!-- 轮播图结束 -->
			<!-- 导航栏开始 -->
			<div class="borde" v-if="item.module_key=='kingkong_occupied'"
				style="display: flex; justify-content: center;">
				<div v-for="ico in item.data.items">

					<a :href="ico.item.jump_url" style="display: flex; width: 1.5rem;justify-content: center;">
						<img :src="ico.item.pic_url" style="width: 1.2rem;">

					</a>
					<p style="font-size: 0.24rem; color: #000; text-align: center;line-height: 0.34rem;">
						{{ico.item.title}}
					</p>
				</div>
			</div>
			<!-- 导航栏结束 -->
			<!-- k50广告 -->
			<div v-if="item.module_key=='image_link_map'">
				<a :href="item.data._hotspot.items[0].edit.data.jump_url">
					<img :src="item.data._hotspot.image" width="100%">
				</a>
			</div>
			<!-- k50广告结束 -->
			
				<div v-if="item.module_key=='plaza_new'" style="display: flex; width: 100%;padding: 0.1rem;">
					<div v-for="stretch in item.data.rows[0].items" class="special">
						<a :href="stretch.item.jump_url"><img :src="stretch.item.pic_url"></a>
					</div>
				</div>
			

			<!-- 商品展示 结束-->
			<!-- 小米众筹开始 -->
			<div v-if="item.module_key=='crowd_funding'" class="ypzc">
				<a :href="item.data.jump_url">
					<div class="zhongchou">
						<div style="display: flex;justify-content: space-between;font-size: 0.36rem;color: #000000;">
							{{item.data.title}} <span
								style="color:rgba(0, 0, 0, 0.4);font-size: 0.24rem;">{{item.data.crowd_count}}
								款众筹中>
							</span>
						</div>
						<div class="zcshopping">
							<div
								style="display: flex;width: 3rem; margin-top: 0.18rem; background-color: rgb(255, 250, 242);position: relative;padding: 0.2rem;border-radius: 0.12rem;">
								<div>
									<p style="font-size: 0.26rem;font-weight: 500;width: 1.3rem;">
										{{item.data.items[0].item.name}}
									</p>
									<span style="font-size: 0.28rem;font-weight: 700;color: rgb(208, 141, 53);">
										￥{{item.data.items[0].item.price_min/100}}
									</span>
								</div>
								<div>
									<img :src="item.data.items[0].item.pic_url">
								</div>
								<p
									style="display: flex;justify-content: space-between;width: 80%; position: absolute;left: 0.2rem;bottom: 0.1rem; ">
									<span>{{item.data.items[0].item.saled_count}}人支持</span>
									<span>完成度{{item.data.items[0].item.progress}}</span>
								</p>
							</div>

							<div class="right">
								<div class="zctou">
									<img :src="item.data.items[1].item.pic_url">
									<p
										style="font-size: 0.24rem;line-height: 0.32rem;font-weight: 400;color: rgba(0, 0, 0, 0.8);">
										{{item.data.items[1].item.name}}
									</p>
									<p style="font-size: 0.28rem;color: rgb(208, 141, 53);font-weight: 700;">
										<span>￥</span>{{item.data.items[1].item.price_min/100}} <span>起</span>
									</p>
								</div>
								<div class="zctou">
									<img :src="item.data.items[2].item.pic_url">
									<p
										style="font-size: 0.24rem;line-height: 0.32rem;font-weight: 400;color: rgba(0, 0, 0, 0.8);">
										{{item.data.items[2].item.name}}
									</p>
									<p style="font-size: 0.28rem;color: rgb(208, 141, 53);font-weight: 700;">
										<span>￥</span>{{item.data.items[2].item.price_min/100}} <span>起</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</a>

			</div>
			<!-- 小米众筹结束 -->
			<!-- 上新精选开始 -->
			<div class="sxjx" v-if="item.module_key=='newpro_floor_v4.5'">
				<div class="jxbody">
					<a :href="item.data.jump_url" class="jxsize">
						<p>{{item.data.title}}</p><span>
							更多
						</span>
					</a>
					<div class="sximg">
						<div class="horses">
							<!-- <a :href="./Details"> -->
							<img src="https://img.youpin.mi-img.com/youpin_gms/f65699a8_bcff_4b5d_a450_7ee80f20a06a.jpeg@base@tag=imgScale&F=webp&h=1080&w=1080?w=1080&h=1080"
								alt="" @click="$router.push('/details')">
							<p>redmi k50</p>
							<!-- </a> -->

						</div>
						<div v-for="jingxuan in item.data.a_items" class="horses">
							<a :href="jingxuan.item.jump_url">
								<img :src="jingxuan.item.pic_url" alt="" @click="$router.push('/details')">
								<p>{{jingxuan.item.name}}</p>
							</a>

						</div>

					</div>
				</div>
			</div>
			<!-- 上新精选结束 -->
			<!-- 有品秒杀开始 -->
			<div class="sxjx" v-if="item.module_key=='flashsale_new'">
				<div class="jxbody">
					<a :href="item.data.jump_url" class="jxsize">
						<div style="display: flex;">
							<p>{{item.data.title}}</p>

							<div style="display: flex; margin-left: 0.2rem;">
								<span style="font-size: 0.18rem;font-weight: 600;color: #000000;">秒杀专场</span>
								<van-count-down :time="time" />
							</div>
						</div>
						<span>
							更多
						</span>
					</a>
					<div class="msimg">
						<div v-for="miaosha in item.data.goods" class="horses">
							<a :href="miaosha.item.jump_url">
								<img :src="miaosha.item.img" alt="">
								<div class="price"><span>￥</span>{{miaosha.item.flash_price/100}} <span>起</span>
									<p v-if="miaosha.item.market_price">￥{{miaosha.item.market_price/100}}</p>
								</div>
							</a>

						</div>

					</div>
				</div>
			</div>
			<!-- 有品秒杀结束 -->

		</div>
		<div class="ass">
			<div></div>
			<p>更多好物，敬请期待</p>
			<div></div>
		</div>
	</div>
</template>

<script>
	import {
		Toast
	} from 'vant';
	import {
		GetHome,
		GetTime
	} from '../api/home/home.js'
	export default {
		data() {
			return {
				dataHome: [],
				// data: {
				// 	platform: "m"
				// },
				time: 12812071,
				data1: {
					0: "newer_popup_ad",
					1: "download_options"
				}

			}
		},
		created() {
			this.getHome();
			// this.getTime(this.data1);
		},
		methods: {
			getHome() {
				Toast.loading({
					message: '加载中...',
					forbidClick: true,
				})
				GetHome()
					.then(res => {
						this.dataHome = res.data.data.homepage
						console.log(this.dataHome)
						// this.time = this.dataHome.floors[8].data.end_time - this.dataHome.floors[8].data.start_time
						// console.log(this.time)
					}).catch(err => {
						console.log(err)
					})
			},
			// getTime(data1){

			// 	GetTime(data1)
			// 		.then(res => {
			// 			// console.log(res)

			// 		}).catch(err => {
			// 			console.log(err)
			// 		})
			// }
		}
	}
</script>
<style scoped="scoped">
	.my-swipe .van-swipe-item {
		color: #fff;
		font-size: 0.2rem;
		line-height: 1.5rem;
		text-align: center;
	}

	.van-swipe-item img {
		width: 100%;
	}

	.van-search {
		width: 6rem;
		background: #845D32;
		margin-left: 0.3rem;
	}
	.van-field__control{
		font-size: 0.4rem;
	}

	.van-search__content {
		height: 0.6rem;
		display: flex;
		align-items: center;
	}

	.colon {
		display: inline-block;
		margin: 0 4px;
		color: #ee0a24;
	}

	.block {
		display: inline-block;
		width: 22px;
		color: #fff;
		font-size: 12px;
		text-align: center;
		background-color: #ee0a24;
	}

	.van-count-down {
		width: 1.2rem;
		color: #FFFFFF;
		background-color: #CB943B;
		padding: 0.04rem;
		font-size: 0.25rem;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 0.1rem;
		margin-left: 0.1rem;
	}
	.van-field__control{
		display: flex;
		align-items: center;
		font-size: 0.2rem;
	}
</style>
<style scoped="scoped">
	.home {
		background-color: #F4F4F4;
		bottom: 1rem;
	}

	.top {
		display: flex;
		align-items: center;
		width: 100%;
		height: 1rem;
		padding: 0 0.2rem;
		background-color: #845D32;
		overflow: hidden;
	}

	.top img {
		width: 0.41rem;
		height: 0.32rem;
		margin-left: 0.2rem;
	}

	.ypzc {
		width: 7.02rem;

		border-radius: 0.12rem;
		padding: 0.2rem;
		margin: 0.2rem auto;
		background-color: #FFFFFF;
		overflow: hidden;
	}
.special{
	width: 100%;
	margin: 0.015rem;
}
	.special img {
		width: 1.6rem;
		height: 2.41rem;
		margin: 0.05rem;
	}

	.zcshopping {
		display: flex;
	}

	.zcshopping .right {
		width: 60%;
		display: flex;
		justify-content: space-between;
		margin-left: 0.2rem;
	}

	.zcshopping>div {
		width: 3.2rem;

	}

	.zcshopping img {
		width: 1.50rem;
		height: 1.50rem;
	}

	.zctou p {
		line-height: 0.3rem;
	}

	.zctou span {
		font-size: 0.2rem;
	}

	.sxjx {
		width: 7.02rem;
		margin: 0.2rem;
		padding: 0.2rem;
		border-radius: 0.12rem;
		background-color: #FFFFFF;
	}

	.sxjx .jxbody {
		width: 7.02rem;
		margin: auto;
	}

	.sxjx .jxbody .jxsize {
		width: 6.6rem;
		display: flex;
		justify-content: space-between;
		font-size: 0.36rem;
		color: rgb(51, 51, 51);
		font-weight: bold;
		line-height: 0.5rem;
	}

	.sxjx .jxbody .jxsize span {
		font-size: 0.24rem;
		color: rgb(153, 153, 153);
		line-height: 0.6rem;
		font-weight: 300;
	}

	.sxjx .jxbody .sximg,
	.sxjx .jxbody .msimg {
		display: flex;
		width: 6.6rem;
		white-space: nowrap;
		overflow-x: auto;
		overflow-y: hidden;
	}

	.sxjx .jxbody .sximg::-webkit-scrollbar {
		width: 0 !important
	}

	.msimg::-webkit-scrollbar {
		width: 0 !important
	}

	.sxjx .jxbody .sximg .horses {
		margin-right: 0.08rem;
		padding: 0.1rem;
	}

	.sxjx .jxbody .sximg div:nth-child(1) {
		/* background-image: url(https://img.youpin.mi-img.com/tag/c29c225f0db6d7f5dd2c643506ddfbce.png); */
		background-repeat: no-repeat;
		background-size: 0.59rem 0.32rem;
		background-color: #EDF6F8;
	}

	.sxjx .jxbody .sximg div:nth-child(2) {
		background-image: url(https://img.youpin.mi-img.com/tag/c29c225f0db6d7f5dd2c643506ddfbce.png);
		background-repeat: no-repeat;
		background-size: 0.59rem 0.32rem;
		background-color: #FCF7F1;
	}

	.sxjx .jxbody .sximg img,
	.sxjx .jxbody .msimg img {
		width: 1.86rem;
		height: 1.86rem;
	}

	.sxjx .jxbody .sximg p {
		width: 100%;
		font-size: 0.22rem;
		text-align: center;
		color: rgb(51, 51, 51);
		/* overflow: hidden; */
	}

	.sxjx .jxbody .msimg .price {
		width: 1.86rem;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 0.4rem;
		color: rgb(254, 31, 29);
		font-size: 0.28rem;
		font-weight: bold;

	}

	.sxjx .jxbody .msimg .price>span {
		font-size: 0.18rem;
	}

	.sxjx .jxbody .msimg .price>p {
		font-size: 0.18rem;
		color: rgb(153, 153, 153);
		text-decoration: line-through;
	}

	.ass {
		width: 100%;
		height: 3rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.ass>div {
		width: 1rem;
		height: 0.02rem;
		background-color: rgb(153, 153, 153);
	}

	.ass p {
		font-size: 0.26rem;
		margin: 0 0.12rem;
		color: rgb(153, 153, 153);
	}
</style>
