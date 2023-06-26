import React from 'react';
import { useSelector } from 'react-redux';
import Item from '../components/Checkout/Item';
import Subtotal from '../components/Checkout/Subtotal';
import "../styles/checkout.css"

const Checkout = () => {
  const cart = useSelector(state => state.cart.value);

  return (
    <div className="checkout-container center_flex">
        <div className="checkout-wrapper">
          <h3 className="checkout-title">Checkout</h3>
          <div className="checkout">
              <div className="checkout-items">
                  {cart.map(item => <Item values={item} key={item.id} />)}
              </div>
              <Subtotal />
          </div>
        </div>
    </div>
  )
}

export default Checkout;