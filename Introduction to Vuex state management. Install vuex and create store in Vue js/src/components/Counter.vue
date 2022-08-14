<template>
<h1>COUNTER</h1>
    <div>
        <h1>{{$store.state.count}}</h1>
    </div>
</template>


<script>


export default {
    name: "Counter",
    data() {
        return {
            // counter: 0
        }
    }
}
</script>


