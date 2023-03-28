import { createApp } from 'vue'
import App from './App.vue'
import {router} from './routes.js';

import './assets/main.css'

const app = createApp(App);

let limit = 20;
app.provide('limit', limit);

app.use(router);
app.mount('#app');
