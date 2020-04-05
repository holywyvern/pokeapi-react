import React from "react";

import cx from "classnames";

import { Link } from "react-router-dom";

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
      <Link
        to={`${process.env.PUBLIC_URL}/`}
        className="title flex-grow padding-0 margin-0 pokédex-bar-title"
      >
        Pokédex
      </Link>
      <LanguageButtons />
    </nav>
  );
}

export default PokedexBar;
