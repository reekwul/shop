import {createStore} from "vuex";

import {prodModule} from "@/vuex/prodModuls";
import {cardModule} from "@/vuex/cardModule";

export default createStore({
    modules: {
        product: prodModule,
        card: cardModule
    }
});
