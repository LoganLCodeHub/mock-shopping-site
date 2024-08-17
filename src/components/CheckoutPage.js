import React from 'react';
import './CheckoutPage.css'
import CreditCardForm from './CreditCardForm';
import BillingAddress from './BillingAddress';
import "react-credit-cards-2/dist/es/styles-compiled.css";
import "bootstrap/dist/css/bootstrap.min.css";



function CheckoutPage() {
  return (
    <div className="checkoutPage">
      <h1><span id ="fontChange">Checkout</span></h1>
      <div id ="creditCardBox">
        <div id="paddingBilling"><BillingAddress /></div>
        <div id="paddingCredit"><CreditCardForm /></div>

      </div>
    </div>
  );
}

export default CheckoutPage;
