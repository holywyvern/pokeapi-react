import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

function Icon({ src }) {
  return (
    <div className="icon-wrapper">
      <img src={src} alt="" className="icon" />
    </div>
  );
}

Icon.propTypes = {
  src: PropTypes.string,
};

export default Icon;
