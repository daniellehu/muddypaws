import React from 'react';

import Card from './Card';

import '../css/common.css';
import '../css/store.css';

import constants from '../items/constants';

const generateCards = function(selectItem) {
    return Object.keys(constants.items).map((key) => {
        return <Card 
                    item={constants.items[key].item}
                    price={constants.items[key].price}
                    img={constants.items[key].img}
                    selectItem={selectItem}
                    keyid={key}
                    key={key}
               />
    });
}

const Shop = function(props) {
    return (
    <div className="container">
        <h3>Store Items</h3>
        <p>Each item comes in a variety of colors, and is available for both Dogs and Cats of various sizes</p>
        <div className="shopRow">
            {generateCards(props.selectItem)}
        </div>
    </div>
    );
};

export default Shop;