<template>
    <div>
        <topbar></topbar>
        <sidebar></sidebar>
    </div>
</template>

<script>
import useAuth from '../firebase/auth'
import {auth} from '../firebase/config'
import Sidebar from './components/sidebar.vue'
import topbar from './components/topbar.vue'
export default {
    components: { topbar, Sidebar },
    setup() {
        
    },
    methods:{
        signIn(){
            useAuth()
        }
    },
    mounted(){
        setTimeout(()=>{
            console.log(auth.currentUser);
        },5000)
        
    }
}
</script>