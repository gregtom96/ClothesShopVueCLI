import { createStore } from 'vuex'

export default createStore({
    state: {
        shoppingCart: [
            { 
                name: "Tee shirt Vans",
                cost: 10,
                quantity: 0
            },
            { 
                name: "Tee shirt Carhartt",
                cost: 10,
                quantity: 0
            },
            { 
                name: "Tee shirt Dickies",
                cost: 10,
                quantity: 0
            },
            { 
                name: "Tee shirt Lacoste",
                cost: 15,
                quantity: 0
            },
            { 
                name: "Tee shirt The North Face",
                cost: 15,
                quantity: 0
            },
            { 
                name: "Tee shirt Under Armour",
                cost: 15,
                quantity: 0
            }
        ],
        articlePrice: 0
    },
    getters: {
        getTotalPrice: state => {
            return (state.shoppingCart[0].cost * state.shoppingCart[0].quantity)
            + (state.shoppingCart[1].cost * state.shoppingCart[1].quantity)
            + (state.shoppingCart[2].cost * state.shoppingCart[2].quantity)
            + (state.shoppingCart[3].cost * state.shoppingCart[3].quantity)
            + (state.shoppingCart[4].cost * state.shoppingCart[4].quantity)
            + (state.shoppingCart[5].cost * state.shoppingCart[5].quantity)
        }
    },
    mutations: {
        SET_ARTICLE_PRICE(state, price) {
            state.articlePrice = price;
        },
        RESET_TOTAL_PRICE(state) {
            state.shoppingCart.forEach(item => {
                item.quantity = 0;
            })
        }
    },
    actions: {
    },
    modules: {
    }
})
