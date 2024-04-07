<template>
    <header>
        <router-link to="/">
            <h1 @click="resetPanier()">Tee Shirt Shop</h1>
        </router-link>
    </header>
    <p>
        <a href="../../documents/CV.pdf" download> Download the article </a>
    </p>
</template>

<script>
export default{
    name:'ArticleComponent',
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
    height: 60px;
}
h1{
    font-family: "Delicious Handrawn";
    color: white;
}
p{
    text-align: center;
}
</style>