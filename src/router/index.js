import {createRouter,createWebHistory} from 'vue-router'
import homePage from '../views/homePage'
import DetailPage from '../views/DetailPage.vue'
import loginAdmin from '../views/loginAdmin.vue'
import adminPanel from '../views/adminPanel.vue'
import createPage from '../views/createPage.vue'
import loginPage from '../views/loginPage.vue'
import {auth} from '../firebase/config'
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
        path:'/admin/admin-panel',
        name:'adminPanel',
        component:adminPanel
    },
    {
        path: '/admin/:type',
        name: 'create/updatePage',
        component:createPage
    },
    {
        path: '/login-page',
        name: 'loginPage',
        component: loginPage
    }

]

const router = createRouter({
    history:createWebHistory(),
    routes
});
router.beforeEach((to,from,next)=>{
    setTimeout(()=>{
        if(to.path.includes('admin')&&!auth.currentUser.email=='admin@admin.com') next({path:'/login-page'})
        else if(to.path.includes('login')&&auth.currentUser=='admin@admin.com') next({path:'/admin/admin-panel'})
        else next()
    },1000)
})
export default router;