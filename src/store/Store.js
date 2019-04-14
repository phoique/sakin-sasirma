import React, { createContext, useReducer } from 'react';

// Default state
const initialState = {
  navigation: 'home',
}

// Action type
const Nav = 'Nav';

// Action
export const action = (navigation) => ({
  type: Nav,
  payload: {
    navigation
  }
})

// Reducer
const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case Nav:
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