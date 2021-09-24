import React from "react";

const OptionsItem = (props) => {
  const handleClick = (item) => {
    console.log(item);
  };

  return (
    <React.Fragment>
      {props.options.map((item) => (
        <li key={item.optionId}>
          <a
            href="#"
            onClick={() => handleClick(item.onClick)}
            id={item.optionId}
          >
            {item.text}
          </a>
        </li>
      ))}
    </React.Fragment>
  );
};

export default OptionsItem;
