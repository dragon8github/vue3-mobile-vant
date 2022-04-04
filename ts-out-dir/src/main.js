import { createApp } from 'vue';
import App from './App.vue';
const app = createApp(App);
import 'amfe-flexible/index.js';
import Vant from 'vant';
import 'vant/lib/index.css';
app.use(Vant);
app.use(router);
import router from './router';
import { createPinia } from 'pinia';
app.use(createPinia());
import 'virtual:svg-icons-register';
import svgIcon from '@/icons/SvgIcon.vue';
app.component('SvgIcon', svgIcon);
import '@/styles/index.scss';
import './permission';
app.mount('#app');
