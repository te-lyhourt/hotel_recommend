<template >
  <div class="topbar">
    <div class="left">
      <logo></logo>
      <input type="text" class="search">
    </div>
    <div class="right">
      <!-- <div v-if="isLogin" class="login">
        <profile :src="user.photoURL" />
        <button class="text-gray-400 hover:text-white" @click="signOut">
          Sign Out
        </button>
      </div>

      <button v-else @click="signIn">
        Sign in
      </button> -->
    </div>



  </div>
</template>
<script>
import logo from "./logo.vue";

// import Profile from './profile.vue';
// export default {
//   setup() {
//     const { user, isLogin, signOut, signIn } = useAuth()
//     return { user, isLogin, signOut, signIn }
//   }
// }

export default {
  components: { 
    logo ,
    // Profile
  },
};
</script>
<style scoped>
.topbar {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 48px;
  background-color: #222831;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.left{
  display: flex;
  justify-content: space-between;
}
.search{
  height: 30px;
}
</style>