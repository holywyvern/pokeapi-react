import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { actions as detailActions } from "@/state/reducers/details";

import useActions from "@/hooks/useActions";

import SpeciesContent from "@/containers/SpeciesContent";

const pageSelector = ({ species, locales }) => ({
  locales,
  selectedSpecies: species.selectedSpecies,
});

function SpeciesLoader() {
  const { id } = useParams();
  const details = useActions(detailActions);
  const { selectedSpecies, locales } = useSelector(pageSelector);
  const otherSelected = !selectedSpecies || selectedSpecies.id !== id;
  useEffect(() => {
    if (otherSelected) {
      details.select(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [otherSelected, id]);
  return (
    <SpeciesContent
      t={locales.t}
      species={selectedSpecies}
      language={locales.language}
    />
  );
}

export default SpeciesLoader;
