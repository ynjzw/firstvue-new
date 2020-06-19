// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import test from "./components/test"
import App from './App'
import axios from 'axios'
import router from './router'
import ViewUI from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(ViewUI);
Vue.prototype.$http=axios


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { test },
  template: '<test/>'
})
