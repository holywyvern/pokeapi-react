import React from "react";
import PropTypes from "prop-types";

import cx from "classnames";

import { useRouteMatch } from "react-router-dom";

import SpeciesSprite from "@/components/SpeciesSprite";

import PokedexBar from "@/containers/PokedexBar";

import "./styles.scss";

function ApplicationLayout({ children }) {
  const match = useRouteMatch({
    path: "/",
    exact: true,
  });
  const classes = cx("pokedex-bg", "flex-grow", {
    open: Boolean(!match),
  });
  return (
    <>
      <div className={classes} />
      <div className="flex-grow flex-column pokedex-view">
        <PokedexBar open={Boolean(match)} />
        <div className="flex-grow flex-row overflow-hidden pokedex-content">
          <SpeciesSprite moved={!match} />
          <div className="flex-grow flex-column overflow-auto">{children}</div>
        </div>
      </div>
    </>
  );
}

ApplicationLayout.propTypes = {
  children: PropTypes.node,
};

export default ApplicationLayout;
