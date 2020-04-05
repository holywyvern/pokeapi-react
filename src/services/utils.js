export const PAGE_SIZE = 5;

export const BASE_CONTENT_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master";

export const BASE_API_URL = "https://pokeapi.co/api/v2";

export const OFFICIAL_ARTWORK_BASE_URL = `${BASE_CONTENT_URL}/sprites/pokemon/other-sprites/official-artwork/`;

// This is done using a cache to avoid PokeApi's traffic limits
export async function fetchJson(url) {
  const request = await fetch(url);
  if (!request.ok) {
    const error = new Error(`Failed request ${url}`);
    error.request = request;
    throw error;
  }
  return request.json();
}
