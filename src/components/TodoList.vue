<template>
    <ul class="collection">
        <li class="collection-item" :class="{'done': task.done}" v-for="task in renewedList" :key="task.name">{{ task.name }}
            <a @click="remove(task)" href="#!" class="secondary-content"><i class="material-icons">clear</i></a>
            <a @click="checked(task)" href="#!" class="secondary-content"><i class="material-icons">check</i></a>
        </li>
    </ul>
</template>
<script>
    export default {
        name: 'TodoList',
        data: ()=>({
            done: false
        }),
        computed: {
            renewedList () {
                return this.$store.getters.receiveTasks;
            }
        },
        methods: {
            checked (task) {
                console.log("checked", task);
                this.$store.commit("checkTask", task.name);
                //this.done = true
            },
            remove (task) {
                console.log("deleted", this.$store.commit("deleteTask", task.name));
                this.$store.commit("deleteTask", task.name);
            }
        }
    }
</script>
<style scoped>

</style>
