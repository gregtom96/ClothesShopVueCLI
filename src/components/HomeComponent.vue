<template>
    <header>
        <div class="titre">
            <router-link to="/">
                <h1>Tee Shirt Shop</h1>
            </router-link>
        </div>
        <div class="panier">
            <img src="../../images/panier.png" alt="panier" class="hover-image">
            <div class="menu">
                <span>Your selection :</span>
                    <div class="selection">
                        <!--ici seront ajoutés les articles mis au panier-->
                    </div>   
                <p class="delete" v-on:click="deleteSelection()">Delete all</p>
                <router-link to="/panier">
                    <button class="total">
                        Total : {{ getTotalPrice }}€
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
            <button class="buy">Buy</button>
            <button class="cart" @click="addItemToCart('itemVans')">Add to cart</button>
        </div>
        <div class="element">
            <img src="../../images/tee_shirt_carhartt.jpg" alt="carhartt">
            <span> 
                {{ getItemCarharttPrice }}€ <br>
                Size : S <br>
                100% cotton <br>
            </span>
            <button class="buy">Buy</button>
            <button class="cart" @click="addItemToCart('itemCarhartt')">Add to cart</button>
        </div>
        <div class="element">
            <img src="../../images/tee_shirt_dickies.jpg" alt="dickies">
            <span> 
                {{ getItemDickiesPrice }}€ <br>
                Size : S <br>
                100% cotton <br>
            </span>
            <button class="buy">Buy</button>
            <button class="cart" @click="addItemToCart('itemDickies')">Add to cart</button>
        </div>
        <div class="element">
            <img src="../../images/tee_shirt_lacoste.jpg" alt="lacoste">
            <span> 
                {{ getItemLacostePrice }}€ <br>
                Size : S <br>
                100% cotton <br>
            </span>
            <button class="buy">Buy</button>
            <button class="cart" @click="addItemToCart('itemLacoste')">Add to cart</button>
        </div>
        <div class="element">
            <img src="../../images/tee_shirt_tnf.jpg" alt="thenorthface">
            <span> 
                {{ getItemTnfPrice }}€ <br>
                Size : S <br>
                100% cotton <br>
            </span>
            <button class="buy">Buy</button>
            <button class="cart" @click="addItemToCart('itemTnf')">Add to cart</button>
        </div>
        <div class="element">
            <img src="../../images/tee_shirt_under_armour.jpg" alt="under_armour">
            <span> 
                {{ getItemUnderArmourPrice }}€ <br>
                Size : S <br>
                100% cotton <br>
            </span>
            <button class="buy">Buy</button>
            <button class="cart" @click="addItemToCart('itemUnderArmour')">Add to cart</button>
        </div>
    </main>
    <HoverPanier />
</template>

<script>
// @ is an alias to /src
import HoverPanier from '@/components/HoverPanier.vue'
import { mapGetters } from 'vuex'

export default {
    name: 'HomeComponent',
    components: {
        HoverPanier
    },
    data() {
        return{
            names: {
                itemVans: "Tee shirt Vans",
                itemCarhartt: "Tee shirt Carhartt",
                itemDickies: "Tee shirt Dickies",
                itemLacoste: "Tee shirt Lacoste",
                itemTnf: "Tee shirt The North Face",
                itemUnderArmour: "Tee shirt Under Armour"
            }
        }
    },
    computed: {
        ...mapGetters(['getTotalPrice','getQuantities',
        'getItemVansQuantity', 'getItemVansPrice',
        'getItemCarharttQuantity', 'getItemCarharttPrice',
        'getItemDickiesQuantity', 'getItemDickiesPrice',
        'getItemLacosteQuantity', 'getItemLacostePrice',
        'getItemTnfQuantity', 'getItemTnfPrice',
        'getItemUnderArmourQuantity', 'getItemUnderArmourPrice'])
    },
    methods: {
        addItemToCart(item) {
            this.getQuantities[item] += 1
            this.resumeSelection(item)
        },
        resumeSelection(item) {
            let baliseSelection = document.querySelector(".selection")

            let nouveauSpan = document.createElement("span")
            nouveauSpan.textContent = this.names[item]
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
    padding-left: 10px;
    padding-right: 10px;
    height: 80px;
    margin-bottom: 10px;
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
    top: 100%;
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
    border-radius: 5px;
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
        width : 80%;
    }
}
@media screen and (max-width: 600px){
    main{
        grid-template-columns : 1fr; 
        width : 90%;
    }
}
</style>
