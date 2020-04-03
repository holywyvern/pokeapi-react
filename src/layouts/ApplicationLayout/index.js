import React from "react";
import PropTypes from "prop-types";

import cx from "classnames";

import { useRouteMatch } from "react-router-dom";

import PokedexBar from "@/components/PokedexBar";

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
        <div className="flex-grow overflow-auto">{children}</div>
      </div>
    </>
  );
}

ApplicationLayout.propTypes = {
  children: PropTypes.node,
};

export default ApplicationLayout;
