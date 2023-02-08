<template>
  <div id="app">
	  <!-- router-view 代表对应要显示的组件内容 -->
	  <router-view class="page has-tabs" />
	  <!-- 底部导航 -->
    <div id="nav" v-if="!$route.meta.keep" >
      <router-link class="nav-list ihome" to="/">首页</router-link>
      <router-link class="nav-list icate" to="/about">分类</router-link>
      <router-link class="nav-list icart" to="/shopping">购物车</router-link>
      <router-link class="nav-list iuser" to="/userde">我的</router-link>
    </div>
  </div>
</template>
<script>
	export default{
		
	}
</script>
<style type="text/css">
	.page{
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		overflow-y: auto;
	}
/* 	.has-tabs{
		bottom: 1rem;
	} */
</style>
<style scoped="scoped">
	
	#app{
		height: 100vh;
		width: 100%;
		position: relative;
	}
#nav{
	width: 100%;
	height: 1rem;
	background-color: #f0f0f0;
	display: flex;
	position: absolute;
	left: 0;
	bottom: 0;
	font-size: 0.18rem;
	color: #666;
	text-align: center;
	
}
.nav-list{
	width: 25%;
	color: #666;
	font-size: 0.25rem;
}
.nav-list.router-link-exact-active{
	color: #DEB252;
}
.nav-list:before{
	content: "";
	display: block;
	width: 0.45rem;
	height: 0.45rem;
	background-size:100%;
	background-repeat: no-repeat;
	margin: 0.1rem auto;
}
.nav-list.ihome:before{background-image: url(assets/home.png);}
.nav-list.icate:before{background-image: url(assets/cat.png);}
.nav-list.iball:before{background-image: url(assets/ball.png);}
.nav-list.icart:before{background-image: url(assets/cart.png);}
.nav-list.iuser:before{background-image: url(assets/user.png);}
/* .router-link-exact-active   是router-link 自动生成的 选中状态的类名 */
.nav-list.ihome.router-link-exact-active:before{background-image: url(assets/home-h.png);}
.nav-list.icate.router-link-exact-active:before{background-image: url(assets/cat-h.png);}
.nav-list.iball.router-link-exact-active:before{background-image: url(assets/ball-h.png);}
.nav-list.icart.router-link-exact-active:before{background-image: url(assets/cart-h.png);}
.nav-list.iuser.router-link-exact-active:before{background-image: url(assets/user-h.png);}
</style>
