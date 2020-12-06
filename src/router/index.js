import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../views/Index.vue'
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import WriteBlog from '../views/WriteBlog.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/write',
    name: 'WriteBlog',
    component: WriteBlog
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
