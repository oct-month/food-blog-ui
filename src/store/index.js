import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {        // 状态
    userName: '',   // 用户名
    blogs: []       // 所有博客
  },
  getters: {
    userName(state) {
      return state.userName
    },
    allBlogs(state) {
      return state.blogs
    },
    userBlogs: (state) => (userName) => { // 通过返回一个函数以实现getters传参
      var ublogs = []
      state.blogs.forEach((blog) => {
        if (blog.userName === userName)
        {
          ublogs.push(blog)
        }
      })
      return ublogs
    }
  },
  mutations: {  // 只接受同步更改
    setUserName(state, payload) {   // 设置用户名
      state.userName = payload.userName
    },
    setBlogs(state, payload) {      // 设置blogs
      state.blogs = payload.blogs
    },
    addBlogs(state, payload) {      // 在blogs开头增加blog
      payload.blogs.forEach((blog) => {
        state.blogs.unshift(blog)
      })
    },
    setComments(state, payload) {   // 设置blog的comments
      state.blogs.forEach((blog) => {
        if (blog.id === payload.blogId)
        {
          blog.comments = payload.comments
        }
      })
    },
    addComments(state, payload) {   // 增加blog的comments
      state.blogs.forEach((blog) => {
        if (blog.id === payload.blogId)
        {
          payload.comments.forEach((comment) => {
            blog.comments.unshift(comment)
          })
        }
      })
    },
    addLikes(state, payload) {    // 点赞
      state.blogs.forEach((blog) => {
        if (blog.id === payload.blogId)
        {
          blog.likes ++
        }
      })
    }
  },
  actions: {  // 可以进行异步操作
  },
  modules: {  // 模块
  }
})
