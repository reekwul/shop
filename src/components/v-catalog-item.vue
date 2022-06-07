<template>
<div class="v-catalog-item">
  <p>Name</p>
  <P>Praise</P>
  <button>buy</button>
</div>
</template>

<script>
export default {
  name: "v-catalog-item"
}
</script>

<style lang="scss" >
.v-catalog-item{
  flex-basis: 25%;
  box-shadow: 0 0 8px #e00000;
  padding: $padding;
  margin: $margin;
}
</style>