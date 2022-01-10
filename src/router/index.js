import {createRouter,createWebHistory} from 'vue-router'
import homePage from '../views/homePage'
import DetailPage from '../views/DetailPage.vue'
import CreatePage from '../views/createPage.vue'
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
        path: '/create-page',
        name: 'createPage',
        component: CreatePage
    },

]

const router = createRouter({
    history:createWebHistory(),
    routes
});
export default router;