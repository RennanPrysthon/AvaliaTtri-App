import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import Pergunta from '../../components/Pergunta/index';
import { useSelector } from 'react-redux';

import { ActivityIndicator} from 'react-native';

import { 
  Container
} from './styles';

export default function Resultado({ route,  navigation }) {

  const [perguntas, setPerguntas] = useState([]);
  const [loading, setLoading] = useState(false);

  const auth = useSelector(state => state.auth);

  useEffect(() => {
    const {idUser, idProva} = route.params;

    const headers = {
      'Content-Type': 'application/json',
      Authorization: auth.token,
    };

    const loadResult = async (idProva) => {
      setLoading(true);
      await api.get(`resultado?idUsuario=${auth.user.user_id}&idProva=${idProva}`, {headers})
        .then(res => {
          setPerguntas(res.data.questaoRespondidaDTOS);
        })
        .catch(err => console.log(err));
      setLoading(false)
    }
    loadResult(idProva);
  }, []);

  return (
    <Container>
      {loading && <ActivityIndicator size="large" color="#234"/>}
      {!loading && perguntas.map(
        pergunta => <Pergunta key={pergunta.id} data={pergunta} />
      )}
    </Container>
  );
}