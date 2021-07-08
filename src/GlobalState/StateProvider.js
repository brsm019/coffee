import React, { createContext, useContext, useReducer } from "react";

//Create a data layer
export const StateContext = createContext();

//Wrap entire app within the data layer, so can pass all components data without prop drilling
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
