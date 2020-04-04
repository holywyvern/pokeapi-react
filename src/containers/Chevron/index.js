import React from "react";
import PropTypes from "prop-types";

import cx from "classnames";

import "./styles.scss";

function Chevron({ direction }) {
  const classes = cx("chevron", direction);
  return <div className={classes} />;
}

Chevron.propTypes = {
  direction: PropTypes.oneOf(["top", "left", "right", "bottom"]),
};

Chevron.defaultProps = {
  direction: "top",
};

export default Chevron;
