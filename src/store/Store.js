import React, { createContext, useReducer } from 'react';

const initialState = {
  navigation: 'home'
}

const CHANGE = 'CHANGE';
export const action = (navigation) => ({
  type: CHANGE,
  payload: {
    navigation
  }
})


const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case CHANGE:
    return { ...state, ...payload }

  default:
    return state
  }
}


// Context
const Context = createContext();

const Store = ({ children }) => {

  const [ state, dispatch ] = useReducer(Reducer, initialState);
  const value = { state, dispatch };

  return(
    <Context.Provider value={value}>
      { children }
    </Context.Provider>
  );
};

export { Context };
export default Store;