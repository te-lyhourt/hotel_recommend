<template>
    <div id="loginAdmin">
        <div class="container p-5">
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input v-model="form.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input v-model="form.password" type="password" class="form-control" id="exampleInputPassword1">
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button @click="loginAdmin" type="button" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
    
</template>

<script>
import useAuth from '../firebase/auth'
export default {
    data(){
        return{
            form:{
                email:null,
                password:null,
            }
        }
    },
    setup() {
        
    },
    methods:{
        loginAdmin(){
            let accept = useAuth('loginAdmin',this.form)
            if(accept){
                this.$router.push('/admin/dashboard')
            }
        }   
    }
}
</script>