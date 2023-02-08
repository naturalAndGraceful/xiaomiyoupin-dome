import Vue from 'vue'
import Vuex from 'vuex'
import {
	Toast
} from 'vant';
Vue.use(Toast);
import user from "./user/user.js"
import {
	Dialog
} from 'vant';
import {
	GetCart
} from '../api/cart/cart.js'
Vue.use(Dialog);
Vue.use(Vuex)

export default new Vuex.Store({
	//数据
	state: {
		goods: [],
		score: 100,
	},
	//修改数据的方法
	//类似与计算，
	getters: {
		'totalNum': function(state) {
			var n = 0;
			state.goods.forEach(item => {
				if (item.select) {
					n += item.num
				}
			})
			return n;
		},
		'totalPrice': function(state) {
			var n = 0;
			state.goods.forEach(item => {
				if (item.select) {
					n += item.num * item.price
				}
			})
			return n;
		}
	},
	mutations: {
		addScore(state, step = 1) {
			state.score += step
		},
		addCart(state, item) {
			var canAdd = true;
			state.goods.forEach(value => {
				if (value.goods_id == item.goods_id) {
					canAdd = false;
					value.num += item.num
					if (value.num > item.buy_limit) {
						value.num = value.buy_limit;
						Toast('最多购买' + value.buy_limit + '件');
					}
				}
			})
			if (canAdd) {
				state.goods.unshift(item)
				// console.log(item)
				// console.log(state.goods)
			}

		},
		initCart(state, data) {
			state.goods = data
			console.log(state.goods)
		},
		// initData(state,item){
		// 	state.goods.push(item);
		// 	console.log(state.goods)
		// },
		delCart(state, item) {
			Dialog.confirm({
					title: '警告',
					message: '确定要删除该商品吗',
				})
				.then(() => {
					Toast.success('已删除');
					// on confirm
					var ind = state.goods.findIndex(value => {
						return value.name == item.name
					})
					state.goods.splice(ind, 1)
				})
				.catch(() => {
					// on cancel
				});

		},
		chack(state, data) {
			// console.log(data)
			state.goods.forEach(item => {
				item.select = data
			})
		},


	},
	//异步方法
	actions: {
		//定义一个获取购物车的方法   context是默认参数  
		getCart(context) {
			GetCart().then(res => {
				context.commit('initCart', res.data)
			}).catch(err => {

			})
		}
	},
	//模块
	modules: {
		//使用模块
		user,
	}
})
