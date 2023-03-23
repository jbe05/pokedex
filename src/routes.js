import Homepage from "./Homepage.vue";
import {createRouter, createWebHistory} from "vue-router/dist/vue-router";
import DetailPage from "./DetailPage.vue";

const routes = [
    {
        path: '/',
        component: Homepage,
        name: 'Homepage'
    },
    {
        path: '/:pokemon',
        component: DetailPage,
        name: 'DetailPage'
    },
]

export const router = createRouter(
    {
        history: createWebHistory(),
        routes: routes,
    }
);
