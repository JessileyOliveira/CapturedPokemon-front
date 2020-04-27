export function updateFilterPokemon(filter) {
  return {
    type: 'UPDATE_FILTER_POKEMON',
    payload: {
      list: filter.list,
      shiny: filter.shiny,
    },
  };
}
