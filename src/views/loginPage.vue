<template>

    <section class="vh-100">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100" >
      <div class="col-12 col-md-8 col-lg-6 col-xl-5" >
        <div class="card shadow-2-strong" style="border-radius: 1rem; background-color:#222831">
          <div class="card-body p-5 text-center">

            <h3 class="mb-5">Sign in</h3>

            <div class="form-outline mb-4">
              <input v-model="form.email" type="email" id="typeEmailX-2" class="form-control form-control-lg" placeholder="Email"/>

            </div>

            <div class="form-outline mb-4">
              <input v-model="form.password" type="password" id="typePasswordX-2" class="form-control form-control-lg" placeholder="Password"/>

            </div>

            <!-- Checkbox -->
            <!-- <div class="form-check d-flex justify-content-start mb-4">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="form1Example3"
              />
            <label class="form-check-label" for="form1Example3">Remember password </label>
            </div> -->

            <button @click="logIn" class="btn btn-primary btn-lg btn-block" type="button">Login</button>

            <!-- <hr class="my-4"> -->

            <!-- <button class="btn btn-lg btn-block btn-primary" style="background-color: #dd4b39;" type="submit"><i class="fab fa-google me-2"></i> Sign in with google</button> -->


          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
<script>
import userAuth from '../firebase/auth'
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
    async logIn(){
      let isLogin = await userAuth('loginAdmin',this.form)
      if(isLogin){
        this.$router.push('/admin/admin-panel')
      }
      else{
        console.log(isLogin);
      }
    }
  }
}
</script>

<style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');

    section {
        font-family: 'Roboto', sans-serif;
        background-color: #393E46;

    }

        * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        color: #eee;
    }

</style>