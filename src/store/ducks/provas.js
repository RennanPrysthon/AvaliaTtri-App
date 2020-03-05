import { Reactotron } from 'reactotron-react-native';

export const Types = {
  ADD: 'provas/ADD',
  FINALIZAR: 'provas/FINALIZAR',
};

const INITIAL_STATE = [
  
]

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD:
      return [...state, action.test];
    case Types.FINALIZAR:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export const adicionarProva = prova => {
  Reactotron.log('chegoy');

  test = prova.map(p => {
    p.respostaUsuario = ""
  });

  return {
    type: Types.ADD,
    test: test
  }
}

export const finalizarProva = () => {
  return {
    type: Types.FINALIZAR,
  }
}