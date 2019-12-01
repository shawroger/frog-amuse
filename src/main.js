import Vue from 'vue'

import App from './App.vue'

/* css */
import '@/assets/global.less'

/* router & store */
import router from './router'
import store from './store'

/* plugins */
import './plugins/axios'
import './plugins/element.js'

/* directives */
import './services/directives.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
