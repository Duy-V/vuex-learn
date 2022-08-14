<template>
<Counter />
<TodosList />
<div>Todos list complete: {{doneListCount}}</div>
<div class="counter">
  <h3>APP VUE APP</h3>

{{count}}
</div>
<div>
  <button @click.prevent="onIncrement()">Increment</button>
</div>
  <nav>
    <router-link to="/">Home</router-link> |
    
  </nav>
  <router-view/>
</template>
<script>
import Counter from "./components/Counter.vue"
import TodosList from "./components/TodoList.vue"
export default {
 name:"App",
 computed: {
count() {

  return this.$store.state.count;
},
doneListCount() {
            return this.$store.getters.doneTodosListCount;
        }

 },
 methods: {
onIncrement() {
  this.$store.dispatch('actionB').then((response) => {
                console.log('calling then success', response);console.log(response)
            })},
 
 },
 components: {
  Counter,
  TodosList
 }
}
</script>
>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
