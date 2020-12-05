import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {        // 状态
    userName: ''
  },
  getters: {
    userName(state) {
      return state.userName
    }
  },
  mutations: {  // 只接受同步更改
    setUserName(state, payload) {
      state.userName = payload.userName
    }
  },
  actions: {  // 可以进行异步操作
  },
  modules: {  // 模块
  }
})
