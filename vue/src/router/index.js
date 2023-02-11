import { createRouter, createWebHistory } from 'vue-router'
//auth sectuin
import AuthLayout from '../components/AuthLayout.vue'
import Register from '../views/auth/Register.vue'
//import ResetPassword from '../views/auth/ResetPassword.vue'
import Login from '../views/auth/Login.vue'



//frontend
import AppMaster from '../components/AppMaster.vue'
import HomePage from '../views/MainPage.vue'
import Operators from '../views/operators/Operators.vue'
import OperatorDetail from '../views/operators/Detail.vue'
import Ticket from '../views/tickets/Tickets.vue'
import Process from '../views/order/Process.vue'
import Checkout from '../views/order/OrderCheckout.vue'
import Blog from '../views/blog/Blog.vue'
import AboutUs from '../views/aboutus/AboutUs.vue'
const routes = [{
        path: '/',
        name: 'app',
        component: AppMaster,
        children: [{
                path: '/home',
                name: 'app.home',
                component: HomePage,
                // BeforeEach: ((to, from, next) => {
                //     console.log(from);
                //     console.log(to);
                //     if (from.name == 'app.home') {
                //         next({ name: 'Ticket' })
                //     } else {
                //         next({ name: 'app.home' })
                //     }

                // })

            },
            {
                path: '/tickets/:f/:t/:d',
                name: 'app.tickets',
                component: Ticket
            },
            {
                path: '/seats/:ticketCode',
                name: 'app.seats',
                component: Process
            },
            {
                path: '/checkout/:ticketId',
                name: 'app.checkout',
                component: Checkout
            },


            {
                path: '/operators',
                name: 'app.operators',
                component: Operators
            },
            {
                path: '/operators/:operator',
                name: 'app.operators.detail',
                component: OperatorDetail
            },
            {
                path: '/blog',
                name: 'app.blog',
                component: Blog
            },
            {
                path: '/about-us',
                name: 'app.about-us',
                component: AboutUs
            },


        ]
    },
    {
        path: '/auth',
        name: 'auth',
        component: AuthLayout,
        children: [{
                path: '/login',
                name: 'auth.login',
                component: Login
            },
            {
                path: '/register',
                name: 'auth.register',
                component: Register

            },
            // {
            //     path: '/reset/password',
            //     name: 'resetPassword',
            //     component: ResetPassword
            // }
        ]
    },
    {
        path: '/:pathMatch(.*)',
        name: 'notfound',
        component: HomePage,
    }



];


const router = createRouter({
    history: createWebHistory(),
    routes
});

// router.beforeEach((to, from, next) => {
//     if (to.name == 'app.home') {
//         next({ name: 'Ticket' })
//     } else {
//         next({ name: 'app.home' })
//     }

// });


export default router;