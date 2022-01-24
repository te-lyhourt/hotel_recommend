<template >
  <div class="province">
    <select v-model="sortProvince" name="province">
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
</template>
<script>
import sortHotel from '../../firebase/sortByProvince'
export default {
  data(){
    return{
      sortProvince:''
    }
  },
  watch:{
    async sortProvince(){
        let hotel = await sortHotel(this.sortProvince)
        console.log(hotel);
    }
  }
};
</script>
<style scoped>
.province{
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    margin-left: 35px;
    font-size: 16px;
}
</style>