import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import backend from "i18next-xhr-backend";
import languageDetector from "i18next-browser-languagedetector";

export const AVAILABLE_LOCALES = [
  "en",
  "es",
  "fr",
  "de",
  "it",
  "ja",
  "ko",
  "zh-Hant",
  "zh-Hans",
];

export async function initI18n() {
  await i18n
    .use(initReactI18next)
    .use(backend)
    .use(languageDetector)
    .init({
      defaultNS: "common",
      fallbackLng: "en",
      whitelist: AVAILABLE_LOCALES,
      interpolation: {
        escapeValue: false,
      },
      backend: {
        loadPath: `${process.env.PUBLIC_URL}/locales/{{lng}}/{{ns}}.json`,
      },
      react: {
        useSuspense: false,
      },
    });
  await i18n.loadNamespaces("common");
  return i18n;
}

export default i18n;
