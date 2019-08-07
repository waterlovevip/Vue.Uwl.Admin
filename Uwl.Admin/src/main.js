// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/Vuex/store'//在全局Main.js中引入Store仓库
import iview from 'iview' //引入Iview前端js框架
import 'iview/dist/styles/iview.css' //引入Iview的CSS文件
import Msg from './Public/Message.js'
import Echarts from 'echarts'

Vue.config.productionTip = false
Vue.prototype.$Msg=Msg
Vue.use(iview) //挂载iview框架

Vue.prototype.echarts=Echarts
Vue.use(Echarts)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//将仓库挂载
  components: { App },
  template: '<App/>'
})
