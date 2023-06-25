import React from 'react';
import "../styles/productcard.css";

const ProductCard = (props) => {
  return (
    <div className="product-card center_flex">
        <div className="product-img-container center_flex">
          <img src={props.values.img} alt="" className="product-img" />
        </div>
        <div className="product-info">
          <h4 className="product-title">
            {props.values.name}
          </h4>
          <p className="product-description">
            {props.values.description.length>50?`${props.values.description.substring(0,50)}...`:props.values.description}
          </p>
          <p className="product-quantity">
            {props.values.available>10?"Available":`Only ${props.values.available} left`}
          </p>
          <div className="product-bottom-wrapper">
            <p className="product-price">
              {props.values.price}
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