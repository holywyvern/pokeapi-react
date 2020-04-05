import React from "react";
import PropTypes from "prop-types";

import { actions as speciesActions } from "@/state/reducers/species";

import useActions from "@/hooks/useActions";

import { speciesSummary } from "@/utils/propTypes";

import SpeciesItemDisplay from "@/containers/SpeciesItemDisplay";

function SpeciesItem({ locales, species, selected }) {
  const actions = useActions(speciesActions);
  return (
    <SpeciesItemDisplay
      species={species}
      locales={locales}
      onSelect={actions.select}
      selected={selected}
    />
  );
}

SpeciesItem.propTypes = {
  locales: PropTypes.any,
  species: speciesSummary,
  selected: PropTypes.bool,
};

export default SpeciesItem;
