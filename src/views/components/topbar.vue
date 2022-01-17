<template>
  <div class="top-bar">
    <nav class="mb-4 navbar navbar-expand-lg navbar-dark top">
      <div class="big-content">
        <div style="display:flex">
          <logo class="brand-image"></logo>
            <div class="nav-item saerch active">
              <search-bar
                @search="search"
                @cancel="cancel"
                :catID="catID"
                :searchVal="searchvalue"
              ></search-bar>
            </div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent-4"
            aria-controls="navbarSupportedContent-4"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>

        <div class="collapse navbar-collapse" id="navbarSupportedContent-4">
          <ul class="navbar-nav">

            <li class="nav-item icon active" v-if="!logIn">
              <a class="nav-link" href="/login"
                ><i
                  class="fas fa-sign-in-alt"
                  style="margin-right: 8px; font-size: 19px"
                ></i>
                ចូល</a
              >
            </li>
            <li class="nav-item icon" v-if="!logIn">
              <a class="nav-link" href="/signUp"
                ><i class="fas fa-edit" style="margin-right: 8px"></i>
                ចុះឈ្មោះ</a
              >
            </li>

            <!-- <li class="nav-item icon" v-if="logIn">
              <a class="nav-link" @click="goCart()">
                <div style="position: relative">
                  <div class="cart-number">
                    {{ cartNum }}
                  </div>
                  <i class="fas fa-shopping-cart" style="margin-right: 8px"></i>
                  កន្ត្រក
                </div>
              </a>
            </li> -->

            <!-- <li class="nav-item dropdown" v-if="logIn">
              <a
                class="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink-4"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                ><i class="fa fa-user" style="margin-right: 8px"></i> គណនី
              </a>
              <div
                class="dropdown-menu dropdown-menu-right dropdown-cyan"
                aria-labelledby="navbarDropdownMenuLink-4"
              >
                <a class="dropdown-item" @click="goUser()"
                  ><i
                    class="far fa-user-circle"
                    style="
                      font-size: 16px;
                      margin-right: 12px;
                      margin-left: 4px;
                    "
                  ></i
                  >គណនីរបស់អ្នក</a
                >
                <a
                  class="dropdown-item"
                  @click="goStore()"
                  v-if="store && isSeller"
                >
                  <i
                    class="fas fa-store"
                    style="
                      font-size: 16px;
                      margin-right: 12px;
                      margin-left: 4px;
                    "
                  ></i
                  >ហាងរបស់អ្នក</a
                >
                <a class="dropdown-item" @click="logout()"
                  ><i
                    class="bx bx-log-out"
                    style="font-size: 22px; margin-right: 6px"
                  ></i
                  >ចាកចេញពីគណនី</a
                >
              </div>
            </li> -->
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import logo from "./logo.vue";
import SearchBar from "./searchBar.vue";

export default {
//   props: ["searchVal", "catID"],
  components: {
    logo,
    SearchBar,
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
}
.top {
  display: flex;
  justify-content: center;
  min-height: 99px;
  background-color: #222831 !important;
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
.darken-grey-text {
  color: #2e2e2e;
}

.navbar .dropdown-menu a:hover {
  color: #616161 !important;
}
.darken-grey-text {
  color: #2e2e2e;
}
ul {
  margin: 0;
}

.ml-auto {
  margin-left: 10px !important;
}

input:focus {
  text-decoration: none !important;
  outline: none !important;
  border: none !important;
}
.navbar .dropdown-menu {
  left: 0;
  width: 10%;
}
.mb-4,
.my-4 {
  margin-bottom: 0 !important;
}
.cart-number {
  width: 18px;
  height: 18px;
  text-align: center;
  position: absolute;
  top: -18px;
  left: 5px;
  font-size: 12px;
  background: #e1251b !important;
  border-radius: 50%;
  border: solid 0.25px white;
}
.fa-shopping-cart {
  font-size: 19px;
}
/* .navbar-nav {

    width: 88%;
    margin: 0 auto;
} */
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
.brand-image {
  margin: 0 !important;
}

/* @media only screen and (max-width: 600px) {
  .brand-image {
    top: 0;
    width: 10px;
    left: 0;
    position: absolute;
  }
} */

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
</style>