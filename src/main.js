import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import {routes} from './routers'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
    routes,
    mode:'history',
    scrollBehavior(to,from,savedPosition){
        return{x:0,y:100}
    }
})
//全局路由守卫固定参数to from next
/*router.beforeEach((to,from,next) =>{
    //alert("还木有登录！请登录");
    //next();
    //判断store.gettes.isLongin === false
    if(to.path == '/login' || to.path == '/register'){
        next();
    }else{
        alert("还木有登录！请登录")
        next('/login')
    }
})*/
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
