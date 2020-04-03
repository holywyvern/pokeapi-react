import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import backend from "i18next-xhr-backend";
import languageDetector from "i18next-browser-languagedetector";

export function initI18n() {
  return i18n
    .use(initReactI18next)
    .use(backend)
    .use(languageDetector)
    .init({
      defaultNS: "common",
      fallbackLng: "en",
      whitelist: ["en", "es", "fr", "gr", "it", "ja", "ko", "zh-CHS", "zh-CHT"],
      interpolation: {
        escapeValue: false,
      },
      backend: {
        loadPath: "/locales/{{lng}}/{{ns}}.json",
      },
    });
}

export default i18n;
