// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.directive("bgcolor",function(el,binding){
    el.style.background = binding.value;
})

Vue.directive("color",function(el,binding){
    el.style.color = binding.value;
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
