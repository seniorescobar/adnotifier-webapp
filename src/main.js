import { createApp } from 'vue'

import App from './App.vue'
import router from './router.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faPlusCircle, faArrowLeft, faMinusCircle, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch, faPlusCircle, faMinusCircle, faArrowLeft, faEye, faEyeSlash)

import 'bootstrap'
import './assets/scss/custom.scss'

import { applyPolyfills, defineCustomElements } from '@aws-amplify/ui-components/loader';
applyPolyfills().then(() => {  defineCustomElements(window); });

import Amplify  from '@aws-amplify/core';
Amplify.configure({
    Auth: {
        region: 'eu-central-1',
        userPoolId: 'eu-central-1_kHmS1v57s',
        userPoolWebClientId: '6mmev9mnitbp8kq8fe1999dbmu',
    }
});

const app = createApp(App)

app.config.isCustomElement = (tag) => tag.startsWith('amplify-');

app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')