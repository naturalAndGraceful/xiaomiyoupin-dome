<template>
	<div>
		<h1>用户页面</h1>
		<div v-if="$store.state.user.userInfo.M_LoginID">
			<p>用户名：{{$store.state.user.userInfo.M_LoginID}}</p>
			<p>积分：{{$store.state.user.userInfo.M_Scores}}加分项user{{$store.state.score}}
			<button @click="$store.commit('addScore')">user加分</button>
			<button @click="$store.commit('user/addScore')">index加分</button>
			<button @click="addScore()">加分</button>
			</p>
			<p @click="loginout">退出</p>
		</div>
		<div v-else>
			<router-link to="/login">登录</router-link> |
			<router-link to="/register">注册</router-link>
		</div>
	</div>
</template>

<script>
	// import {GetUserInfo,Login} from '../../api/user/user.js'
	import {mapMutations} from 'vuex'
	export default{
		data(){
			return{
				userInfo:{}
			}
		},
		created(){
			// GetUserInfo().then(res=>{
			// 	console.log(res);
			// 	if(res.data){
			// 		this.userInfo=res.data
			// 	}
			// }).catch(err=>{
			// 	console.log(err)
			// })
			this.$store.dispatch("user/getUserInfo")
		},
		methods:{
			...mapMutations('user',["addScore"]),
			loginout(){
				Login({dopost:'exit'}).then(res=>{
					alert(res.data.msg)
					if(res.data.status==1){
						this.$store.commit('logOout')
						window.localStorage.removeItem('isLog')
					}
				})
			}
		}
	}
</script>

<style>
</style>
