<template>
  <h2>Card</h2>
<div class="v-card">
  <div v-for="card in cardData"
  :key="card.article"
  >
<v-card-item
    :card_item_data = card
    @plus="Check(card)"
    @mines="MinesCard(card)"
    @delCard="DeleteCard(card)"
/>
  </div>
</div>
</template>

<script>

import VCardItem from "@/components/v-card-item";
import {mapActions} from "vuex";
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
  },
  methods:{
    ...mapActions({
      AddInCard: 'card/addInCard',
      CheckToCard:'card/CheckToCard',
      MinesCard: 'card/Mines',
      DeleteCard: 'card/deleteCard'
    }),
    deltoCard(index){
      console.log(index)
    },
    Check(data){
      this.AddInCard(data);
      this.CheckToCard(data);
    }
  }

}
</script>

<style>

</style>