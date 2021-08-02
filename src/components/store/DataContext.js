import React from "react";

export const DataContext = React.createContext(null);

export const DataContextProvider = (props) => {
  const contextValue = [
    {
      id: 1,
      text: [
        "Vítej dobrodruhu",
        <br />,
        <br />,
        "Než se vydáš na cestu, je potřeba hodit kostkami a určit své výchozí hodnoty umění boje, staminy a štěstí.",
      ],
      options: [
        {
          text: "Hodit kostkami pro výchozí hodnotu umění boje",
          setItems: { blueGoo: true },
          nextText: 2,
        },
        {
          text: "Hodit kostkami pro výchozí hodnotu staminy",
          nextText: 2,
        },
        {
          text: "Hodit kostkami pro výchozí hodnotu štěstí",
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
