import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFoundPage from './components/nav/NotFoundPage.vue';

const router = createRouter({
  history: createWebHistory(), // history keeps the track of the last page visited by the application. and use the browser built in feature to track the history
  routes: [
    { path: '/', redirect: '/teams' }, // This redirect will redirect to the particular route whenever / will be called
    { component: TeamsList, path: '/teams' }, // we can add alias: '<path>' to load the same page for that path as well.
    { component: UsersList, path: '/users' },
    { component: TeamMembers, path: '/teams/:teamId', props: true }, // props: true allows the params to be passed to the props along with the $route
    { path: '/:notFound(.*)', component: NotFoundPage }, // This is a dynamic route to redirect to a 404 page, :notFound can be rename as anything
  ],
  linkActiveClass: 'active',
  // The above attribute is for the class to be added when a link/ tab is active to apply
  // by default the class name is link-router-active
});

const app = createApp(App);

app.use(router);

app.mount('#app');
