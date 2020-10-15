import { createApp } from 'vue'

import App from './App.vue'
import router from './router.js'
import store from './store.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faPlusCircle, faArrowLeft, faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch, faPlusCircle, faMinusCircle, faArrowLeft)

import 'bootstrap'
import './assets/scss/custom.scss'

const app = createApp(App)

app.use(router)
app.use(store)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')