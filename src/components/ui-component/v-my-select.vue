<template>
    <select :value="modelValue" @change="changeOption">
        <option value="Все">Все</option>
        <option
            v-for="option in options"
            :key="option"
            :value="option">
            {{option}}
        </option>
    </select>
</template>

<script>
export default {
    name: "v-my-select",
    data() {
        return {}
    },
    props: {
    modelValue: {
        type: String,
        default() {
            return '';
        }
    },
    options: {
        type: Array,
        default() {
            return [];
        }
    }
},
    methods:{
        changeOption(event){
            console.log(event.target.value)
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style scoped lang="scss">
select{
    align-self: start;

    width: 200px;

    cursor: pointer;
    border-radius:$radius*2;
    border: 2px solid $color-bg;
    padding: 10px 20px;
    margin-left: 15px;
    font-size: 16px;
}
select:focus {
    outline:none
}

</style>