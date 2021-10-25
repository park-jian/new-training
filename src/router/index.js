import Vue from 'vue'
import VueRouter from 'vue-router'
import Editor from '../views/Editor.vue'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/editor',
    name: 'Editor',
    component: Editor
  },
  {
    path: '/calendar',
    name: 'Calendar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "calendar" */ '../views/Calendar.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: Main
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
