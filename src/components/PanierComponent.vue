<template>
    <header>
        <router-link to="/">
            <h1 @click="resetPanier()">Tee Shirt Shop</h1>
        </router-link>
    </header>
    <main>
        <p v-if="getArticlePrice !== 0"> Total : {{ getArticlePrice }}€ </p>
        <p v-else> Total : {{ getTotalPrice }}€ </p>
        <PaypalButtons />
    </main>
</template>

<script>
import PaypalButtons from '@/components/PaypalButtons.vue'
import { mapGetters } from 'vuex'

export default {
    name: 'PanierComponent',
    components: {
        PaypalButtons
    },
    computed: {
        ...mapGetters(['getTotalPrice', 'getArticlePrice'])
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
    justify-content: left;
    align-items: center;
    background-color: black;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 10px;
    height: 80px;
}
h1{
    font-family: "Delicious Handrawn";
    color: white;
}
p{
    text-align: center;
}
</style>
