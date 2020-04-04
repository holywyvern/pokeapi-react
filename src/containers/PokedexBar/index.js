import React from "react";

import cx from "classnames";

import LanguageButtons from "@/components/LanguageButtons";

import "./styles.scss";

function PokedexBar() {
  const classes = cx(
    "pokedex-bar",
    "padding-md",
    "flex-row",
    "vertical-center"
  );
  return (
    <nav className={classes}>
      <h1 className="flex-grow padding-0 margin-0">Pokédex</h1>
      <LanguageButtons />
    </nav>
  );
}

export default PokedexBar;
