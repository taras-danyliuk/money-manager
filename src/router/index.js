import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Test from '@/components/Test'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
