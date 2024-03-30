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
            itemVans: 10,
            itemCarhartt: 10,
            itemDickies: 10,
            itemLacoste: 15,
            itemTnf: 15,
            itemUnderArmour: 15
        }
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
        getQuantities: state => {
            return state.quantities
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
    },
    actions: {
    },
    modules: {
    }
})
