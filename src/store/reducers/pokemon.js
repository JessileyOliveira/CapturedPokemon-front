const INITIAL_STATE = {
  data: [],
  error: false,
  errorMessage: '',
  loading: false,
};

export default function pokemon(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'REQUEST_GET_POKEMON':
      return {...state, loading: true};
    case 'GET_POKEMON_SUCCESS':
      return {
        data: action.payload,
        error: false,
        errorMessage: '',
        loading: false,
      };
    case 'GET_POKEMON_ERROR':
      return {
        ...INITIAL_STATE,
        error: true,
        errorMessage: 'Erro ao consultar pokemon!',
        loading: false,
      };
    default:
      return state;
  }
}
