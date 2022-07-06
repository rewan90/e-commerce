import {
      createApp
} from 'vue'
import App from './App.vue'
import router from "./router";
import Navbar from "../src/components/Navbar.vue";

const vue = createApp(App);
vue.component('Navbar', Navbar);

vue.use(router)
vue.mount('#app')
