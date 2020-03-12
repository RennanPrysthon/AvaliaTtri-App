export const Types = {
  LOGIN: 'auth/LOGIN',
  LOGOUT: 'auth/LOGOUT',
};

const INITIAL_STATE = {
  isLogged: false,
  token: null,
  user: {
    user_id: null,
  },
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOGIN:
      return {
        isLogged: true,
        token: action.token,
        user: {
          user_id: action.id,
        },
      };
    case Types.LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export function login(id, name) {
  return {
    type: Types.LOGIN,
    payload: {
      id,
      name
    },
  }
}

export function logout() {
  return {
    type: Types.LOGOUT,
  }
}