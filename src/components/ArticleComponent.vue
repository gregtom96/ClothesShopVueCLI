<template>
    <header>
        <SideMenuComponent />
        <div class="titre">
            <router-link to="/">
                <h1 @click="resetPanier()">Tee Shirt Shop</h1>
            </router-link>
        </div>
    </header>
    <main>
        <p> Thanks for buying on our website ! </p>
    </main>
</template>

<script>
import SideMenuComponent from '@/components/SideMenuComponent.vue'

export default{
    name:'ArticleComponent',
    components: {
        SideMenuComponent
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
}
h1{
    font-family: "Delicious Handrawn";
    color: white;
}
p{
    text-align: center;
}
</style>