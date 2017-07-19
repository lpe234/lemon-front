import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// lazy load
const cHello = resolve => require(['../components/Hello'], resolve)

const cIndex = resolve => require(['../views/Index'], resolve)
const cAbout = resolve => require(['../views/About'], resolve)
const cLogin = resolve => require(['../views/Login'], resolve)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: cHello
    },
    {
      path: '/',
      name: 'Index',
      component: cIndex
    },
    {
      path: '/about',
      name: 'About',
      component: cAbout
    },
    {
      path: '/login',
      name: 'Login',
      component: cLogin
    }
  ]
})
