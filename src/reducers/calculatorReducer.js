// src/reducers/calculatorReducer.js
const initialState = {
    input: ''
  };
  
  export const inputDigit = (digit) => ({
    type: 'INPUT_DIGIT',
    payload: digit
  });
  
  export const clearInput = () => ({
    type: 'CLEAR_INPUT'
  });
  
  export const calculateResult = () => ({
    type: 'CALCULATE_RESULT'
  });
  
  const calculatorReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INPUT_DIGIT':
        return { ...state, input: state.input + action.payload };
      case 'CLEAR_INPUT':
        return { ...state, input: '' };
      case 'CALCULATE_RESULT':
        try {
          const result = Function('"use strict"; return (' + state.input + ')')();
          return { ...state, input: result.toString() };
        } catch (error) {
          return { ...state, input: 'Error' };
        }
      default:
        return state;
    }
  };
  
  export default calculatorReducer;
  