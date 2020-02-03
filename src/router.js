import Vue from 'vue';
import Home from './views/Home.vue';
import { IonicVueRouter } from '@ionic/vue';

Vue.use(IonicVueRouter);

export default new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import(/* webpackChunkName: "about" */ './views/Dashboard.vue'),
      props: true
    },
    {
      path: '/forgot-password',
      name: 'forgot_password',
      component: () => import('./views/ForgotPassword.vue'),
      props: true
    },
    {
      path: '/login-mobile',
      name: 'login-mobile',
      component: () => import('./views/LoginMobile.vue'),
      props: true
    },
    {
      path: '/login-password',
      name: 'login-password',
      component: () => import('./views/LoginPassword.vue'),
      props: true
    }
  ]
});