import React, { useContext } from "react";
import { StateContext } from "../store/StateContext";
import { DataContext } from "../store/DataContext";

const AviableChoices = (props) => {
  const { node, setNode } = useContext(StateContext);
  const textNodes = useContext(DataContext);

  function renderButtons(textNodeIndex) {
    const textNode = textNodes.find(
      (textNode) => textNode.id === textNodeIndex
    );
    const options = textNode.options;

    return (
      <React.Fragment>
        {options.map((item) => (
          <li key={Math.random()}>
            <a href="#">{item.text}</a>
          </li>
        ))}
      </React.Fragment>
    );
  }

  return (
    <div className="row aviable-choices borderline">
      <ul>{renderButtons(node)}</ul>
    </div>
  );
};

export default AviableChoices;
