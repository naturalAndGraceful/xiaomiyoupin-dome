import request from '../../utils/request.js'
import qs from 'qs'
function GetDetails(data){
	return new Promise((resolve,reject)=>{
		request.post(
		'mtop/goods/gis/detailpage/getImageDetails',
		data
		).then(res=>{
			resolve(res)
		}).catch(err=>{
			reject(err)
		})
	})
}
function GetTuiJian(data1){
	return new Promise((resolve,reject)=>{
		request.post(
		'/mtop/arch/detail/composeTwo',
		data1
		).then(res=>{
			resolve(res)
		}).catch(err=>{
			reject(err)
		})
	})
}
// function GetSp(data2){
// 	return new Promise((resolve,reject)=>{
// 		// post 三个参数  
// 		// 1、url
// 		// 2、参数
// 		// 3、headers
// 		request.post(
// 		'/api/gateway/detail',
// 		data2
// 		).then(res=>{
// 			resolve(res)
// 		}).catch(err=>{
// 			reject(err)
// 		})
// 	})
// }
export {GetDetails,GetTuiJian}