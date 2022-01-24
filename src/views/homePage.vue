<template>
    <div>
        <topbar></topbar>
        <div class="content">
            <sidebar></sidebar>
            <div class="hotel_container" >
                <hotelRow v-for="listHotel in listHotels" :key="listHotel.uid" :listHotel="listHotel"></hotelRow>
            </div>
 

        </div>

    </div>
</template>

<script>
import listHotels from '../firebase/listHotel'
import Sidebar from './components/sidebar.vue'
import topbar from './components/topbar.vue'
import hotelRow from './components/hotelRow'

export default {
    data() {
        return {
            listHotels: null,
            sortByProvince:"",
        }
    },
    components: { topbar, Sidebar ,hotelRow},
    async mounted() {
        this.listHotels = await listHotels()
        console.log(this.listHotels);
    }
}
</script>
<style scoped>
.content{
    display: flex;
    justify-content: center;
}
.hotel_container {
  margin-top: 100px;
  margin-left: 35px;
}

</style>