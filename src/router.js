import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
      meta: {
        title: 'AdNotifier | Home'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
      meta: {
        title: 'AdNotifier | Login'
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('./views/Dashboard.vue'),
      meta: {
        title: 'AdNotifier | Your dashboard'
      }
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: () => import('./views/Notifications.vue'),
      meta: {
        title: 'AdNotifier | Your notifications'
      }
    },
    {
      path: '/add-target',
      name: 'add-target',
      component: () => import('./views/AddTarget.vue'),
      meta: {
        title: 'AdNotifier | Add a target'
      }
    },
    {
      path: '/view-target/:id',
      name: 'view-target',
      component: () => import('./views/ViewTarget.vue'),
      meta: {
        title: 'AdNotifier | View target'
      }
    }
  ]
})

router.beforeEach((to, _, next) => {
  document.title = to.meta.title
  next()
})

export default router
