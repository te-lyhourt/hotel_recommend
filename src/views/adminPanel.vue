<template>
  <body v-if="listHotels">
    <nav class="navbar">
      <div class="container-fluid">
        <div class="navbar-header" style="padding: 0 3rem">
          <a href="/" class="w-25">
            <img
              :src="require('../assets/loginlogo.png')"
              class="rounded float-start w-50"
              alt="..."
            />
          </a>
          <input
            v-model="hotelName"
            type="search"
            class="form-control rounded search-input"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            style="margin: 0 0 0 5rem"
          />
          <button
            @click="searchHotel"
            type="button"
            class="btn btn-primary search-btn button"
          >
            search
          </button>
          <div class="navbar-menu" id="open-navbar1">
            <ul class="navbar-nav">
              <li @click="logOut" class="logout">
                <i class="fas fa-sign-out-alt"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <div class="container-fluid table-container">
      <div class="top-btn">
        <a
          href="/admin/create-hotel"
          type="button"
          class="btn btn-primary button"
          style="background-color: #00adb5"
          ><i class="fas fa-plus"></i> Add Hotel</a
        >
        <!-- <button type="button" class="btn btn-primary pull-right"> Sort by</button> -->
        <!-- <button type="button" class="btn btn-primary pull-right button">
          <i class="fas fa-calendar-day"></i> Date
        </button> -->

        <select
          v-model="sortByProvince"
          id=""
          class="btn btn-primary pull-right text-start button"
          style="background-color: #00adb5; padding: 7px"
        >
          <option value="">All</option>
          <option value="01">Banteay Meanchey</option>
          <option value="02">Battambang</option>
          <option value="03">Kampong Cham</option>
          <option value="04">Kampong Chhnang</option>
          <option value="05">Kampong Speu</option>
          <option value="06">Kampong Thom</option>
          <option value="07">Kampot</option>
          <option value="08">Kandal</option>
          <option value="09">Koh Kong</option>
          <option value="10">Kratie</option>
          <option value="11">Mondul Kiri</option>
          <option value="12">Phnom Penh</option>
          <option value="13">Preah Vihear</option>
          <option value="14">Prey Veng</option>
          <option value="15">Pursat</option>
          <option value="16">Ratanak Kiri</option>
          <option value="17">Siemreap</option>
          <option value="18">Preah Sihanouk</option>
          <option value="19">Stung Treng</option>
          <option value="20">Svay Rieng</option>
          <option value="21">Takeo</option>
          <option value="22">Oddar Meanchey</option>
          <option value="23">Kep</option>
          <option value="24">Pailin</option>
          <option value="25">Tboung Khmum</option>
        </select>
      </div>

      <table class="table table-dark">
        <thead style="width: 100%">
          <tr style="font-weight: bold">
            <td>Hotel Name</td>
            <td>Price</td>
            <td>City/Province</td>
            <td>Rating</td>
            <td style="width: 20rem">Action</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="hotel in listHotels" :key="hotel.uid">
            <td>{{ hotel.data.hotelName }}</td>
            <td>{{ hotel.data.roomTypes[0].price }}$</td>
            <td v-if="hotel.data.province == '01'">Banteay Meanchey</td>
            <td v-if="hotel.data.province == '02'">Battambang</td>
            <td v-if="hotel.data.province == '03'">Kampong Cham</td>
            <td v-if="hotel.data.province == '04'">Kampong Chhnang</td>
            <td v-if="hotel.data.province == '05'">Kampong Speu</td>
            <td v-if="hotel.data.province == '06'">Kampong Thom</td>
            <td v-if="hotel.data.province == '07'">Kampot</td>
            <td v-if="hotel.data.province == '08'">Kandal</td>
            <td v-if="hotel.data.province == '09'">Koh Kong</td>
            <td v-if="hotel.data.province == 10">Kratie</td>
            <td v-if="hotel.data.province == 11">Mondul Kiri</td>
            <td v-if="hotel.data.province == 12">Phnom Penh</td>
            <td v-if="hotel.data.province == 13">Preah Vihear</td>
            <td v-if="hotel.data.province == 14">Prey Veng</td>
            <td v-if="hotel.data.province == 15">Pursat</td>
            <td v-if="hotel.data.province == 16">Ratanak Kiri</td>
            <td v-if="hotel.data.province == 17">Siem Reap</td>
            <td v-if="hotel.data.province == 18">Preah Sihanouk</td>
            <td v-if="hotel.data.province == 19">Stung Treng</td>
            <td v-if="hotel.data.province == 20">Svay Rieng</td>
            <td v-if="hotel.data.province == 21">Takeo</td>
            <td v-if="hotel.data.province == 22">Oddar Meanchey</td>
            <td v-if="hotel.data.province == 23">Kep</td>
            <td v-if="hotel.data.province == 24">Pailin</td>
            <td v-if="hotel.data.province == 25">Tboung Khmum</td>
            <td>{{ hotel.data.rating && hotel.data.rating.total }}</td>
            <td>
              <div class="btn-group">
                <a
                  :href="'/admin/' + hotel.uid"
                  class="btn btn-primary button"
                  style="background-color: #00adb5"
                  ><i class="fas fa-pen"></i> Edit</a
                >
                <button
                  @click="deletedHotel(hotel.uid)"
                  class="btn btn-primary button"
                >
                  <i class="fas fa-trash"></i> Delete
                </button>
              </div>
            </td>
          </tr>

          <!-- <tr>
                        <td>Sokha</td>
                        <td>10$</td>
                        <td>PP</td>
                        <td>4.5</td>
                        <td>
                            <div class="btn-group">
                                <a href="#" class="btn btn-primary"><i class="fas fa-pen"></i> Edit</a>
                                <a href="#" class="btn btn-primary"><i class="fas fa-trash"></i> Delete</a>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>Sokha</td>
                        <td>10$</td>
                        <td>PP</td>
                        <td>4.5</td>
                        <td>
                            <div class="btn-group">
                                <a href="#" class="btn btn-primary"><i class="fas fa-pen"></i> Edit</a>
                                <a href="#" class="btn btn-primary"><i class="fas fa-trash"></i> Delete</a>
                            </div>
                        </td>
                    </tr> -->
        </tbody>
      </table>

      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-end pull-right">
          <li class="page-item disabled">
            <a class="page-link">Previous</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </body>
