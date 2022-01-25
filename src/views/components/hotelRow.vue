<template >
  <div class="hotel_container">
    <div class="hotel_row">
      <div class="box-1 box">
        <img :src="hotel1" alt="" class="hotel_image" />
      </div>
      <div class="box-2 box">
        <p class="white-text hotel_name">{{ hotelName }}</p>
        <p class="white-text">5-star hotel</p>
        <div>
          <p class="white-text">
            Guest Rate:&nbsp;&nbsp;
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </p>
        </div>
        <p class="white-text hotel_price">25$/night</p>
        <button class="filter-btn white-text">view detail</button>
      </div>
      <div class="box-3 box">
        <div class="flex-center feature_box">
          <img :src="parking" alt="" class="feature_logo" />
          <p class="white-text">Parking</p>
        </div>
        <div class="flex-center feature_box">
          <img :src="swim" alt="" class="feature_logo" />
          <p class="white-text">Pool</p>
        </div>
        <div class="flex-center feature_box">
          <img :src="wifi" alt="" class="feature_logo" />
          <p class="white-text">Wifi</p>
        </div>
        <div class="flex-center feature_box">
          <img :src="spa" alt="" class="feature_logo" />
          <p class="white-text">Spa</p>
        </div>
        <div class="flex-center feature_box">
          <img :src="gym" alt="" class="feature_logo" />
          <p class="white-text">gym</p>
        </div>
        <div class="flex-center feature_box">
          <img :src="food" alt="" class="feature_logo" />
          <p class="white-text">food</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hotel1: require("../../assets/detail_page/hotel_1.png"),
      parking: require("../../assets/detail_page/parking.png"),
      spa: require("../../assets/detail_page/spa.png"),
      swim: require("../../assets/detail_page/swim.png"),
      wifi: require("../../assets/detail_page/wifi.png"),
      gym:require('../../assets/detail_page/gym.png'),
      food:require('../../assets/detail_page/food.png'),
      hotelName: "Hotel Name",
    };
  },
};
</script>
<style scoped>
.hotel_container {
  margin-top: 100px;
  margin-left: 35px;
}
.hotel_row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: #222831;
}
.hotel_image {
  width: 230px;
  height: 220px;
}
.white-text {
  font-style: italic;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  margin: 0px;
  margin-top: 20px;
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
}
</style>