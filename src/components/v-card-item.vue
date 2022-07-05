<template>
    <div class="v-card-item">
        <img class="v-card-item__img"
             :src="imgLinks"
             :alt="card_item_data.name">

        <p>{{ card_item_data.name }}</p>
        <p>Price: {{ card_item_data.price }}</p>

        <span
            class="v-card-item__btn"
            @click="MinesCard(card_item_data)"
        >-
        </span>

        <p>{{ card_item_data.qauntity }}</p>

        <span
            class="v-card-item__btn"
            @click="check(card_item_data)"
        >+
        </span>

        <span
            class="v-card-item__btn"
            @click="DeleteCard(card_item_data)"
        >
            <img
                class="v-card-item__imgs"
                src="https://cdn-icons-png.flaticon.com/128/86/86241.png"
                alt="Удалить"
            >
        </span>
    </div>
<hr>


</template>

<script>
import {mapActions} from "vuex";

export default {
    name: "v-card-item",
    props: {
        card_item_data: {
            type: Object,
            default() {
                return {};
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
        check(data) {
            this.AddInCard(data);
            this.CheckToCard(data);
        }
    },
    mounted() {

    },
    computed: {
        imgLinks: function () {
            return require(`../assets/img/${this.card_item_data.image}`)
        },
    }

}
</script>

<style scoped lang="scss">
hr{
    border: 1px solid #FFDD00;
}


.v-card-item {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    margin: $margin*3;
    font-size: larger;

    &__img {
        width: 66px;
        height: 99px;
        border-radius: 9px;
    }
    &__imgs {
        max-width: 25px;
        max-height: 25px;
    }

    &__btn {
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        width: 50px;
        height: 50px;
        background: #FFDD00;
        border-radius: 25px;
        font-weight: bold;
        }
    &__btn:hover{
        cursor: pointer;
    }
    }

</style>