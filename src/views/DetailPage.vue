<template>
  <div class="px-5">
    <div>
      <span id="title">
        <i>Hotels name is simply dummy text of the printing</i>
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
            <div>
              <div class="row">
                <div class="col-6">
                  <span class="text-14">1 Bed</span>
                </div>
                <div class="col-6">
                  <span class="text-14">50$</span>
                </div>
              </div>
            </div>
            <div>
              <div class="row">
                <div class="col-6">
                  <span class="text-14">2 Beds</span>
                </div>
                <div class="col-6">
                  <span class="text-14">50$</span>
                </div>
              </div>
            </div>
            <div>
              <div class="row">
                <div class="col-6">
                  <span class="text-14">3 Beds</span>
                </div>
                <div class="col-6">
                  <span class="text-14">50$</span>
                </div>
              </div>
            </div>
            <!-- end room type items -->
          </div>
        </div>
        <!-- end room types -->

        <!-- images -->
        <div class="col-12 col-sm-12 col-md-11 col-lg-8 col-xl-8 mx-auto" :class="{ 'mt-4': imageMargin }">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
              <img :src="hotel1" style="width: 100%; padding: 0" alt="" />
            </div>
            <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <div class="my-1">
                <img :src="hotel1" style="width: 100%; padding: 0" alt="" />
              </div>
              <div class="my-1">
                <img :src="hotel1" style="width: 100%; padding: 0" alt="" />
              </div>
              <div class="my-1">
                <img :src="hotel1" style="width: 100%; padding: 0" alt="" />
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
        <div class="col-2 mx-auto">
          <div class="text-center">
            <img :src="wifiImage" alt="wifi" style="width: 41px; height: 33px" />
            <div class="text-center mt-3">
              <span class="text-14">Free Wifi</span>
            </div>
          </div>
        </div>

        <div class="col-2 mx-auto">
          <div class="text-center">
            <img :src="parkingImage" alt="wifi" style="width: 41px; height: 33px" />
            <div class="text-center mt-3">
              <span class="text-14">Parking</span>
            </div>
          </div>
        </div>

        <div class="col-2 mx-auto">
          <div class="text-center">
            <img :src="spaImage" alt="wifi" style="width: 41px; height: 33px" />
            <div class="text-center mt-3">
              <span class="text-14">Spa</span>
            </div>
          </div>
        </div>

        <div class="col-2 mx-auto">
          <div class="text-center">
            <img :src="swimImage" alt="wifi" style="width: 41px; height: 33px" />
            <div class="text-center mt-3">
              <span class="text-14">Swiming Pool</span>
            </div>
          </div>
        </div>

        <div class="col-2 mx-auto">
          <div class="text-center">
            <img :src="foodImage" alt="wifi" style="width: 41px; height: 33px" />
            <div class="text-center mt-3">
              <span class="text-14">Food</span>
            </div>
          </div>
        </div>

        <div class="col-2 mx-auto">
          <div class="text-center">
            <img :src="gymImage" alt="wifi" style="width: 41px; height: 33px" />
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
        <span class="text-14">
          type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
          into electronic typesetting, remontent of a page when looking at its layout. The point of using Lorem Ipsum is
          that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
          making it look like readable English. Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lo
        </span>
      </div>
    </div>
    <!-- end about -->

    <!-- Contact & location -->
    <div id="contactandlocation" class="mt-3">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-11 col-lg-7 col-xl-7 mx-auto mt-2">
          <div class="card room-type-card px-4 py-4" style="height: 400px">
            <div class="text-left">
              <span class="text-24"> Contact Information </span>
            </div>

            <hr style="height: 2px" />

            <div class="my-2">
              <span class="text-14">Address: 3 No , 270 streets, Siem Reab , Cambodia</span>
            </div>
            <div class="my-2">
              <span class="text-14">Phone: 09292929211111</span>
            </div>
            <div class="my-2">
              <span class="text-14">website : abc.com</span>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-12 col-md-11 col-lg-5 col-xl-5 mx-auto mt-2">
          <div class="card room-type-card px-4 py-4" style="height: 400px">
            <div class="text-left">
              <span class="text-24"> Location </span>
            </div>

            <hr style="height: 2px" />

            <div>
              <img :src="mapImage" alt="map" style="width: 100% max-height: 450px;" />
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

        </div>
        <div></div>
      </div>
    </div>
    <!-- end rates & reviews -->
  </div>
</template>

<script>
export default {
  name: 'DetailPage',

  data: () => ({
    hotel1: require('../assets/detail_page/hotel_1.png'),
    wifiImage: require('../assets/detail_page/wifi.png'),
    parkingImage: require('../assets/detail_page/parking.png'),
    spaImage: require('../assets/detail_page/spa.png'),
    swimImage: require('../assets/detail_page/swim.png'),
    foodImage: require('../assets/detail_page/food.png'),
    gymImage: require('../assets/detail_page/gym.png'),
    mapImage: require('../assets/detail_page/map.png'),
    imageMargin: null,
  }),

  created() {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 992) this.imageMargin = true
      else this.imageMargin = false
    })
  },
}
</script>

<style scoped>
#title {
  font-family: 'Roboto', sans-serif;
  font-size: 26px;
}

.text-14 {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: bold;
  font-style: italic;
}
.text-24 {
  font-family: 'Roboto', sans-serif;
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
}
</style>
