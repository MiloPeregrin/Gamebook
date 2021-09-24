import React, { Fragment, useContext } from "react";
import { StateContext } from "../../store/StateContext";
import { DataContext } from "../../store/DataContext";
import CombatWindow from "./CombatWindow";

const StoryWindow = (props) => {
  const { node, setNode } = useContext(StateContext);
  const textNodes = useContext(DataContext);

  function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(
      (textNode) => textNode.id === textNodeIndex
    );
    return (
      <Fragment>
        {textNode.text.map((item) => (
          <Fragment key={Math.random()}>{item}</Fragment>
        ))}
      </Fragment>
    );
  }
  return (
    <div className="row borderline story-window">
      {showTextNode(node)}
      <CombatWindow />
    </div>
  );
};

export default StoryWindow;
