export function login(username, password) {
  return {
    type: 'REQUEST_LOGIN',
    payload: {
      username,
      password,
    },
  };
}

export function verifyLogin(username, password) {
  return {
    type: 'REQUEST_VERIFY_LOGIN',
    payload: {
      username,
      password,
    },
  };
}

export function logoff() {
  return {
    type: 'LOGOFF',
    payload: {},
  };
}
