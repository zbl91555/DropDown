// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import demoBlock from './components/demo-block.vue'
import MAXUI from '../packages'
import setTitle from './utils/setTitle'
Vue.component('demo-block', demoBlock)
Vue.use(MAXUI)

Vue.config.productionTip = false

router.beforeEach((route, redirect, next) => {
  setTitle(route.meta.title)
  next()
})

/* eslint-disable */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
