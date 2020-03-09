export const StatusProva = {
  INICIADA: "iniciada",
  ENVIANDO: "enviando",
  FINALIZADA: "finalizada",
}

export const Types = {
  ADD_PROVA: 'provas/ADD',
  FINALIZAR: 'provas/FINALIZAR',
};

const INITIAL_STATE = []

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_PROVA:
      return [...state,  action.provas]
    case Types.FINALIZAR:
      return INITIAL_STATE;
    default:
      return state;
  }
}
