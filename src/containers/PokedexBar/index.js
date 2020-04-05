import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import cx from "classnames";

import LanguageButtons from "@/components/LanguageButtons";

import "./styles.scss";

const pageSelector = ({ locales }) => locales;

function PokedexBar() {
  const { t } = useSelector(pageSelector);
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
        {t("pokedex")}
      </Link>
      <LanguageButtons />
    </nav>
  );
}

export default PokedexBar;
