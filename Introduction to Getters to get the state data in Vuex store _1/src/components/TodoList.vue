<template>
    <div style="text-align: left">
        <h3>Todos List (Done: {{doneListCount}})</h3>
        <ul>
            <li v-for="todo in todosList" :key="todo.is">
                {{todo.text}} - {{todo.done ? 'Done' :'Not Done'}}

            </li>
        </ul>
    </div>
</template>
<script>


export default {
    name: "TodosList",
    data() {
        return {
            
        };
    },
    computed: {
        todosList() {
            return this.$store.state.todos;
        },
        doneListCount() {
            return this.$store.getters.doneTodosListCount;
        }
    },
    methods: {
       
    }
}
</script>
