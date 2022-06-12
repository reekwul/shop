import axios from "axios";

export const prodModule = {
    state: () => ({
        products: [],
    }),
    getters: {
        Prod(state) {
            return state.products;
        },

    },
    mutations: {
        setProd(state, products) {
            state.products = products;
        },
    },
    actions: {
        async getProd({commit}) {

            try {
                const products = await axios.get('http://localhost:3000/products');
                commit('setProd', await products.data);
            } catch (e) {
                console.log(e);
            }
        },
    },
    namespaced: true
}