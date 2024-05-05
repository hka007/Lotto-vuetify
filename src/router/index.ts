import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Eurojackpot from '../components/Eurojackpot.vue';  // Ensure you have this component
import Landingpage from '../components/Landingpage.vue';  // Ensure you have this component

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Landingpage',
    component: Landingpage,
  },
  {
    path: '/Eurojackpot',
    name: 'Eurojackpot',
    component: Eurojackpot,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
