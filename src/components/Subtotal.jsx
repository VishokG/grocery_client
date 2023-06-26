import React from 'react';
import "../styles/subtotal.css"

const Subtotal = () => {
  return (
    <div className="subtotal-container">
        <table className="subtotal-table">
          <tr className="subtotal-row">
            <td className="subtotal-row-label">Subtotal</td>
            <td className="subtotal-row-value">3.4</td>
          </tr>
          <tr className="subtotal-row">
            <td className="subtotal-row-label">Discount</td>
            <td className="subtotal-row-value">0</td>
          </tr>
          <tr className="subtotal-row">
            <td className="subtotal-row-label">Total</td>
            <td className="subtotal-row-value">3.4<button className="subtotal-checkout-submit">
              Checkout
            </button></td>
          </tr>
      </table>
    </div>
  )
}

export default Subtotal;