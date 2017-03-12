import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import MyComp from '@/components/MyComp'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/about',
      name: 'About',
      component: MyComp
    }
  ]
})
