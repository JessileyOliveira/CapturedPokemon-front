export function getPokemon(jwt) {
  return {
    type: 'REQUEST_GET_POKEMON',
    payload: {
      jwt,
    },
  };
}
