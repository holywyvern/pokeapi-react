// This is a fix for Poipole onwards
// TODO: Fix when pokeapi fixes their sprites
export function findImage(species) {
  if (species.image) {
    return species.image;
  }
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${species.id}.png`;
}
