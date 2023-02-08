<template>
	<div class="about">
		<div class="top">
			<van-nav-bar title="分类">
				<template #right>
					<van-icon name="search" size="18" />
				</template>
			</van-nav-bar>
		</div>
		<!-- <div @click="$router.push('/details')">
			<h1>详情页面</h1>
		</div> -->
		<div class="content">
			<div class="left">
				<div v-for="(item,index) in dataAbout" @click="getdetail(item.id),num=index,id=item.id">
					<p :class="{'active':index==num}">{{item.name}}</p>
				</div>
			</div>

			<div class="right" v-if="dataAbout.length">
				<div class="swipt">
					<a :href="detail.bannerUrl">
						<img :src="detail.banner" width="100%"></a>
				</div>

				<div v-if="id=='5fe309e396ee9288ed504dd3'">
					<div v-for="pinpai in detail.children" class="pinkuai">
						<h2>{{pinpai.name}}</h2>
						<div v-for="pin in pinpai.children" class="pincon">
							<a :href="pin.jumpUrl">
								<img :src="pin.brandInfo.logo" />
								<div class="fontzz">
									<p>{{pin.brandInfo.name}}</p>
									<p>{{pin.brandInfo.slogan}}</p>
								</div>
								<div v-for="imgs in pin.brandInfo.goodsImg">
									<img :src="imgs">
								</div>

							</a>
						</div>
					</div>
				</div>

				<div v-else>
					<div class="con" v-for="item in detail.children">
						<h2>
							{{item.name}}
						</h2>
						<div class="commodity">
							<div v-for="itt in item.children">
								<a :href="itt.jumpUrl">
									<img :src="itt.smallImgCard.img" />
									<p>{{itt.smallImgCard.name}}</p>
								</a>
							</div>

						</div>

					</div>
				</div>

			</div>
			<div v-else>
				<van-skeleton title :row="3" />
			</div>
		</div>

	</div>
</template>
<script type="text/javascript">
	import {
		Toast
	} from 'vant';
	import {
		NavBar
	} from 'vant';
	import {
		GetAbout,
		GetDetail
	} from '../api/about/about.js'
	export default {
		data() {
			return {
				dataAbout: [],
				detail: [],
				data: [{}, {}],
				data1: [{}, {
					"catId": "5fe309e096ee9288ed504dd1"
				}],
				num: 0,
				id: 0,
				// lastid:''
			}
		},
		created() {
			this.getAbout(this.data);
			this.getdetail(this.data1);
		},
		methods: {
			getAbout(data) {
				Toast.loading({
					message: '加载中...',
					forbidClick: true,
				})
				GetAbout(data)
					.then(res => {
						console.log(res.data.data)
						this.dataAbout = res.data.data
					}).catch(err => {
						console.log(err)
					})
			},
			getdetail(item) {
				console.log(item)
				if (Array.isArray(item)) {
					this.data1[1].catId = "5fe309e096ee9288ed504dd1"

				} else {
					this.data1[1].catId = item

				}
				GetDetail(this.data1)
					.then(res => {
						console.log(res.data.data)
						this.detail = res.data.data
					}).catch(err => {
						console.log(err)
					})
			},
		}
	}
</script>
<style type="text/css">
	.top {
		width: 100%;
		height: 0.5rem;
	}
</style>
<style type="text/css" scoped="scoped">
	.about {
		background-color: #F6F6F6;
		/* margin-bottom: 1rem; */
		/* padding-bottom: 1rem; */
	}

	.about::-webkit-scrollbar {
		width: 0 !important
	}

	.active {
		background-color: #D28D34;
		color: #FFF7CC;
		border-radius: 0.4rem;
	}

	.content {
		width: 100%;
		height: calc(100vh - 2.5rem);
		position: relative;
		margin-top: 0.3rem;
		/* margin-bottom: 1rem; */
	}

	.left {
		position: absolute;
		left: 0;
		width: 25%;
		height: calc(100vh - 1.8rem);
		background-color: #FFFFFF;
		overflow-y: auto;
		margin-bottom: 1rem;
	}

	.left::-webkit-scrollbar {
		width: 0 !important
	}

	.left p {
		width: 1.3rem;
		font-size: 0.23rem;
		text-align: center;
		padding: 0.08rem;
		border-radius: 0.4rem;
		margin: 0.2rem;
	}

	.right {
		width: 70%;
		position: absolute;
		top: 0.2rem;
		right: 0.2rem;
		height: calc(100vh - 1.8rem);
		overflow-y: auto;
		margin-bottom: 1rem;
	}

	.right::-webkit-scrollbar {
		width: 0 !important
	}

	.swipt {
		border-radius: 0.1rem;
		overflow: hidden;
	}

	.con {
		background-color: #FFFFFF;
		border-radius: 0.3rem;
		padding: 0.4rem;
		margin-top: 0.3rem;
		margin-bottom: 0.2rem;

	}

	.commodity {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;

	}

	.commodity>div {
		width: 33%;
		text-align: center;
		margin-top: 0.15rem;
	}

	.commodity img {
		width: 1.05rem;
	}

	.commodity p {
		text-align: center;
	}

	.pinkuai {
		width: 100%;
		background-color: #FFFFFF;
		border-radius: 0.3rem;
		margin-top: 0.2rem;
		padding: 0.3rem;
	}

	.pinkuai .pincon img {
		width: 1rem;
		margin: 0.1rem;

	}

	.pinkuai .pincon a {
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 0.3rem;
	}

	.fontzz p {
		width: 1rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
</style>
