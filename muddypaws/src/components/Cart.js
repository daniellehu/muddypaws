import React from 'react';

import CartItem from './CartItem';

import '../css/common.css';
import '../css/cart.css';

import constants from '../items/constants';

let cartTotal = 0;

const beautify = function(s) {
    s = s.replace("_", " ");
    return s[0].toUpperCase() + s.slice(1,);
};

const generateCartItems = function(shoppingCart, changeQuantity, removeItem) {
    if (shoppingCart.length === 0) {
        return (<p>No items in the cart!</p>);
    }

    return shoppingCart.map(function(item, index) {
        const type = beautify(item.type);
        const size = beautify(item.size);
        const color = beautify(item.color);
        return <CartItem 
                key = {index}
                index = {index}
                itemId = {item.itemId}
                quantity = {item.quantity}
                type = {type}
                size = {size}
                color = {color}
                changeQuantity={changeQuantity}
                removeItem={removeItem}
               />
    });
};

const generateCosts = function(shoppingCart) {
    return shoppingCart.map(function(item, index) {
        const indexId = "costs-" + index;
        const subprice = (parseFloat(constants.items[item.itemId].price) * 
                          parseFloat(item.quantity)).toFixed(2);
        cartTotal = (parseFloat(cartTotal) + parseFloat(subprice)).toFixed(2);

        const type = beautify(item.type);
        const size = beautify(item.size);
        const color = beautify(item.color);
        
        return (
        <div className="costs-item" id={indexId} key={indexId}>
            <p>{item.quantity} {constants.items[item.itemId].item}<br /> 
                ({type}, {size}, {color})</p>
            <p className="right-align">${subprice}</p>
        </div>
        );
    });
}

const Cart = function(props) {
    cartTotal = 0;
    return (
    <div className="cartContainer container">
		<div>
			<h3>Your Shopping Cart</h3>
			<div className="row shoppingCart" id="item-list">
				{generateCartItems(props.shoppingCart, props.changeQuantity, props.removeItem)}
			</div>
            <div>
				<a className="return" onClick={props.goToStore}>&#60; Return to store</a>
			</div>
		</div>
		<div className="summary">
			<h3>Order Summary</h3>
			<div className="costs">
                {generateCosts(props.shoppingCart)}
			</div>
			<div className="total right-align">
				Total: <span id="total">${cartTotal}</span>
			</div>
			<div className="row checkout">
					<div className="right-align"><a href=""><button>Checkout &#62;</button></a></div>
				</div>
		</div>
	</div>  
    );
};

export default Cart;
