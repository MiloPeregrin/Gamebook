import React from "react";

export const DataContext = React.createContext(null);

export const DataContextProvider = (props) => {
  const contextValue = [
    {
      id: 1,
      text: [
        "Tak ty bys chtěl bejt dobrodruh, jó?",
        <br />,
        <br />,
        "Než se vydáš na cestu, hoď kostkami a urči své výchozí hodnoty umění boje, staminy a štěstí.",
      ],
      options: [
        {
          optionId: 1,
          text: "Hodit kostkami pro výchozí hodnotu umění boje",
          onClick: "state umeni boje zmenen na {DICE API CALL}",
          nextText: 2,
        },
        {
          optionId: 2,
          text: "Hodit kostkami pro výchozí hodnotu staminy",
          onClick: "state staminy zmenen na {DICE API CALL}",
          nextText: 2,
        },
        {
          optionId: 3,
          text: "Hodit kostkami pro výchozí hodnotu štěstí",
          onClick: "state stesti zmenen na {DICE API CALL}",
          nextText: 2,
        },
      ],
    },
    {
      id: 2,
      text: "WAAAAAGH!!! textNode 2",
      options: [
        {
          text: "Take goo",
          setItems: { blueGoo: true },
          nextText: 3,
        },
        {
          text: "Take goo",
          setItems: { blueGoo: true },
          nextText: 3,
        },
        {
          text: "Take goo",
          setItems: { blueGoo: true },
          nextText: 3,
        },
      ],
    },
    {
      id: 3,
      text: "Zug Zug textNode 3",
      options: [
        {
          text: "Take goo",
          setItems: { blueGoo: true },
          nextText: 4,
        },
        {
          text: "Take goo",
          setItems: { blueGoo: true },
          nextText: 4,
        },
      ],
    },
  ];
  return (
    <DataContext.Provider value={contextValue}>
      {props.children}
    </DataContext.Provider>
  );
};
