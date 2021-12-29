<template>
    <div>
        <button @click="signIn" type="button">
            login
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