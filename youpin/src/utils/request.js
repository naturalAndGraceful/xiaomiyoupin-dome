// 用于存放请求方法的文件
// 封装axios
// 为什么要封装axios
// 1.统一请求默认配置
// 2.可以扩展axios jsonp   //get post delete
// 3.可以拦截请求和响应 方便做加载提示 添加请求头 token权限
// 4.请求的集中管理

// 封装axios的几个步骤  axios qs jsonp
// 0.导入
import axios from 'axios'
import qs from 'qs'
// import jsonp from 'jsonp'

//引入toast
import {
	Toast
} from 'vant';


// 1.创建实例
var request = axios.create({
	baseURL: "/",
	timeout: 5000,
	headers: {
		post: {
			"Content-Type": "application/json"
		}

	}
})
// 2.配置拦截
// 请求拦截
// 请求开始和结束
request.interceptors.request.use(
	function(config) {
		// console.log('开始加载',config.url,config.data,config.jiazai)
		// Toast.loading({
		// 	message: '加载中...',
		// 	forbidClick: true,
		// })
		return config;
	},
	function(err) {
		Promise.reject(err)
	}
)

// 请求完毕
request.interceptors.response.use(
	function(res) {
		// console.log('结束加载',res)
		Toast.clear();
		return res;
	},
	function(err) {
		Promise.reject(err)
	}
)
// 3.jsonp的扩展方法
/*
	@param{String} url 要获取的网址
	@param {Object} opts 可选参数opts(Object),可选
	@param {String} opts.param 指定回调的查询字符串参数的名称 默认为callback
	@param {Number} opts.timeout 发出超时错误后多长时间 0禁用 默认为6000
	@param {String} opts.prefix 处理jsonp响应的全局回调函数的前缀 默认为__jp(_ _)
	@param {String} opts.name 处理jsonp响应的全局回调函数的名称 默认为prefix+ 递增计时器
	@return {Promise} 返回一个promise
	@description 封装的axios 以及添加了一个jsonp的方法
*/
// request.jsonp=function(url,opts){
// 	// 自己写一个promise( resolve,reject)
// 	/*
// 		new Promise((resolve,reject)=>{
// 			resolve()
// 			reject()
// 		})
// 	*/ 
// 	return new Promise((resolve,reject)=>{
// 		jsonp(url,opts,function(err,data){
// 			if(err){reject(err)}
// 			if(data){resolve(data)}
// 		})
// 	})
// }
// 4.导出
export default request;
