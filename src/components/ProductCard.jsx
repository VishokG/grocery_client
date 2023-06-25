import React from 'react';
import "../styles/productcard.css";

const ProductCard = () => {
  return (
    <div className="product-card center_flex">
        <div className="product-img-container center_flex">
          <img src="https://py-shopping-cart.s3.eu-west-2.amazonaws.com/bananas.jpeg" alt="" className="product-img" />
        </div>
        <div className="product-info">
          <h4 className="product-title">
            Crispy Pink Lady Apples
          </h4>
          <p className="product-description">
            Pink lady apples are the best and you'll see just how crisp it is from the first bite. Give it a try, what can it hurt!
          </p>
          <p className="product-quantity">
            Only 3 left
          </p>
          <div className="product-bottom-wrapper">
            <p className="product-price">
              85p
            </p>
            <div className="product-options">
              <img className="product-opticon" src="./assets/addToCart.svg" alt="" />
              <img className="product-opticon" src="./assets/addToWish.svg" alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductCard;