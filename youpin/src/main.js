import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全局引入一个初始化css
import "./assets/css/reset.css"
// 全局引入一个移动端rem的工具
import "./assets/js/flexible.min.js"
// 全局引入axios 相当于ajax 用于发送网络请求
// from后面不加路径的话 会自动去node_modules文件夹下找
import axios from "axios"
import Vant from 'vant'
import 'vant/lib/index.css'
// 全局导入mockjs配置
// import './mock/mock.js'
// axios的默认配置
// 给post写了一个默认的请求头 content-type的配置
// axios.defaults.headers.post["content-type"]="application/x-www-form-urlencoded"
import ElementUI from 'element-ui';
Vue.use(ElementUI);
// 请求时间	请求超时
axios.defaults.timeout=5000;

//配置默认的请求域名
axios.defaults.baseURL='/'

// 联合
// 联合调试

// 把axios挂载到vue全局的原型中的$http方法上
Vue.prototype.$http=axios
// 所有的vue实例 (所有的组件)都拥有$http的方法
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
