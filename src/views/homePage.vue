<template>
    <div>
        <topbar></topbar>
    </div>
</template>

<script>
import useAuth from '../firebase/auth'
import {auth} from '../firebase/config'
import topbar from './components/topbar.vue'
export default {
    components: { topbar },
    setup() {
        
    },
    methods:{
        // signUp(){
        //     useAuth('signup')
        // },
        signout(){
            useAuth('signout')
        },
        login(){
            useAuth('login')
        }
    },
    mounted(){
        setTimeout(()=>{
            console.log(auth.currentUser);
        },2000)
        
    }
}
</script>