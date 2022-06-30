import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/HomeView.vue'

const routes = [
    {
        // path: "/", component: () => import("../views/HomeView.vue"),
        path: "/", component: Home,
    },
    {
        path: "/login", component: () => import("../views/LoginView.vue"),
    }, 
    {
        path: "/history", component: () => import("../views/HistoryView.vue"),
    },
    {
        path: "/shop", component: () => import("../views/ShopView.vue"),
    },
    {
        path: "/signup", component: () => import("../views/SignupView.vue"),
    },
    {
        path: "/new", component: () => import("../views/NewView.vue"),
    },
    {
        path: "/error", component: () => import("../views/ErrorView.vue"),
    }
]
export default createRouter({
    history: createWebHistory(),
    routes
});
