<template>
  <div>
    <topbar
      @userLogin="getUser"
      @userLogout="removeUser"
      :userPass="user"
    ></topbar>
    <div class="px-5">
      <div>
        <span id="title">
          <i class="white-text" style="font-size: 40px">{{
            listHotel && listHotel.hotelName
          }}</i>
        </span>
      </div>

      <div class="mt-5">
        <div class="row">
          <!-- room types -->
          <div class="col-12 col-sm-12 col-md-11 col-lg-4 col-xl-4 mx-auto">
            <div class="card px-4 py-4 room-type-card">
              <div class="text-center">
                <span class="text-14"> Room Types </span>
              </div>
              <hr style="height: 2px" />
              <div>
                <div class="row">
                  <div class="col-6">
                    <span class="text-14">Types</span>
                  </div>
                  <div class="col-6">
                    <span class="text-14">Prices</span>
                  </div>
                </div>
              </div>
              <div class="mt-3"></div>
              <!-- room type items -->
              <div
                v-for="type in listHotel && listHotel.roomTypes"
                :key="type.bed"
              >
                <div class="row">
                  <div class="col-6">
                    <span class="text-14">{{ type.bed }} Bed</span>
                  </div>
                  <div class="col-6">
                    <span class="text-14">{{ type.price }}$</span>
                  </div>
                </div>
              </div>

              <!-- end room type items -->
            </div>
          </div>
          <!-- end room types -->

          <!-- images -->
          <div
            class="col-12 col-sm-12 col-md-11 col-lg-8 col-xl-8 mx-auto mt-2"
            :class="{ 'mt-4': imageMargin }"
          >
            <div class="row">
              <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
                <img
                  :src="listHotel && listHotel.images[0]"
                  class="mainimage"
                  alt=""
                />
              </div>
              <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                <div class="my-1">
                  <img
                    :src="listHotel && listHotel.images[1]"
                    style="width: 100%; height: 100%; padding: 0"
                    alt=""
                  />
                </div>
                <div class="my-1">
                  <img
                    :src="listHotel && listHotel.images[2]"
                    style="width: 100%; height: 100%; padding: 0"
                    alt=""
                  />
                </div>
                <div class="my-1">
                  <img
                    :src="listHotel && listHotel.images[3]"
                    style="width: 100%; height: 100%; padding: 0"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- end images -->
        </div>
      </div>

      <!-- services -->
      <div id="services" class="mt-5 room-type-card card px-4 py-4">
        <div class="text-center">
          <span class="text-14"> Services </span>
        </div>

        <hr style="height: 2px" />

        <div class="row">
          <div
            class="col-2 mx-auto"
            v-if="listHotel && listHotel.services.free_wifi"
          >
            <div class="text-center">
              <img
                :src="wifiImage"
                alt="wifi"
                style="width: 41px; height: 33px"
              />
              <div class="text-center mt-3">
                <span class="text-14">Free Wifi</span>
              </div>
            </div>
          </div>

          <div
            class="col-2 mx-auto"
            v-if="listHotel && listHotel.services.parking"
          >
            <div class="text-center">
              <img
                :src="parkingImage"
                alt="wifi"
                style="width: 41px; height: 33px"
              />
              <div class="text-center mt-3">
                <span class="text-14">Parking</span>
              </div>
            </div>
          </div>

          <div class="col-2 mx-auto" v-if="listHotel && listHotel.services.spa">
            <div class="text-center">
              <img
                :src="spaImage"
                alt="wifi"
                style="width: 41px; height: 33px"
              />
              <div class="text-center mt-3">
                <span class="text-14">Spa</span>
              </div>
            </div>
          </div>

          <div
            class="col-2 mx-auto"
            v-if="listHotel && listHotel.services.pool"
          >
            <div class="text-center">
              <img
                :src="swimImage"
                alt="wifi"
                style="width: 41px; height: 33px"
              />
              <div class="text-center mt-3">
                <span class="text-14">Swiming Pool</span>
              </div>
            </div>
          </div>

          <div
            class="col-2 mx-auto"
            v-if="listHotel && listHotel.services.fppd"
          >
            <div class="text-center">
              <img
                :src="foodImage"
                alt="wifi"
                style="width: 41px; height: 33px"
              />
              <div class="text-center mt-3">
                <span class="text-14">Food</span>
              </div>
            </div>
          </div>

          <div class="col-2 mx-auto" v-if="listHotel && listHotel.services.gym">
            <div class="text-center">
              <img
                :src="gymImage"
                alt="wifi"
                style="width: 41px; height: 33px"
              />
              <div class="text-center mt-3">
                <span class="text-14">Gym</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end services -->

      <!-- About -->
      <div id="services" class="mt-3 room-type-card card px-4 py-4">
        <div class="text-left">
          <span class="text-24"> About </span>
        </div>

        <hr style="height: 2px" />

        <div>
          <span class="text-14">{{ listHotel && listHotel.about }}</span>
        </div>
      </div>
      <!-- end about -->

      <!-- Contact & location -->
      <div id="contactandlocation" class="mt-3">
        <div class="row" style="background: #222830; border-radius: 10px">
          <div
            class="col-12 col-sm-12 col-md-11 col-lg-7 col-xl-7 mx-auto mt-2"
          >
            <div class="card room-type-card px-4 py-4">
              <div class="text-left">
                <span class="text-24"> Contact Information </span>
              </div>

              <hr style="height: 2px" />

              <div class="my-2">
                <span class="text-14"
                  >Address: 3 No , 270 streets, Siem Reab , Cambodia</span
                >
              </div>
              <div class="my-2">
                <span class="text-14"
                  >Phone: {{ listHotel && listHotel.contact }}</span
                >
              </div>
              <div class="my-2">
                <span class="text-14"
                  >website :
                  <a :href="listHotel && listHotel.website">{{
                    listHotel && listHotel.website
                  }}</a></span
                >
              </div>
            </div>
          </div>

          <div
            class="col-12 col-sm-12 col-md-11 col-lg-5 col-xl-5 mx-auto comment-box"
          >
            <div class="card room-type-card px-4 py-4" style="height: 400px">
              <div class="text-left">
                <span class="text-24"> Location </span>
              </div>
              <hr style="height: 2px" />
              <div>
                <iframe
                  :src="listHotel && listHotel.location"
                  width="100%"
                  height="300"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end contact & location -->

      <!-- rates & reviews -->
      <div class="mt-3">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-11 col-lg-4 col-xl-4 mx-auto">
            <div class="card room-type-card px-4 py-4">
              <div class="text-left">
                <span class="text-24"> {{listHotel && listHotel.rating.rateNum}} Rates </span>
              </div>
              <hr style="height: 2px" />

              <div>
                <div class="row">
                  <div class="col-3 mx-auto">
                    <span class="text-14">5 stars</span>
                  </div>
                  <div class="col-6 mt-1">
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
 :style="stars_5"
                        :aria-valuenow="listHotel && listHotel.rating.stars_5"
                        aria-valuemin="0"
                        :aria-valuemax="listHotel && listHotel.rating.rateNum"
                      ></div>
                    </div>
                  </div>
                  <div class="col-3 mx-auto">
                    <div>
                      <span class="text-14">{{listHotel && listHotel.rating.stars_5}}</span>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-3 mx-auto">
                    <span class="text-14">4 stars</span>
                  </div>
                  <div class="col-6 mt-1">
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        :style="stars_4"
                        :aria-valuenow="listHotel && listHotel.rating.stars_4"
                        aria-valuemin="0"
                        :aria-valuemax="listHotel && listHotel.rating.rateNum"
                      ></div>
                    </div>
                  </div>
                  <div class="col-3 mx-auto">
                    <div>
                      <span class="text-14">{{listHotel && listHotel.rating.stars_4}}</span>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-3 mx-auto">
                    <span class="text-14">3 stars</span>
                  </div>
                  <div class="col-6 mt-1">
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        :style="stars_3"
                        :aria-valuenow="listHotel && listHotel.rating.stars_3"
                        aria-valuemin="0"
                        :aria-valuemax="listHotel && listHotel.rating.rateNum"
                      ></div>
                    </div>
                  </div>
                  <div class="col-3 mx-auto">
                    <div>
                      <span class="text-14">{{listHotel && listHotel.rating.stars_3}}</span>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-3 mx-auto">
                    <span class="text-14">2 stars</span>
                  </div>
                  <div class="col-6 mt-1">
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        :style="stars_2"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div class="col-3 mx-auto">
                    <div>
                      <span class="text-14">{{listHotel && listHotel.rating.stars_2}}</span>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-3 mx-auto">
                    <span class="text-14">1 stars</span>
                  </div>
                  <div class="col-6 mt-1">
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        :style="stars_1"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div class="col-3 mx-auto">
                    <div>
                      <span class="text-14">{{listHotel && listHotel.rating.stars_1}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-12 col-md-11 col-lg-8 col-xl-8 mx-auto comment-box">
            <div class="card room-type-card px-4 py-4">
              <!-- user never write any comment or not yet log in-->
              <div class="row" v-if="!userRating">
                <div class="comment-top">
                  <div class="profile">
                    <div class="col-1">
                      <img
                        v-if="user"
                        :src="user && user.photoURL"
                        alt="..."
                        class="rounded-circle"
                        style="width: 55px"
                      />
                      <img
                        v-else
                        :src="wifiImage"
                        alt="..."
                        class="rounded-circle"
                        style="width: 55px"
                      />
                    </div>
                    <div class="col-11 username">
                      <div v-if="user">{{ user.displayName }}</div>
                      <div v-else>Name</div>
                      <!-- rating -->

                      <div class="star-container">
                        <a
                          v-for="(star, index) in stars"
                          :key="index"
                          @click="hovorStar(star)"
                          id="star"
                        >
                          <i class="bi bi-star"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-11">
                  <textarea
                    class="form-control"
                    aria-label="Comment"
                    placeholder="Comment ..."
                    style="
                      border-radius: 10px;
                      color: white;
                      background-color: #00adb5;
                      border: none;
                    "
                    rows="3"
                    v-model="comment"
                  ></textarea>
                  <div class="mt-3">
                    <button
                      class="btn btn-sm comment-button"
                      @click="sendRating()"
                    >
                      Send
                    </button>
                    <button class="btn ml-1 btn-sm comment-button">
                      Clear
                    </button>
                  </div>
                  <hr style="height: 2px" />
                </div>
              </div>

              <!-- user have comment -->
              <div class="row" v-else>
                <div class="comment-top">
                  <div class="profile">
                    <div class="col-1">
                      <img
                        v-if="user"
                        :src="user && user.photoURL"
                        alt="..."
                        class="rounded-circle"
                        style="width: 55px"
                      />
                    </div>
                    <div class="col-11 username">
                      <div v-if="user">{{ user.displayName }}</div>
                      <!-- rating -->

                      <div class="star-container">
                        <a
                          v-for="n in userRating.data.stars"
                          :key="n"
                          id="star"
                        >
                          <i class="bi bi-star-fill"></i>
                        </a>
                        <a
                          v-for="n in 5 - userRating.data.stars"
                          :key="n"
                          id="star"
                        >
                          <i class="bi bi-star"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-11">
                  <p>
                    <i>{{ userRating && userRating.data.comments }} </i>
                  </p>
                  <div class="mt-3">
                    <button
                      class="btn btn-sm comment-button"
                      @click="sendRating()"
                    >
                      Edite
                    </button>
                    <button class="btn ml-1 btn-sm comment-button">
                      Delete
                    </button>
                  </div>
                  <hr style="height: 2px" />
                </div>
              </div>
              <!-- load Comment -->
              <div class="row" v-for="rate in rating" :key="rate.uid">
                <div class="col-1">
                  <img
                    :src="rate && rate.data.photo"
                    alt="..."
                    class="rounded-circle"
                    style="width: 40px"
                  />
                </div>
                <div class="col-11">
                  <h5>
                    <i> {{ rate && rate.data.name }} </i>
                  </h5>
                  <!-- rating -->

                  <div class="star-container" style="font-size: 10px">
                    <a v-for="n in rate.data.stars" :key="n" id="star">
                      <i class="bi bi-star-fill"></i>
                    </a>
                    <a v-for="n in 5 - rate.data.stars" :key="n" id="star">
                      <i class="bi bi-star"></i>
                    </a>
                  </div>
                </div>
                <p>
                  <i>{{ rate && rate.data.comments }} </i>
                </p>
              </div>
              <!-- end comment -->
            </div>
          </div>
        </div>
      </div>
      <!-- end rates & reviews -->
    </div>
  </div>
</template>

<script>
import listOneHotelByID from "../firebase/listOneHotel";
import listRating from "../firebase/listRating";
import userRate from "../firebase/userRate";
import topbar from "./components/topbar.vue";
import rating from "../firebase/rating";
import userAuth from "../firebase/auth";
import { auth } from "../firebase/config";

export default {
  name: "DetailPage",
  components: { topbar },
  data: () => ({
    wifiImage: require("../assets/detail_page/wifi.png"),
    parkingImage: require("../assets/detail_page/parking.png"),
    spaImage: require("../assets/detail_page/spa.png"),
    swimImage: require("../assets/detail_page/swim.png"),
    foodImage: require("../assets/detail_page/food.png"),
    gymImage: require("../assets/detail_page/gym.png"),
    imageMargin: null,
    listHotel: null,
    user: null,
    stars: [1, 2, 3, 4, 5],
    rate: 0,
    comment: null,
    rating: null,
    userRating: null,
    stars_5 : null,
    stars_4 : null,
    stars_3 : null,
    stars_2 : null,
    stars_1 : null,
  }),

  created() {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 992) this.imageMargin = true;
      else this.imageMargin = false;
    });
  },
  computed: {
    router() {
      return this.$route.params.id;
    },
  },
  async mounted() {
    this.listHotel = await listOneHotelByID(this.router);
    this.rating = await listRating(this.listHotel.uid);
    if(this.listHotel.rating.length!=0){
      let total = this.listHotel.rating.rateNum
      let rating = this.listHotel.rating
      this.stars_5 = "width:"+(rating.stars_5 /total)*100+'%'
      this.stars_4 = "width:"+(rating.stars_4 /total)*100+'%'
      this.stars_3 = "width:"+(rating.stars_3 /total)*100+'%'
      this.stars_2 = "width:"+(rating.stars_2 /total)*100+'%'
      this.stars_1 = "width:"+(rating.stars_1 /total)*100+'%'
    }
  },
  watch: {
    user() {
      if (this.user != null) {
        let data = userRate(this.user.uid, this.rating);
        this.userRating = data.userRate;
        this.rating = data.rating;
      }
    },
  },
  methods: {
    async sendRating() {
      let user_id;
      if (this.user == null) {
        this.isLogin = await userAuth("login");
        this.user = auth.currentUser;
      }
      user_id = this.user.uid;
      let data = await rating(
        parseInt(this.rate),
        this.listHotel.uid,
        user_id,
        this.comment,
        this.user.photoURL,
        this.user.displayName
      );
      console.log(data);
    },
    getUser(value) {
      this.user = value;
    },
    removeUser() {
      this.user = null;
    },
    hovorStar(num) {
      const stars = document.querySelectorAll("#star");
      for (let i = 0; i < 5; i++) {
        stars[i].firstElementChild.classList.remove("bi-star-fill");
        stars[i].firstElementChild.classList.add("bi-star");
      }
      for (let i = 0; i < num; i++) {
        stars[i].firstElementChild.classList.add("bi-star-fill");
        stars[i].firstElementChild.classList.remove("bi-star");
      }
      this.rate = num;
    },
  },
};
</script>

<style scoped>
#title {
  font-family: "Roboto", sans-serif;
  font-size: 26px;
}

.text-14 {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: bold;
  font-style: italic;
}
.text-24 {
  font-family: "Roboto", sans-serif;
  font-size: 22px;
  font-weight: bold;
  font-style: italic;
}

.room-type-col {
  padding-right: 50px;
}

.room-type-card {
  border-radius: 10px;
  background-color: #222831;
  color: white;
  height: 100%;
}

.px-5 {
  margin: 0 45px;
  margin-top: 40px;
}
.mainimage {
  width: 100%;
  height: 400px;
}

.comment-top {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}
.profile {
  display: flex;
}
.username {
  display: flex;
  margin-left: 15px;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  font-weight: bold;
  font-style: italic;
  flex-direction: column;
  justify-content: flex-start;
}
.star-container {
  display: flex;
  font-size: 20px;
}
.comment-button {
  width: 75px;
  font-size: 15px;
  color: white;
  background-color: #00adb5;
  white-space: nowrap;
  border-radius: 10px;
  margin-right: 10px;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  font-weight: bold;
  font-style: italic;
}
.comment-box{
  margin-top: 10px;
}
</style>
