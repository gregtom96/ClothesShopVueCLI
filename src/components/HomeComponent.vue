<template>
    <div class="component_home">
        <HoverPanier />
        <header>
            <SideMenuComponent />
            <div class="titre">
                <h1>Tee Shirt Shop</h1>
            </div>
            <div class="panier">
                <img src="../../images/panier.png" alt="panier" class="hover-image">
                <div class="menu">
                    <div class="selection">
                        <!--ici seront ajoutés les articles mis au panier-->
                    </div>   
                    <p class="delete" v-on:click="deleteSelection()">Delete all</p>
                    <router-link to="/panier">
                        <button class="total">
                            Pay {{ getTotalPrice }}€
                        </button> 
                    </router-link>
                </div>
            </div>
        </header>
        <main>
            <div class="element">
                <img src="../../images/tee_shirt_vans.jpg" alt="vans">
                <span> 
                    {{ getItemVansPrice }}€ <br>
                    Size : S <br>
                    100% cotton <br>
                </span>
                <button class="buy" @click="buyItem('itemVans')">Buy</button>
                <button class="cart" @click="addItemToCart('itemVans')">Add to cart</button>
            </div>
            <div class="element">
                <img src="../../images/tee_shirt_carhartt.jpg" alt="carhartt">
                <span> 
                    {{ getItemCarharttPrice }}€ <br>
                    Size : S <br>
                    100% cotton <br>
                </span>
                <button class="buy" @click="buyItem('itemCarhartt')">Buy</button>
                <button class="cart" @click="addItemToCart('itemCarhartt')">Add to cart</button>
            </div>
            <div class="element">
                <img src="../../images/tee_shirt_dickies.jpg" alt="dickies">
                <span> 
                    {{ getItemDickiesPrice }}€ <br>
                    Size : S <br>
                    100% cotton <br>
                </span>
                <button class="buy" @click="buyItem('itemDickies')">Buy</button>
                <button class="cart" @click="addItemToCart('itemDickies')">Add to cart</button>
            </div>
            <div class="element">
                <img src="../../images/tee_shirt_lacoste.jpg" alt="lacoste">
                <span> 
                    {{ getItemLacostePrice }}€ <br>
                    Size : S <br>
                    100% cotton <br>
                </span>
                <button class="buy" @click="buyItem('itemLacoste')">Buy</button>
                <button class="cart" @click="addItemToCart('itemLacoste')">Add to cart</button>
            </div>
            <div class="element">
                <img src="../../images/tee_shirt_tnf.jpg" alt="thenorthface">
                <span> 
                    {{ getItemTnfPrice }}€ <br>
                    Size : S <br>
                    100% cotton <br>
                </span>
                <button class="buy" @click="buyItem('itemTnf')">Buy</button>
                <button class="cart" @click="addItemToCart('itemTnf')">Add to cart</button>
            </div>
            <div class="element">
                <img src="../../images/tee_shirt_under_armour.jpg" alt="under_armour">
                <span> 
                    {{ getItemUnderArmourPrice }}€ <br>
                    Size : S <br>
                    100% cotton <br>
                </span>
                <button class="buy" @click="buyItem('itemUnderArmour')">Buy</button>
                <button class="cart" @click="addItemToCart('itemUnderArmour')">Add to cart</button>
            </div>
        </main>
    </div>
</template>

<script>
// @ is an alias to /src
import SideMenuComponent from '@/components/SideMenuComponent.vue'
import HoverPanier from '@/components/HoverPanier.vue'
import { mapGetters } from 'vuex'

export default {
    name: 'HomeComponent',
    components: {
        HoverPanier,
        SideMenuComponent
    },
    computed: {
        ...mapGetters(['getTotalPrice', 'getArticlePrice',
        'getQuantities', 'getPrices','getNames',
        'getItemVansQuantity', 'getItemVansPrice',
        'getItemCarharttQuantity', 'getItemCarharttPrice',
        'getItemDickiesQuantity', 'getItemDickiesPrice',
        'getItemLacosteQuantity', 'getItemLacostePrice',
        'getItemTnfQuantity', 'getItemTnfPrice',
        'getItemUnderArmourQuantity', 'getItemUnderArmourPrice'])
    },
    methods: {
        buyItem(item){
            this.$store.commit('SET_ARTICLE_PRICE', this.getPrices[item])
            this.$router.push('/panier');
        },
        addItemToCart(item) {
            this.getQuantities[item] += 1
            this.resumeSelection(item)
        },
        resumeSelection(item) {
            let baliseSelection = document.querySelector(".selection")

            let nouveauSpan = document.createElement("span")
            nouveauSpan.textContent = this.getNames[item]
            baliseSelection.appendChild(nouveauSpan)    
            
            let nouveauBr = document.createElement("br")
            baliseSelection.appendChild(nouveauBr)
        },
        deleteSelection(){
            //Efface les articles mis dans le panier
            let baliseDelete = document.querySelector(".selection")
            baliseDelete.innerHTML = ``

            //Remet à 0 le prix total du panier
            for(let item in this.getQuantities){
            this.getQuantities[item] = 0
            }
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
    height: 60px;
    margin-bottom: 10px;
}
.titre{
    z-index: 4;
}
h1{
    font-family: "Delicious Handrawn";
    color: white;
}
.panier{
    background-color: black;
    position: relative;
    display: inline-block;
}
img[alt="panier"]{
    width: 30px;
    filter: invert(100%);
}
.menu{
    display: none;
    position: absolute;
    top: 80%;
    right: 50%;
    background-color: #fff;
    padding: 10px;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 6px 6px 10px rgba(0,0,0,0.5);
    z-index: 2; /*supérieur au z-index du main donc apparaît devant*/
}
.delete{
    text-decoration: underline;
    cursor: pointer;
    color: blue;
}
/* Supprimer le soulignement pour tous les liens sauf ceux générés par <router-link> */
a:not(router-link) {
    text-decoration: none;
}
.total{
    background-color: yellow;
    width: 150px;
    height: 40px;
    margin: 0;
    cursor: pointer;
}
.hover-image:hover + .menu {
    display: block;
}
label{
    font-family: cursive;
    color: black;
}
main{
    display: grid;
    grid-template-columns : 1fr 1fr 1fr; 
	width : 70%;
	margin: auto;
	gap : 6px;
    z-index: 1; /*inférieur au z-index de .menu donc apparaît derrière*/
}
.element{
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px black solid;
    overflow: hidden;
    padding: 0;
}
.element img{
	width : 100%;
	height: auto;
    transition: all 0.3s;
    position: relative;
    z-index: 1;
}
.element img:hover{
	transform: scale(1.1);
}
.element span{
    position: relative;
    z-index: 1;
    text-align: center;
}
main button{
    position: relative;
    z-index: 2; /*z-index supérieur à celui de l'image donc apparaitra devant */
    width: 95%;
    height: 25px;
    margin-bottom: 4px;
    border-radius: 10px;
}
/*bouton Pay*/
.buy{
    background-color: yellow;
}
/*bouton add to cart*/
.cart{
    background-color: rgb(0, 145, 255);
}

@media screen and (max-width: 1000px){
    main{
        grid-template-columns : 1fr 1fr; 
        width : 90%;
    }
}
</style>
