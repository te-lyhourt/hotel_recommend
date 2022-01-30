<template >
  <a class="hotel_row" :href="'/detail-page/'+listHotel.uid">
    <div class="box-1 box">
      <img :src="listHotel.data.images[0]" alt="" class="hotel_image" />
    </div>
    <div class="box-2 box">
      <p class="white-text hotel_name">{{ listHotel && listHotel.data.hotelName }}</p>
      <p class="white-text">{{listHotel && listHotel.data.stars}}-star hotel</p>
      <div>
        <!-- <p class="white-text">
          Guest Rate:&nbsp;&nbsp;
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
        </p> -->
      </div>
      <p class="white-text hotel_price">{{listHotel && listHotel.data.roomTypes[0].price}}$/night</p>
      <button class="filter-btn white-text">view detail</button>
    </div>
    <div class="box-3 box">
      <div class="flex-center feature_box" v-if="listHotel &&listHotel.data.services.parking">
        <img :src="parking" alt="" class="feature_logo" />
        <p class="white-text">Parking</p>
      </div>
      <div class="flex-center feature_box" v-if="listHotel &&listHotel.data.services.pool">
        <img :src="swim" alt="" class="feature_logo" />
        <p class="white-text">Pool</p>
      </div>
      <div class="flex-center feature_box" v-if="listHotel &&listHotel.data.services.free_wifi">
        <img :src="wifi" alt="" class="feature_logo" />
        <p class="white-text">Wifi</p>
      </div>
      <div class="flex-center feature_box" v-if="listHotel &&listHotel.data.services.spa">
        <img :src="spa" alt="" class="feature_logo" />
        <p class="white-text">Spa</p>
      </div>
      <div class="flex-center feature_box" v-if="listHotel &&listHotel.data.services.gym">
        <img :src="gym" alt="" class="feature_logo" />
        <p class="white-text">gym</p>
      </div>
      <div class="flex-center feature_box" v-if="listHotel &&listHotel.data.services.food">
        <img :src="food" alt="" class="feature_logo" />
        <p class="white-text">food</p>
      </div>
    </div>
  </a>
</template>
<script>
export default {
  props: ["listHotel"],
  data() {
    return {
      // hotel1: require("../../assets/detail_page/hotel_1.png"),
      parking: require("../../assets/detail_page/parking.png"),
      spa: require("../../assets/detail_page/spa.png"),
      swim: require("../../assets/detail_page/swim.png"),
      wifi: require("../../assets/detail_page/wifi.png"),
      gym: require("../../assets/detail_page/gym.png"),
      food: require("../../assets/detail_page/food.png"),
    };
  },
};
</script>
<style scoped>
.hotel_image {
  width: 230px;
  height: 220px;
}

.hotel_name {
  font-size: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
}
.box {
  margin: 10px;
}
.box-2 {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.box-3 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.feature_box {
  flex-direction: column;
}
.feature_logo {
  width: 42px;
  height: 33px;
}
.hotel_price {
  font-size: 18px;
  margin-bottom: 10px;
}
.hotel_row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: #222831;
  margin-bottom: 25px;
  text-decoration: none;
}
</style>