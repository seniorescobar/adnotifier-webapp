import { createApp } from 'vue'

import App from './App.vue'
import router from './router.js'
import store from './store/index.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faPlusCircle, faArrowLeft, faMinusCircle, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch, faPlusCircle, faMinusCircle, faArrowLeft, faEye, faEyeSlash)

import 'bootstrap'
import './assets/scss/custom.scss'

import Amplify from 'aws-amplify';
Amplify.configure({
    Auth: {
        region: 'eu-central-1',
        userPoolId: 'eu-central-1_kHmS1v57s',
        userPoolWebClientId: '6mmev9mnitbp8kq8fe1999dbmu',
    }
});

const app = createApp(App)

app.use(router)
app.use(store)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')