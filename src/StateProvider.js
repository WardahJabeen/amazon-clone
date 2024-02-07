// react context api is kind of like Redux

// setup data layer
// We need this to track the basket
import React, { createContext, useContext, useReducer } from "react"

// data layer
export const StateContext = createContext();

// build provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {/* children is the App */}
        {children}
    </StateContext.Provider>
)


// this is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);