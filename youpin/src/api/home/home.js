import request from '../../utils/request.js'
import qs from 'qs'
function GetHome(data){
	return new Promise((resolve,reject)=>{
		request.post(
		'/homepage/main/v1005?platform=m',
		qs.stringify(data)
		).then(res=>{
			resolve(res)
		}).catch(err=>{
			reject(err)
		})
	})
}
function GetTime(data1){
	return new Promise((resolve,reject)=>{
		request.post(
		'/mtop/mf/resource/data/batchList',
		qs.stringify(data1)
		).then(res=>{
			resolve(res)
		}).catch(err=>{
			reject(err)
		})
	})
}
export {GetHome,GetTime}