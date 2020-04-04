import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

function LanguageButtonsMenu({ children }) {
  return <nav className="language-buttons">{children}</nav>;
}

LanguageButtonsMenu.propTypes = {
  children: PropTypes.node,
};

export default LanguageButtonsMenu;
