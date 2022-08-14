import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      count: 2,
    }
  },
  getters: {
  },
  mutations: {
    increment(state, payload) {
      state.count = state.count +payload.value;
    }
  },
  actions: {
  },
  modules: {
  }
})
