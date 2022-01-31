<template>
  <div>
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
        </div>
        <div class="navbar-menu" id="open-navbar1">
          <ul class="navbar-nav">
            <li @click="logOut" class="logout">
              <i class="fas fa-sign-out-alt"></i>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="background1">
      <div class="container">
        <form id="formHotel">
          <p class="title">Create/Update Hotel Form</p>
          <div class="form-container">
            <div class="col-50">
              <label for="fname"> Hotel Name</label>
              <input
                v-model="form.hotelName"
                type="text"
                id="fname"
                name="fname"
                placeholder="Example hotel name"
              />
              <label for="DOB"> Date of Build</label>
              <input
                v-model="form.dateOfBuild"
                type="date"
                id="DOB"
                class="w-100 p-3 mb-2"
                name="DOB"
                style="background-color: #00adb5"
              />
              <label for="website"> Website</label>
              <input
                v-model="form.website"
                type="text"
                id="website"
                name="website"
                placeholder="www.example-hotel.com"
              />
              <label for="province"> Province</label>
              <select
                v-model="form.province"
                name="province"
                id="province"
                class="w-100 p-3 mb-2"
              >
                <option value="" hidden>Selected Province</option>
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

              <label> About</label>

              <textarea
                v-model="form.about"
                class="p-3 w-100"
                rows="5"
                placeholder="About Hotel"
                style="background-color: #00adb5"
              ></textarea>

              <label for="">Room type</label>

              <div
                v-for="i in roomType"
                :key="i"
                class="d-flex justify-content-between align-items-center mb-3"
              >
                <!-- <input :id="'Bed'+(i+1)" type="text" class="w-25" placeholder="Bed"> -->
                <input
                  type="text"
                  class="w-25 m-0"
                  placeholder="Room Name"
                  :id="'roomName' + i"
                />
                <select name="bed" :id="'Bed' + i" class="bed">
                  <option value="" hidden>Bed</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <input
                  :id="'Price' + i"
                  type="number"
                  class="w-25 m-0"
                  placeholder="Price in $"
                />
                <select
                  name="optional"
                  :id="'Optional' + i"
                  class="w-25"
                  style="padding: 9px"
                >
                  <option value="None">None</option>
                  <option value="Fan">Fan</option>
                  <option value="Air-Conditioner">Air-Conditioner</option>
                </select>
                <div style="cursor: pointer" @click="deletedRoom">
                  <i class="fas fa-times" style="font-size: 24px"></i>
                </div>
              </div>
              <div style="width: 20%">
                <button
                  @click="addMoreRoom"
                  type="button"
                  class="btn btn-info"
                  style="background-color: #00adb5"
                >
                  Add
                </button>
              </div>
            </div>

            <div class="col-50">
              <label for="cname">Location</label>
              <input
                v-model="form.location"
                type="text"
                id="cname"
                name="location"
                style="background-color: #00adb5"
                placeholder="Link"
              />
              <label for="ccnum">Contact</label>
              <input
                v-model="form.contact"
                type="text"
                class="p-3"
                id="ccnum"
                name="contact"
                style="background-color: #00adb5"
                placeholder="+855"
              />
              <label for="expmonth">Email</label>
              <input
                v-model="form.email"
                type="text"
                class="p-3"
                id="expmonth"
                name="email"
                style="background-color: #00adb5"
                placeholder="hotel@gmail.com"
              />
              <br />
              <label for="cname">Star</label>
              <select v-model="form.stars" name="star" class="w-100 p-3 mb-2">
                <option value="">None</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <!-- <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span> -->
              <div v-if="routes.includes('create')">
                <label for="cname">Images</label>
                <input
                  @change="uploadImgs"
                  type="file"
                  id="img"
                  name="img"
                  multiple
                />
              </div>
              <div v-else class="row mt-1" style="padding: 0 16px">
                <label for="" class="p-0">Images</label>
                <div class="image-container">
                  <img
                    v-for="(img, i) in form.images"
                    :key="i"
                    :src="img"
                    class="img-thumbnail"
                    alt=""
                  />
                </div>
              </div>

              <label for="">Service</label>
              <div class="service1">
                <div class="row" style="text-align: center">
                  <div class="column1">
                    <i class="fas fa-wifi"></i>
                    <p for="" class="service">Free WIFI</p>
                    <div class="container1">
                      <input
                        v-model="form.services.free_wifi"
                        type="checkbox"
                      />
                      <span class="checkmark"></span>
                    </div>
                  </div>

                  <div class="column1">
                    <i class="fad fa-spa"></i>
                    <p for="" class="service">Spa</p>
                    <div class="container1">
                      <input v-model="form.services.spa" type="checkbox" />
                      <span class="checkmark"></span>
                    </div>
                  </div>
                  <div class="column1">
                    <i class="fas fa-utensils-alt"></i>
                    <p class="service" for="">Food</p>
                    <div class="container1">
                      <input v-model="form.services.food" type="checkbox" />
                      <span class="checkmark"></span>
                    </div>
                  </div>
                </div>

                <div class="row" style="text-align: center">
                  <div class="column1">
                    <i class="far fa-parking"></i>
                    <p for="" class="service">Parking</p>
                    <div class="container1">
                      <input v-model="form.services.parking" type="checkbox" />
                      <span class="checkmark"></span>
                    </div>
                  </div>
                  <div class="column1">
                    <i class="far fa-swimmer"></i>
                    <p for="">Pool</p>
                    <div class="container1">
                      <input v-model="form.services.pool" type="checkbox" />
                      <span class="checkmark"></span>
                    </div>
                  </div>
                  <div class="column1">
                    <i class="fal fa-dumbbell"></i>
                    <p for="">Gym</p>
                    <div class="container1">
                      <input v-model="form.services.gym" type="checkbox" />
                      <span class="checkmark"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="inline1">
            <button
              v-if="routes.includes('create')"
              @click="addHotel"
              type="button"
              class="btn btn-info"
              style="background-color: #00adb5"
              :disabled="
                !form.hotelName ||
                !form.contact ||
                !form.location ||
                !form.dateOfBuild ||
                !form.province ||
                !form.about ||
                !form.urlImages.length > 0
              "
            >
              Confirm</button
            >&nbsp;
            <button
              v-else
              @click="updatedHotel"
              type="button"
              class="btn btn-info"
              style="background-color: #00adb5"
            >
              Update
            </button>
          </div>
        </form>
        <!-- <modelPopUp :message="isSuccess"></modelPopUp> -->
      </div>
    </div>
  </div>
