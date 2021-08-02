import CharacterStats from "./CharacterStats";
import Inventory from "./Inventory";

function LeftSide() {
  return (
    <div className="col sides-setup">
      <CharacterStats />
      <Inventory />
    </div>
  );
}

export default LeftSide;
