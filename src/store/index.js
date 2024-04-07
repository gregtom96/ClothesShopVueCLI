import { createStore } from 'vuex'

export default createStore({
    state: {
        quantities: {
            itemVans: 0,
            itemCarhartt: 0,
            itemDickies: 0,
            itemLacoste: 0,
            itemTnf: 0,
            itemUnderArmour: 0
        },
        prices: {
            itemVans: 1,
            itemCarhartt: 10,
            itemDickies: 10,
            itemLacoste: 15,
            itemTnf: 15,
            itemUnderArmour: 15
        },
        names: {
            itemVans: "Tee shirt Vans",
            itemCarhartt: "Tee shirt Carhartt",
            itemDickies: "Tee shirt Dickies",
            itemLacoste: "Tee shirt Lacoste",
            itemTnf: "Tee shirt The North Face",
            itemUnderArmour: "Tee shirt Under Armour"
        },
        articlePrice: 0
    },
    getters: {
        getTotalPrice: state => {
            return (state.quantities.itemVans * state.prices.itemVans)
            + (state.quantities.itemCarhartt * state.prices.itemCarhartt)
            + (state.quantities.itemDickies * state.prices.itemDickies)
            + (state.quantities.itemLacoste * state.prices.itemLacoste)
            + (state.quantities.itemTnf * state.prices.itemTnf)
            + (state.quantities.itemUnderArmour * state.prices.itemUnderArmour)
        },
        getArticlePrice: state => {
            return state.articlePrice
        },
        getQuantities: state => {
            return state.quantities
        },
        getPrices: state => {
            return state.prices
        },
        getNames: state => {
            return state.names
        },
        getItemVansQuantity: state => {
            return state.quantities.itemVans;
        },
        getItemVansPrice: state => {
            return state.prices.itemVans;
        },
        getItemCarharttQuantity: state => {
            return state.quantities.itemCarhartt;
        },
        getItemCarharttPrice: state => {
            return state.prices.itemCarhartt;
        },
        getItemDickiesQuantity: state => {
            return state.quantities.itemDickies;
        },
        getItemDickiesPrice: state => {
            return state.prices.itemDickies;
        },
        getItemLacosteQuantity: state => {
            return state.quantities.itemLacoste;
        },
        getItemLacostePrice: state => {
            return state.prices.itemLacoste;
        },
        getItemTnfQuantity: state => {
            return state.quantities.itemTnf;
        },
        getItemTnfPrice: state => {
            return state.prices.itemTnf;
        },
        getItemUnderArmourQuantity: state => {
            return state.quantities.itemUnderArmour;
        },
        getItemUnderArmourPrice: state => {
            return state.prices.itemUnderArmour;
        }
    },
    mutations: {
        SET_ARTICLE_PRICE(state, price) {
            state.articlePrice = price;
        },
        RESET_TOTAL_PRICE(state) {
            Object.keys(state.quantities).forEach(key => {
                state.quantities[key] = 0;
            })
        }
    },
    actions: {
    },
    modules: {
    }
})
