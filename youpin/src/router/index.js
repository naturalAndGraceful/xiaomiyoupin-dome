import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import About from '../views/About.vue'
// import Shopping from '../views/Shopping.vue'
// import User from '../views/User.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component:()=>import('../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
     component:()=>import('../views/About.vue')
  },
  {
    path: '/details/',
    name: 'Details',
     component:()=>import('../views/Details.vue'),
	 meta:{
	 	keep:true,
	 	nofool:true,
	 }
  },
  {
    path: '/shopping',
    name: 'Shopping',
    component:()=>import('../views/Shopping.vue'),
	meta:{
		keep:true,
	}
  },
  {
    path: '/userde',
    name: 'Userde',
      component:()=>import('../views/Userde.vue')
  },
  {
    path: '/register',
    name: 'Register',
      component:()=>import('../views/user/Register.vue'),
	  meta:{
	  	keep:true,
	  }
  },
  {
    path: '/login',
    name: 'Login',
      component:()=>import('../views/user/Login.vue'),
  	  meta:{
  	  	keep:true,
  	  }
  },
  {
    path: '/sosuo',
    name: 'Sosuo',
      component:()=>import('../views/Sosuo.vue'),
  	  meta:{
  	  	keep:true,
  	  }
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next)=>{
	if(to.meta.requireAuth){
		if(window.localStorage.getItem('isLog')){
			next(true)
		}else{
			next('/login?red='+to.path)
		}
	}else{
		next(true)
	}
})

export default router
