const INITIAL_STATE = {
  logged: false,
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...action.payload,
        logged: true,
      };
    case 'LOGOFF':
      return {
        logged: false,
      };
    case 'VERIFY_LOGIN_SUCCESS':
      return {
        ...state,
        logged: true,
      };
    default:
      return state;
  }
}
