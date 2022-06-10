<template>
  <h2>Card</h2>
<div class="v-card">
<v-card-item/>
</div>
</template>

<script>

import VCardItem from "@/components/v-card-item";
export default {
  name: "v-card",
  components: {
    VCardItem
  },
  props:{
    cardData:{
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>

</style>