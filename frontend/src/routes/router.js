import MainPage from "@/pages/MainPage.vue";
import UsersPage from "@/pages/UsersPage.vue";
import UserItemPage from "@/pages/UserItemPage.vue";
import RegistrationPage from "@/pages/RegistrationPage.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {path: "/", component: MainPage},
    {path: "/users", component: UsersPage},
    {path: "/users/:userId", component: UserItemPage},
    {path: "/register", component: RegistrationPage},
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;