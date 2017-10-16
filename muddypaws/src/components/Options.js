import React from 'react';

import Option from './Option';

import '../css/common.css';
import '../css/items.css';

const getId = function(s) {
    return s.replace(" ", "_").toLowerCase();
};

const generateOptions = function(options, outlinedOption, type) {
    return options.map((option) => {
        const isOutlined = (outlinedOption === getId(option));
        return <Option 
                option={option}
                isOutline={isOutlined}
                id = {getId(option)}
                key = {option}
                type={type}
               />
    });
};

const Options = function(props) {
    return (
        <div className="row">
            <p>Select {props.option.charAt(0).toUpperCase()}:</p>
            <div className="option" id={props.option}>
                {generateOptions(props.options)}
            </div>
        </div>
    );
};

export default Options;