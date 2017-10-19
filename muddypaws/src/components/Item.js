import React, { Component } from 'react';

import Options from './Options';

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

    selectOption(optionType, option) {
        switch (optionType) {
            case "type":
                if (this.state.type === option) {
                    this.setState({ type: null });
                } else {
                    this.setState({ type: option });
                }
                break;
            case "size":
                if (this.state.size === option) {
                    this.setState({ size: null });
                } else {
                    this.setState({ size: option });
                }
                break;
            case "color":
                if (this.state.color === option) {
                    this.setState({ color: null });
                } else {
                    this.setState({ color: option });
                }
                break;
            default: break;
        }
    }

    resetOption() {
        this.setState({ type: null, size: null, color: null });
    }

    addToShoppingCart() {
        if (!!!this.state.type || !!!this.state.size || !!!this.state.color) return;

        let alreadyAdded = -1;
        for (var i = 0; i < this.props.shoppingCart.length; i++) {
            const item = this.props.shoppingCart[i];
            if (item.type === this.state.type &&
                item.size === this.state.size &&
                item.color === this.state.color) {
                    alreadyAdded = i;
                    break;
            } 
        }
        if (alreadyAdded > -1) {
            this.props.addQtyToItem(alreadyAdded);
        } else {
            const newItem = {
                quantity: 1,
                itemId: this.props.itemId,
                type: this.state.type,
                size: this.state.size,
                color: this.state.color,
            }
            this.props.addToShoppingCart(newItem);
        }
        this.resetOption();
    }

    generateOptions() {
        return Object.keys(constants.options).map((type) => {
            return (
                <Options
                    options={constants.options[type]}
                    selected={this.state[type]}
                    option={type}
                    selectOption={this.selectOption.bind(this)}
                    key={type}
                />
            );
        });
        
    }
    
    render() {
        return (
            <div className="itemContainer">
        		<div className="item-img">
        			<img src={constants.items[this.props.itemId].img} 
                        alt={constants.items[this.props.itemId].item} />
        		</div>
        		<div className="item-info">
        			<div>
        				<h3>{constants.items[this.props.itemId].item}</h3>
        				<p>{constants.items[this.props.itemId].price}</p>
        			</div>
        			<div className="row">
                        {constants.items[this.props.itemId].description}
        			</div>			
                    {this.generateOptions()}
        			<div className="row">
            			<a className="return" onClick={this.props.prevSite}>&#60; return to store</a>
            			<div className="right-align">
                            <button id="addToCart" onClick={this.addToShoppingCart.bind(this)}>Add to Cart</button>
                        </div>
        		    </div>
    		    </div>
    	    </div>
    )};
};

export default Item;
