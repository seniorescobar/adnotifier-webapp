import { createRouter, createWebHistory } from 'vue-router'

import ListTargets from './views/ListTargets.vue'
import AddTarget from './views/AddTarget.vue'
import ViewTarget from './views/ViewTarget.vue'
import Settings from './views/settings/Settings.vue'
import Signin from './views/auth/Signin.vue'
import Signout from './views/auth/Signout.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'targets',
            path: '/',
            component: ListTargets,
            meta: {
                title: 'kupi.link | targets',
                requiresAuth: true,
            },
        },
        {
            name: 'add-target',
            path: '/target/add',
            component: AddTarget,
            meta: {
                title: 'kupi.link | add target',
                requiresAuth: true,
            },
        },
        {
            name: 'target',
            path: '/target/:id',
            component: ViewTarget,
            meta: {
                title: 'kupi.link | view target',
                requiresAuth: true,
            },
        },
        {
            name: 'settings',
            path: '/settings',
            component: Settings,
            meta: {
                title: 'kupi.link | settings',
                requiresAuth: true,
            },
        },
        {
            name: 'signin',
            path: '/signin',
            component: Signin,
            meta: {
                title: 'kupi.link | signin',
                requiresAuth: false,
            },
        },
        {
            name: 'signout',
            path: '/signout',
            component: Signout,
            meta: {
                title: 'kupi.link | signout',
                requiresAuth: true,
            },
        },
    ]
});

import { Auth } from "aws-amplify";
router.beforeEach(async (to, from, next) => {
    document.title = to.meta.title

    if (to.matched.some(record => record.meta.requiresAuth)) {
        try {
            await Auth.currentAuthenticatedUser();
            next();
            return;
        } catch (e) {
            next({
                name: 'signin',
                query: {
                    redirect: to.fullPath
                }
            });
            return;
        }
    }
    next();
});

export default router