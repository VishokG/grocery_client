import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart, deleteItemFromCart, deleteAllUnitsFromCart } from '../../store/cartSlice';
import "../../styles/item.css";
import "../../styles/common/colors.css";
import "../../styles/common/common.css";

const Item = (props) => {
  const {id, name, img, quantity, available, offer, price} = props.values;

  // Quantity of items on offer we get for current number of items of a specific type added in cart
  const offerItemQuantity = Math.floor(quantity/offer.product1_quantity_required);

  // If an offer exists on the purchase of the current product, an additional card is rendered at the bottom
  const offerExists = Object.keys(offer).length === 0?false:true;

  const dispatch = useDispatch();

  //Deletes one item only when user clicks MINUS button
  const deleteOneItem = () => {
    dispatch(deleteItemFromCart(id));
  }

  //Adds one item only when user clicks PLUS button
  const addOneItem = () => {
    if(quantity >= available) {
      alert("There are no more items left in stock");
    } else {
      dispatch(addItemToCart(props.values))
    }
  }

  //Deletes all items when user clicks CROSS button
  const deleteAllItems = () => {
    dispatch(deleteAllUnitsFromCart(id));
  }

  return (
    <div className="item-container">
        <div className="item-wrapper">
            <div className="item-img-container center_flex">
                <img className="item-img" src={img} alt="" />
            </div>
            <div className="item-info">
                <p className="item-title">{name}</p>
                <span className="item-code">Product Code: PID{id}</span>
            </div>
            <div className="item-quantity">
                <div className="item-count">
                    <img className="item-opticon" src="./assets/minus.svg" alt="" onClick={deleteOneItem} />
                        <span className="item-number">{quantity}</span>
                    <img className="item-opticon" src="./assets/plus.svg" alt="" onClick={addOneItem} />
                </div>
                {available>10?"":<div className="item-availability availability limited-orange">Only {available} left</div>}
            </div>
            <div className="item-price">
                {price}
            </div>
            <div className="delete-item">
            <img className="item-opticon item-opticon-del" src="./assets/cross.svg" alt="" onClick={deleteAllItems} />
            </div>
        </div>
        {/* Code in the bottom renders a card of an attached product based on an offer of the upper product */}
        {offerExists && <div className="discount-container">
            <div className="discount-description">
                <span className="discount-offer">OFFER&nbsp;&nbsp;<br></br></span>{offer.desc}
            </div>
            <div className={`item-img-container center_flex ${offerItemQuantity > 0?"":" greyscale"}`}>
                <img className="item-img" src={offer.img} alt="" />
            </div>
            <div className={`center_flex discount-item-info ${offerItemQuantity > 0?"":" greyscale"}`} >
                <p className="discount-item-title">{offer.name}</p>
                <div className="discount-item-quantity"><span className="item-number">{offer.price}&nbsp;&nbsp;&nbsp;X&nbsp;&nbsp;&nbsp;{offerItemQuantity}</span></div>
            </div>
        </div>}
    </div>

  )
}

export default Item;