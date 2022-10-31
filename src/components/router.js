import Vue from "vue";
import Router from "vue-router";


Vue.use(Router);
let router = new Router({
    mode:"history",
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../components/1.vue'),
        }
    });
    export default router;