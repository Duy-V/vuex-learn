<template>
    <div style="text-align: left">
        <h3>Todos List (Done: {{doneListCount}})</h3>
        <ul>
            <li v-for="todo in todosList" :key="todo.is">
                <a href="#" @click.prevent="onTodoSelected(todo.id)">
                {{todo.text}} - {{todo.done ? 'Done' :'Not Done'}}

                </a>

            </li>
        </ul>
        <div v-if="todo">
<h3>Selected Todo</h3>
        <div>  Id: {{todo.id}} </div>
         <div>  Id: {{todo.text}} </div>
          <div>  Id: {{todo.done}} </div>

        </div>
        
        <h3>Completed Todos</h3>
<ul>
    <li v-for="todo in doneTodos" :key="todo.id">
{{todo.text}} -({{todo.done ? 'Done' : 'Not Done'}})
    </li>
</ul>

    </div>
</template>
<script>


export default {
    name: "TodosList",
    data() {
        return {
            selectedId:"",
        };
    },
    computed: {
        todosList() {
            return this.$store.state.todos;
        },
        doneListCount() {
            return this.$store.getters.doneTodosListCount;
        },
        doneTodos() {
            return this.$store.getters.doneTodos;
        },
        todo() {
            return this.$store.getters.getTodoById(this.selectedId)
        }
    },
    methods: {
       onTodoSelected(id) {
this.selectedId = id
       }
    }
}
</script>
