	import {GetUserInfo} from '../../api/user/user.js'


var user={
	namespaced:true,
	state:{
		userInfo:{
			
		}
	},
	mutations:{
		addScore(state,step=1){
			state.userInfo.M_Scores+=step
		},
		initUserInfo(state,userInfo){
			state.userInfo=userInfo
			// console.log(state.userInfo,"1")
		}
		
	},
	actions:{
		//发送获取用户信息的请求
		getUserInfo(context){
			GetUserInfo().then(res=>{
			context.commit('initUserInfo',res.data)	
			}).catch(err=>{
				console.log(err)
			})
		}
	}
}
export default user