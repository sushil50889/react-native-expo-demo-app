import { PaymentsStripe as Stripe } from 'expo-payments-stripe';
Stripe.setOptionsAsync({
    publishableKey: 'pk_test_Dmmc5tX4ZDWYdjKZX8SB5cSn', // Your key
    // androidPayMode: 'test',
    // merchantId: 'your_merchant_id',
});

// const theme = {
//       primaryBackgroundColor: 
//       secondaryBackgroundColor: 
//       primaryForegroundColor: 
//       secondaryForegroundColor: 
//       accentColor: 
//       errorColor:
// }


  export async function paymentRequestWithCardFormAsync({billingAddress, shippingAddress}) {

    const options = {
        requiredBillingAddressFields: 'full',
        prefilledInformation: {
          billingAddress,
          shippingAddress,
        },
        // theme   
    }

    try {
        const token = await Stripe.paymentRequestWithCardFormAsync(options);
        if(token){
          console.log('token   : ', token);
          return token;
        }
    } catch (error) {
        console.log('error   : ', error);
        return false;
    }
    
  }

    