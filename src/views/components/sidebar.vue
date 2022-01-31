<template >
  <div class="sidebar">
    <p class="title filter">Filter</p>
    <hr class="line" />
    <p class="title">Province</p>
    <province @haveProvince="getProvince"></province>

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
        <button @click="sortByPrice(0,20)" type="button" class="title filter-btn">Under $20</button>
      </div>
      <div class="flex-box">
        <button @click="sortByPrice(20,50)" type="button" class="title filter-btn">20$-50$</button>
      </div>
      <div class="flex-box">
        <button @click="sortByPrice(51,100)" type="button" class="title filter-btn">51$-100$</button>
      </div>
      <div class="flex-box">
        <button @click="sortByPrice(100,0)" type="button" class="title filter-btn">Above 100$</button>
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
import province from "./province.vue";
import sortByPrice from "../../firebase/sortByPrice";
export default {
  components: { province },
  data() {
    return {
      startLevel: "",
    };
  },
  methods: {
    async sortByPrice(startPrice, endPrice) {
      let hotels = await sortByPrice(startPrice, endPrice);
      console.log(hotels);
    },
    getProvince(value) {
      this.$emit("haveProvince", value);
    },
    sendStar() {
      this.$emit("haveStar", this.startLevel);
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
</style>