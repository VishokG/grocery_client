import React from 'react';
import "../styles/checkout.css"
import Item from './Item';

const Checkout = () => {
  return (
    <div className="checkout-container center_flex">
        <div className="checkout-wrapper">
          <h3 className="checkout-title">Checkout</h3>
          <div className="checkout">
              <div className="checkout-items">
                  <Item />
                  {/* <Item /> */}
                  {/* <Item /> */}
              </div>
              <div className="checkout-total"></div>
          </div>
        </div>
    </div>
  )
}

export default Checkout;