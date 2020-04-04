import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import cx from "classnames";

import { speciesSummary } from "@/utils/propTypes";

import "./styles.scss";

function SpeciesItemDisplay({ locales, selected, species, onSelect }) {
  const handleHover = useCallback(() => onSelect(species), [onSelect, species]);
  const classes = cx("species-list-item", {
    selected,
  });
  return (
    <li className={classes} role="none">
      <Link
        className="button"
        role="menuitem"
        type="button"
        to={`/species/${species.id}`}
        tabIndex={0}
        onMouseEnter={handleHover}
        onTouchStart={handleHover}
        onFocus={handleHover}
      >
        <div className="icon-wrapper">
          <img src={species.icon} alt={species.icon} className="icon" />
        </div>
        <div className="number"># {String(species.id).padStart(3, "0")}</div>
        <div className="flex-grow label">{species.names[locales.language]}</div>
      </Link>
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
