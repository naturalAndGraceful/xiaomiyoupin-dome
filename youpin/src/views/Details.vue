<template>
	<div class="details">
		<!-- 导航栏 -->
		<div class="top">
			<van-nav-bar left-arrow @click-left="$router.back()">
				<template #right>
					<van-icon name="search" size="18" />
				</template>
			</van-nav-bar>
		</div>
		<!-- 导航栏结束 -->
		<!-- 轮播图开始 -->
		<div class="swipt">
			<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
				<van-swipe-item><img
						src="https://img.youpin.mi-img.com/youpin_gms/f65699a8_bcff_4b5d_a450_7ee80f20a06a.jpeg@base@tag=imgScale&F=webp&h=1080&w=1080?w=1080&h=1080">
				</van-swipe-item>
				<van-swipe-item><img
						src="https://img.youpin.mi-img.com/youpin_gms/fc8b2f5b_7115_4b85_92ef_6d9eb1be6f9b.jpeg@base@tag=imgScale&F=webp&h=1080&w=1080?w=1080&h=1080">
				</van-swipe-item>
				<van-swipe-item><img
						src="https://img.youpin.mi-img.com/youpin_gms/4e532487_d4f3_404b_99bb_6f78a363e8e8.jpeg@base@tag=imgScale&F=webp&h=1080&w=1080?w=1080&h=1080">
				</van-swipe-item>
				<van-swipe-item><img
						src="https://img.youpin.mi-img.com/youpin_gms/bfb786bd_06ef_4243_a109_89c76f79200c.jpeg@base@tag=imgScale&F=webp&h=1080&w=1080?w=1080&h=1080">
				</van-swipe-item>
				<van-swipe-item><img
						src=" https://img.youpin.mi-img.com/youpin_gms/3718db7f_1f90_4c68_a323_f794b989a180.jpeg@base@tag=imgScale&F=webp&h=1080&w=1080?w=1080&h=1080">
				</van-swipe-item>

			</van-swipe>
		</div>
		<!-- 轮播图结束 -->
		<!-- 价格 -->
		<div class="hander">
			<div class="price">
				<p><span>￥</span>3299</p>
				<img src="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/product/icon_product_unfavor.png"
					@click="!flag" v-if="flag">
				<img src="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/product/icon_product_favor.png"
					@click="!flag" v-else>
			</div>
			<div class="tongz">
				<van-notice-bar mode="link">最高享24期免息，每期￥137.45元</van-notice-bar>
				<img src="../assets/xiaomisp.jpg" style="margin-top: 0.2rem; width: 100%;">
				<p>开年大作，全线拉满的满血旗舰！首销购机享6重好礼<span>点击查看详细规则>></span></p>
				<img src="https://img.youpin.mi-img.com/youpinoper/dfae4d83b02472999fcd224ae1b41935.png?w=996&h=108"
					style="margin-top: 0.2rem; width: 100%;">
			</div>
			<!-- 规格 -->
			<div class="guige">
				<div class="xuanxiang" style="display: flex;margin-top: 0.2rem;">
					<div style="width: 1rem;text-align: center;">
						已选
					</div>
					<div class="xxk">
						<div>
							<p style="display: flex; width: 6rem; justify-content: space-between;"><span>8GB+128GB 冰斩
									X1</span> <img
									src="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/icons/icon_arrow_right_min_lightgray.png"
									style="width: 0.38rem; height: 0.38rem;"></p>
						</div>
						<div style="display: flex;">
							<img
								src="https://img.youpin.mi-img.com/youpin_gms/37987da4_e064_4c44_88a4_00a2743a9983.png?w=800&h=800">
							<img
								src="https://img.youpin.mi-img.com/youpin_gms/74f1e430_f75e_4b0e_8bf1_d1f9bbb5d7b7.png?w=800&h=800">
							<img
								src="https://img.youpin.mi-img.com/youpin_gms/3e7b54ee_52ca_4ef3_ae55_b19e48d9aed6.png?w=800&h=800">
							<img
								src="https://img.youpin.mi-img.com/youpin_gms/1ecf2c8e_cfff_4949_b5c3_d3a47d8ab428.png?w=800&h=800">
							<div
								style="width: 1.5rem;height: 0.5rem; font-size: 0.14rem; display: flex; justify-content: center; align-items: center; background-color: #F8F8F8; border-radius: 0.1rem;margin-left: 0.2rem;">
								共四种颜色可选</div>
						</div>
					</div>
				</div>


				<div class="xuanxiang" style="display: flex;margin-top: 0.2rem;">
					<div style="width: 1rem;text-align: center;">
						送至
					</div>
					<div class="xxk">
						<div>
							<p style="display: flex; width: 6rem; justify-content: space-between;"><span>河南省郑州市</span>
								<img src="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/icons/icon_arrow_right_min_lightgray.png"
									style="width: 0.38rem; height: 0.38rem;">
							</p>
						</div>
						<div style="color: rgb(255, 27, 27);">
							有货
						</div>
					</div>
				</div>
			</div>
			<!-- 福利 -->
			<div class="fuli">
				<ul style="width: 100%;display: flex;background-color: #FAFAFA; border-radius: 0.1rem;padding: 0.2rem;">
					<li>
						<img
							src="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/icons/icon_checkbox_check_pale_brown.png">满69包邮
					</li>
					<li>
						<img
							src="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/icons/icon_checkbox_check_pale_brown.png">小米自营
					</li>
					<li>
						<img
							src="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/icons/icon_checkbox_check_pale_brown.png">七天无理由
					</li>
				</ul>
			</div>
			<!-- 商品介绍 -->
			<div class="min">
				<div style="display: flex;">
					<div class="spxq" @click="title=0" :class="{'active':title==0}">
						商品详情
					</div>
					<div class="spcs" @click="title=1" :class="{'active':title==1}">
						商品参数
					</div>
					<div class="spxq"><a href="#xian">商品推荐</a></div>
				</div>

				<div class="imgs" v-for="itimg1 in datadetails.oldImgDetails[0].imagesArray">

					<div v-if="title==0">
						<img :src="itimg1" width="100%" />
					</div>

				</div>
				<div class="imgs" v-for="itimg2 in datadetails.oldImgDetails[1].imagesArray">

					<div v-if="title==1">
						<img :src="itimg2" width="100%" />
					</div>

				</div>
			</div>

			<!-- 为你推荐 -->
			<div class="tuijian" id="xian">
				<div class="tjtitle">
					<img
						src="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/common/recheader_left.png">
					<span>
						为你推荐
					</span>
					<img
						src="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/common/recheader_right.png">
				</div>
				<div class="tjxq">
					<div class="sptuijian" v-for="item in datatj">
						<img :src="item.data.goods.imgHorizon">
						<div class="xqtt">
							<div class="title">{{item.data.goods.name}}</div>
							<p class="introduce">{{item.data.goods.summary}}</p>
							<p class="price2"><span>￥</span>{{item.data.goods.priceMin/100}}<span>起</span>
								<i>{{item.data.goods.marketPrice/100}}</i>
							</p>
						</div>

					</div>

				</div>
			</div>
		</div>
		<div class="backtop" @click="backTop()">
			<img
				src="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/icons/icon_back_to_top.png">
		</div>
		<!-- 底部导航 -->
		<div class="floors">
			<van-goods-action>
				<van-goods-action-icon
					icon="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/product/mi_shop_icon.png"
					text="小米" dot />
				<van-goods-action-icon icon="cart-o" text="购物车" badge="5" :badge="$store.getters.totalNum"
					@click="$router.push('/shopping')" />

				<van-goods-action-button type="warning" text="加入购物车" @click="addTocart()" />
				<van-goods-action-button type="danger" text="立即购买" />
			</van-goods-action>
		</div>

		<!-- 底部导航 -->
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Toast } from 'vant';
	import {
		GetDetails,
		GetTuiJian,
	} from '../api/details/details.js'
	export default {
		data() {
			return {
				state: [{
					"buy_limit": 50,
					"img_url": "https://img.youpin.mi-img.com/youpin_gms/f65699a8_bcff_4b5d_a450_7ee80f20a06a.jpeg@base@tag=imgScale&F=webp&h=1080&w=1080?w=1080&h=1080",
					"num": 1,
					"price": 3299,
					"name": "Redmi k50 电竞版  12G+512G",
					"goods_id": 2172700345,
					"select": true
				}],
				datadetails: {},
				datatj: [],
				flag: false,
				data: [{
					"gid": "152957"
				}],
				data1: {
					"userRecTwo": [{}, {
						"gid": 140314
					}],
					"topRank": [{
						"gid": 140314
					}],
					"shop": [{
						"gid": 140314
					}],
					"relateRecTwo": [{}, {
						"gid": 140314
					}],
					"newUserWelcome": [{}, {}],
					"askInfo": {
						"gid": 140314
					},
					"content": [{}, {
						"gid": 140314,
						"page": 1,
						"pageSize": 8,
						"type": 1
					}],
					"live": [{}, {
						"gid": 140314
					}],
					"liveTwo": [{}, {
						"gid": 140314
					}],
					"searchPlaceHolder": [{}, {
						"gid": 140314,
						"baseParam": {
							"imei": "",
							"clientVersion": "",
							"ypClient": 1
						}
					}]
				},
				title: 0,
				scoll: 0,
				data2: {
					"groupName": "details",
					"groupParams": [
						["152296"]
					],
					"methods": [],
					"version": "1.0.0",
					"debug": false,
					"channel": "",
					"vipMode": true
				},
				// datasp: {},
			}
		},
		created() {
			this.getDetails(this.data);
			this.gettuijian(this.data1);
		},
		methods: {
			getDetails(data) {
				GetDetails(data)
					.then(res => {
						this.datadetails = res.data.data
						console.log(res.data.data)
					}).catch(err => {
						console.log(err)
					})
			},
			gettuijian(data1) {
				GetTuiJian(data1)
					.then(res => {
						this.datatj = res.data[2].data.recommendResponseList
						// console.log(res.data[2].dmta.recommendResponseList)
					}).catch(err => {
						console.log(err)
					})

			},

			backTop() {

				var doc = document.querySelector(".details");
				var aa = setInterval(() => {
					if (this.scoll <= 0) {
						clearInterval(aa)
						return
					}
					this.scoll -= 1000;
					doc.scrollTop = this.scoll;
				}, 10);
			},
			addTocart() {
				var item = {
					...this.state[0]
				};
				item.num = 1;
				item.select = true;
				item.buy_limit = item.buy_limit;
				this.$store.commit('addCart', item);
				Toast.success('已加入购物车');
			}

		},
		mounted() {
			setTimeout(() => {
				var det = document.querySelector('.details');
				var doc = document.querySelector(".backtop");
				det.addEventListener('scroll', () => {
					this.scoll = det.scrollTop;
					if (det.scrollTop < 500) {
						doc.style.display = 'none'
					}else{
						doc.style.display = 'block'
					}
				})
			}, 1000)
		}

	}
