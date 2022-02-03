import {createRouter,createWebHistory} from 'vue-router'
import homePage from '../views/homePage'
import DetailPage from '../views/DetailPage.vue'
// import loginAdmin from '../views/loginAdmin.vue'
// import {auth} from '../firebase/config'
import adminPanel from '../views/adminPanel.vue'
import createPage from '../views/createPage.vue'
import loginPage from '../views/loginPage.vue'

const routes=[
    {
        path:'/',
        name:'HomePage',
        component:homePage
    },

    {
        path: '/detail-page/:id',
        name: 'DetailPage',
        component: DetailPage
    },
    // {
    //     path:'/admin',
    //     name:'loginAdmin',
    //     component:loginAdmin,
    // },
    {
        path:'/admin/admin-panel',
        name:'adminPanel',
        component:adminPanel,
        beforeEnter: (to, from, next) => {
            guard(to, from, next);
        }
    },
    {
        path: '/admin/:type',
        name: 'create/updatePage',
        component:createPage,
        beforeEnter: (to, from, next) => {
            guard(to, from, next);
        }
    },
    {
        path: '/admin',
        name: 'loginPage',
        component: loginPage
    }

]

const router = createRouter({
    history:createWebHistory(),
    routes
});
// router.beforeEach((to,from,next)=>{

//     setTimeout(()=>{
//         if(to.path.includes('admin')&&!auth.currentUser) {
//             next({path:'/login-page'})
//         }
//         else {
//             next()
//         }
//     },1000)
// })

const guard = function(to, from, next) {
    let userAdmin = localStorage.getItem('userAdmin')
    console.log(userAdmin)
    if(userAdmin){
        next();
    }
    else{
        window.location.href = "/admin";
    }
};

export default router;