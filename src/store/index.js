import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {        // 状态
    userName: '',   // 用户名
    blogs: [{
      comments: [],
      content: '',
      id: 0,
      img: '',
      likes: 0,
      publishTime: '',
      title: '',
      userName: ''
    }]       // 所有博客
  },
  getters: {
    userName(state) {
      return state.userName
    },
    allBlogs(state) {
      return state.blogs
    }
  },
  mutations: {  // 只接受同步更改
    setUserName(state, payload) {   // 设置用户名
      state.userName = payload.userName
    },
    setBlogs(state, payload) {      // 设置blogs
      state.blogs = payload.blogs
    },
    addBlogs(state, payload) {      // 增加blogs
      state.blogs = state.blogs.concat(payload.blogs)
    }
  },
  actions: {  // 可以进行异步操作
  },
  modules: {  // 模块
  }
})
