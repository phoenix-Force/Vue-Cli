import Vue from 'vue'
import Home from './Home.vue'
import Home2 from './Home2.vue'


// new Vue({
//   el: '#app',
//   render: h => h(App)
// })



Vue.component('d-nav-bar', Home2)
new Vue({
  el: "#app",
  render: h => h(Home)
})
