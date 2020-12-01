import Vue from 'vue'

import Register from './Register.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(Register)
}).$mount('#register')
