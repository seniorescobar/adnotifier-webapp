import { createApp } from 'vue'
import { createStore } from 'vuex'

import App from './App.vue'
import router from './router.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faPlusCircle, faArrowLeft, faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch, faPlusCircle, faMinusCircle, faArrowLeft)

import 'bootstrap'
import './assets/scss/custom.scss'

const app = createApp(App)
const store = createStore({
    state() {
        return {
            targets: []
        }
    },
    getters: {
        getTargets: (state) => {
            return state.targets
        },
        getTarget: (_, getters) => (id) => {
            return getters.getTargets.find(
                (target) => target.id === id
            );
        }
    },
    mutations: {
        addTarget(state, target) {
            state.targets.unshift(target)
        },
        setTargets(state, targets) {
            state.targets = targets
        },
        deleteTarget(state, id) {
            state.targets = state.targets.filter(
                (target) => target.id !== id
            );
        }
    },
    actions: {
        addTarget({commit}, target) {
            commit('addTarget', target)
        },
        setTargets({commit}, targets) {
            commit('setTargets', targets)
        },
        deleteTarget({commit}, id) {
            commit('deleteTarget', id)
        }
    }
})

app.use(router)
app.use(store)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')