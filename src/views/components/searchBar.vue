<template>
  <div class="flex-center ">
    <a class="circle" href="/" v-if="showBack">
      <i class="bi bi-arrow-left  arrow"></i>
    </a>
    <div class="form-group">
      <div class="search">
        <input
          type="text"
          class="search-input"
          placeholder="Search"
          @keyup.enter="search"
          v-model="searchValue"
          @focus="showBack=true"
          @blur="showBack=false"
        />
      </div>
      <a @click="search" class="search">
        <i class="fa fa-search" aria-hidden="true"></i>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchValue: "",
      showBack:false
    };
  },
  methods: {
    search() {
      if (this.searchValue != "") {
        this.$emit("search", this.searchValue);
      }
    },
    cancel() {
      this.searchValue = "";
      this.$emit("cancel");
    },
  },
};
</script>
<style scoped>

ul {
  padding: 0;
}

.form-group {
  border: 1px solid #082032;
  background-color: #fff;
  display: flex;
  height: 50px;
  padding: 5px 10px;
  border-radius: 30px;
  box-shadow: 0px 2px 4px 0 rgb(12 18 18 / 40%);
  margin-bottom: 0;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 412px;
  margin-left: 8px;
}
.dropdown {
  padding: 3px 10px 0 0;
  padding-left: 5px;
  border-right: 2px solid #2c394b;
  cursor: pointer;
}
.dropdown-item:hover {
  color: #2c394b;
  font-weight: bold;
}
.search {
  height: 100%;
  display: flex;
  width: 100%;
}
.search-input {
  border: 0;
  padding: 0 10px;
  color: #3a3a3a;
  max-width: 200px;
  font-size: 15px;
}
.btn {
  box-shadow: none;
  background-color: #fff;
  width: 50px;

  border: 0;
  cursor: pointer;
}
a .fa-search {
  font-size: 16px;
  color: #2c394b;
  float: right;
}

input:focus {
  text-decoration: none !important;
  outline: none !important;
  border: none !important;
}
ul {
  margin: 0;
}
.select {
  border: none;
  outline: 0;
}

.select-item:hover {
  color: #082032;
  font-weight: bold;
  background: transparent;
}
.select-item:active {
  background: transparent;
}
a.search {
  display: flex;
  align-items: center;
  padding-left: 5px;
  margin-right: 20px;
  /* border-left: 2px solid #f57168; */
  flex: 1;
}
a .fa-times {
  font-size: 16px;
  color: #2c394b;
  float: right;
}
#resizing_select {
  width: 85px;
}

#width_tmp_select {
  display: none;
}
@media only screen and (max-width: 500px) {
  .select {
    display: none;
  }
  .search-input {
    max-width: 110px;
  }
}
a.circle{
  border-radius: 50%;
  width: 40px;
  display: flex;
  justify-content: center;
}
a.circle:hover{
  background-color: #3a3b3c;
}
.arrow{
  color: #b7babe;
  font-weight: 900;
  font-size: 23px;
}
</style>