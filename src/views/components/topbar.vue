<template>
  <div class="top-bar">
    <div class="big-content">
      <div style="display: flex">
        <div class="container">
          <a class="brand" href="/">
            <img :src="logo" alt="band" class="logo" />
          </a>
        </div>
      </div>
      <div class="flex-center">
        <div class="saerch">
          <search-bar></search-bar>
        </div>
        <div class="" v-if="isLogin">
          <profile :src="user.photoURL" />
          <button class="filter-btn title" @click="signOut">
            Sign Out
          </button>
        </div>
        <div class="" v-else>
          <button class="filter-btn title" @click="signIn">Sign in</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import logo from "../../assets/loginlogo.png";
import SearchBar from "./searchBar.vue";
import profile from "./profile.vue";
import userAuth from "../../firebase/auth";
import { auth } from "../../firebase/config";

export default {
  data() {
    return {
      isLogin: false,
      user: null,
      logo: logo,
    };
  },
  components: {
    SearchBar,
    profile,
  },
  methods: {
    // signUp(){
    //     useAuth('signup')
    // },
    async signOut() {
      this.isLogin = await userAuth("signout");
    },
    async signIn() {
      this.isLogin = await userAuth("login");
      this.user = auth.currentUser;
      console.log(this.user);
    },
  },
  mounted() {
    this.user = auth.currentUser;
  },
};
</script>
<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
}
.navbar-toggler:focus {
  box-shadow: none;
}
.top-bar {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1000;
  background: #222831;
}
.top {
  display: flex;
  justify-content: center;
  min-height: 99px;
  background-color: #082032 !important;
}
.nav-item,
.nav-item.active {
  margin: 15px 0;
  font-size: 16px;
  white-space: nowrap;
}
.nav-link {
  font-size: 17px;
  display: flex !important;
  align-items: center;
}

.hm-gradient {
  background-image: linear-gradient(
    to top,
    #f3e7e9 0%,
    #e3eeff 99%,
    #e3eeff 100%
  );
}

input:focus {
  text-decoration: none !important;
  outline: none !important;
  border: none !important;
}

.mb-4,
.my-4 {
  margin-bottom: 0 !important;
}

.navbar-nav {
  width: 88%;
  margin: 0 auto;
}
.navbar-collapse {
  justify-content: flex-end;
}

@media (min-width: 992px) {
  .navbar-expand-lg .navbar-nav {
    flex-direction: row;
    align-items: center;
  }
}
@media only screen and (max-width: 992px) {
  .big-content {
    flex-direction: column;
  }
}

@media only screen and (max-width: 600px) {
  .brand-image {
    top: 0;
    width: 10px;
    left: 0;
    position: absolute;
  }
}

.saerch {
  margin-right: 20px !important;
}

.brand {
  color: white;
  font-size: 1.2rem;
  text-decoration: none;
  white-space: nowrap;
  align-items: center;
  display: flex;
  font-weight: 400;
}
.big-content {
  width: 88%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.container {
  width: 100%;
}

.logo {
  width: 70px;
}
</style>