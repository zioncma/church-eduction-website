import React, { createContext, useState } from "react";
// import PropTypes from "prop-types";

export const AppContext = createContext();

export const AppContextProvider = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [item, setItem] = useState("");
  
  function updateIsLoading(v) {
    setIsLoading(v);
  }

  function updateItem(v) {
    setItem(v);
  }

  return (
    <AppContext.Provider value={{isLoading, updateIsLoading, item, updateItem}}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;