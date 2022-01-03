<template>
    <div>
        <button @click="signIn" type="button">
            login
        </button>
        <button @click="signout" type="button">
            signout
        </button>
    </div>
</template>

<script>
import useAuth from '../firebase/auth'
import {auth} from '../firebase/config'
export default {
    setup() {
        
    },
    methods:{
        signIn(){
            useAuth('login')
        },
        signout(){
            useAuth('signout')
        }
    },
    mounted(){
        setTimeout(()=>{
            console.log(auth.currentUser);
        },2000)
        
    }
}
</script>