<script setup>
import { loadScript } from '@paypal/paypal-js'

// Change to your CLIENT ID gotten from the developer dashboard
const CLIENT_ID = 'AVZOKK4SJyLcHxpBrhdACR9N-zZZ9KwTiUReMZsUcgibeqefK-HJq-oMDY3S0NsBv0qvWiO0AW2r77V7'

loadScript({ 'client-id': CLIENT_ID }).then((paypal) => {
    paypal.Buttons({
        createOrder: function(data, actions){
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: '10'
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
</script>

<template>
    <div id="paypal-button-container"></div> 
</template>

<style scoped>
#paypal-button-container {
    width: 50%;
    margin: auto;
}
</style>