</template>

<script>
import uploadImgs from "../firebase/uploadImg";
import modelHotel from "../firebase/form";
import resetData from "../firebase/resetForm";
import listOneHotelByID from "../firebase/listOneHotel";
import updatedHotel from "../firebase/updateHotel";
import userAuth from "../firebase/auth";
export default {
  data() {
    return {
      roomType: 1,
      isSuccess: null,
      form: {
        hotelName: null,
        location: null,
        dateOfBuild: null,
        contact: null,
        website: null,
        email: null,
        province: "",
        stars: "",
        about: null,
        hotelPrice: 0,
        roomTypes: [], // array
        services: {
          free_wifi: true,
          spa: true,
          food: true,
          parking: true,
          pool: true,
          gym: true,
        }, // map of object
        urlImages: null,
      },
    };
  },
  components: {},
  computed: {
    routes() {
      return this.$route.params.type;
    },
  },
  methods: {
    addMoreRoom() {
      this.roomType++;
    },
    deletedRoom() {
      this.roomType--;
    },
    uploadImgs(e) {
      this.form.urlImages = e.target.files;
    },
    async logOut() {
      let isLogout = await userAuth("signout");
      if (!isLogout) {
        this.$router.push("/login-page");
      }
    },
    async addHotel() {
      for (let i = 1; i <= this.roomType; i++) {
        let quantityOfBed = document.getElementById("Bed" + i).value;
        let price = document.getElementById("Price" + i).value;
        let optional = document.getElementById("Optional" + i).value;
        let roomName = document.getElementById("roomName" + i).value;
        var objectRoom = {
          bed: quantityOfBed,
          price: price,
          optional: optional,
          roomName: roomName,
        };
        if (i == 1) this.form.hotelPrice = price;
        this.form.roomTypes.push(objectRoom);
      }
      this.form.urlImages = await uploadImgs(
        this.form.hotelName,
        this.form.urlImages
      );
      console.log(this.form.roomTypes);
      if (
        this.form.urlImages.length > 0 &&
        Object.keys(this.form.roomTypes).length > 0
      ) {
        this.isSuccess = modelHotel(this.form);
        if (this.isSuccess) {
          this.form = resetData();
          document.getElementById("roomName1").value = null;
          document.getElementById("img").value = null;
          this.roomType = 1;
          document.getElementById("Bed1").value = null;
          document.getElementById("Price1").value = null;
          document.getElementById("Optional1").value = null;
          alert(this.isSuccess);
        }
      } else {
        alert("At least one room types!");
      }
    },
    async updatedHotel() {
      this.form.roomTypes = [];
      for (let i = 1; i <= this.roomType; i++) {
        let quantityOfBed = document.getElementById("Bed" + i).value;
        let price = document.getElementById("Price" + i).value;
        let optional = document.getElementById("Optional" + i).value;
        var objectRoom = {
          bed: quantityOfBed,
          price: price,
          optional: optional,
        };
        if (i == 1){
          this.form.hotelPrice = price;
        } 
        this.form.roomTypes.push(objectRoom);
      }
      let isSuccess = await updatedHotel(this.routes, this.form);
      alert(isSuccess);
    },
  },
  async mounted() {
    if (!this.routes.includes("create")) {
      this.form = await listOneHotelByID(this.routes);
      console.log(this.form);
      this.roomType = this.form.roomTypes.length;
      setTimeout(() => {
        this.form.roomTypes.forEach((data, i) => {
          document.getElementById("Bed" + (i + 1)).value = data.bed;
          document.getElementById("Price" + (i + 1)).value = data.price;
          document.getElementById("Optional" + (i + 1)).value = data.optional;
        });
      }, 200);
    }
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  color: #eee;
  font-size: 12px;
}

a {
  text-decoration: none;
}
body {
  font-family: "Roboto", sans - serif;
  overflow-x: hidden;
  background-color: #393e46;
}
.row {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.col-50 {
  -ms-flex: 50%;
  flex: 50%;
}
.col-75 {
  -ms-flex: 75%;
  flex: 75%;
}
.col-25,
.col-50 {
  padding: 0 16px;
  color: white;
}
input {
  width: 100%;
  margin-bottom: 5px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-color: #00adb5;
}
label {
  margin-bottom: 5px;
  margin-top: 10px;
  display: block;
  font-size: 14px;
  font-weight: 700;
  font-style: italic;
}
.icon-container {
  margin-bottom: 20px;
  padding: 7px 0;
  font-size: 24px;
}
.btn {
  background-color: #04aa6d;
  color: white;
  padding: 12px;
  margin: 10px 0;
  border: none;
  width: 100%;
  border-radius: 3px;
  cursor: pointer;
  font-size: 17px;
  border-radius: 23px;
}
.btn:hover {
  background-color: #45a049;
}
a {
  color: #2196f3;
}
hr {
  border: 1px solid lightgrey;
}
span.price {
  float: right;
  color: grey;
}
.title {
  text-align: center;
  color: white;
  margin-bottom: 15px;
  font-size: 25px;
  font-weight: 700;
}
.background1 {
  background-color: #393e46;
  padding: 20px;
}
.container {
  border-radius: 20px;
  background-color: #222831;
  padding: 30px;
}

.checked {
  color: #00adb5;
}

.inline {
  display: inline-block;
  margin-left: 50px;
  margin-top: 20px;
}
.inline1 button {
  display: inline-block;
  width: 20%;
}
.textarea1 {
  background-color: #00adb5;
  /*color: white*/
}
.service1 {
  border-radius: 20px;
  background-color: #00adb5;
}
.column1 {
  float: left;
  width: 33.33%;
  padding-top: 10px;
  /* height: 300px; /* Should be removed. Only for demonstration */
}
::placeholder {
  color: white;
}
/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other (also change the direction - make the "cart" column go on top) */
@media (max-width: 800px) {
  .row {
    flex-direction: column-reverse;
  }
  .col-25 {
    margin-bottom: 20px;
  }
}
select {
  background-color: #00adb5;
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

button {
  background-color: #00adb5;
  border-radius: 23px;
}
.column1 {
  font-size: 15px;
}
p.service {
  margin-top: 5px;
  font-size: 12px;
}
.logout {
  padding: 0px 3rem;
  cursor: pointer;
  font-size: 25px;
}
.bed {
  width: 63px;
  padding: 9px 0;
}
.image-container{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.form-container{
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.img-thumbnail {
  height: 108px;
  width: 100%;
}
</style>
