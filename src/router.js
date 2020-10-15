import { createRouter, createWebHistory } from 'vue-router'

import ListTargets from './views/ListTargets.vue'
import AddTarget from './views/AddTarget.vue'
import ViewTarget from './views/ViewTarget.vue'
import Settings from './views/settings/Settings.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'targets',
            path: '/',
            component: ListTargets
        },
        {
            name: 'add-target',
            path: '/target/add',
            component: AddTarget
        },
        {
            name: 'target',
            path: '/target/:id',
            component: ViewTarget
        },
        {
            name: 'settings',
            path: '/settings',
            component: Settings
        },
    ]
})

export default router