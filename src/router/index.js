import Vue from 'vue'

import Router from 'vue-router'
import MainLayout from '@/views/MainLayout'
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home,
          meta: {
            icon: 'fa fa-th',
            name: 'Widgets',
            badge: {
              type: 'String',
              data: 'new'
            }
          }
        },
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
          meta: {
            icon: 'fa fa-info',
            name: 'About',
          }
        }
      ]
    },{
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "gogin" */ '@/views/Login.vue'),
      meta: {
        icon: 'fa fa-info',
        name: 'About',
      }
    }
  ]
})
