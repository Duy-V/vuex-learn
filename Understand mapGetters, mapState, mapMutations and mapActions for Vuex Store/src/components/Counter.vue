<template>
<h1>COUNTER</h1>
    <div>
        <h1>{{count}}</h1>
    </div>
    <div>
<button @click.prevent="inc({value:2})">Increment</button>

    </div>
</template>


<script>

import {mapState,mapActions,mapMutations} from 'vuex'
export default {
    name: "Counter",
    data() {
        return {
            // counter: 0
        }
    },
    computed: {
        ...mapState({
            count: state => state.count
        })
// count() {
//     return this.$store.state.count;
// }
    },
    methods: {
        ...mapActions({
            onIncrement: 'actionB'
        }),
        ...mapMutations({
            inc: 'increment'
        })
        //  onIncrement() {
        //     this.$store.dispatch('actionA')
        // }
        // onIncrement() {
        //     this.$store.dispatch('actionB');
        // }
    }
}
</script>


