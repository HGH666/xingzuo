import Vue from 'vue'
import Router from 'vue-router'
import iconList from './components/iconList.vue'
import index from './components/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/iconList'
    },
    {
      path: '*',
      redirect: '/iconList'
    },
    {
      name: 'iconList',
      path: '/iconList',
      component: iconList
    },
    {
      name: 'index',
      path: '/index',
      component: index
    }
  ]
})
