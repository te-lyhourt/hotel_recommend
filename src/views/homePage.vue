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