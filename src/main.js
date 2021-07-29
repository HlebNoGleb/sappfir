import { createApp } from 'vue';
import 'materialize-css/dist/js/materialize.min';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

const app = createApp(App).use(store).use(router);
app.use(VueSweetalert2);
app.mount('#app');
