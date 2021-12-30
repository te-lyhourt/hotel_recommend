<template >
  <div class="topbar">
    <div class="left">
      <logo></logo>
      <input type="text" class="search">
    </div>
    <div class="right">
      <button @click="signIn" type="button">login</button>
    </div>
  </div>
</template>
<script>
import logo from "./logo.vue";

export default {
  components: { logo },
};
</script>
<style scoped>
.topbar {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 48px;
  background-color: #222831;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.left{
  display: flex;
  justify-content: space-between;
}
.search{
  height: 30px;
}
</style>