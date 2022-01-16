<template>
    <div>
        <topbar></topbar>
        <div class="content">
            <sidebar></sidebar>
            <hotelRow></hotelRow>
        </div>

    </div>
</template>

<script>
import userAuth from '../firebase/auth'
import {auth} from '../firebase/config'
import Sidebar from './components/sidebar.vue'
import topbar from './components/topbar.vue'
import hotelRow from './components/hotelRow'

export default {
    data(){
        return{
            isLogin:false
        }
    },
    components: { topbar, Sidebar ,hotelRow},
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
        async signin(){
            this.isLogin = await userAuth('login')
        }
    },
    mounted(){
        setTimeout(()=>{
            console.log(auth.currentUser);
        },2000)
        
    }
}
</script>
<style scoped>
.content{
    display: flex;
    justify-content: center;
}
</style>