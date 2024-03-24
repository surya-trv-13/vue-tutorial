import { createApp } from "vue";
import FriendContact from "./components/FriendContact";

import App from "./App.vue";

const app = createApp(App);

app.component("friend-contact", FriendContact);

app.mount("#app");
//Changes
