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
    component: Index,
    meta: {
      title: '美食博客'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: '我的博客'
    }
  },
  {
    path: '/write',
    name: 'WriteBlog',
    component: WriteBlog,
    meta: {
      title: '写博客'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: '关于FoodBlog'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
