import {createStore} from "vuex";
import axios from "axios";
export default createStore({
    state:()=>({
        products:[],
        number: 0
    }),
   mutations:{
        SET_PRODUCTS(state,products){
            state.products = products;
        },
       add(state){
            state.number+=1;
       }
    },
   actions: {
       async getProd({commit}){

            try {
              const products =  await axios.get('http://localhost:3000/products');
                commit('SET_PRODUCTS', await products.data);
            }

            catch (e){
                console.log(e);
            }
        },
    },
    getters: {
        PRODUCTS(state){
            return state.products;
        },
        numbplus(state){
            return state.number*2;
        }
    },
});

