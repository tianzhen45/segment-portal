// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './plugins/element.js'
import './plugins/clipboard.js'
import axios from './api/axios.js'

Vue.config.productionTip = false

Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

/**
 * new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
 */
