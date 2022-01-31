<template>
  <div>
    <topbar @search="getSearchName"></topbar>
    <div class="content">
      <sidebar
        @haveStar="getStar"
        @haveChange='getHotel'
        v-if="listHotels"
      ></sidebar>
      <div class="hotel_container">
        <hotelRow
          v-for="listHotel in listHotels"
          :key="listHotel.uid"
          :listHotel="listHotel"
        ></hotelRow>
      </div>
    </div>
  </div>
</template>

<script>
import listHotels from "../firebase/listHotel";
import Sidebar from "./components/sidebar.vue";
import topbar from "./components/topbar.vue";
import hotelRow from "./components/hotelRow";
import searchedHotel from "../firebase/searchHotel";
import sortByStar from "../firebase/sortByStar";

export default {
  data() {
    return {
      listHotels: null,
      hotelName: null,
    };
  },

  components: { topbar, Sidebar, hotelRow },
  async mounted() {
    this.listHotels = await listHotels();
    console.log(this.listHotels);
  },
  methods: {
    // async getProvince(value) {
    //   if (value == "") {
    //     this.listHotels = await listHotels();
    //   } else {
    //     let hotel = await sortHotel(value);
    //     this.listHotels = hotel;
    //   }
    // },
    async getStar(value) {
      console.log("get call");
      if (value == "") {
        console.log("get call");
        this.listHotels = await listHotels();
      } else {
        let hotel = await sortByStar(value);
        this.listHotels = hotel;
      }
    },
    async getSearchName(value) {
      this.hotelName = value;
      let hotel = await searchedHotel(this.hotelName);
      console.log(hotel);
      this.listHotels = hotel;
    },
    getHotel(value){
      console.log(value)
      this.listHotels = value
    }
  },
};
</script>
<style scoped>
.content {
  display: flex;
  justify-content: center;
}
.hotel_container {
  margin-top: 100px;
  margin-left: 35px;
}
</style>