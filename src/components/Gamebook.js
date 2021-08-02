import React, { useState } from "react";
import { Card } from "@material-ui/core";
import LeftSide from "./LeftSide/LeftSide.js";
import RightSide from "./RightSide/RightSide.js";

function Gamebook() {
  const [inventory, setInventory] = useState({});

  function selectOption(option) {}

  return (
    <div className="container">
      <Card className="row gamebook-body">
        <LeftSide />
        <RightSide />
      </Card>
    </div>
  );
}

export default Gamebook;
