// import App from './App.vue';
// import store from './store';

import { createApp } from 'vue'
import App from '../prefecture.vue';

document.addEventListener("DOMContentLoaded", () => {
  const app = createApp(App);
  app.mount("#app");
});
