<template>
    <div class="container">
        <h1>To do app</h1>
        <div class="row">
            <div class="central_items">
                <TodoInput/>
            </div>
            <TodoList/>

        </div>


    </div>
</template>

<script>
    import TodoList from "./components/TodoList";
    import TodoInput from "./components/TodoInput"

    export default {
        components: {
            TodoInput,
            TodoList
        }
    }
</script>

<style>
    @import "~materialize-css/dist/css/materialize.min.css";
    @import "assets/index.css";
</style>
