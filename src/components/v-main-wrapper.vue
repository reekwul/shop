<template>
    <div class="v-main-wrapper">
        <router-view></router-view>
<!--        <v-catalog/>-->
<!--        <v-card-->
<!--            v-if="card.length"-->
<!--            :cardData=card-->
<!--        />-->
    </div>

</template>
<script>
//
//import VCatalog from "@/components/v-catalog";
//import VCard from "@/components/v-card";
import {mapGetters} from "vuex";

export default {
    name: "v-main-wrapper",
    // components: {VCatalog, VCard},
    props: {},
    data() {
        return {}
    },
    computed: {
        ...mapGetters({
            card: 'card/getCard'
        })
    },
    methods: {},
    watch: {},
    mounted() {

    }

}
</script>

<style>
.v-main-wrapper {
    max-width: 900px;
    margin: auto;
}

</style>