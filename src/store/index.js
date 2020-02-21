import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tasks: []
    },
    mutations: {
        setTask(state, task) {
            state.tasks.push({name: task, done: false})
        },
        checkTask(state, task) {
            const checked = state.tasks.find(item => item.name === task)
            checked.done = !checked.done
        },
        deleteTask(state, task) {
            state.tasks = state.tasks.filter(function (obj) {
                return obj.name !== task;
            });
        }
    },
    getters: {
        receiveTasks: state => {
            return state.tasks;
        }
    }
});