</template>
<script>
import sortHotel from "../firebase/sortByProvince";
import listHotels from "../firebase/listHotel";
import deletedHotel from "../firebase/deletedHotel";
import userAuth from "../firebase/auth";
import searchedHotel from "../firebase/searchHotel";
export default {
  data() {
    return {
      listHotels: null,
      sortByProvince: "",
      hotelName: null,
    };
  },
  watch: {
    async sortByProvince() {
      let hotel = await sortHotel(this.sortByProvince);
      this.listHotels = hotel;
    },
  },
  methods: {
    async deletedHotel(id) {
      this.listHotels = await deletedHotel(id);
      console.log(this.listHotels);
    },
    async logOut() {
      console.log("hi");
      let isLogout = await userAuth("signout");
      if (!isLogout) {
        this.$router.push("/admin");
      }
    },
    async searchHotel() {
      let hotel = await searchedHotel(this.hotelName);
      this.listHotels = hotel;
    },
  },
  async mounted() {
    this.listHotels = await listHotels();
    console.log(this.listHotels);
  },
};
</script>
<style scoped>
/* * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  color: #eee;
} */

body {
  font-family: "Roboto", sans-serif;
  background-color: #393e46;
}

a {
  text-decoration: none;
}

.container {
  width: 1170px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
}
.navbar {
  padding: 0;
}
.navbar,
.navbar > .container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

@media (max-width: 768px) {
  .navbar,
  .navbar > .container {
    display: block;
  }
}

.navbar {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  background-color: #fff;
  padding: 1rem 1.15rem;
  border-bottom: 1px solid #eceef3;
  background-color: #222831;
  /* |----------------------------------- | Start navbar logo or brand etc.. |----------------------------------- */
  /* |----------------------------------- | Start navbar menu |----------------------------------- */
}

