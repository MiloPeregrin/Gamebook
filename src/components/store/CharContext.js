import React, { useState } from "react";

export const CharContext = React.createContext(null);

export const CharContextProvider = (props) => {
  const [characterStats, setCharacterStats] = useState({
    skill: "-",
    stamina: "-",
    luck: "-",
  });
  const contextValue = {
    characterStats,
    setCharacterStats,
  };

  return (
    <CharContext.Provider value={contextValue}>
      {props.children}
    </CharContext.Provider>
  );
};
