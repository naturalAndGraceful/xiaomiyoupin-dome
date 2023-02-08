// 存放分类模块 请求数据的方法axios

// 引入request 封装好的axios
import request from '@/utils/request.js'
import qs from 'qs'
// 定义一个获取分类的方法
function Login(data){
	return new Promise((resolve,reject)=>{
		request.post(
		"member/index_login.php",
		// qs就是一个序列化工具
		qs.stringify(data)
		).then(res=>{
			resolve(res)
		}).catch(err=>{
			reject(err)
		})
	})
}


// 获取用户信息的方法
// 接口 /member/ajax_login.php
function GetUserInfo(){
	return new Promise((resolve,reject)=>{
		request.get('/member/ajax_login.php')
		.then(res=>{
			resolve(res)
		}).catch(err=>{
			reject(err)
		})
	})
}


// 注册接口
// member/reg_new2.php
	// 注册 post  userid userpwd email
function  Register(data){
	return new Promise((resolve,reject)=>{
		request.post('/member/reg_new2.php',qs.stringify(data))
		.then(res=>{
			resolve(res)
		}).catch(err=>{
			reject(err)
		})
	})
}
// 导出
export{Login,GetUserInfo,Register}