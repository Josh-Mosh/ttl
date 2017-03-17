import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material';
import App from './app.vue';
import Admin from './admin.vue';
import Home from './home.vue';
import VueMoment from 'vue-moment';

Vue.use(VueRouter);
Vue.use(VueMaterial);
Vue.use(VueMoment);

const routes = [
  { path: '/', components: { default: Home } },
  { path: '/admin', component: Admin }
];

const router = new VueRouter({
  routes // short for routes: routes
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
