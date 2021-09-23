import React, { useState } from "react";

export const CharContext = React.createContext(null);

export const CharContextProvider = (props) => {
  const [characterStats, setCharacterStats] = useState({
    defaultSkillValue: "",
    defaultStaminaValue: "",
    defaultLuckValue: "",
    currentSkillValue: "-",
    currentStaminaValue: "-",
    currentLuckValue: "-",
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
