import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

//二级路由
import Contact from './components/about/Contact'
import Delivry from './components/about/Delivry'
import History1 from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

//三级路由
import PersonName from './components/about/contact/PersonName'
import Phone from './components/about/contact/Phone'

export const routes = [
        {path:'/',components:{
            default:Home,
            'orderingguide':OrderingGuide,
            'history':History1,
            'delivry':Delivry
        }},
        {path:'/menu',component:Menu},
        {path:'/admin',component:Admin,beforeEnter:(to,from,next) => {
            if(to.path == '/login' || to.path == '/register'){
                next();
            }else{
                alert("还木有登录！请登录")
                next('/login')
            }//路由独享守卫
        }},
        {path:'/about',redirect:'/contact',component:About,children:[
            {path:'/contact',redirect:'/personName',component:Contact,children:[
                {path:'/phone',component:Phone},
                {path:'/personName',component:PersonName}
            ]},
            {path:'/delivry',name:'delivry',component:Delivry},
            {path:'/history',name:'history',component:History1},
            {path:'/orderingguide',name:'orderingguide',component:OrderingGuide},
        ]},
        {path:'/login',component:Login},
        {path:'/register',component:Register},
        {path:'*',redirect:''}//链接地址输入错误引导到主页
]