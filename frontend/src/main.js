import { createApp } from "vue";
import App from "./App.vue";
import "./main.scss";
import router from "./router/router";
import VButton from "./components/uikit/VButton.vue";
import VCard from "./components/uikit/VCard.vue";
import VInput from "./components/uikit/VInput.vue";

const app = createApp(App);
app.component("v-button", VButton);
app.component("v-card", VCard);
app.component("v-input", VInput);

app.use(router);
app.mount("#app");
