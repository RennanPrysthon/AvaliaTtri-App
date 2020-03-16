export const Types = {
  ADD_QUESTOES: 'questoes/ADD',
  RESPONDER_QUESTAO: 'questoes/FINALIZAR',
  RESETAR: 'questoes/RESETAR',
};

const INITIAL_STATE = [];

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_QUESTOES:
      return [...state, ...action.questoes];
    case Types.RESPONDER_QUESTAO:
      return state.map(questao =>
        questao.id == action.payload.id
          ? {
              ...questao,
              respostaUsuario: action.payload.resp,
            }
          : questao,
      );
    case Types.RESETAR:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export const Creators = {
  responderQuestao: (id, resp) => ({
    type: Types.RESPONDER_QUESTAO,
    payload: {
      id,
      resp,
    },
  }),
};
