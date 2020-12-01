import Vue from 'vue'
import {ConfigProvider} from 'ant-design-vue'
import {Button} from 'ant-design-vue'

import router from './router'
import store from './store'

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(ConfigProvider)
Vue.use(Button)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
