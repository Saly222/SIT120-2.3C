import { createApp } from 'vue';
import App from './App.vue';
import router from '../router.js'; // Import your Vue Router configuration
import homepage from './home/homepage.vue';
import './assets/main.css';

const app = createApp(App);

// Register your components using app.component()
app.component('homepage', homepage);

app.use(router); // Use the Vue Router configuration

app.mount('#app');
