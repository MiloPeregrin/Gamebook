import React, { useContext } from "react";
import { StateContext } from "../../store/StateContext";
import { DataContext } from "../../store/DataContext";
import OptionsItem from "./OptionsItem";

const AviableChoices = (props) => {
  const { node, setNode } = useContext(StateContext);
  const textNodes = useContext(DataContext);

  function renderOptions(textNodeIndex) {
    const textNode = textNodes.find(
      (textNode) => textNode.id === textNodeIndex
    );
    const textNodeOptions = textNode.options;

    return <OptionsItem options={textNodeOptions} />;
  }

  return (
    <div className="row aviable-choices borderline">
      <ul>{renderOptions(node)}</ul>
    </div>
  );
};

export default AviableChoices;
