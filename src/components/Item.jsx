import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart, deleteItemFromCart, deleteAllUnitsFromCart } from '../store/cartSlice';
import "../styles/item.css";

const Item = (props) => {

  console.log(props.values);

  const offer = Object.keys(props.values.offer).length === 0?false:true;
  const dispatch = useDispatch();

  const handleClick = (num) => {
    if(num === -1) {
      dispatch(deleteItemFromCart(props.values.id))
    } else if(num === 1) {
      dispatch(addItemToCart(props.values))
    } else {
      dispatch(deleteAllUnitsFromCart(props.values.id));
    }
  }

  return (
    <div className="item-container">
        <div className="item-wrapper">
            <div className="item-img-container center_flex">
                <img className="item-img" src={props.values.img} alt="" />
            </div>
            <div className="item-info">
                <p className="item-title">{props.values.name}</p>
                <span className="item-code">Product Code: 239JU3C</span>
            </div>
            <div className="item-quantity">
                <div className="item-count">
                    <img className="item-opticon" src="./assets/minus.svg" alt="" onClick={() => handleClick(-1)} />
                        <span className="item-number">{props.values.quantity}</span>
                    <img className="item-opticon" src="./assets/plus.svg" alt="" onClick={() => handleClick(1)} />
                </div>
                <div className="item-availability">Only 5 left</div>
            </div>
            <div className="item-price">
                {props.values.price}
            </div>
            <div className="delete-item">
            <img className="item-opticon item-opticon-del" src="./assets/cross.svg" alt="" onClick={() => handleClick(0)} />
            </div>
        </div>
        {offer && <div className="discount-container">
            <div className="discount-description">
                <span className="discount-offer">OFFER&nbsp;&nbsp;<br></br></span>{props.values.offer.desc}
            </div>
            <div className="item-img-container center_flex">
                <img className="item-img" src={props.values.offer.img} alt="" />
            </div>
            <div className="item-info center_flex discount-item-info">
                <p className="item-title">{props.values.offer.name}</p>
                <div className="item-availability discount-item-availability"><span className="item-number">X&nbsp;&nbsp;&nbsp;{props.values.offer.prdouct2_quantity}</span></div>
            </div>
            {/* <div className="item-quantity disc-item-quantity">
                <div className="item-count">Quantity</div>
                <div className="item-availability"><span className="item-number">2</span></div>
            </div> */}
        </div>}
    </div>

  )
}

export default Item;