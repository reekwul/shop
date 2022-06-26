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
            return ;
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

<style scoped>

</style>