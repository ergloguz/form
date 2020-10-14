import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data:[]
  },
  mutations: {
    addNewBook(state, payload) {
      payload.index = state.data.length;
      state.data.push(payload);
    },

  },
  actions: {
  },
  modules: {
  },
  getters:{
    getData: (state) => state.data
    ,
  }
})
