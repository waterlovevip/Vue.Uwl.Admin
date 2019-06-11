import Vue from 'vue'
import Router from 'vue-router'
import login from '@/Views/login.vue'
import Menu from '@/Views/MenuMgr/Menu.vue'
import User from '@/Views/UserMgr/User.vue'
import Role from '@/Views/RoleMgr/Role.vue'
import Assignment from '@/Views/Assignment/RoleAssigMenu.vue' //角色分配菜单组件注入
import test2 from '@/Views/test2.vue'
// import Layout from '@/Views/Layout.vue'
import PlatformHome from '@/Views/PlatformHome.vue'
import customLayout from '@/components/customLayout.vue'
import store from '../Vuex/store'
Vue.use(Router)
const routes=
[
  //登录
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
  },
  {
    //除了错误页面和登录页面routes的第一层需要放组件布局，routes[0].children存放具体功能的组件信息
    path: '/',
    name: 'Layout',
    component: customLayout,
    redirect:'/PlatformHome',
    children:[
      {
        path: '/PlatformHome',
        name: 'PlatformHome',
        component: PlatformHome,
        meta:{
            title:'HelloWorld',
            requireAuth:true,//表示此页面打开是否需要登录
            NoNeedHome:false,//添加此字段表示不需要Home模板
          },
      },
    ]
  },
  {
    path: '/meuns',
    name: 'Layout',
    component: customLayout,
    children:[
      {
        path: '/menu/menumgr',
        name: 'menumgr',
        component: Menu,
        meta:{
          title:'菜单管理',
          requireAuth:true,//表示此页面打开是否需要登录
          NoNeedHome:false,//添加此字段表示不需要Home模板
        },
      }
    ]
    
  },
  {
    path: '/users',
    name: 'Layout',
    component: customLayout,
    children:[
      {
        path: '/user/usermgr',
        name: 'uermgr',
        component: User,
        meta:{
          title:'用户管理',
          requireAuth:true,//表示此页面打开是否需要登录
          NoNeedHome:false,//添加此字段表示不需要Home模板
        },
      }
    ]
    
  },
  {
    path: '/test2',
    name: 'customLayout',
    component: customLayout,
    hidden:true,
    children:[
      {
        path: '/test2',
        name: 'test2',
        component: test2,
        meta:{
          title:'test2',
          requireAuth:true,//表示此页面打开是否需要登录
          NoNeedHome:false,//添加此字段表示不需要Home模板
        },
      }
    ]
    
    
  },
  {
    path: '/roles',
    name: 'Layout',
    component: customLayout,
    children:[
      {
        path: '/role/rolemgr',
        name: 'uermgr',
        component: Role,
        meta:{
          title:'角色管理',
          requireAuth:true,//表示此页面打开是否需要登录
          NoNeedHome:false,//添加此字段表示不需要Home模板
        },
      }
    ]
    
  },
  {
    path: '/roleAssig',
    name: 'Layout',
    component: customLayout,
    children:[
      {
        path: '/role/RoleAssig',
        name: 'uermgr',
        component: Assignment,
        meta:{
          title:'角色分配菜单',
          requireAuth:true,//表示此页面打开是否需要登录
          NoNeedHome:false,//添加此字段表示不需要Home模板
        },
      }
    ]
    
  }
]

var router= new Router({
  mode:'history',
  routes: routes,
})

router.beforeEach((to,from,next)=>{
    // console.log(store.state.token)
    // console.log(to.fullPath)
    //   if(store.state.token==null)
    //   {
    //     if(to.fullPath=='/login')
    //     {
    //       next();
    //     }
    //     // else if(to.fullPath=='/')
    //     // {
    //     //   next({path:'/login',query:{ReturnUrl:to.fullPath}})
    //     // }
    //     else{
    //       next({path:'/login',query:{ReturnUrl:to.fullPath}})
    //     }
        
    //   }
    //   else
    //   {
    //     next()
    //   }
    if(to.meta.requireAuth)
    {
      if(store.state.token==null)
      {
        var token=window.sessionStorage.getItem("Token");
        store.state.token=token;
      }
      if(store.state.token==null)
      {
        next({path:'/login',query:{ReturnUrl:to.fullPath}})
      }
      else
      {
        next();
      }
    }
    else{
      next();
    }
  }

)
export default router;
