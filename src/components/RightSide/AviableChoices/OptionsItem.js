import React from "react";

const OptionsItem = (props) => {
  return (
    <React.Fragment>
      {props.options.map((item) => (
        <li key={Math.random()}>
          <a href="#">{item.text}</a>
        </li>
      ))}
    </React.Fragment>
  );
};

export default OptionsItem;
