import Vue from 'vue'
import App from './App.vue'
import router from './config/router'


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