@media (min-width: 576px) {
  .navbar .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .navbar .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .navbar .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .navbar .container {
    max-width: 1140px;
  }
}

.navbar .navbar-header {
  display: flex;
  align-items: center;
}

@media (max-width: 768px) {
  .navbar .navbar-header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
  }
}

.navbar .navbar-header .navbar-toggler {
  cursor: pointer;
  border: none;
  display: none;
  outline: none;
}

@media (max-width: 768px) {
  .navbar .navbar-header .navbar-toggler {
    display: block;
  }
}

.navbar .navbar-header .navbar-toggler span {
  height: 2px;
  width: 22px;
  background-color: #929aad;
  display: block;
}

.navbar .navbar-header .navbar-toggler span:not(:last-child) {
  margin-bottom: 0.2rem;
}

.navbar .navbar-header > a {
  font-weight: 500;
  color: #3c4250;
}

.navbar .navbar-menu {
  display: flex;
  align-items: center;
  flex-basis: auto;
  flex-grow: 1;
}

@media (max-width: 768px) {
  .navbar .navbar-menu {
    display: none;
    text-align: center;
  }
}

.navbar .navbar-menu .navbar-nav {
  margin-left: auto;
  flex-direction: row;
  display: flex;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

@media (max-width: 768px) {
  .navbar .navbar-menu .navbar-nav {
    width: 100%;
    display: block;
    border-top: 1px solid #eee;
    margin-top: 1rem;
  }
}

.navbar .navbar-menu .navbar-nav > li > a {
  color: #3c4250;
  text-decoration: none;
  display: inline-block;
  padding: 0.5rem 1rem;
}

.navbar .navbar-menu .navbar-nav > li > a:hover {
  color: #66f;
}

@media (max-width: 768px) {
  .navbar .navbar-menu .navbar-nav > li > a {
    border-bottom: 1px solid #eceef3;
  }
}

.navbar .navbar-menu .navbar-nav > li.active a {
  color: #66f;
}

.navbar .navbar-menu .navbar-nav .navbar-dropdown .dropdown {
  list-style: none;
  position: absolute;
  top: 150%;
  left: 0;
  background-color: #fff;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  min-width: 160px;
  width: auto;
  white-space: nowrap;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  z-index: 99999;
  border-radius: 0.75rem;
  display: none;
}

@media (max-width: 768px) {
  .navbar .navbar-menu .navbar-nav .navbar-dropdown .dropdown {
    position: relative;
    box-shadow: none;
  }
}

.navbar .navbar-menu .navbar-nav .navbar-dropdown .dropdown li a {
  color: #3c4250;
  padding: 0.25rem 1rem;
  display: block;
}

.navbar .navbar-menu .navbar-nav .navbar-dropdown .dropdown.show {
  display: block !important;
}

.navbar .navbar-menu .navbar-nav .dropdown > .separator {
  height: 1px;
  width: 100%;
  margin-top: 9px;
  margin-bottom: 9px;
  background-color: #eceef3;
}

.navbar .navbar-dropdown {
  position: relative;
}

.navbar .navbar-header > a span {
  color: #66f;
}

.navbar .navbar-header h4 {
  font-weight: 500;
  font-size: 1.25rem;
}

@media (max-width: 768px) {
  .navbar .navbar-header h4 {
    font-size: 1.05rem;
  }
}

.button {
  background-color: #00adb5;
  font-size: 13px;
  margin-left: 10px;
}
.search-btn {
  margin-left: 30px;
  font-size: 15px;
}
.logout {
  padding: 0px 3rem;
  cursor: pointer;
  font-size: 25px;
  color: white;
}
.table-container {
  padding: 0 5rem;
  font-size: 15px;
}
.top-btn {
  padding-bottom: 1.5rem;
  margin: 20px 0px 10px;
}
.search-input {
  font-size: 15px;
}
</style>