<template>
    <div id="paypal-button-container"></div> 
</template> 

<script setup>
import { loadScript } from '@paypal/paypal-js'
import { useStore } from 'vuex'
import { ref, onMounted } from 'vue'

// Change to your CLIENT ID gotten from the developer dashboard
const CLIENT_ID = 'AVZOKK4SJyLcHxpBrhdACR9N-zZZ9KwTiUReMZsUcgibeqefK-HJq-oMDY3S0NsBv0qvWiO0AW2r77V7'
/*Client ID Live : AVZOKK4SJyLcHxpBrhdACR9N-zZZ9KwTiUReMZsUcgibeqefK-HJq-oMDY3S0NsBv0qvWiO0AW2r77V7
Client ID Sandbox : AfMIDAWqa_pSP2k1YSFKAVTcf2OfgSa5XFCNddL_YGysLum6lzJjS3CTbrCBiA5l9_br9AB3fr7DyKJH
Sandbox account email : sb-6varj29523569@personal.example.com
Sandbox account password : g&I%LBX7*/

const totalPrice = ref(0)
const articlePrice = ref(1)

// Retrieve total price from Vuex store
const store = useStore()
const getTotalPrice = () => store.getters.getTotalPrice
const getArticlePrice = () => store.getters.getArticlePrice

onMounted(() => {
    // Load PayPal script
    loadScript({ 'client-id': CLIENT_ID }).then((paypal) => {
        paypal.Buttons({
            createOrder: function(data, actions){
                let value;
                if (articlePrice.value > 0) {
                    value = articlePrice.value.toString();
                } else {
                    value = totalPrice.value.toString();
                }
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: value
                        }
                    }]
                })
            },
            onApprove: function(data, actions){
                return actions.order.capture().then(function(details){
                  alert("Transaction OK : "+details.payer.name.given_name);
                })
            },
            onError: function (err){
                console.error('Payment error :', err);
                alert("Payment failed !");
            }
        }).render("#paypal-button-container");
    })
})

// Update total price when component is mounted
onMounted(() => {
    totalPrice.value = getTotalPrice()
    articlePrice.value = getArticlePrice()
})
</script>

<style scoped>
#paypal-button-container {
    width: 50%;
    margin: auto;
}
@media screen and (max-width: 600px){
    #paypal-button-container {
        width: 90%;
    }
}
</style>