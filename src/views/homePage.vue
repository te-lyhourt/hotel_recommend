<template>
    <div>
        <topbar></topbar>
        <sidebar></sidebar>
    </div>
</template>

<script>
import userAuth from '../firebase/auth'
import {auth} from '../firebase/config'
import Sidebar from './components/sidebar.vue'
import topbar from './components/topbar.vue'
export default {
    components: { topbar, Sidebar },
    setup() {
        
    },
    methods:{
        // signUp(){
        //     useAuth('signup')
        // },
        async signout(){
            let isSignout = await userAuth('signout')
            console.log(isSignout);
        },
    },
    mounted(){
        setTimeout(()=>{
            console.log(auth.currentUser);
        },2000)
        
    }
}
</script>