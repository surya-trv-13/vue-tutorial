import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFoundPage from './components/nav/NotFoundPage.vue';
import TeamFooter from './components/teams/TeamFooter.vue';
import UserFooter from './components/users/UserFooter.vue';

const router = createRouter({
  history: createWebHistory(), // history keeps the track of the last page visited by the application. and use the browser built in feature to track the history
  routes: [
    { path: '/', redirect: '/teams' }, // This redirect will redirect to the particular route whenever / will be called
    {
      name: 'teams',
      meta: {
        needAuth: true, // This is a meta data which can be access from whereever the route is being called and used
      },
      components: {
        default: TeamsList,
        footer: TeamFooter, // this can be added for the name as the router-view name and value as the component
      },
      path: '/teams',
      children: [
        {
          name: 'team-members',
          component: TeamMembers,
          path: ':teamId',
          props: true,
        },
      ], // all the children can be added to the path.
    }, // we can add alias: '<path>' to load the same page for that path as well.
    {
      components: { default: UsersList, footer: UserFooter },
      path: '/users',
      // Router level navigation Guard
      beforeEnter(to, from, next) {
        console.log(' user before enter', to, from);
        next();
      },
    },
    // { component: TeamMembers, path: '/teams/:teamId', props: true }, // props: true allows the params to be passed to the props along with the $route
    { path: '/:notFound(.*)', component: NotFoundPage }, // This is a dynamic route to redirect to a 404 page, :notFound can be rename as anything
  ],
  linkActiveClass: 'active',
  // The above attribute is for the class to be added when a link/ tab is active to apply
  // by default the class name is link-router-active
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition);

    // savedPosition only contains value when we click the back button of the browser
    // else we will scroll the page to top of the page
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

// navigation guard
router.beforeEach(function (to, from, next) {
  // To and From will show the route source and destination
  console.log('Global beforeEach:', to, from);

  if (to.meta.needAuth) {
    console.log('Need Auth or anything your needs');
    next();
  } else {
    next();
  }

  // Next will be called if we want to allow the router to navigate further
  next();

  // next(false); this will not allow the router to navigate

  // next({name: 'team-members', params:{teamId: 't2'}); this will be redirect to this added path only whatever the path it trying to navigate
});

router.afterEach(function (to, from) {
  console.log('Global afterEach:', to, from);
  // this is log, send data to analytics etc
});

export default router;
