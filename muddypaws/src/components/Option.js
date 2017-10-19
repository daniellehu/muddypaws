import React from 'react';

import '../css/common.css';
import '../css/items.css';

const Option = function(props) {
    let classes, selected;
    if (props.type === "color") {
        selected = (props.isSelected) ? 'outlined' : '';
    } else {
        selected = (props.isSelected) ? 'selected' : '';
    }
    
    if (props.type === "color") {
        classes = "select-color " + selected;
    } else if (props.type === "size") {
        classes = "select select-size " + selected;
    } else {
        classes = "select " + selected;
    }

    return (<button className={classes} 
                    id={props.id} 
                    onClick={(type, id) => {props.selectOption(props.type, props.id)}}
            >
                {props.option}
            </button>);
};

export default Option;
