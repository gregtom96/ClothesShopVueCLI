<template>
    <div class="panier_component">
        <header>
            <SideMenuComponent />
            <div class="titre">
                <router-link to="/">
                    <h1 @click="resetPanier()">Tee Shirt Shop</h1>
                </router-link>
            </div>
        </header>
        <main>
            <p v-if="articlePrice !== 0"> Total : {{ articlePrice }}€ </p>
            <p v-else> Total : {{ getTotalPrice }}€ </p>
            <PaypalButtons />     
        </main>
    </div>
</template>

<script>
import PaypalButtons from '@/components/PaypalButtons.vue'
import SideMenuComponent from '@/components/SideMenuComponent.vue'
import { mapState, mapGetters } from 'vuex'

export default {
    name: 'PanierComponent',
    components: {
        PaypalButtons,
        SideMenuComponent
    },
    computed: {
        ...mapState(['articlePrice']),
        ...mapGetters(['getTotalPrice'])
    },
    methods: {
        resetPanier(){
            this.$store.commit('SET_ARTICLE_PRICE', 0)
            this.$store.commit('RESET_TOTAL_PRICE')
        }
    }
}
</script>

<style scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    margin-bottom: 10px;
    height: 60px;
    margin: 0;
}
.titre{
    margin: 0 auto;
    z-index: 4;
}
h1{
    font-family: "Delicious Handrawn";
    color: white;
}
main{
    position: relative;
    z-index: 1;
}
p{
    text-align: center;
}
</style>
