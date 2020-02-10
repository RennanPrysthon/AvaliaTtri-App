import React, { useEffect, useState } from 'react';

import Reactotron from 'reactotron-react-native';
import api from '../../services/api';

import { 
  Container,
  Pergunta,
  Enunciado,
  Texto,
  Alternativa
} from './styles';

export default function Resultado({ navigation }) {

  const [perguntas, setPerguntas] = useState([]);

  useEffect(() => {
    const data = navigation.state.params;
    const loadResult = async (idUser, idProva) => {
      await api.get(`provas/resultado?idUsuario=${idUser}&idProva=${idProva}`)
        .then(res => setPerguntas(res.data.questaoRespondidas))
        .catch(err => Reactotron.log(err))
    }

    Reactotron.log(data);

    loadResult(data.idUser, data.idProva)
  }, []);

  return (
    <Container>
      {perguntas.map(pergunta => (
        <Pergunta
          key={pergunta.id}
          resposta={pergunta.resposta == 'CORRETA'}
        >
          <Enunciado>
            {pergunta.enunciado}
          </Enunciado>
          <Texto>
            Sua resposta: <Alternativa>{pergunta.alternativa_usuario}</Alternativa>
          </Texto>
        </Pergunta>
      ))}
    </Container>
  );
}