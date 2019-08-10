import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import TaskCenter from './views/task-center.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/task-center',
      name: TaskCenter,
      component: TaskCenter,
    },
  ],
});
