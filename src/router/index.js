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
        path: '',
        name: 'home',
        component: Home,
        meta: {
          icon: 'fa fa-th',
          name: 'Home',
          badge: {
            type: 'String',
            data: 'new'
          }
        }
      },
      {
        path: 'admin',
        name: 'admin',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "admin" */ '@/views/AdminPermission.vue'),
        meta: {
          roles: ['admin'],
          icon: 'fa fa-info',
          name: 'Admin',
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
      },
      ,
      // 404 page must be placed at the end !!!
      { path: '*', redirect: '/404', hidden: true }
    ]
  }
]

export const constantRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "gogin" */ '@/views/Login.vue'),
    meta: {
      icon: 'fa fa-info',
      name: 'About',
    },
  },
  {
    path: '/401',
    component: () => import('@/views/401'),
    hidden: true
  },
  {
    path: '/403',
    component: () => import('@/views/403'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/500',
    component: () => import('@/views/500'),
    hidden: true
  }
];

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