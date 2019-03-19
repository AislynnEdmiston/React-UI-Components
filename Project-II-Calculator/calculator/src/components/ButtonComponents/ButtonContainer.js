import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';


const ButtonContainer = (props) => {
    return(
        <div className='button-container'>
            <ActionButton text='clear' buttonStyle='action-button'/>
            <NumberButton text='÷' buttonStyle='symbol-button'/>

            <NumberButton text='7' buttonStyle='number-button'/>
            <NumberButton text='8' buttonStyle='number-button'/>
            <NumberButton text='9' buttonStyle='number-button'/>
            <NumberButton text='X' buttonStyle='symbol-button'/>

            <NumberButton text='4' buttonStyle='number-button'/>
            <NumberButton text='5' buttonStyle='number-button'/>
            <NumberButton text='6' buttonStyle='number-button'/>
            <NumberButton text='-' buttonStyle='symbol-button'/>

            <NumberButton text='1' buttonStyle='number-button'/>
            <NumberButton text='2' buttonStyle='number-button'/>
            <NumberButton text='3' buttonStyle='number-button'/>
            <NumberButton text='+' buttonStyle='symbol-button'/>

            <ActionButton text='0' buttonStyle='action-button'/>
            <NumberButton text='=' buttonStyle='symbol-button'/>
        </div>
    )
}

export default ButtonContainer;