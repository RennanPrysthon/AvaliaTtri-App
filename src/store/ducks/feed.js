export const Types = {
  REFRESH: 'feed/REFRESH',
  LOAD: 'feed/LOAD'
};

const INITIAL_STATE = [];

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REFRESH:
      return action.payload.novos;
    case Types.LOAD:
      return [...state, ...action.payload.data];
    default:
      return state;
  }
}

export const Creators = {
  refreshFeed: (novos) => ({
    type: Types.REFRESH,
    payload: {
      novos
    }
  }),
  loadFeed: (data) => ({
    type: Types.LOAD,
    payload: {
      data
    }
  })
}