<template>
  <div class="form-group">
    <!-- <select
      class="select"
      id="resizing_select"
      v-model="categoryID"
      @change="resize"
    >
      <option value="all" hidden>ទាំងអស់</option>
      <option v-for="main in mainCategory" :key="main.id" :value="main.id">
        {{ main.brand_kh }}
      </option>
    </select>
    <select id="width_tmp_select">
      <option id="width_tmp_option"></option>
    </select> -->

    <a @click="search" class="search"
      ><i class="fa fa-search" aria-hidden="true"></i
    ></a>

    <div class="search">
      <input

        type="text"
        class="search-input"
        placeholder="ស្វែងរកទំនិញ"
        @keyup.enter="search"
      />
              <!-- v-model="searchValue" -->
    </div>

    <a @click="cancel"
    
      ><i class="fas fa-times" aria-hidden="true" ></i
    ></a>
    <!-- v-if="searchValue" -->
  </div>
</template>
<script>

export default {
//   props: ["searchVal", "catID"],
//   async mounted() {
//     const mainCategory = localStorage.getItem("mainCategory");
//     if (mainCategory != undefined) {
//       this.mainCategory = await JSON.parse(mainCategory);
//       this.haveMain = true;
//     } else {
//       await this.getMaincategory();
//     }
//   },
//   watch: {
//     searchVal() {
//       this.searchValue = this.searchVal;
//     },
//     catID() {
//       this.categoryID = this.catID;
//     },
//   },
//   data() {
//     return {
//       dropdown: false,
//       searchValue: "",
//       mainCategory: "",
//       categoryID: "all",
//     };
//   },
//   methods: {
//     async resize() {
//       $("#width_tmp_option").html($("#resizing_select option:selected").text());
//       const width = $("#width_tmp_select").width();
//       $("#resizing_select").width(width + 3);
//     },
//     getMaincategory() {
//       console.log("get called");
//       Axios.get(`/api/brands/tree/`).then((result) => {
//         // console.log(result);
//         const success = result.data.message;
//         if (success) {
//           const data = result.data.result;
//           console.log(result);
//           this.mainCategory = data;
//           this.haveMain = true;
//           localStorage.setItem(
//             "mainCategory",
//             JSON.stringify(this.mainCategory)
//           );
//         } else if (!success) {
//           this.getMaincategory();
//         }
//       });
//     },
//     changeIcon() {
//       var text = this.showText;
//       this.showText = this.dropDownText;
//       this.dropDownText = text;
//     },
//     search() {
//       if (this.searchValue != "") {
//         if (this.categoryID == "all") {
//           this.$emit("search", "all", this.searchValue, this.categoryID);
//         } else {
//           this.$emit("search", "main", this.searchValue, this.categoryID);
//         }
//       }
//     },
//     cancel() {
//       this.searchValue = "";
//       this.$emit("cancel");
//     },
//   },
//   computed: {
//     showDropdown() {
//       if (this.dropdown) return true;
//       else return false;
//     },
//   },
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
  margin-left: 11px;
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
</style>