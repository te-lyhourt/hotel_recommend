import {createRouter,createWebHistory} from 'vue-router'
import homePage from '../views/homePage'
import DetailPage from '../views/DetailPage.vue'
<<<<<<< HEAD
import CreatePage from '../views/createPage.vue'
=======
import loginAdmin from '../views/loginAdmin.vue'
>>>>>>> bef28ce2985bda87e013c9f30a0de9735c1935dd
const routes=[
    {
        path:'/',
        name:'HomePage',
        component:homePage
    },

    {
        path: '/detail-page',
        name: 'DetailPage',
        component: DetailPage
    },
<<<<<<< HEAD

    {
        path: '/create-page',
        name: 'createPage',
        component: CreatePage
    },

=======
    {
        path:'/admin/login',
        name:'loginAdmin',
        component:loginAdmin
    }
>>>>>>> bef28ce2985bda87e013c9f30a0de9735c1935dd
]

const router = createRouter({
    history:createWebHistory(),
    routes
});
export default router;