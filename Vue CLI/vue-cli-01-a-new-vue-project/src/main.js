import { createApp } from "vue";
import FriendContact from "./components/FriendContact";
import AddFriend from "./components/AddFriend";

import App from "./App.vue";

const app = createApp(App);

app.component("friend-contact", FriendContact);
app.component("add-friend", AddFriend);

app.mount("#app");
//Changes
