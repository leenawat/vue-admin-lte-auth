import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import MainLayout from '@/views/MainLayout'
import Home from '@/views/Home.vue'

export const asyncRoutes = [
  {
    path: '/',
    component: MainLayout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home-page',
        component: Home,
        meta: {
          roles: ['admin'],
          icon: 'fa fa-th',
          name: 'Widgets',
          badge: {
            type: 'String',
            data: 'new'
          }
        }
      },
      {
        path: 'about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
        meta: {
          roles: ['user'],
          icon: 'fa fa-info',
          name: 'About',
        }
      }
    ]
  }
]

export const constantRoutes = [{
  path: '/login',
  name: 'login',
  component: () => import(/* webpackChunkName: "gogin" */ '@/views/Login.vue'),
  meta: {
    icon: 'fa fa-info',
    name: 'About',
  },
}];

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router