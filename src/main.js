import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/routes'
import VueFire from 'vuefire'

Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(VueFire)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
