import { AVAILABLE_LOCALES } from "@/config/i18n";

const PAGE_SIZE = 5;

function filterNames(species) {
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

function getFlavorText({ flavor_text_entries: entries }) {
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

function getGenera({ genera }) {
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

// This is done using a cache to avoid PokeApi's traffic limits
async function fetchJson(url) {
  const request = await fetch(url);
  if (!request.ok) {
    const error = new Error(`Failed request ${url}`);
    error.request = request;
    throw error;
  }
  return request.json();
}

async function getSpeciesDetails(species) {
  const variety = species.varieties.find((variety) => variety.is_default);
  if (!variety) {
    return null;
  }
  const data = await fetchJson(variety.pokemon.url);
  const image = data.sprites.front_default;
  const types = data.types
    .sort((a, b) => a.slot - b.slot)
    .map((i) => i.type.name);
  const weight = data.weight / 10;
  const height = data.height / 10;

  return {
    image,
    types,
    weight,
    height,
  };
}

async function getSpecies({ url }) {
  const species = await fetchJson(url);
  const names = filterNames(species);
  const flavorText = getFlavorText(species);
  const genera = getGenera(species);
  const icon = `/icons/${species.id}.png`;
  const details = await getSpeciesDetails(species);
  return {
    id: species.id,
    icon,
    names,
    flavorText,
    genera,
    ...details,
  };
}

function loadSpecies(results) {
  return Promise.all(results.map(getSpecies));
}

export default {
  firstPage: 0,

  async getSpecies(page) {
    const { next, previous, count, results } = await fetchJson(
      `https://pokeapi.co/api/v2/pokemon-species?limit=${PAGE_SIZE}&offset=${
        page * PAGE_SIZE
      }`
    );
    return {
      page,
      nextPage: next && page + 1,
      prevPage: previous && page - 1,
      totalPages: Math.ceil(count / PAGE_SIZE),
      results: await loadSpecies(results),
      hasMore: Boolean(next),
    };
  },

  getDetails(id) {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${id}`;
    return getSpecies({ url });
  },
};
