import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            targets: null,
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
        },
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

export default store