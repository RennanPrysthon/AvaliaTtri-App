export const Types = {
  LOGIN: 'auth/LOGIN',
  LOGOUT: 'auth/LOGOUT',
};

const INITIAL_STATE = {
  isLogged: false,
  token: null,
  user: {
    user_id: null,
    user_name: null,
  },
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOGIN:
      return {
        isLogged: true,
        token: action.payload.token,
        user: {
          user_id: action.payload.id,
          user_name: action.payload.name,
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