import React, { useCallback } from "react";
import PropTypes from "prop-types";

import cx from "classnames";

import { speciesSummary } from "@/utils/propTypes";

import "./styles.scss";

function SpeciesItemDisplay({ locales, selected, species, onSelect, onClick }) {
  const handleClick = useCallback(() => onClick(species), [onClick, species]);
  const handleHover = useCallback(() => onSelect(species), [onSelect, species]);
  const classes = cx("species-list-item", {
    selected,
  });
  return (
    <li className={classes}>
      <button
        type="button"
        onClick={handleClick}
        onMouseEnter={handleHover}
        onFocus={handleHover}
      >
        <div className="icon-wrapper">
          <img src={species.icon} alt={species.icon} className="icon" />
        </div>
        <div className="number"># {String(species.id).padStart(3, "0")}</div>
        <div className="flex-grow label">{species.names[locales.language]}</div>
      </button>
    </li>
  );
}

SpeciesItemDisplay.propTypes = {
  species: speciesSummary,
  locales: PropTypes.any,
  onClick: PropTypes.func,
  onSelect: PropTypes.func,
  selected: PropTypes.bool,
};

export default SpeciesItemDisplay;
