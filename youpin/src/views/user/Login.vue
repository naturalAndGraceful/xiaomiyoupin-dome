<template>
	<div>
		<!-- <el-button :plain="true" @click="login()"></el-button> -->
		<!-- <el-button :plain="true" @click="">错误</el-button> -->
		<div class="top">
			<div class="left">
				<p>选择语言
					<van-icon name="arrow-down" />
				</p>
			</div>
			<div class="right">
				<p>
					<van-icon name="youzan-shield" /> 需要帮助
				</p>
			</div>
		</div>
		<div class="header">
			<img src="https://static.account.xiaomi.com/uiTheme/images/miotstore/logo.svg" />
			<p>欢迎登陆小米有品</p>

		</div>
		<div class="from">
			<h2>小米账号登录 </h2>
			<van-cell-group>
				<van-field v-model="user.userid" placeholder="请输入用户名" />
				<van-field type="password" v-model="user.pwd" placeholder="请输入密码" />
			</van-cell-group>
			<p style="display: flex;width: 100%;font-size: 0.20rem;"><input type="checkbox" class="yhxy">已阅读并同意小米账号<span>用户协议</span>和<span>隐私政策</span></p>
			<van-button color="rgba(11, 132, 255, 0.3)" block class="vanBtn" @click="login()">登录</van-button>
			<!-- <input type="text" v-model="user.email">
		<br> -->


			<div class="dlfs"><span>手机号登录</span> |<span @click="$router.push('./register')">
					立即注册</span>|<span>忘记密码？</span></div>
			<div class="qita">
				<div></div>
				<p>其他方式登录</p>
				<div></div>
			</div>
			<div class="zfblg">
				<img src="../../assets/zfblogo.jpg">
			</div>
		</div>
	</div>
</template>

<script>
	import {
		Toast
	} from 'vant';
	import Vue from 'vue';
	import { Notify } from 'vant';
	Vue.use(Notify)
	import {
		Login
	} from '../../api/user/user.js'
	export default {
		data() {
			return {
				user: {
					fmdo: "login",
					dopost: 'login',
					userid: '',
					pwd: ''
				}
			}
		},
		methods: {
			login() {
				Login(this.user).then(res => {
					this.$store.dispatch('getCart');
					console.log(res)
					// 登录提醒弹窗
					// alert(res.data.msg)
					 
					      //   this.$message({
					      //     message: '登录成功',
					      //     type: 'success'
					      //   });
						  // Toast.success('成功文案');
					      // alert('登录成功')
						  Notify({ type: 'success', message: '登录成功' });
					if (res.data.status == 1) {

						// 登录成功跳转
						window.localStorage.setItem('isLog', 'true')
						var red = this.$route.query.red || "/userde"
						this.$router.replace(red)
					}
				}).catch(err => {
					// Toast.fail('失败文案');
					Notify({ type: 'warning', message: '账户密码不正确' });
					console.log(err);
					 
					        // this.$message.error('登录失败');
					      
				})
			}
		}
	}
</script>
<style type="text/css">
	.van-field {
		width: 100%;
		height: 0.78rem;
		margin-top: 0.25rem;
		border-radius: 0.3rem;
		background-color: rgba(240, 240, 240, 1);
		border: none;
		padding: 0.2rem;
	}

	.vanBtn {
		width: 100%;
		text-align: center;
		margin-top: 0.2rem;
		border-radius: 0.6rem;
		height: 0.8rem;
	}
</style>
<style scoped="scoped">
	.top {
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding: 0.6rem;
	}

	.header {
		text-align: center;
		font-size: 0.394rem;
		color: rgba(0, 0, 0, 0.6);
		margin-top: 0.6rem;
	}

	.header img {
		width: 0.6rem;
		height: 0.6rem;

	}

	.from {
		width: 100%;
		padding: 1rem;
	}


	.from p {
		display: flex;
		align-items: center;
		margin: 0.4rem 0;
	}

	.from p .yhxy {
		width: 0.2rem;
		height: 0.2rem;
		border-radius: 50%;
		margin: 0 0.1rem;
	}

	.btn button {
		width: 100%;
		background-color: rgba(11, 132, 255, 0.3);
		height: 0.78rem;
		border-radius: 0.6rem;
		border: none;
		font-size: 0.3rem;
		color: #FFFFFF;
	}

	.dlfs {
		width: 100%;
		text-align: center;
		font-size: 0.25rem;
		margin-top: 0.6rem;
	}

	.dlfs span {
		margin: 0.1rem;
	}

	.qita {
		width: 100%;
		display: flex;
		justify-content: center;
		color: rgba(0, 0, 0, 20%);
	}

	.qita>div {
		width: 1rem;
		height: 0.1rem;
		border-bottom: 2px solid rgba(0, 0, 0, 20%);
		margin-top: 0.45rem;
	}

	.qita p {
		padding: 0 0.1rem;
	}

	.zfblg {
		width: 100%;
		text-align: center;
	}

	.zfblg img {
		width: 0.8rem;
	}
</style>
