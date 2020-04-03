import React from "react";
import PropTypes from "prop-types";

import cx from "classnames";

import LanguageButtons from "@/components/LanguageButtons";

import "./styles.scss";

function PokedexBar({ open }) {
  const classes = cx(
    "pokedex-bar",
    "padding-md",
    "flex-row",
    "vertical-center",
    { open }
  );
  return (
    <nav className={classes}>
      <h1 className="flex-grow padding-0 margin-0">Pokédex</h1>
      <LanguageButtons />
    </nav>
  );
}

PokedexBar.propTypes = {
  open: PropTypes.bool,
};

export default PokedexBar;
