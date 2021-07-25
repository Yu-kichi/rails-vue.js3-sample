import { createApp } from 'vue'
import vSelect from "vue-select";
import App from '../book.vue';
import 'vue-select/dist/vue-select.css';

document.addEventListener("DOMContentLoaded", () => {
    const app = createApp(App);
    app.mount("#app");
});
//app.mount("#app");

// new Vue({
//   el: '#app',
//   data: {
//     options: ["選択肢１","選択肢２"],
//     selected: '',
//   }
// })