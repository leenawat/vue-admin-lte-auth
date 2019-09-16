import './lib/css'
import './lib/script'
import './lib/global'

import Vue from 'vue'
import App from './App.vue'
import EventBus from './lib/eventBus.js'
import router from './router'
import './permission' // permission control
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
