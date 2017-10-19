import React from 'react';

import CartItem from './CartItem';

import cart from '../img/shopping-cart.svg';
import '../css/common.css';

const beautify = function(s) {
    s = s.replace("_", " ");
    return s[0].toUpperCase() + s.slice(1,);
};

const generateCartItems = function(shoppingCart) {
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
                cartPreview
               />
    });
};

const Header = function(props) {

    if (props.addedItemNotification) {
        return (
            <header>
            <h2><a onClick={props.goHome}>Muddy Paws</a></h2>
            <a onClick={props.goShoppingCart}>
                <div className="shopping-cart">
                    <p id="cart-count">{props.shoppingCartTotal}</p>
                    <img id="cart" src={cart} alt="shopping cart" />
                </div>
            </a>
            <div className="addNotificationArrow"></div>
            <div className="addNotification">Item Added to Cart</div>
            </header>
        );
    } else if (props.showCartPreview) {
        return (
            <header>
            <h2><a onClick={props.goHome}>Muddy Paws</a></h2>
            <a class="cartButton" onClick={props.goShoppingCart}>
                <div className="shopping-cart"
                    onMouseLeave={(e) => {props.unpreviewCart(e)}} >
                    <p id="cart-count">{props.shoppingCartTotal}</p>
                    <img id="cart" src={cart} alt="shopping cart" />
                </div>
            </a>
            <div className="invis" onMouseEnter={(e) => {props.previewCart(e)}}
                onMouseLeave={(e) => {props.unpreviewCart(e)}}>
                <div className="headerArrow"></div>
                <div className="cartPreview">
                    {generateCartItems(props.shoppingCart)}
                </div>
            </div>
            </header>
        );
    } else {
        return (
            <header>
            <h2><a onClick={props.goHome}>Muddy Paws</a></h2>
            <a onClick={props.goShoppingCart}>
                <div className="shopping-cart" 
                    onMouseEnter={(e) => {props.previewCart(e)}} >
                    <p id="cart-count">{props.shoppingCartTotal}</p>
                    <img id="cart" src={cart} alt="shopping cart" />
                </div>
            </a>
            </header>
        );
    }
};

export default Header;