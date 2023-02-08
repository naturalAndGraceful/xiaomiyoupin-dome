import request from '../../utils/request.js'
import qs from 'qs'
function GetShopping(data){
	return new Promise((resolve,reject)=>{
		request.post(
		'/mtop/arch/metis/cart',
		// qs.stringify(data)
		data
		).then(res=>{
			resolve(res)
		}).catch(err=>{
			reject(err)
		})
	})
}
export {GetShopping}