/* eslint-disable default-param-last */
const requestDataReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_REQUEST_DATA':
      return [...state, payload];
    default:
      return state;
  }
};

export default requestDataReducer;
