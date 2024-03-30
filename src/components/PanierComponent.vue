<template>
    <header>
        <router-link to="/">
            <h1>Tee Shirt Shop</h1>
        </router-link>
    </header>
    <main>
        <p> Total : {{ getTotalPrice }}€ </p>
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
        ...mapGetters(['getTotalPrice'])
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
</style>
