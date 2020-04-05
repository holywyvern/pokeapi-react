import { PAGE_SIZE, fetchJson, BASE_API_URL } from "./utils";

import {
  formatTypes,
  formatAbilities,
  formatFlavorText,
  formatGenera,
  formatImages,
  formatNames,
} from "./formatters";

async function getSpeciesDetails(species) {
  const variety = species.varieties.find((variety) => variety.is_default);
  if (!variety) {
    return null;
  }
  const data = await fetchJson(variety.pokemon.url);
  const image = data.sprites.front_default;
  const types = formatTypes(data);
  const weight = (data.weight / 10).toFixed(2);
  const height = (data.height / 10).toFixed(2);
  const images = formatImages(data);
  const abilities = formatAbilities(data);
  return {
    image,
    images,
    types,
    weight,
    height,
    abilities,
  };
}

async function getSpecies({ url }) {
  const species = await fetchJson(url);
  const names = formatNames(species);
  const flavorText = formatFlavorText(species);
  const genera = formatGenera(species);
  const icon = `${process.env.PUBLIC_URL}/icons/${species.id}.png`;
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

async function getAbility(url) {
  const ability = await fetchJson(url);
  const names = formatNames(ability);
  const flavorText = formatFlavorText(ability);
  return {
    id: ability.id,
    names,
    flavorText,
  };
}

function loadSpecies(results) {
  return Promise.all(results.map(getSpecies));
}

export default {
  firstPage: 0,

  async getSpecies(page) {
    const { next, previous, count, results } = await fetchJson(
      `${BASE_API_URL}/pokemon-species?limit=${PAGE_SIZE}&offset=${
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
    const url = `${BASE_API_URL}/pokemon-species/${id}`;
    return getSpecies({ url });
  },

  loadAbility(id) {
    const url = `${BASE_API_URL}/ability/${id}`;
    return getAbility(url);
  },
};
