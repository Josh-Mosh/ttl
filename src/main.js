import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import Admin from './admin.vue';
import Home from './home.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/admin', component: Admin },
  { path: '/home', component: Home }
];

const router = new VueRouter({
  routes // short for routes: routes
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
