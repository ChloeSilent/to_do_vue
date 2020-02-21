<template>
    <form @submit.prevent="submitHandler">
        <div class="input-field">
            <input v-model="task" id="addTask" type="text" class="validate">
            <label class="active" for="addTask">Set a new task</label>
        </div>
    </form>
</template>
<script>
    export default {
        data:()=> ({
            task: ""
        }),
        name: 'TodoInput',
        methods: {
            submitHandler() {
                this.$store.commit("setTask", this.task);
                this.task = ""
            }
        }
    }
</script>
