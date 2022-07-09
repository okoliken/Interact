import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import store from "@/store";
import router from "@/router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPencil);

const app = createApp(App);

app.use(store);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router).mount("#app");
