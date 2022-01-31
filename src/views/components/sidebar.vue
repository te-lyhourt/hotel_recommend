<template >
  <div class="sidebar">
    <p class="title filter">Filter</p>
    <hr class="line" />
    <p class="title">Province</p>
    <div>
      <div class="province">
        <select
          v-model="sortProvince"
          name="province"
          @change="getProvince()"
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
    </div>

    <hr class="line" />
    <p class="title">Star</p>
    <div class="price-group">
      <select
        v-model="startLevel"
        name="province"
        @change="sendStar()"
        class="star"
      >
        <option value="">All</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>

    <hr class="line" />
    <p class="title">Prince</p>
    <div class="price-group">
      <div class="flex-box">
        <button
          @click="sortByPrice(0, 0, (type = 'all'))"
          type="button"
          class="title filter-btn"
        >
          All
        </button>
      </div>
      <div class="flex-box">
        <button
          @click="sortByPrice(0, 20, (type = 'under'))"
          type="button"
          class="title filter-btn"
        >
          Under $20
        </button>
      </div>
      <div class="flex-box">
        <button
          @click="sortByPrice(20, 50)"
          type="button"
          class="title filter-btn"
        >
          20$-50$
        </button>
      </div>
      <div class="flex-box">
        <button
          @click="sortByPrice(51, 100)"
          type="button"
          class="title filter-btn"
        >
          51$-100$
        </button>
      </div>
      <div class="flex-box">
        <button
          @click="sortByPrice(0, 100, (type = 'above'))"
          type="button"
          class="title filter-btn"
        >
          Above 100$
        </button>
      </div>
    </div>

    <!-- <hr class="line" />
    <p class="title">Rating</p>
    <div class="price-group">
      <div class="flex-box">
        <button type="button" class="title filter-btn flex-center">
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <div class="andUp">& up</div>
        </button>
      </div>
      <div class="flex-box">
        <button type="button" class="title filter-btn flex-center">
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <div class="andUp">& up</div>
        </button>
      </div>
      <div class="flex-box">
        <button type="button" class="title filter-btn flex-center">
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <div class="andUp">& up</div>
        </button>
      </div>
      <div class="flex-box">
        <button type="button" class="title filter-btn flex-center">
          <i class="bi bi-star-fill"></i>
          <div class="andUp">& up</div>
        </button>
      </div>
    </div> -->
  </div>
</template>
<script>

import sortByPrice from "../../firebase/sortByPrice";
import listHotels from "../../firebase/listHotel";
import sortHotel from "../../firebase/sortByProvince";
export default {

  data() {
    return {
      startLevel: "",
      listHotel: null,
      sortProvince:"",
    };
  },
  methods: {
    async sortByPrice(startPrice, endPrice, type) {
      if (type == "all") {
        let hotels = await listHotels();
        this.listHotel = hotels;
      } else {
        let hotels = await sortByPrice(startPrice, endPrice, type);
        this.listHotel = hotels;
      }
      this.snedChange();
    },
    async getProvince() {
      console.log(this.sortProvince)
      console.log('change')
      if (this.sortProvince == "") {
        this.listHotel = await listHotels();
      } else {
        console.log('call')
        let hotel = await sortHotel(this.sortProvince);
        this.listHotel = hotel;
        console.log(this.listHotel)
      }
      this.snedChange();
    },
    sendStar() {
      this.$emit("haveStar", this.startLevel);
    },
    snedChange() {
      this.$emit("haveChange", this.listHotel);
    },
  },
};
</script>
<style>
.sidebar {
  margin-top: 100px;
  margin-left: 55px;
  width: 290px;
  height: 600px;
  background-color: #222831;
  position: sticky;
  display: flex;
  flex-direction: column;
  padding: 13px;
}
.title {
  font-size: 14px;
  font-weight: 700;
  font-style: italic;
  margin-top: 19px;
  margin-left: 10px;
  color: white;
}
.filter {
  font-size: 22px;
  margin: 0;
  margin-left: 10px;
}
.line {
  opacity: unset;
  border: 1px solid #ffffff;
}
.price-group {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1em;
}
.filter-btn {
  background: #00adb5;
  border-radius: 10px;
  width: 98px;
  height: 40px;
  margin: 0;
}
.filter-btn:hover {
  color: #00adb5;
  background: white;
}
.flex-box {
  display: flex;
  justify-content: center;
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.bi-star-fill {
  color: #ffb600;
}
.andUp {
  white-space: nowrap;
  margin-left: 3px;
}
.select {
  border-radius: 5px;
  padding: 3px 5px;
}
.star {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  margin-left: 60px;
  font-size: 16px;
  width: 160px;
}
.province{
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    margin-left: 35px;
    font-size: 16px;
}
</style>