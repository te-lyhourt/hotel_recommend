import {createRouter,createWebHistory} from 'vue-router'
import homePage from '../views/homePage'
const routes=[
    {
        path:'/',
        name:'HomePage',
        component:homePage
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
});
export default router;