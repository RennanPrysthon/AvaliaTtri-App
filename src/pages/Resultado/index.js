import React, { useEffect, useState } from 'react';

import { Text } from 'react-native';

import Reactotron from 'reactotron-react-native';
import api from '../../services/api';
import Pergunta from '../../components/Pergunta/index';

import { 
  Container
} from './styles';

export default function Resultado({ route,  navigation }) {

  const [perguntas, setPerguntas] = useState([]);

  useEffect(() => {
    const {idUser, idProva} = route.params;
    console.log(`provas/resultado?idUsuario=${idUser}&idProva=${idProva}`)

    const loadResult = async (idUser, idProva) => {
      await api.get(`resultado?idUsuario=${idUser}&idProva=${idProva}`)
        .then(res => {
          setPerguntas(res.data.questaoRespondidas);
        })
        .catch(err => Reactotron.log(err))
    }

    loadResult(idUser, idProva);
  }, []);

  return (
    <Container>
      {perguntas.map(
        pergunta => <Pergunta key={pergunta.id} data={pergunta} />
      )}
    </Container>
  );
}