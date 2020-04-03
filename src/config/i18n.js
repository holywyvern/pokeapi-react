import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import backend from "i18next-xhr-backend";
import languageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next)
  .use(backend)
  .use(languageDetector)
  .init({
    defaultNS: "common",
    fallbackLng: "en-US",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  });

export default i18n;
