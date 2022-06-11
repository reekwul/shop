<template>
  <div class="v-card-item">
    <img class="v-card-item__img"
         :src="imgLink"
         :alt="card_item_data.name">
    <p class="v-card-item__name">{{card_item_data.name}}</p>
    <p class="v-card-item__price">Price: {{card_item_data.price}}</p>
    <div>
          <button class="v-card-item__btn btn"
                  >-</button>
          <p>количество одинаковых позиций</p>
          <button class="v-card-item__btn btn"
                  >+</button>
       </div>
    <button
        class="v-card-item__btn btn"
        >убрать из корзины</button>
  </div>


</template>

<script>
export default {
  name: "v-card-item",
  props:{
    card_item_data:{
      type:Object,
      default() {
        return {};
      }
    }
  }
}
</script>

<style scoped>
.v-card-item{
  display: flex;
  flex-wrap: nowrap;
  justify-content:space-around;
  align-items: center;
}
</style>