import {createRouter,createWebHistory} from 'vue-router'
import homePage from '../views/homePage'
import DetailPage from '../views/DetailPage.vue'
import loginAdmin from '../views/loginAdmin.vue'
import createPage from '../views/createPage.vue'
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
    {
        path:'/admin/login',
        name:'loginAdmin',
        component:loginAdmin
    },

    {
        path: '/create-page',
        name: 'createPage',
        component:createPage
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
});
export default router;