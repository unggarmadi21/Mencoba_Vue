import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "popper.js/dist/popper.min.js";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
