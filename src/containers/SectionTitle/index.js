import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

function SectionTitle({ children }) {
  return <h3 className="section-title">{children}</h3>;
}

SectionTitle.propTypes = {
  children: PropTypes.node,
};

export default SectionTitle;
