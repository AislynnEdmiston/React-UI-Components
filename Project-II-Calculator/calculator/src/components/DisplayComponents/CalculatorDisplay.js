import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
    return(
        <div className='display-container'>
            <p className='{props.buttonStyle}'>{props.text}</p>
        </div>
    )
}

export default CalculatorDisplay;