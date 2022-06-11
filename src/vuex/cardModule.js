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
        },
        deleteCard(state,date){
            console.log(state.card.indexOf(date));
            state.card.splice(state.card.indexOf(date),1)
        },
        popLast(state,article){
            state.card.pop();
           state.card.filter(
              function (card) {
                  if(card.article == article){
                      return card.qauntity +=1
                  }
              })
        },
        MinesCard(state,article){
            state.card.filter(
                function (card) {
                    if(card.article == article){
                        return card.qauntity +=1
                    }
                })
        }
    },
    actions:{
        addInCard({commit},product){
            commit('setCard',product)
        },
        CheckToCard({state,commit},data){
            if(state.card
                .filter(
                        (card)=>card.article == data.article)
                .length >1) {

                commit('popLast',data.article)
            }
        },
        Mines({commit,state},data){

            if( state.card
                .filter(
                    (card)=>card.article == data.article)[0]
                .qauntity > 1 ){
                commit('MinesCard',data.article)
            }else{
                commit('deleteCard',data)
            }
        },
        deleteCard({commit},data){
            commit('deleteCard',data)
        }
    },

}