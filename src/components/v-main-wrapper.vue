<template>
<div class = "v-main-wrapper">
  <v-catalog/>
  <v-card/>
</div>

</template>
<script>

import VCatalog from "@/components/v-catalog";
import VCard from "@/components/v-card";
export default {
name: "v-main-wrapper",
  components: {VCatalog,VCard},
  props:{},
data(){
return{
 title:'main wrapper'
}
},
computed:{},
methods:{},
watch:{},
  mounted() {

}

}
</script>

<style >
.v-main-wrapper{
  max-width: 900px;
  margin: auto;
}

</style>