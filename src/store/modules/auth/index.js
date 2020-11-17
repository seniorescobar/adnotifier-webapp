import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

import { AuthState } from '@aws-amplify/ui-components';

export default {
    state() {
        return {
            authState: AuthState.SignedOut,
        };
    },
    mutations,
    actions,
    getters,
};