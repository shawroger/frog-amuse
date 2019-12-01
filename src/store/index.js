import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    getCity(state, cityjson) {
      state.user = cityjson;
    }
  },
  actions: {},
  modules: {}
})