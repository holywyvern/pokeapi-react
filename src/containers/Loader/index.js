import React from "react";
import PropTypes from "prop-types";

import cx from "classnames";

import "./styles.scss";

function Loader({ fixed }) {
  const classes = cx("loader-pokeball", { spin: !fixed });
  return (
    <img
      className={classes}
      alt="Loading..."
      src={`${process.env.PUBLIC_URL}/pokeball.svg`}
    />
  );
}

Loader.propTypes = {
  fixed: PropTypes.bool,
};

export default Loader;
