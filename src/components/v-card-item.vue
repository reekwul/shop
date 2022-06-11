<template>
  <div class="v-card-item">
    <img class="v-card-item__img"
         :src="imgLinks"
         :alt="card_item_data.name">
    <p class="v-card-item__name">{{card_item_data.name}}</p>
    <p class="v-card-item__price">Price: {{card_item_data.price}}</p>
    <div class="v-card-item__butt">
      <div class="v-card-item__plusMines">
        <button
            class="v-card-item__btn btn"
            @click="$emit('mines')"
        >-</button>

        <p>{{card_item_data.qauntity}}</p>

        <button class="v-card-item__btn btn"
                @click="$emit('plus')"
        >+</button>
      </div>
      <button
          class="v-card-item__btn btn"
          @click="$emit('delCard')"
      >убрать из корзины</button>
    </div>

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
  },
methods:{


  },
  mounted(){

  },
  computed:{
    imgLinks: function () {
      return require(`../assets/img/${this.card_item_data.image}`)
    },
  }

}
</script>

<style scoped lang="scss">
p{
  margin: $margin;
}
.v-card-item{
  display: flex;
  flex-wrap: nowrap;
  justify-content:space-around;
  align-items: center;
  box-shadow: 0 0 4px #e00000;
  margin: $margin*3;
    &__img{
      max-width: 50px;
      max-height: 50px;
    }
    &__plusMines{
      display: flex;
      margin: $margin*5;
    }
  &__butt{
    display: flex;
    justify-content: space-between;
    &__btn{
      max-width: 20px;
    }
  }
}
</style>