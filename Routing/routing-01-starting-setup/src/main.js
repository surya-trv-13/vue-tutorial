import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

const router = createRouter({
  history: createWebHistory(), // history keeps the track of the last page visited by the application. and use the browser built in feature to track the history
  routes: [
    { component: TeamsList, path: '/teams' },
    { component: UsersList, path: '/users' },
    { component: TeamMembers, path: '/teams/:teamId' },
  ],
  linkActiveClass: 'active',
  // The above attribute is for the class to be added when a link/ tab is active to apply
  // by default the class name is link-router-active
});

const app = createApp(App);

app.use(router);

app.mount('#app');
