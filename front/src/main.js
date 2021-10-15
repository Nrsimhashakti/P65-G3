import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'


//ALERTAS SWEET
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);


//AXIOS
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios)

//AGREGAMOS LA URL BASE DE DATOS API

axios.defaults.baseURL='http://localhost:3000/api';


import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/main.css'
import './assets/css/style.css'
import './assets/css/reset.css'
import './assets/css/grid.css'



//import './assets/js/touchTouch.jquery.js'

Vue.config.productionTip = false



new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
