import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import Vuex from 'vuex'
import {store} from './store';

Vue.prototype.$store = Vue.$store = {store}
Vue.config.productionTip = false;

Vue.use(Vuex);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');