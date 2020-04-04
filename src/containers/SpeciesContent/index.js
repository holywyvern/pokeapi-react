import React from "react";
import PropTypes from "prop-types";

import { speciesSummary } from "@/utils/propTypes";

import Icon from "@/containers/Icon";
import Type from "@/containers/Type";

import "./styles.scss";

function SpeciesContent({ species, language, t }) {
  if (!species) {
    return <div />;
  }
  return (
    <div className="species-page-grid">
      <div className="flex-row species-details-title">
        <Icon src={species.icon} />
        <div className="number">#{String(species.id).padStart(3, "0")}</div>
        <div className="label">{species.names[language]}</div>
      </div>
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

SpeciesContent.propTypes = {
  species: speciesSummary,
  language: PropTypes.string,
  t: PropTypes.func,
};

export default SpeciesContent;
