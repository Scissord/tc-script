import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Toast, { POSITION }  from "vue-toastification";
import App from './App.vue';
import router from './routes';
import "vue-toastification/dist/index.css";
import './style.css';

// Import the CSS or use your own!

// font-awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)

// SELECT SHOULD BE HERE
import vSelect from "vue-select";
import 'vue-select/dist/vue-select.css';
// DATE PICKER
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const app = createApp(App);
const pinia = createPinia();

// Icon
app.component('Icon', FontAwesomeIcon)
//SELECT SHOULD BE HERE
app.component("vSelect", vSelect);
// DatePicker
app.component('DatePicker', VueDatePicker);

app.use(Toast, {
  // Setting the global default position
  position: POSITION.TOP_RIGHT
});
app.use(pinia);
app.use(router);
app.mount('#app');
