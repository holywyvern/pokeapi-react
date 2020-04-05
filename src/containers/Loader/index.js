import React from "react";
import PropTypes from "prop-types";

import cx from "classnames";

import "./styles.scss";

function Loader({ fixed, className }) {
  const classes = cx("loader-pokeball", className, { spin: !fixed });
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
  className: PropTypes.string,
};

Loader.defaultProps = {
  fixed: false,
};

export default Loader;
