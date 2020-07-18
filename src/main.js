import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/scss/bootstrap.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBell, faPlusCircle, faSearch, faArrowLeft, faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBell)
library.add(faPlusCircle)
library.add(faMinusCircle)
library.add(faSearch)
library.add(faArrowLeft)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
