import React, { useContext } from "react";
import { CharContext } from "../store/CharContext";

const CharacterStats = (props) => {
  const { characterStats, setCharacterStats } = useContext(CharContext);

  return (
    <div className="row character-stats">
      <div className="col stats left borderline">
        <div className="stat-skill stat-field">
          <span>Umění boje</span>
          <p></p>
          <span className="font-size">{characterStats.currentSkillValue}</span>
        </div>
      </div>
      <div className="col stats mid borderline">
        <div className="stat-stamina stat-field">
          <span>Stamina</span>
          <p></p>
          <span className="font-size">
            {characterStats.currentStaminaValue}
          </span>
        </div>
      </div>
      <div className="col stats right borderline">
        <div className="stat-luck stat-field">
          <span>Štěstí</span>
          <p></p>
          <span className="font-size">{characterStats.currentLuckValue}</span>
        </div>
      </div>
    </div>
  );
};

export default CharacterStats;
