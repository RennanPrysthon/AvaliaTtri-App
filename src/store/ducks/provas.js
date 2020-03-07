import { Reactotron } from 'reactotron-react-native';

export const Types = {
  ADD_PROVA: 'provas/ADD',
  FINALIZAR: 'provas/FINALIZAR',
};

const INITIAL_STATE = []

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_PROVA:
      return [...state, 
      {
        id: action.id,
        enunciado: action.enunciado,
        alternativas: action.alternativas
      }]
    case Types.FINALIZAR:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export const Creators = {
  addProva: (id, questoes) => ({
    type: Types.ADD_PROVA,
    data: {
      id,
      questoes
    } 
  })
}