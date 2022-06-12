<template>
    <router-link to="/">
        <div>
            catalog
        </div>
    </router-link>
    <h2>Card</h2>
    <div
        class="no_card"
         v-if="!cards.length">
        <img
            class="no_card__img"
            src="https://all-brick.ru/img/shopping-cart-empty.png"
            alt="корзина пуста"
        >
    </div>


    <div class="v-card">
        <div v-for="card in cards"
             :key="card.article"
        >
            <v-card-item
                :card_item_data=card
                @plus="Check(card)"
                @mines="MinesCard(card)"
                @delCard="DeleteCard(card)"
            />
        </div>
    </div>
</template>

<script>

import VCardItem from "@/components/v-card-item";
import {mapActions, mapGetters} from "vuex";

export default {
    name: "v-card",
    components: {
        VCardItem
    },
    props: {
        cardData: {
            type: Array,
            default() {
                return []
            }
        }
    },
    methods: {
        ...mapActions({
            AddInCard: 'card/addInCard',
            CheckToCard: 'card/CheckToCard',
            MinesCard: 'card/Mines',
            DeleteCard: 'card/deleteCard'
        }),
        deltoCard(index) {
            console.log(index)
        },
        Check(data) {
            this.AddInCard(data);
            this.CheckToCard(data);
        }
    },
    computed:{
        ...mapGetters({
            cards:'card/getCard'
        })
    }

}
</script>

<style>

</style>