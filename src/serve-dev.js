import 'fontawesome-4.7/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/fonts/stylesheet.css';
import './assets/css/style.css';
import './assets/css/custom.css';
// import './assets/js/jquery.js';
// import './assets/js/jquery.sticky.js';
// import './assets/js/tipper.js';
// import './assets/js/jquery.fitvids.js';
// import './assets/js/jquery.smartmenus.min.js';
// import './assets/js/jquery.sticky-kit.min.js';
// import './assets/js/main.js';
import Vue from 'vue';
import Dev from '@/serve-dev.vue';
import Demo from '@/demo';
import PortalVue from 'portal-vue';
import router from './router';
// import VueRouter from 'vue-router';
// import Routes from './routes';

Vue.use(PortalVue);
// Vue.use(VueRouter);

Vue.config.productionTip = false;

// const router = new VueRouter({
//     routes: Routes,
//     mode: 'history',
// });

const isDev = process.env.NODE_ENV === 'development';

new Vue({
    router,
    render: h => h(isDev ? Dev : Demo),
}).$mount('#app');
