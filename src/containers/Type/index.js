import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

function Type({ name, language }) {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/types/${language}/${name}.png`}
      alt={name}
      className="type-image"
    />
  );
}

Type.propTypes = {
  name: PropTypes.string,
  language: PropTypes.string,
};

export default Type;
