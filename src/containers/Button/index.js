import React from "react";
import PropTypes from "prop-types";

import cx from "classnames";

import "./styles.scss";

function Button({ compact, ...props }) {
  const classes = cx("pokedex-button", { compact });
  return <button {...props} type="button" className={classes} />;
}

Button.propTypes = {
  compact: PropTypes.bool,
};

export default Button;
