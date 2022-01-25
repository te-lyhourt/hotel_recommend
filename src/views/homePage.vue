<template>
    <div>
        <topbar></topbar>
        <div class="content">
            <sidebar @haveProvince='getProvince'></sidebar>
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
import sortHotel from '../firebase/sortByProvince'

export default {
    data() {
        return {
            listHotels: null,
            sortByProvince:"",
        }
    },
    watch:{
        async sortByProvince(){
            let hotel = await sortHotel(this.sortByProvince)
            this.listHotels=hotel
            if(this.sortByProvince==""){
                this.listHotels = await listHotels()
            }
        }
    },
    components: { topbar, Sidebar ,hotelRow},
    async mounted() {
        this.listHotels = await listHotels()
        console.log(this.listHotels);
    },
    methods: {
        getProvince(value){
            this.sortByProvince = value
        }
    },
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