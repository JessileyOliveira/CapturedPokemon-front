const INITIAL_STATE = {
  list: 1,
  female: 1,
};

export default function filterPokemon(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'UPDATE_FILTER_POKEMON':
      return {...action.payload};
    default:
      return state;
  }
}
