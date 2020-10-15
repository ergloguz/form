import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userList: []
    },
    mutations: {
        NEW_COUNT(state, payload) {
            payload.index = state.userList.length;
            state.userList.push(payload);
        },
    },
    getters: {
        getList: (state) => state.userList
    }
})
