import React from 'react';

import '../css/common.css';
import '../css/items.css';

const Option = function(props) {
    let classes;
    const outline = (props.isOutlined) ? 'outlined' : '';
    if (props.type === "color") {
        classes = "select-color " + outline;
    } else if (props.type === "size") {
        classes = "select select-size " + outline;
    } else {
        classes = "select " + outline;
    }

    return (<button className={classes} id={props.id} >
                {props.option}
            </button>);
};

export default Option;
