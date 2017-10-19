import React from 'react';

import Option from './Option';

import '../css/common.css';
import '../css/items.css';

const getId = function(s) {
    return s.replace(" ", "_").toLowerCase();
};

const generateOptions = function(options, selected, type, selectOption) {
    return options.map((option) => {
        const isSelected = (selected === getId(option));
        return <Option 
                option={option}
                isSelected={isSelected}
                id = {getId(option)}
                key = {option}
                type={type}
                selectOption={selectOption}
               />
    });
};

const Options = function(props) {
    return (
        <div className="row">
            <p>Select {props.option.charAt(0).toUpperCase() + props.option.slice(1,)}:</p>
            <div className="option" id={props.option}>
                {generateOptions(props.options, 
                                 props.selected, 
                                 props.option, 
                                 props.selectOption)}
            </div>
        </div>
    );
};

export default Options;