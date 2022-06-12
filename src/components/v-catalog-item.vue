<template>
<div class="v-catalog-item">
    <img class="v-catalog-item__img"
         :src="imgLinks"
         :alt="product_data.name">
    <p class="v-catalog-item__name">{{ product_data.name }}</p>
    <p class="v-catalog-item__price">Price: {{ product_data.price }}</p>
    <button
        class="v-catalog-item__btn btn"
        @click="$emit('getToCard',this.ProductData)"
    >buy
    </button>
</div>
</template>

<script>
export default {
    name: "v-catalog-item",
    props: {
        product_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            ProductData: {
                ...this.product_data,
                qauntity: 1,
            }
        }
    },
    mounted() {
    },
    methods: {},
    computed: {
        imgLinks: function () {
            return require(`../assets/img/${this.product_data.image}`)
        },
    }
}
</script>

<style lang="scss">
.v-catalog-item {

    flex-basis: 25%;
    box-shadow: 0 0 8px #e00000;
    padding: $padding*2;
    margin: $margin*2;

    &__img {
        width: 100px;
        height: 100px;
        flex: 1;
    }

    &__name {

    }

    &__price {
        text-align: start;
    }
}
</style>