<template>

	<div>
		<div class="top">
			<van-nav-bar left-text="" left-arrow @click-left="$router.back()" />
			<div class="bangz">
				<img src="../../assets/Snipaste_2022-02-18_19-54-39.jpg">
			</div>
		</div>
		<div class="header">
			<h1 style="line-height: 0.64rem;font-size: 0.35rem;margin-top: 0.2rem;">注册小米账号</h1>
			<p class="tips">系统会根据您选择的国家/地区的法律法规存储您的个人信息</p>
			<input type="text" v-model="user.userid" placeholder="请输入手机号" />
			<br>
			<input type="password" v-model="user.userpwd" placeholder="请输入密码" />
			<br>
			<input type="text" v-model="user.email" placeholder="请输入邮箱" />
			<br>
			<!-- <div>
			<el-form-item label="" prop="code">
				<el-input v-model.number="user.code" placeholder="请输入验证码">
				</el-input>
				<img ref="codePic" src="include/vdimgck.php">
				<p @click="changecode()">换一个</p>
			</el-form-item>
			</div> -->
			<!-- <div class="btn"> -->
			<p><input type="checkbox" class="yhxy">已阅读并同意小米账号<span>用户协议</span>和<span>隐私政策</span></p>
				<button class="btn" @click="register">下一步</button>
		<!-- 	</div> -->

		</div>

	</div>
</template>

<script>
	// // member/reg_new2.php
	// 注册 post  userid userpwd email
	import {
		Register
	} from '../../api/user/user.js'
	export default {
		data() {
			return {
				user: {
					userid: '',
					userpwd: '',
					email: ''
				}
			}
		},
		methods: {
			register() {
				Register(this.user).then(res => {
					console.log(res)
					// 登录提醒弹窗
					alert(res.data.msg)
					if (res.data.status == 1) {
						// 登录成功跳转
						this.$router.replace('/login')
					}
				}).catch(err => {
					console.log(err)
				})
			}
		}
	}
</script>

<style scoped="scoped">
	.van-cell {
		border: 1px solid #f70;
		height: 0.88rem;
		border-radius: 0.88rem;
		width: 80%;
		margin: 0 auto;
		margin-top: 0.3rem;
	}

	.vanBtn {
		width: 80%;
		margin: 0 auto;
		margin-top: 0.4rem;
		border-radius: 0.88rem;
	}

	.bangz {
		position: absolute;
		top: 0;
		right: 0.3rem;
		z-index: 9;
	}

	.header {
		padding: 0.4rem 0.8rem;
	}

	.tips {
		font-size: 0.26rem;
		color: #0B84FF;
		margin-top: 0.2rem;
	}

	.header>input {
		width: 100%;
		height: 0.78rem;
		margin-top: 0.25rem;
		border-radius: 0.3rem;
		background-color: rgba(240, 240, 240, 1);
		border: none;
		padding: 0.2rem;
	}

	 .btn {
		width: 100%;
		height: 0.8rem;
		border: none;
		text-align: center;
		margin-top: 0.2rem;
		background-color: rgba(11, 132, 255, 0.3);
		border-radius: 0.4rem;
	}
		.header p{
			margin-top: 0.4rem;
		}
	.header p .yhxy{
		width: 0.2rem;
		height: 0.2rem;
		border-radius: 50%;
		margin: 0 0.1rem;
		font-size: 0.2rem;
	}
</style>
