import React from "react";
import PropTypes from "prop-types";

import { routerActions } from "connected-react-router";
import { actions as speciesActions } from "@/state/reducers/species";

import useActions from "@/hooks/useActions";

import { speciesSummary } from "@/utils/propTypes";

import SpeciesItemDisplay from "@/containers/SpeciesItemDisplay";

import wait from "@/utils/wait";

function SpeciesItem({ locales, species, selected }) {
  const router = useActions(routerActions);
  const actions = useActions(speciesActions);
  const onClick = async () => {
    await wait(100);
    router.push(`/species/${species.id}`);
  };
  return (
    <SpeciesItemDisplay
      species={species}
      locales={locales}
      onSelect={actions.select}
      onClick={onClick}
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
