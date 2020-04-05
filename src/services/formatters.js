import { AVAILABLE_LOCALES } from "@/config/i18n";

import { OFFICIAL_ARTWORK_BASE_URL, BASE_CONTENT_URL } from "./utils";

export function formatNames(species) {
  return species.names
    .filter((locale) => AVAILABLE_LOCALES.includes(locale.language.name))
    .reduce(
      (previous, { language, name }) => ({
        ...previous,
        [language.name]: name,
      }),
      {}
    );
}

export function formatFlavorText({ flavor_text_entries: entries }) {
  const result = {};
  // We go counter clockwise to get the newest flavor text
  for (let i = entries.length - 1; i >= 0; --i) {
    const entry = entries[i];
    const language = entry.language.name;
    if (!result[language]) {
      result[language] = entry.flavor_text;
    }
  }
  return result;
}

export function formatGenera({ genera }) {
  const result = {};
  // We go counter clockwise to get the newest flavor text
  for (let entry of genera) {
    const language = entry.language.name;
    if (!result[language]) {
      result[language] = entry.genus;
    }
  }
  return result;
}

export function formatTypes(data) {
  return data.types.sort((a, b) => a.slot - b.slot).map((i) => i.type.name);
}

export function formatImages(data) {
  return [
    // The API doesn't give us a link to them, however, most of them are present.
    `${OFFICIAL_ARTWORK_BASE_URL}/${data.id}.png`,
    `${process.env.PUBLIC_URL}/sprites/official-artwork/${data.id}.png`,
    data.sprites.front_default,
    // This URL is to fix some sprites than are not properly loaded at the API yet, like Zeraora
    `${BASE_CONTENT_URL}/sprites/pokemon/${data.id}.png`,
  ].filter((i) => Boolean(i));
}

export function formatAbilities(data) {
  try {
    const hiddenInfo = data.abilities.find((i) => i.is_hidden);
    const hidden = hiddenInfo && hiddenInfo.ability.name;
    const regular = data.abilities
      .filter((i) => !i.is_hidden)
      .sort((a, b) => a.slot - b.slot)
      .map((i) => i.ability.name);
    return {
      hidden,
      regular,
    };
  } catch (e) {
    console.error(e);
  }
  return {
    hidden: null,
    regular: [],
  };
}
