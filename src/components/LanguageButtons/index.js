import React from "react";
import { useSelector } from "react-redux";

import LanguageButton from "@/components/LanguageButton";

import { actions as localeActions } from "@/state/reducers/locales";

import useActions from "@/hooks/useActions";

import "./styles.scss";

function LanguageButtons() {
  const actions = useActions(localeActions);
  const { language } = useSelector((state) => state.locales);
  return (
    <nav className="language-buttons">
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
        locale="gr"
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
        locale="zh-CHS"
        label="CHS"
      />
      <LanguageButton
        currentLocale={language}
        onChange={actions.changeLanguage}
        locale="zh-CHT"
        label="CHT"
      />
    </nav>
  );
}

export default LanguageButtons;