</script>
<style scoped="scoped">
	.my-swipe {
		width: 100%;
	}

	.van-swipe-item img {
		width: 100%;
		height: 5.9rem;
	}

	.van-nav-bar {
		background-color: rgba(0, 0, 0, 0);
		color: #fff;
	}

	.van-goods-action-icon {
		width: 15%;
		text-align: center;
		font-size: 0.2rem;
	}

	/* .van-goods-action-icon .icon{
		width: 0.5rem;
	} */
</style>
<style scoped="scoped">
	.top {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 3;
	}

	.swipt {
		width: 100%;
	}

	.hander {
		width: 100%;
		background-color: #FFFFFF;
		padding: 0.3rem;
	}

	.hander .price {
		display: flex;
		justify-content: space-between;
		color: rgb(153, 98, 26);
	}

	.hander .price img {
		width: 0.64rem;
	}

	.hander .price span {
		font-size: 0.2rem;
	}

	.hander .price p {
		font-size: 0.4rem;
		font-weight: 600;
		margin-top: 0.2rem;
	}

	.hander .tongz p {
		color: rgb(133, 133, 133);
		font-size: 0.24rem;
	}

	.hander .tongz p span {
		color: rgb(153, 98, 26);
	}

	.xxk div>img {
		width: 0.51rem;
		height: 0.51rem;
	}

	.fuli {
		margin: 0.2rem 0;
	}

	.fuli ul li {
		margin-left: 0.2rem;
	}

	.fuli ul li img {
		width: 0.25rem;
	}

	.tjtitle {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 0.6rem;
		margin-top: 2rem;
	}

	.tjtitle img {
		width: 0.6rem;
	}

	.tjxq {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		padding: 0.3rem;
	}

	.sptuijian {
		width: 48%;
		height: 4.27rem;
		background-color: #FFFFFF;
		margin-top: 0.2rem;
		border-radius: 0.3rem;
	}

	.xqtt {
		margin: 0.18rem;
	}

	.tjtitle>span {
		font-size: 0.28rem;
		color: rgb(51, 51, 51);
		font-weight: bold;
		padding: 0.12rem;
	}

	.sptuijian img {
		width: 100%;
		height: 2.61rem;
	}

	.sptuijian .title {
		font-size: 0.30rem;
		color: #000000;
		line-height: 0.36rem;
	}

	.sptuijian .introduce {
		font-size: 0.22rem;
		color: rgba(0, 0, 0, 0.6);
		margin-top: 0.1rem;
	}

	.sptuijian .price2 {
		font-size: 0.28rem;
		color: rgb(248, 36, 0);
	}

	.sptuijian .price2 span {
		font-size: 0.16rem;
	}

	.sptuijian .price2 i {
		font-style: normal;
		text-decoration-line: line-through;
		color: rgba(0, 0, 0, 0.4);
		font-size: 0.19rem;
		line-height: 0.6rem;
	}

	.spxq,
	.spcs {
		width: 33%;
		height: 0.6rem;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 0.30rem;
	}

	.active {
		color: rgb(188, 124, 0);
	}

	.backtop {
		display: none;
		z-index: 99;
		width: 0.5rem;
		height: 0.5rem;
		position: fixed;
		background-color: #C8C9CC;
		text-align: center;
		line-height: 0.5rem;
		top: 5rem;
		right: 0.2rem;
		border-radius: 0.2rem;
		overflow: hidden;
	}

	.backtop img {
		width: 0.4rem;
	}
</style>
