import Vue from 'vue'
import VueSlimScroll from 'vue-slimscroll'
import Row from '../grid/Row'
import Column from '../grid/Column'

Vue.use(VueSlimScroll)
Vue.component('row', Row)
Vue.component('column', Column)
