import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue';

import LogIn from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'
import Home from './components/Home.vue'
import Account from './components/Account.vue'
import Inventario from './components/Inventario.vue'
 import Farmacia from './components/Farmacia.vue'


const routes = [{
        path: '/',
        name: 'root',
        component: App
    },
    {
        path: '/user/logIn',
        name: "logIn",
        component: LogIn
    },
    {
        path: '/user/signUp',
        name: "signUp",
        component: SignUp
    },
    {
        path: '/user/home',
        name: "home",
        component: Home
    },
    {
        path: '/user/account',
        name: "account",
        component: Account
    },
    {
        path: '/user/inventario',
        name: "inventario",
        component: Inventario
    },
    {
        path: '/user/farmacia',
        name: "farmacia",
        component: Farmacia
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;