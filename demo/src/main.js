import Vue from 'vue'
import App from './App.vue'
import Grid from './Grid'

Vue.use(Grid)

new Vue({
  el: '#app',
  render: h => h(App)
})
