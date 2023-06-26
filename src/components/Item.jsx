import React from 'react';
import "../styles/item.css";

const Item = (props) => {

  const offer = true;

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
                <div className="item-count"><img className="item-opticon" src="./assets/minus.svg" alt="" /><span className="item-number">2</span><img className="item-opticon" src="./assets/plus.svg" alt="" /></div>
                <div className="item-availability">Only 5 left</div>
            </div>
            <div className="item-price">
                {props.values.price}
            </div>
            <div className="delete-item">
            <img className="item-opticon item-opticon-del" src="./assets/cross.svg" alt="" />
            </div>
        </div>
        {offer && <div className="discount-container">
            <div className="discount-description">
                <span className="offer">OFFER&nbsp;&nbsp;<br></br></span>Get a croissant free for the purchase of 7 cans of coke
            </div>
            <div className="item-img-container center_flex">
                <img className="item-img" src="https://py-shopping-cart.s3.eu-west-2.amazonaws.com/mango.jpg" alt="" />
            </div>
            <div className="item-info center_flex disc-item-info">
                <p className="item-title">Sweetest Mango</p>
            </div>
            <div className="item-quantity disc-item-quantity">
                <div className="item-count">Quantity</div>
                <div className="item-availability"><span className="item-number">2</span></div>
            </div>
        </div>}
    </div>

  )
}

export default Item;