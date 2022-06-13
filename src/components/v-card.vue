<template>
    <router-link to="/">
        <img
            class="back"
            src="https://sozvezdie-boutique.ru/800/600/https/sportsmensoutpost.com/wp-content/uploads/2018/06/arrow.png"
            alt="<-- В каталог"
        >
    </router-link>
    <h2>Card</h2>
    <div
        class="no_card"
         v-if="!cards.length">
        <p class="no_card__p">Корзина пуста...</p>
        <img
            class="no_card__img"
            src="https://all-brick.ru/img/shopping-cart-empty.png"
            alt="Корзина пуста">
        <p class="no_card__p">Вернитесь в каталог чтоб продолжить покупки.</p>
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

<style lang="scss">
.back{
    top:25px;
    left: 20px;
    position: absolute;
    width: 45px;
    transform: rotate(-90deg) scaleY(1);
}
.no_card{
    &__img{
        width: 150px;
        opacity: 0.3;
    }
}
</style>