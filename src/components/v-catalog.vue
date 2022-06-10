<template>
  <div class="v-catalog">
    <h1>Каталог</h1>
    <div class="v-catalog__list">
      <v-catalog-item
          v-for="product in prod"
          :key="product.article"
          :product_data="product"
          @getToCard=setProd
      />
    </div>
  </div>
</template>

<script>
import VCatalogItem from "@/components/v-catalog-item";
import {mapActions,mapGetters} from 'vuex'

export default {
  name: "v-catalog",
  components: {VCatalogItem},
  data(){
    return{
    }
  },
computed:{
...mapGetters({
     prod:'product/Prod'
    })
},

  methods:{
    ...mapActions({
          getProd: 'product/getProd',
          getCard: 'card/addInCard'
        })
    ,
    setProd(data){
      console.log(data)
      this.getCard(data)
      //this.$emit('setProd',product_data)
    }
  },
  mounted(){
    this.getProd()

  }
}
</script>

<style lang="scss">
.v-catalog{
  &__list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
}
</style>