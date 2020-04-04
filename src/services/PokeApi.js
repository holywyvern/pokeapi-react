import { AVAILABLE_LOCALES } from "@/config/i18n";

const PAGE_SIZE = 5;

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

async function getSpeciesImage(species) {
  const variety = species.varieties.find((variety) => variety.is_default);
  if (!variety) {
    return null;
  }
  const data = await fetchJson(variety.pokemon.url);
  return data.sprites.front_default;
}

async function getSpecies({ url }) {
  const species = await fetchJson(url);
  const names = species.names
    .filter((locale) => AVAILABLE_LOCALES.includes(locale.language.name))
    .reduce(
      (previous, { language, name }) => ({
        ...previous,
        [language.name]: name,
      }),
      {}
    );
  const icon = `/icons/${species.id}.png`;
  return {
    id: species.id,
    icon,
    names,
    image: await getSpeciesImage(species),
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
};
