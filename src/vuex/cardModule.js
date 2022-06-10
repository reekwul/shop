export const cardModule = {
    namespaced:true,
    state:()=>({
        card:[]
    }),
    getters:{
        getCard(state){
            return state.card
        }
    },
    mutations:{
        setCard(state,product){
            state.card.push(product)
        }
    },
    actions:{
        addInCard({commit},product){
            commit('setCard',product)
        }
    },

}