import React from "react";
import PropTypes from "prop-types";

import { speciesSummary } from "@/utils/propTypes";

import SpeciesAbilities from "@/containers/SpeciesAbilities";
import SpeciesInfo from "@/containers/SpeciesInfo";

function SpeciesContent({ species, language, t }) {
  if (!species) {
    return <div />;
  }
  return (
    <>
      <SpeciesInfo species={species} language={language} t={t} />
      <SpeciesAbilities />
    </>
  );
}

SpeciesContent.propTypes = {
  species: speciesSummary,
  language: PropTypes.string,
  t: PropTypes.func,
};

export default SpeciesContent;
