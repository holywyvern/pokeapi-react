import React from "react";

import cx from "classnames";

import LanguageButtons from "@/components/LanguageButtons";

import "./styles.scss";

function PokedexBar() {
  const classes = cx(
    "padding-md",
    "flex-row",
    "vertical-center",
    "pokedex-bar"
  );
  return (
    <nav className={classes}>
      <h1 className="title flex-grow padding-0 margin-0">Pokédex</h1>
      <LanguageButtons />
    </nav>
  );
}

export default PokedexBar;
