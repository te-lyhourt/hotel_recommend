<template >
  <div class="sidebar">
    <p class="title filter">Filter</p>
    <hr class="line" />
    <p class="title">Province</p>
    <province></province>
    <hr class="line" />
    <p class="title">Prince</p>
    <div class="price-group">
      <div class="flex-box">
        <button type="button" class="title filter-btn">Under $20</button>
      </div>
      <div class="flex-box">
        <button type="button" class="title filter-btn">20$-50$</button>
      </div>
      <div class="flex-box">
        <button type="button" class="title filter-btn">51$-100$</button>
      </div>
      <div class="flex-box">
        <button type="button" class="title filter-btn">Above 100$</button>
      </div>
    </div>
    
    <hr class="line" />
    <p class="title">Rating</p>
        <div class="price-group">
      <div class="flex-box">
        <button type="button" class="title filter-btn flex-center">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <div class="andUp">
                & up
            </div>
        </button>
      </div>
      <div class="flex-box">
        <button type="button" class="title filter-btn flex-center">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <div class="andUp">
                & up
            </div>
        </button>
      </div>
      <div class="flex-box">
        <button type="button" class="title filter-btn flex-center">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <div class="andUp">
                & up
            </div>
        </button>
      </div>
      <div class="flex-box">
        <button type="button" class="title filter-btn flex-center">
            <i class="bi bi-star-fill"></i>
            <div class="andUp">
                & up
            </div>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import province from "./province.vue";
export default {
  components: { province },
};
</script>
<style>
.sidebar {
  margin-top: 100px;
  margin-left: 55px;
  width: 250px;
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
.filter{
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
  color: black;
}
.flex-box{
    display: flex;
    justify-content: center;
}
.flex-center{
    display: flex;
    justify-content: center;
    align-items: center;
}
.bi-star-fill{
    color: #FFB600;
}
.andUp{
    white-space: nowrap;
    margin-left: 3px;
}
</style>