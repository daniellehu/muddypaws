import React from 'react';

import cart from '../img/shopping-cart.svg';

import '../css/common.css';

const Header = function(props) {
    return (
        <header>
        <h2><a onClick={props.goHome}>Muddy Paws</a></h2>
        <a onClick={props.goShoppingCart}>
            <div className="shopping-cart">
                <p id="cart-count">0</p>
                <img id="cart" src={cart} alt="shopping cart" />
            </div>
        </a>
        </header>
    );
};

export default Header;