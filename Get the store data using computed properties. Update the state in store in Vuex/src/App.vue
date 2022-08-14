<template>
<Counter />
<div class="counter">
  <h3>APP VUE APP</h3>

{{count}}
</div>
  <nav>
    <router-link to="/">Home</router-link> |
    
  </nav>
  <router-view/>
</template>
<script>
import Counter from "./components/Counter.vue"
export default {
 name:"App",
 computed: {
count() {

  return this.$store.state.count;
}

 },
 components: {
  Counter
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
