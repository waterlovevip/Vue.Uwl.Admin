import Vue from 'vue'
import Router from 'vue-router'
import login from '@/Views/login.vue'
import HelloWorld from '../components/HelloWorld.vue'

Vue.use(Router)
const routes=
[
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
    meta:{
      title:'HelloWorld',
      requireAuth:true,//表示此页面打开是否需要登录
      NoNeedHome:false,//添加此字段表示不需要Home模板
    },
    hidden:true,
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    meta:{
      title:'login',
      requireAuth:false,//表示此页面打开是否需要登录
      NoNeedHome:false,//添加此字段表示不需要Home模板
    },
    hidden:true,
  }
]

var router= new Router({
  mode:'history',
  routes: routes,
})

router.beforeEach()
export default router;
