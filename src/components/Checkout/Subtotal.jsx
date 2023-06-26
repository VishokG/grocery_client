import React from 'react';
import { useSelector } from 'react-redux';
import "../../styles/subtotal.css"

const Subtotal = () => {
  const cart = useSelector(state => state.cart.value);

  //Adding up total value of products before discount and the individual discounts separately
  let totalValue = 0;
  let totalDiscount = 0;

  //The price retrieved from API is a string with prefix "£" Eg: "£32.3"; This function removes the prefix and returns the number
  const priceFromString = (str) => {
    return Number(str.split("£")[1]);
  }

  for(let i = 0; i < cart.length; i++) {
    const priceString = cart[i].price;
    const price = priceFromString(priceString);
    totalValue += price*cart[i].quantity;

    //offer is a parameter of each element in the cart; if an offer does not exist for that product, it is {}
    if(cart[i].offer.price !== undefined) {

      // Quantity of items on offer we get for current number of items added in cart
      const offerItemQuantity = Math.floor(cart[i].quantity/cart[i].offer.product1_quantity_required);

      const discountAmount = priceFromString(cart[i].offer.price)*offerItemQuantity;
      totalValue += discountAmount;
      totalDiscount += discountAmount;
    }
  }
  
  // All values are sent with a fixed point notation 2
  return (
    <div className="subtotal-container">
        <table className="subtotal-table">
          <tr className="subtotal-row">
            <td className="subtotal-row-label">Subtotal</td>
            <td className="subtotal-row-value">£ {totalValue.toFixed(2)}</td>
          </tr>
          <tr className="subtotal-row">
            <td className="subtotal-row-label">Discount</td>
            <td className="subtotal-row-value">£ {totalDiscount.toFixed(2)}</td>
          </tr>
          <tr className="subtotal-row">
            <td className="subtotal-row-label">Total</td>
            <td className="subtotal-row-value">£ {(totalValue-totalDiscount).toFixed(2)}</td>
            <td className="subtotal-row-button"><button className="subtotal-checkout-submit">Checkout</button></td>
          </tr>
      </table>
    </div>
  )
}

export default Subtotal;