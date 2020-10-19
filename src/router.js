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
                requiresAuth: true,
            },
        },
        {
            name: 'add-target',
            path: '/target/add',
            component: AddTarget,
            meta: {
                requiresAuth: true,
            },
        },
        {
            name: 'target',
            path: '/target/:id',
            component: ViewTarget,
            meta: {
                requiresAuth: true,
            },
        },
        {
            name: 'settings',
            path: '/settings',
            component: Settings,
            meta: {
                requiresAuth: true,
            },
        },
        {
            name: 'signin',
            path: '/signin',
            component: Signin,
            meta: {
                requiresAuth: false,
            },
        },
        {
            name: 'signout',
            path: '/signout',
            component: Signout,
            meta: {
                requiresAuth: true,
            },
        },
    ]
});

import { Auth } from "aws-amplify";
router.beforeResolve(async (to, from, next) => {
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
        }
    }
    next();
});

export default router