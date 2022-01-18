<template>
    <div>
        <topbar></topbar>
        <div class="content">
            <sidebar></sidebar>
            <hotelRow></hotelRow>
        </div>

    </div>
</template>

<script>
import Sidebar from './components/sidebar.vue'
import topbar from './components/topbar.vue'
import hotelRow from './components/hotelRow'

export default {

    components: { topbar, Sidebar ,hotelRow},

}
</script>
<style scoped>
.content{
    display: flex;
    justify-content: center;
}
</style>