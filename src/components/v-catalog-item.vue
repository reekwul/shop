<template>
    <div class="v-catalog-item">
        <img class="v-catalog-item__img"
             :src="imgLinks"
             :alt="product_data.name">
        <p>{{ product_data.price }} $</p>
        <p>{{ product_data.name }}</p>
        <v-my-btm
            class="v-catalog-item__btn btn"
            @click="$emit('getToCard',this.ProductData)"
        >В корзину
        </v-my-btm>
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

<style scoped lang="scss">
p{
    margin: 8px 20px;
    text-align: start;
}
.v-catalog-item {
    flex-basis: 25%;
    box-shadow: 1px 3px 6px #000;
    padding: $padding*2;
    margin: $margin*2;
    border-radius: $radius*3;

    &__img {
        width: 150px;
        height: 200px;
        flex: 1;
        border-radius: $radius*2;
    }
}
</style>