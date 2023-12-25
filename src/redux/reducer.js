// src/redux/reducer.js
const initialState = {
    dailyQuote: {},
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_DAILY_QUOTE':
        return {
          ...state,
          dailyQuote: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;