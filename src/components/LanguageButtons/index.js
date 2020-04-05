import React from "react";
import { useSelector } from "react-redux";

import { actions as localeActions } from "@/state/reducers/locales";

import useActions from "@/hooks/useActions";

import LanguageButtonsMenu from "@/containers/LanguageButtonsMenu";
import LanguageButton from "@/containers/LanguageButton";

const pageSelector = (state) => state.locales;

function LanguageButtons() {
  const actions = useActions(localeActions);
  const { language } = useSelector(pageSelector);
  return (
    <LanguageButtonsMenu>
      <LanguageButton
        currentLocale={language}
        onChange={actions.changeLanguage}
        locale="en"
        label="ENG"
      />
      <LanguageButton
        currentLocale={language}
        onChange={actions.changeLanguage}
        locale="fr"
        label="FRE"
      />
      <LanguageButton
        currentLocale={language}
        onChange={actions.changeLanguage}
        locale="de"
        label="GER"
      />
      <LanguageButton
        currentLocale={language}
        onChange={actions.changeLanguage}
        locale="it"
        label="ITA"
      />
      <LanguageButton
        currentLocale={language}
        onChange={actions.changeLanguage}
        locale="ja"
        label="JPN"
      />
      <LanguageButton
        currentLocale={language}
        onChange={actions.changeLanguage}
        locale="ko"
        label="KOR"
      />
      <LanguageButton
        currentLocale={language}
        onChange={actions.changeLanguage}
        locale="es"
        label="SPA"
      />
      <LanguageButton
        currentLocale={language}
        onChange={actions.changeLanguage}
        locale="zh-Hans"
        label="CHS"
      />
      <LanguageButton
        currentLocale={language}
        onChange={actions.changeLanguage}
        locale="zh-Hant"
        label="CHT"
      />
    </LanguageButtonsMenu>
  );
}

export default LanguageButtons;
