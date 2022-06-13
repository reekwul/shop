<template>
    <div class="v-main-wrapper">
        <router-view></router-view>

    </div>

</template>
<script>

import {mapGetters} from "vuex";

export default {
    name: "v-main-wrapper",
    props: {},
    data() {
        return {}
    },
    computed: {
        ...mapGetters({
            card: 'card/getCard'
        })
    },
}
</script>

<style>
.v-main-wrapper {
    max-width: 900px;
    margin: auto;
}
</style>