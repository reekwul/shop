<template>
    <router-link to="/card">
        <div
            v-if="card.length"
            class="v-catalog__link_to_card">
            <img
                class="v-catalog__link_to_card__img"
                src="https://botanicus-cosmetic.ru/design/cart.png"
                alt="card">
            <div class="v-catalog__link_to_card__p">
                <p><strong>{{CardTovar()}}</strong></p>
            </div>
        </div>
    </router-link>
    <div class="v-catalog">
        <h1>Каталог</h1>
        <v-my-select
            :options='getOption'
            v-model="modelValue"
            class="my-select"
        />
        <div class="v-catalog__list">
            <v-catalog-item
                v-for="product in  filterOption"
                :key="product.article"
                :product_data="product"
                @getToCard=addCard
            />
        </div>
    </div>
</template>

<script>
import VCatalogItem from "@/components/v-catalog-item";
import {mapActions, mapGetters} from 'vuex'
import VMySelect from "@/components/ui-component/v-my-select";

export default {
    name: "v-catalog",
    components: {VMySelect, VCatalogItem},
    data() {
        return {
            modelValue: 'Все',
        }
    },
    computed: {
        ...mapGetters({
            prod: 'product/Prod',
            card: 'card/getCard'
        }),
        getOption() {
            let res = [];
            this.prod.forEach(x => {
                    if (res.indexOf(x.category) === -1) {
                        res.push(x.category)
                    }
                }
            )
            return res
        },
        filterOption(){
            let res =  this.prod.filter(x=>x.category ===  this.modelValue);
            return res.length  ? res : this.prod
        }
    },

    methods: {
        ...mapActions({
            getProd: 'product/getProd',
            setCard: 'card/addInCard',
            check: "card/CheckToCard"
        }),
        addCard(data) {
            this.setCard(data);
            this.check(data)
        },
        CardTovar() {
            return this.card.reduce((a, b) => a + b.qauntity, 0)
        }

    },
    mounted() {
        this.getProd()

    }
}
</script>

<style lang="scss">
h1 {
    text-align: start;
}

.v-catalog {
    display: flex;
    flex-direction: column;
    &__link_to_card {
        position: absolute;
        top: 20px;
        right: 10px;

        &__p {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 20px;
            height: 20px;
            background-color: #e0ee0e;
            border-radius: 10px;
            box-sizing: border-box;
            position: relative;
            bottom:29px;
            left: 40px;
        }
        &__img {
              max-width: 75px;
              max-height: 75px;
          }
    }



    &__list {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }
}
</style>