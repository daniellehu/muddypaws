import React, { Component } from 'react';

import Options from './Option';

import '../css/common.css';
import '../css/items.css';

import constants from '../items/constants';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: null,
            size: null,
            color: null,
        };
    }

    generateOptions() {
        return (
            <div>
                options
            </div>
        );
    }
    
    render() {
        return (
            <div className="itemContainer">
        		<div className="item-img">
        			<img src={constants.items[this.props.itemId].img} />
        		</div>
        		<div className="item-info">
        			<div>
        				<h3>{constants.items[this.props.itemId].item}</h3>
        				<p>{constants.items[this.props.itemId].price}</p>
        			</div>
        			<div className="row">
                        {constants.items[this.props.itemId].description}
        			</div>			
                    {this.generateOptions}
        			<div className="row">
            			<a className="return" onClick={this.props.prevSite}>&#60; return to store</a>
            			<div className="right-align"><button id="addToCart">Add to Cart</button></div>
        		    </div>
    		    </div>
    	    </div>
    )};
};

export default Item;
