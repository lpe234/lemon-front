import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// lazy load
const cHello = resolve => require(['../components/Hello'], resolve)

const vIndex = resolve => require(['../views/Index'], resolve)
const vArticle = resolve => require(['../views/Article'], resolve)
const vArticleDetails = resolve => require(['../views/ArticleDetails'], resolve)
const vAbout = resolve => require(['../views/About'], resolve)
const vLogin = resolve => require(['../views/Login'], resolve)
const vArticleEdit = resolve => require(['../views/ArticleEditor'], resolve)

const vDefault = resolve => require(['../views/Default'], resolve)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'Default',
      component: vDefault
    },
    {
      path: '/hello',
      name: 'Hello',
      component: cHello
    },
    {
      path: '/',
      name: 'Index',
      component: vIndex
    },
    {
      path: '/article',
      name: 'Article',
      component: vArticle
    },
    {
      path: '/article/:id',
      name: 'ArticleDetails',
      component: vArticleDetails
    },
    {
      path: '/about',
      name: 'About',
      component: vAbout
    },
    {
      path: '/login',
      name: 'Login',
      component: vLogin
    },
    {
      path: '/article/:id/edit',
      name: 'ArticleDetailsEditor',
      component: vArticleEdit,
      meta: {
        requiresAuth: true,
        action: 'edit'
      }
    }
  ]
})
