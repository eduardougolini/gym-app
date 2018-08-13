import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login';
import Default from '../components/Default';
import Home from '../components/Home';;

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: Default
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})