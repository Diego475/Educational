import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins/bootstrap-vue'


//import material-icon scss
import "font-awesome/css/font-awesome.min.css";

import router from './router'

//defined as global component

Vue.component('VueFontawesome', require('vue-fontawesome-icon/VueFontawesome.vue').default);


Vue.use(Vuelidate)
Vue.config.productionTip = false
Vue.config.devtools = true;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
