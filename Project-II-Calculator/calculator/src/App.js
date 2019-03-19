import React from 'react';
import './App.css';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';
import DisplayContainer from './components/DisplayComponents/DisplayContainer';

const App = () => {
  return (
    <div className='calculator-container'>
      <DisplayContainer />
      <ButtonContainer />
    </div>
  );
};

export default App;
