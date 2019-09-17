import './lib/css'
import './lib/script'
import './lib/global'

import Vue from 'vue'
import App from './App.vue'
import EventBus from './lib/eventBus.js'

// fix router duplication name
import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
//end fix router duplication name

import router from './router'
import './permission' // permission control
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
