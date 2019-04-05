import React, { createContext, useReducer } from 'react';

const initial_state = {
  navigator: 'home'
};

const Context = createContext(initial_state);

const Store = ({ children }) => {

  const [state, dispatch] = useReducer();
  const value = { state, dispatch };

  return(
    <Context.Provider value={value}>
      { children }
    </Context.Provider>
  );

}

export { Context };

export default Store;