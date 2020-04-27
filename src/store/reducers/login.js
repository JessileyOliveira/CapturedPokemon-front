const INITIAL_STATE = {
  error: false,
  errorMessage: '',
  loading: false,
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...INITIAL_STATE,
      };
    case 'REQUEST_LOGIN':
      return {...state, loading: true};
    case 'LOGIN_ERROR':
      return {
        ...INITIAL_STATE,
        error: true,
        errorMessage: 'Usuário e/ou senha incorreto(s)',
        loading: false,
      };
    case 'USER_INATIVE':
      return {
        ...INITIAL_STATE,
        error: true,
        errorMessage: 'Usuário inativo!',
        loading: false,
      };
    default:
      return state;
  }
}
