import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

/*
configure fontawsome css
*/

import "../node_modules/@fortawesome/fontawesome-free/css/all.css"

/*
Configure bootstrap css
*/
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"




createApp(App).use(router).mount("#app");
