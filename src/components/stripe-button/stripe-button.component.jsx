import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_TFGssf36qZhB1pCVpCpOwm3e00GY1pjPRq';

   const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label = 'Pay Now'
            name = 'JPetkevicius Clothing Ltd.'
            billingAddress
            shippingAddress
            currency = 'EUR'
            image = 'https://sendeyo.com/up/d/f3eb2117da'
            description = {`Your total is €${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishableKey}
        />
    );
};

export default StripeCheckoutButton;
