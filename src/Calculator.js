// src/Calculator.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { inputDigit, clearInput, calculateResult } from './reducers/calculatorReducer';

function Calculator() {
  const input = useSelector(state => state.input);
  const dispatch = useDispatch();

  return (
    <div className="calculator">
<div style={{ textAlign: 'center', color: '#C71585' , fontFamily: 'cursive' }}>

      <h1>React-Redux Calculator</h1> {/* <-- This is the new heading */}
      
   </div>
      
      <div className="display">{input}</div>
      <div className="buttons">
        <button onClick={() => dispatch(clearInput())}>C</button>
        {[1,2,3,'+',4,5,6,'-',7,8,9,'*',0,'.','='].map((btn, i) => (
          <button
            key={i}
            onClick={() => btn === '=' ? dispatch(calculateResult()) : dispatch(inputDigit(btn))}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
