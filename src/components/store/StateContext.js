import React, { useState } from "react";

export const StateContext = React.createContext(null);

export const StateContextProvider = (props) => {
  const [node, setNode] = useState(1);
  const contextValue = {
    node,
    setNode,
  };

  return (
    <StateContext.Provider value={contextValue}>
      {props.children}
    </StateContext.Provider>
  );
};
