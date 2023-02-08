<template>
	<div class="shopping">
		<div class="top">
			<van-nav-bar title="购物车" left-text="返回" left-arrow @click-left="$router.back()" />
		</div>
		<!-- <h1>{{goods}}</h1> -->
		<div class="content">
			<div v-if="faa" style="margin-top: 0.5rem;">
				<div class="items" v-for="(item,index) in goods" :key="index">
					<div class="col_10 sel">
						<van-checkbox v-model="item.select" checked-color="#f70" @click="fanxuan()"></van-checkbox>
					</div>
					<div class="col_30">
						<img :src="item.img_url" width="80%">
					</div>
					<div class="col_50">
						<h3>{{item.name}}</h3>
						<p style="font-size: 0.23rem;color: #666666;line-height: 3;">售价：{{item.price}}元</p>
						<van-stepper v-model="item.num" min="1" :max="item.buy_limit" />
					</div>
					<div class="col_10 del">
						<van-icon name="delete-o" @click="delCart(item)" />
					</div>
					<div class="foot">
						<van-submit-bar :price="totalPrice*100" button-text="提交订单">
							<van-checkbox v-model="daa" @click="toggAll(daa)" checked-color="#f70">全选</van-checkbox>
						</van-submit-bar>
					</div>
				</div>

			</div>
			<div v-else>
				<van-empty class="custom-image"
					image="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/no_result/no_result_cart3.png"
					description="登录后才能看到商品哦" />
				<div class="denglu">
					<button @click="$router.push('/login?red=/shopping')">立即登录</button>
				</div>
			</div>
			<div class="tuijian">
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
					<div class="sptuijian" v-for="item in dataShopping">
						<img :src="item.data.goods.imgHorizon">
						<div class="xqtt">
							<div class="title">{{item.data.goods.name}}</div>
							<p class="introduce">{{item.data.goods.summary}}</p>
							<p class="price"><span>￥</span>{{item.data.goods.priceMin/100}}<span>起</span>
								<i>{{item.data.goods.marketPrice/100}}</i>
							</p>
						</div>

					</div>

				</div>
			</div>
		</div>

	</div>

</template>

<script>
	import {
		Toast
	} from 'vant';
	import {
		GetShopping
	} from '../api/shopping/shopping.js'
	import {
		mapState,
		mapGetters,
		mapMutations,
		mapAction
	} from 'vuex'
	export default {
		computed: {
			...mapState({
				userInfo: state => state.user.userInfo
			}),
			...mapState(["goods"]),
			...mapGetters(['totalNum', 'totalPrice'])
		},
		data() {
			return {
				dataShopping: [],
				data: [{}, {
					offset: 0,
					count: 20,
					params: {
						gid_list: ""
					}
				}],
				flag: true,
				faa: true,
				daa: true
			}
		},
		created() {
			this.getShopping(this.data);
			// this.checkAll()
			this.getsp();
		},
		mounted() {
			setTimeout(() => {
				var shopping = document.querySelector('.shopping')
				shopping.addEventListener("scroll", this.reachBottom)
			}, 1000)
		},
		methods: {
			...mapMutations(["delCart"]),
			getShopping(data, flag) {
				Toast.loading({
					message: '加载中...',
					forbidClick: true,
				})
				GetShopping(data).then(res => {
					if (flag) {
						this.dataShopping.push(...res.data.data.recommendResponseList)
						console.log(this.dataShopping)
						this.flag = true
					} else {
						this.dataShopping = res.data.data.recommendResponseList
						// console.log(this.dataShopping)
					}

				}).catch(err => {
					console.log(err)
				})
			},
			reachBottom() {
				var last = [...document.querySelectorAll(".sptuijian")].pop();
				var winH = window.innerHeight;
				// console.log(this.flag)
				if (last.getBoundingClientRect().top < winH && this.flag) {
					this.getMoreItem();
					console.log(123)
				}

			},
			getMoreItem() {
				this.flag = false;
				setTimeout(() => {
					// this.$nextTick(() => {
					// 	this.water();
					// 	this.flag = true;
					// })
					this.getShopping(this.data, true)
				}, 500)

			},
			getsp() {
				if (window.localStorage.getItem('isLog')) {
					this.faa = true

					console.log(123)
				} else {
					this.faa = false
					console.log(345)
				}
			},
			// checkAll() {
			// 	var len = this.$store.state.goods.length
			// 	console.log(len)
			// 	var x = 0
			// 	this.$store.state.goods.forEach(item => {
			// 		if (item.select == true) {
			// 			x++
			// 		}
			// 	})
			// 	if (len == x && len != 0) {
			// 		console.log(1)
			// 		this.daa = true
			// 	} else {
			// 		this.daa = false
			// 	}
			// },
			toggAll(data) {
				this.$store.commit('chack', data)
			},
			fanxuan(){
				let arr=this.$store.state.goods.filter(item=>{
					return item.select
				})
				if(arr.length==this.$store.state.goods.length){
					this.daa=true
				}else{
					this.daa=false
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.shopping {
		background-color: #F4F4F4;
	}

	.denglu {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.denglu button {
		/* width: 1.6rem;
		height: 0.56rem; */
		padding: 0.15rem;
		border-radius: 0.25rem;
		border: 1px solid #C8C9CC;
		color: #666666;
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

	.sptuijian .price {
		font-size: 0.28rem;
		color: rgb(248, 36, 0);
	}

	.sptuijian .price span {
		font-size: 0.16rem;
	}

	.sptuijian .price i {
		font-style: normal;
		text-decoration-line: line-through;
		color: rgba(0, 0, 0, 0.4);
		font-size: 0.19rem;
		line-height: 0.6rem;
	}

	.foot {
		display: flex;
		width: 100%;
		height: 1rem;
		line-height: 1rem;
		position: fixed;
		background-color: #FFFFFF;
		left: 0;
		bottom: 0;

	}

	.foot .col {
		flex: 1;
		text-align: center;
	}

	.foot .price {
		line-height: 0.4rem;
		text-align: center;
		background-color: #FFFFFF;
	}

	.sel,
	.del {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.items {
		width: 100%;
		display: flex;
		margin-top: 0.2rem;
	}

	.col_10 {
		width: 10%;
	}

	.col_30 {
		width: 30%;
	}

	.col_50 {
		width: 50%;
	}
</style>
