import React, { Component } from 'react';
import PropTypes from 'prop-types';

import cart from '../img/shopping-cart.svg';

import '../css/common.css';

const Header = function(props) {
    return (
        <header>
        <h2><a href="#" onClick={props.goHome}>Muddy Paws</a></h2>
        <a href="#" onClick={props.goShoppingCart}>
            <div class="shopping-cart">
                <p id="cart-count">0</p>
                <img id="cart" src={cart} />
            </div>
        </a>
        </header>
    );
};

Header.propTypes = {
    site: PropTypes.string.isRequired,
}

export default Header;