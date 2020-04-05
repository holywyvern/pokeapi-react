import React from "react";
import PropTypes from "prop-types";

import SpeciesHeader from "@/containers/SpeciesHeader";
import Type from "@/containers/Type";

import { speciesSummary } from "@/utils/propTypes";

import "./styles.scss";

function SpeciesInfo({ species, language, t }) {
  return (
    <div className="species-info-grid">
      <SpeciesHeader language={language} species={species} />
      <div className="title species-genera">{species.genera[language]}</div>
      <span className="title species-type-label">{t("type")}</span>
      <span className="term species-types">
        {species.types.map((type) => (
          <Type key={type} name={type} language={language} />
        ))}
      </span>
      <span className="title species-weight-label">{t("weight")}</span>
      <span className="term species-weight">{species.weight} kg</span>
      <span className="title species-height-label">{t("height")}</span>
      <span className="term species-height">{species.height} m</span>
      <p className="term flavor">{species.flavorText[language]}</p>
    </div>
  );
}

SpeciesInfo.propTypes = {
  species: speciesSummary,
  language: PropTypes.string,
  t: PropTypes.func,
};

export default SpeciesInfo;
