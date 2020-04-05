import React from "react";
import { useSelector } from "react-redux";

import { actions as speciesActions } from "@/state/reducers/species";

import SpeciesListWrapper from "@/containers/SpeciesListWrapper";

import SpeciesItem from "@/components/SpeciesItem";

import useActions from "@/hooks/useActions";

const pageSelector = ({ species, locales }) => ({ ...species, locales });

function SpeciesList() {
  const species = useActions(speciesActions);
  const {
    nextPage,
    prevPage,
    items,
    selectedSpecies,
    locales,
    page,
    totalPages,
  } = useSelector(pageSelector);
  return (
    <SpeciesListWrapper
      loadPage={species.loadPage}
      page={page}
      totalPages={totalPages}
      nextPage={nextPage}
      prevPage={prevPage}
    >
      {items.map((species) => {
        return (
          <SpeciesItem
            key={`species-${species.id}`}
            species={species}
            locales={locales}
            selected={selectedSpecies && selectedSpecies.id === species.id}
          />
        );
      })}
    </SpeciesListWrapper>
  );
}

export default SpeciesList;
