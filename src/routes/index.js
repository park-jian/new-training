import Vue from 'vue'
import VueRouter from 'vue-router'
import Editor from '../views/Editor.vue'
import Main from '../views/Main.vue'
import ItemView from '../views/ItemView.vue'
import UserView from '../views/UserView.vue'
import NewsView from '../views/NewsView.vue'
import JobsView from '../views/JobsView.vue'
import AskView from '../views/AskView.vue'

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
  },
  {
    path: '/itemView',
    name: 'ItemView',
    component: ItemView
  },{
    path: '/userView',
    name: 'UserView',
    component: UserView
  },
  {
    path: '/newsView',
    name: 'NewsView',
    component: NewsView
  },
  {
    path: '/jobsView',
    name: 'JobsView',
    component: JobsView
  },
  {
    path: '/askView',
    name: 'AskView',
    component: AskView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
