import request from '../../utils/request.js'
import qs from 'qs'
function GetAbout(data){
	return new Promise((resolve,reject)=>{
		request.post(
		'/mtop/market/cat/list',
		data
		).then(res=>{
			resolve(res)
		}).catch(err=>{
			reject(err)
		})
	})
}
function GetDetail(data1){
	return new Promise((resolve,reject)=>{
		request.post(
		'/mtop/market/cat/detail',
		// qs.stringify(data1)
		data1
		).then(res=>{
			resolve(res)
		}).catch(err=>{
			reject(err)
		})
	})
}
export {GetAbout,GetDetail}