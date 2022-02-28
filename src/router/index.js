import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';
import Home from '../views/home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        // redirect: '',
        component: Home,
    },
    {
        path: '/kalendar',
        name: 'Kalendar',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/kalendar.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    // base: process
    scrollBehavior(to, from, savedPosition) {
        console.log('from ', from);
        console.log('to ', to, typeof to);
        console.log('savedPosition ', savedPosition);
        if (to.hash) {
            return {
                selector: to.hash,
                behavior: 'smooth',
                offset: { x: 0, y: 81 },
            };
        } else {
            return {
                behavior: 'smooth',
                offset: { x: 0, y: 0 },
            };
        }
    },
    routes,
});

export default router;

// import Homepage from './components/homepage.vue';
// import Kalendar from './components/kalendar.vue';

// export default [
//     { path: '/', component: Homepage },
//     { path: '/kalendar', component: Kalendar },
// ];
