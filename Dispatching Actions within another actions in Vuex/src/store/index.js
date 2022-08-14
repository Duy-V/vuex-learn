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
getTodoById: (state) => (id) => {
return state.todos.find((todo) => todo.id ===id)
},
    doneTodosListCount(state, getters) {
      return getters.doneTodos.length;
    },
// doneTodosListCount(state, getters) {
//   return state.todos.filter((todo) => todo.done).length;
// },
doneTodos(state) {
  return state.todos.filter((todo) => todo.done ==true);
}
    
  },
  mutations: {
    increment(state, payload) {
      state.count = state.count +payload.value;
    }
  },
  actions: {
    increment(context, payload) {
     setTimeout(() => {
       context.commit('increment',payload)},2000)
    },
    actionA(context) {
      return new Promise((resolve) => {
        setTimeout(() => {
context.commit('increment',{value:1});
resolve('Leela web dev')
        },2000)
      })
    },
    actionB(context) {
      context.dispatch('actionA').then((response) => {
        console.log(response);
        console.log('calling success from actionB')
      })

    }
      
    },
  
  modules: {
  }
})
