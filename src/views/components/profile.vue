<template>
  <img class="avatar" :src="src" />
</template>

<script>
export default {
  props: { src: { type: String, default: '' } }
}
</script>
<style scoped>
.avatar{
  border-radius: 50%;
  height: 40px;
  width: 40px;
}
</style>