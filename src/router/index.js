// 1、配置路由相关信息
import Vue from 'vue'
import VueRouter from 'vue-router' // 引进路由,创建单页面的应用

// 2、通过vue.use(插件)，安装插件
Vue.use(VueRouter)

// 路由懒加载第三种方式：ES6中
// const home = () => import('../components/page/wecome.vue')
const Home =() =>import('../views/Home')
const Profile =()=>import('../views/Profile')
const Search=()=>import('../views/Search')
const Social=()=>import('../views/Social')
const routes = [
    {
        name: 'default',
        path: '*',
        redirect: {
            name: 'Home'
        }
    },
    {
        path:'/home',
        component:Home,
        name:'Home',
        meta:{
            title:'首页'
        },
    },
    {
        path:'/profile',
        component:Profile,
        name:'Profile',
        meta:{
            title:'档案页'
        },
    },
 {
     path:'/search',
     component:Search,
     name:'Search',
     meta:{
     title:'发现'
    },
 },
    {
        path:'/social',
        component:Social,
        name:'Social',
        meta:{
            title:'圈子'
        },
    }

]
const router = new VueRouter({
    // 配置路由和组件之间的对应关系
    routes,
    mode:'history',
    linkActiveClass:'active'
})
// 全局路由导航
router.beforeEach((to, from,next) =>{
    document.title = to.matched[0].meta.title
    next()
})

// 4、将router对象传入到vue实例当中
export default router