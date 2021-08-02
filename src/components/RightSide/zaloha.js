<div className="Story-start">
  Tak ty bys chtěl bejt dobrodruh, jó? A myslíš si, že na to máš?
  <p />
  Kdepak kamaráde, časy, kdy se mohl každej vobejda s mečem courat po starejch
  hradech, smrtících kobkách a temných hvozdech už je dávno pryč. Dneska už je
  šecko regulovaný.
  <p />
  Každej, kdo se chce dát na hrdinský řemeslo, musí vyplnit oficiální
  drakobijecký formulář a projít zkouškou schopností.
  <p />
  To aby tě nesežrala první potvora, na kterou narazíš. Víš, kolik je s tím pak
  papírování?
  <p />
  Nejdřív testnem, jestli ten meč nenosíš jen pro parádu. Tady Johny Smrťák, náš
  certifikovaný komisař (a necertifikovaný bandita) si s tebou dá jedno kolečko.
</div>;

<div className="stats-setup">
  Na úvod je potřeba zjistit, jaké jsou tvé hodnoty Umění boje, Staminy a
  Štěstí. To provedeš hodem kostek.
  <p />
  <span>Umění boje = 6 + 1xD6</span>
  <p />
  <span>Stamina = 12 + 2xD6</span>
  <p />
  <span>Štěstí = 6 + 1xD6</span>
  <p />
  Máš také <strong>jeden opravný hod</strong>, který můžeš a nemusíš využít.
</div>;

import React, { useContext } from "react";
import { StateContext } from "../store/StateContext";
import { DataContext } from "../store/DataContext";
import ButtonItem from "./ButtonItem";

const AviableChoices = (props) => {
  const { node, setNode } = useContext(StateContext);
  const textNodes = useContext(DataContext);

  function showOption(option) {
    return true;
  }

  function renderButtons(textNodeIndex) {
    const currentTextNode = textNodes.find(
      (textNode) => textNode.id === textNodeIndex
    );
    /* while()  REMOVE ALL BUTTONS */
    currentTextNode.options.forEach((option) => {
      if (showOption(option)) {
        const button = <button>{option.text}</button>;
      }
    });
    /*
    const optionsArray = currentTextNode.options;
    const textProperties = optionsArray.map((item) => (
      <li>
        <button>{item}</button>
      </li>
    ));
    /*const next = options.forEach((object) => {});*/
    console.log(textProperties);
  }
  renderButtons(node);

  const buttonList = textNodes.map((item) => (
    <li key={item.id}>
      <ButtonItem
        id={item.id}
        key={item.id}
        text={item.text}
        options={item.options}
      />
    </li>
  ));

  return (
    <div className="row aviable-choices borderline">
      {<ul>{buttonList}</ul>}
    </div>
  );
};

export default AviableChoices;
