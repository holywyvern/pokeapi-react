import React from "react";
import { useSelector } from "react-redux";

import SectionTitle from "@/containers/SectionTitle";
import AbilityBox from "@/containers/AbilityBox";
import Loader from "@/containers/Loader";

import "./styles.scss";

const pageSelector = ({ details, locales }) => ({
  loading: details.loading.abilities,
  abilities: details.abilities,
  t: locales.t,
  language: locales.language,
});

function SpeciesAbilities() {
  const { loading, abilities, t, language } = useSelector(pageSelector);
  return (
    <div className="flex-column species-abilities">
      <SectionTitle>{t("abilities")}</SectionTitle>
      {loading && (
        <div className="flex-row horizontal-center">
          <Loader />
        </div>
      )}
      {abilities.regular.map((i) => (
        <AbilityBox key={i.id} ability={i} language={language} />
      ))}
      {abilities.hidden && (
        <AbilityBox
          key={abilities.hidden.id}
          ability={abilities.hidden}
          language={language}
          t={t}
          hidden
        />
      )}
    </div>
  );
}

export default SpeciesAbilities;
