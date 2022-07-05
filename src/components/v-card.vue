<template>
    <router-link to="/">
        <div class="back">
            <img
                class="back__img"
                src="https://svgsilh.com/png-1024/2423349-ffeb3b.png"
                alt="<-- В каталог"
            >
            <h4
                v-if="!cards.length"
                class="back__p" >За покупками</h4>
        </div>

    </router-link>
    <div
        class="no_card"
         v-if="!cards.length">
        <h2 class="no_card__p">В корзине пока ничего нет</h2>
        <img
            class="no_card__img"
            src="https://all-brick.ru/img/shopping-cart-empty.png"
            alt="Корзина пуста">
        <p class="no_card__p">Вы можете начать покупки с главной страницы или
            воспользоватся поиском, если ищете что-то конкретное.</p>
    </div>

    <h2
        v-if="cards.length"
    >Корзина</h2>
    <div class="v-card">
        <div v-for="card in cards"
             :key="card.article"
        >
            <v-card-item
                :card_item_data=card

            />
        </div>
    </div>
    <span
        class="sumBar"
        v-if="sumPrice">
        <div class="sumBar__sum">
            <p>Количество товаров: {{sumQauntity}}</p>
            <p>{{sumPrice}} $</p>
        </div>
        <button class="sumBar__btn">
            К оформлению
        </button>
    </span>


</template>

<script>

import VCardItem from "@/components/v-card-item";
import {mapGetters} from "vuex";

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
    computed:{
        ...mapGetters({
            cards:'card/getCard'
        }),
        sumPrice(){
            let res = this.cards
                .map((x)=>x.qauntity*x.price.replace(/\s/g,''))
                .reduce((a,b)=>a+b,0)
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g,' ');
            return res === '0.00' ? 0 : res

        },
        sumQauntity(){
            return this.cards.map((x)=>x.qauntity).reduce((a,b)=>a+b,0)
        }
    }
}
</script>

<style lang="scss">
h2{
    text-align: start;
}
.back{
    display: flex;
    align-items: center;
    top:25px;
    left: 20px;
    position: absolute;
    &__img{
        width: 45px;
        transform: rotate(180deg);
    }
    &__p{
        color: black;
        margin: 10px;
    }
}

.sumBar{
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    border-top:2px solid #FFCC00;
    font-weight: bold;
    font-size: 18px;
    &__btn{
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        width: 150px;
        height: 50px;
        background: #FFDD00;
        border-radius: 13px;
        font-weight: bold;
        border: none;
    }
    &__btn:hover{
        cursor: pointer;
    }
}

.no_card{
    &__img{
        width: 150px;
        opacity: 0.3;
    }
    &__p{
        text-align: center;
    }
}
</style>