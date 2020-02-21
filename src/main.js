import Vue from 'vue'
import App from './App.vue'
import "materialize-css/dist/js/materialize.min";
import "materialize-css";
import store from "./store";

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
