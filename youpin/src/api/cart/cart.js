// 存放分类模块 请求数据的方法axios

// 引入request 封装好的axios
import request from '@/utils/request.js'
import qs from 'qs'
// 定义一个获取分类的方法
function GetCart(){
	return new Promise((resolve,reject)=>{
		request.get(
		"/mi/cart.php/",
		).then(res=>{
			resolve(res)
		}).catch(err=>{
			reject(err)
		})
	})
}
// 导出
export{GetCart}