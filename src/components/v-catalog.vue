<template>
<div class="v-catalog">
<v-catalog-item/>
</div>
</template>

<script>
import VCatalogItem from "@/components/v-catalog-item";
export default {
  name: "v-catalog",
  components: {VCatalogItem}
}
</script>

<style lang="scss" >
.v-catalog{
  &_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

  }

}

</style>