import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import HomePage from '@/views/Home/index.vue';
import Default from '@/views/Home/Default.vue';
import SearchResults from '@/views/SearchResults/index.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    children: [
      {
        path: '/search/:phrase',
        name: 'Search',
        component: SearchResults,
        props: true,
      },
      {
        path: '/details/:id',
        name: 'Details',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Details/index.vue'),
        props: true,
      },
      {
        path: '*',
        name: 'All',
        component: Default,
        props: true,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
