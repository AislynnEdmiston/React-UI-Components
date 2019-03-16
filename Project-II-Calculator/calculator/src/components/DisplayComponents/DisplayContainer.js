import React from 'react';
import './Display.css';
import CalculatorDisplay from './CalculatorDisplay';

const DisplayContainer = (props) => {
    return(
        <div className='display-container'>
            <CalculatorDisplay text='0'/>
        </div>
    )
}

export default DisplayContainer;