import { createApp } from "vue";

import App from "./App.vue";
import BaseBadge from "./components/BaseBadge.vue";

const app = createApp(App);

// Global Components which can be used by all the components
app.component("base-badge", BaseBadge);

app.mount("#app");
