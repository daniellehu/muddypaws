import React from 'react';

import '../css/common.css';
import '../css/store.css';

const Card = function(props) {
    const itemIndex = "card card-" + props.keyid;
    return (
    <div className={itemIndex} onClick={(keyid) => {props.selectItem(props.keyid)}}>
        <div className="cardLink">
            <img src={props.img} alt={props.item} />
            <p><b>{props.item}</b></p>
            <p>{props.price}</p>
        </div>
    </div>
    );
};

export default Card;