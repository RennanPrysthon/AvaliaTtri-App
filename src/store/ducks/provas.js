export const StatusProva = {
  INICIADA: "iniciada",
  ENVIANDO: "enviando",
  FINALIZADA: "finalizada",
}

export const Types = {
  ADD_PROVA: 'provas/ADD',
  RESPONDER_QUESTAO: 'provas/RESPONDER',
  ENVIAR: 'provas/ENVIAR',
  FINALIZAR: 'provas/FINALIZAR',
  RESETAR: 'provas/RESETAR',
};

const INITIAL_STATE = []

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_PROVA:
      return [...state,  action.provas];
    case Types.ENVIAR:
      return state.map(prova =>
        prova.id == action.payload.id ?
          {
            ...prova,
            status: StatusProva.ENVIANDO
          } : prova
      );
    case Types.RESPONDER_QUESTAO:
      return state.map(prova =>
        prova.id == action.payload.id ?
          {
            ...prova,
            qtd_questoes_respondidas: prova.qtd_questoes_respondidas + 1
          } : prova
      );
    case Types.FINALIZAR:
      return state.map(prova =>
        prova.id == action.payload.id ?
          {
            ...prova,
            status: StatusProva.FINALIZADA
          } : prova
      );
    case Types.RESETAR:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export const Creators = {
  enviarProva: (id) => ({
    type: Types.ENVIAR,
    payload: {
      id
    }
  }),
  finalizarProva: (id) => ({
    type: Types.FINALIZAR,
    payload: {
      id
    }
  }),
  responderQuestao: (id) => ({
    type: Types.RESPONDER_QUESTAO,
    payload: {
      id
    }
  })
}