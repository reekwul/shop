<template>
    <div>
        <v-main-wrapper/>
    </div>
</template>
<script>
import VMainWrapper from "@/components/v-main-wrapper";

export default {
    components: {VMainWrapper}
}
</script>

<style lang="scss" scoped>
div {
    text-align: center;
    margin-top: $margin*8;
}
</style>