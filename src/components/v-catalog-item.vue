<template>
<div class="v-catalog-item">
  <img class="v-catalog-item__img" :src="require('../assets/img/'+product_data.image)" :alt="product_data.image">
  <p class="v-catalog-item__name">{{product_data.name}}</p>
  <P class="v-catalog-item__price">Price: {{product_data.price}}</P>
  <button class="v-catalog-item__btn btn">buy</button>
</div>
</template>

<script>
export default {
  name: "v-catalog-item",
  props:{
    product_data:{
      type: Object,
      default(){
        return{}
      }
    }

  }
}
</script>

<style lang="scss" >
.v-catalog-item{

  flex-basis: 25%;
  box-shadow: 0 0 8px #e00000;
  padding: $padding*2;
  margin: $margin*2;
}
</style>