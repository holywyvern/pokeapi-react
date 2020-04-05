import React from "react";
import PropTypes from "prop-types";

import Icon from "@/containers/Icon";

import { speciesSummary } from "@/utils/propTypes";

import "./styles.scss";

function SpeciesHeader({ species, language }) {
  return (
    <div className="flex-row species-details-title">
      <Icon src={species.icon} />
      <div className="number">#{String(species.id).padStart(3, "0")}</div>
      <div className="label">{species.names[language]}</div>
    </div>
  );
}

SpeciesHeader.propTypes = {
  species: speciesSummary,
  language: PropTypes.string,
};

export default SpeciesHeader;
