import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "../styles/checkout.css"
import Item from './Item';

const Checkout = () => {

  const cart = useSelector(state => state.cart.value);
  console.log(cart);

  return (
    <div className="checkout-container center_flex">
        <div className="checkout-wrapper">
          <h3 className="checkout-title">Checkout</h3>
          <div className="checkout">
              <div className="checkout-items">
                  {cart.map(item => <Item values={item} />)}
              </div>
              <div className="checkout-total">
                
              </div>
          </div>
        </div>
    </div>
  )
}

export default Checkout;