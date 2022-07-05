<template>
    <button
        class="btn"
        @click.prevent
    >
        <slot>

        </slot>
    </button>

</template>

<script>
export default {
    name: "v-my-btm"
}
</script>

<style scoped lang="scss">
    .btn{
        cursor: pointer;
        box-sizing: border-box;
        background: $color-bg;
        border-radius:$radius*2;
        border: none;
        padding: 10px 20px;
        margin: 10px;
        font-size: 16px;
        font-weight: bold;
    }
</style>