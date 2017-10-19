import React from 'react';

import '../css/common.css';
import '../css/cart.css';

import constants from '../items/constants';

const CartItem = function(props) {

    return (
    <div className="item">
        <h3 className="item-number">{props.itemNumber}</h3>
        <div className="img">
            <img src={constants.items[props.itemId].img} 
                alt={constants.items[props.itemId].item} />
        </div>
        <div className="text">
            <div className="text-header">
                <p className="item-name">{constants.items[props.itemId].item}</p>
                <p className="item-price">${constants.items[props.itemId].price}</p>
            </div>
            <p className="item-description">
            Type: {props.type}<br />
            Size: {props.size}<br />
            Color: {props.color}<br />
            </p>
            <div className="text-footer">
                <p className="quantity">Qty: 
                    <input type="text" className="quantityInput" id={`quantity-${props.index}`}
                        defaultValue={props.quantity}
                        onKeyUp={(e) => props.changeQuantity(e)} />
                </p>
                <p className="remove" onClick={(e) => props.removeItem(e)} id={`remove-${props.index}`}>
                    remove
                </p>
            </div>
        </div>
    </div>
    );
};

export default CartItem;
