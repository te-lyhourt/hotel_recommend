<template>
  <div class="px-5">
    <div>
      <span id="title">
        <i>Hotels name is simply dummy text of the printing</i>
      </span>
    </div>

    <div class="mt-5">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-8 col-lg-4 col-xl-4 room-type-col">
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
        <div class="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
          <!-- <img :src="hotel1" alt=""> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailPage',
  data: () => ({
    hotel1:  require('../assets/detail_page/hotel_1.png')
  })
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

.room-type-col {
  padding-right: 50px;
}

.room-type-card {
  border-radius: 10px;
  background-color: #222831;
  color: white;
}
</style>
