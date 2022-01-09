<template>
    <div>
        <topbar></topbar>
        <div class="mt-5">
            <button @click="signout" class="btn btn-primary" type="button">signout</button>
        </div>
        asdasdqwe
    </div>
</template>

<script>
import userAuth from '../firebase/auth'
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