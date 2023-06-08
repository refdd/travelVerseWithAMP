"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext();

const initialState = {
  Asia: false,
  Africa: false,
  Europe: false,
  Latin: false,
  Multi: false,
  type: "",
};

export const ContextProvider = ({ children }) => {
  const [isClicked, setIsClicked] = useState(initialState);

  // set initialState in single tours
  const handleClick = (clicked, type) =>
    setIsClicked({ ...initialState, [clicked]: true, type: clicked });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider
      value={{
        handleClick,
        setIsClicked,
        isClicked,
        initialState,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
