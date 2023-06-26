import React from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart, deleteItemFromCart } from '../store/cartSlice';
import "../styles/productcard.css";

const ProductCard = (props) => {

  const {id, img, name, description, available, price} = props.values;

  const dispatch = useDispatch();
  const inCart = useRef(false);

  const handleCart = () => {
    if(inCart.current) {
      dispatch(deleteItemFromCart(id));
    } else {
      dispatch(addItemToCart({id, img, name, price, offer: {}}));
    }
    inCart.current = !inCart.current;
  }

  return (
    <div className="product-card center_flex">
        <div className="product-img-container center_flex">
          <img src={img} alt="" className="product-img" />
        </div>
        <div className="product-info">
          <h4 className="product-title">
            {name}
          </h4>
          <p className="product-description">
            {description.length>50?`${description.substring(0,50)}...`:props.values.description}
          </p>
          <p className="product-quantity">
            {available>10?"Available":`Only ${available} left`}
          </p>
          <div className="product-bottom-wrapper">
            <p className="product-price">
              {price}
            </p>
            <div className="product-options">
              <img className="product-opticon" src="./assets/addToCart.svg" alt="" onClick={handleCart}/>
              <img className="product-opticon" src="./assets/addToWish.svg" alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductCard;