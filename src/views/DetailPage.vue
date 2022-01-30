<template>
  <div>
    <topbar></topbar>
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
            class="col-12 col-sm-12 col-md-11 col-lg-8 col-xl-8 mx-auto"
            :class="{ 'mt-4': imageMargin }"
          >
            <div class="row">
              <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
                <img
                  :src="listHotel && listHotel.images[0]"
                  style="width: 100%; height: 100%; padding: 0"
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
            <div class="card room-type-card px-4 py-4" >
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
            class="col-12 col-sm-12 col-md-11 col-lg-5 col-xl-5 mx-auto mt-2"
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
                <span class="text-24"> Rates and Reviews </span>
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
                        style="width: 65%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div class="col-3 mx-auto">
                    <div>
                      <span class="text-14">284</span>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-3 mx-auto">
                    <span class="text-14">5 stars</span>
                  </div>
                  <div class="col-6 mt-1">
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style="width: 65%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div class="col-3 mx-auto">
                    <div>
                      <span class="text-14">284</span>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-3 mx-auto">
                    <span class="text-14">5 stars</span>
                  </div>
                  <div class="col-6 mt-1">
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style="width: 65%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div class="col-3 mx-auto">
                    <div>
                      <span class="text-14">284</span>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-3 mx-auto">
                    <span class="text-14">5 stars</span>
                  </div>
                  <div class="col-6 mt-1">
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style="width: 65%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div class="col-3 mx-auto">
                    <div>
                      <span class="text-14">284</span>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-3 mx-auto">
                    <span class="text-14">5 stars</span>
                  </div>
                  <div class="col-6 mt-1">
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style="width: 65%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div class="col-3 mx-auto">
                    <div>
                      <span class="text-14">284</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-12 col-md-11 col-lg-8 col-xl-8">
            <div class="card room-type-card px-4 py-4">
              <div class="row">
                <div class="col-1">
                  <img
                    :src="wifiImage"
                    alt="..."
                    class="rounded-circle"
                    style="width: 55px"
                  />
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
                  ></textarea>
                  <div class="mt-3">
                    <button
                      class="btn btn-sm"
                      style="
                        color: black;
                        background-color: #00adb5;
                        border-radius: 10px;
                        margin-right: 10px;
                      "
                    >
                      Send
                    </button>
                    <button
                      class="btn ml-1 btn-sm"
                      style="
                        color: black;
                        background-color: #00adb5;
                        border-radius: 10px;
                      "
                    >
                      Clear
                    </button>
                  </div>
                  <hr style="height: 2px" />
                </div>
              </div>

              <!-- Comment -->
              <div class="row" style="padding-left: 70px">
                <div class="col-1">
                  <img
                    :src="wifiImage"
                    alt="..."
                    class="rounded-circle"
                    style="width: 40px"
                  />
                </div>
                <div class="col-11">
                  <h5>
                    <i> Name ABCDE </i>
                  </h5>
                  <p>
                    <i>
                      type and scrambled it to make a type specimen book. It has
                      survived not only five centuries, but also the leap into
                      electronic typesetting, remontent of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      h.
                    </i>
                  </p>
                  <button
                    class="btn btn-sm"
                    style="
                      color: black;
                      background-color: #00adb5;
                      border-radius: 10px;
                      margin-right: 10px;
                    "
                  >
                    Reply
                  </button>

                  <!-- reply comment -->
                  <div class="my-3">
                    <div class="row">
                      <div class="col-1">
                        <img
                          :src="wifiImage"
                          alt="..."
                          class="rounded-circle"
                          style="width: 40px"
                        />
                      </div>
                      <div class="col-11">
                        <h5>
                          <i> Name ABCDE </i>
                        </h5>
                        <p>
                          <i>
                            type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also
                            the leap into electronic typesetting, remontent of a
                            page when looking at its layout. The point of using
                            Lorem Ipsum is that it h.
                          </i>
                        </p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-1">
                        <img
                          :src="wifiImage"
                          alt="..."
                          class="rounded-circle"
                          style="width: 40px"
                        />
                      </div>
                      <div class="col-11">
                        <h5>
                          <i> Name ABCDE </i>
                        </h5>
                        <p>
                          <i>
                            type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also
                            the leap into electronic typesetting, remontent of a
                            page when looking at its layout. The point of using
                            Lorem Ipsum is that it h.
                          </i>
                        </p>
                      </div>
                    </div>
                  </div>
                  <!-- end reply comment -->
                </div>
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
import topbar from "./components/topbar.vue";
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
/* .px-5{
  margin: 50px 25px;
} */
.px-5 {
  margin: 0 45px;
  margin-top: 40px;
}
</style>
