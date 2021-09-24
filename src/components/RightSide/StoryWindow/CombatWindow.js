import React from "react";

function CombatWindow() {
  // const audio = new Audio("/dice-roll-sound.wav");
  // const start = () => {
  //   audio.play();
  // };

  const fetchDiceRollHandler = async () => {
    const response = await fetch("http://roll.diceapi.com/html/2d6");
    console.log(response);
  };

  return (
    <div className="row combat-window borderline">
      <div className="col combat-player">
        <div className="combat-nameplate">
          <span>Player</span>
          <span>Player Stats</span>
        </div>
        <div>API CALL RETURN</div>
      </div>
      <div className="col combat-enemy">
        <div className="combat-nameplate">
          <span>Enemy</span>
          <span>Enemy Stats</span>
        </div>
        <div>{}</div>
        <button
          onClick={() => {
            fetchDiceRollHandler();
            start();
          }}
        >
          API TEST
        </button>
      </div>
    </div>
  );
}

export default CombatWindow;
