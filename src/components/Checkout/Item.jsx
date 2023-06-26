import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart, deleteItemFromCart, deleteAllUnitsFromCart } from '../../store/cartSlice';
import "../../styles/item.css";
import "../../styles/common/colors.css";
import "../../styles/common/common.css";

const Item = (props) => {
  const {id, name, img, quantity, available, offer, price} = props.values;

  const offerItemQuantity = Math.floor(quantity/offer.product1_quantity_required);

  const offerExists = Object.keys(offer).length === 0?false:true;
  const dispatch = useDispatch();

  const handleClick = (num) => {
    if(num === -1) {
      dispatch(deleteItemFromCart(id))
    } else if(num === 1) {
      if(quantity >= available) {
        alert("There are no more items left in stock");
      } else {
        dispatch(addItemToCart(props.values))
      }
    } else {
      dispatch(deleteAllUnitsFromCart(id));
    }
  }

  return (
    <div className="item-container">
        <div className="item-wrapper">
            <div className="item-img-container center_flex">
                <img className="item-img" src={img} alt="" />
            </div>
            <div className="item-info">
                <p className="item-title">{name}</p>
                <span className="item-code">Product Code: 239JU3C</span>
            </div>
            <div className="item-quantity">
                <div className="item-count">
                    <img className="item-opticon" src="./assets/minus.svg" alt="" onClick={() => handleClick(-1)} />
                        <span className="item-number">{quantity}</span>
                    <img className="item-opticon" src="./assets/plus.svg" alt="" onClick={() => handleClick(1)} />
                </div>
                {available>10?"":<div className="item-availability availability limited-orange">Only {available} left</div>}
            </div>
            <div className="item-price">
                {price}
            </div>
            <div className="delete-item">
            <img className="item-opticon item-opticon-del" src="./assets/cross.svg" alt="" onClick={() => handleClick(0)} />
            </div>
        </div>
        {offerExists && <div className="discount-container">
            <div className="discount-description">
                <span className="discount-offer">OFFER&nbsp;&nbsp;<br></br></span>{offer.desc}
            </div>
            <div className={`item-img-container center_flex ${offerItemQuantity > 0?"":" greyscale"}`}>
                <img className="item-img" src={offer.img} alt="" />
            </div>
            <div className={`item-info center_flex discount-item-info ${offerItemQuantity > 0?"":" greyscale"}`} >
                <p className="item-title">{offer.name}</p>
                <div className="item-availability discount-item-availability"><span className="item-number">{offer.price}&nbsp;&nbsp;&nbsp;X&nbsp;&nbsp;&nbsp;{offerItemQuantity}</span></div>
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