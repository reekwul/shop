<template>
    <router-link to="/card">
        <div
        v-if="card.length"
        class="v-catalog__link_to_card">
            <img src="https://botanicus-cosmetic.ru/design/cart.png" alt="card">
            <div class="v-catalog__link_to_card__p">
                <p><strong>{{CardTovar()}}</strong></p>
            </div>
        </div>
    </router-link>
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
import {mapActions, mapGetters} from 'vuex'

export default {
    name: "v-catalog",
    components: {VCatalogItem},
    data() {
        return {}
    },
    computed: {
        ...mapGetters({
            prod: 'product/Prod',
            card: 'card/getCard'
        }),

    },

    methods: {
        ...mapActions({
            getProd: 'product/getProd',
            getCard: 'card/addInCard',
            checkCard: 'card/CheckToCard'
        }),

        setProd(data) {
            this.getCard(data);
            this.checkCard(data);
            //this.$emit('setProd',product_data)
        },
        CardTovar(){
            return this.card.reduce((a,b)=> a+b.qauntity,0)
            }

    },
    mounted() {
        this.getProd()

    }
}
</script>

<style lang="scss">
.v-catalog {
    &__link_to_card {
        position: absolute;
        top: 20px;
        left: 10px;
        &__p{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 20px;
            height: 20px;
            background-color: #e0ee0e;
            border-radius: 10px;
            box-sizing: border-box;

        }
    }

    &__link_to_card img {
        max-width: 75px;
        max-height: 75px;
    }

    &__list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
}
</style>