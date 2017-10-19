import React from 'react';

import cart from '../img/shopping-cart.svg';

import '../css/common.css';

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
    } else {
        return (
            <header>
            <h2><a onClick={props.goHome}>Muddy Paws</a></h2>
            <a onClick={props.goShoppingCart}>
                <div className="shopping-cart">
                    <p id="cart-count">{props.shoppingCartTotal}</p>
                    <img id="cart" src={cart} alt="shopping cart" />
                </div>
            </a>
            </header>
        );
    }
};

export default Header;