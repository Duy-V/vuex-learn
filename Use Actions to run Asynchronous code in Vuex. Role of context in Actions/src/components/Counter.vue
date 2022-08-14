<template>
<h1>COUNTER</h1>
    <div>
        <h1>{{count}}</h1>
    </div>
    <div>
<button @click.prevent="onIncrement()">Increment</button>

    </div>
</template>


<script>


export default {
    name: "Counter",
    data() {
        return {
            // counter: 0
        }
    },
    computed: {
count() {
    return this.$store.state.count;
}
    },
    methods: {
        onIncrement() {
            this.$store.dispatch({
    type: 'increment',
    value:2
  })
        }
    }
}
</script>


