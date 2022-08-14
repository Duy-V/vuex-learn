import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      count: 2,
      todos: [
        { id: 1, text: 'wakeup early', done: true },
        { id: 2, text: 'do breakfast', done: true },
        { id: 3, text: 'go to school', done: false },
        { id: 4, text: 'sleep early', done: false },
    ],
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
