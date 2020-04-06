import React, { useEffect, useState } from 'react';

import { Api } from '../../services/api';
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
    const { idProva} = route.params;
    
    const loadResult = async (idProva) => {
      setLoading(true);

      const data = await Api.get(`resultado?idUsuario=${auth.user.user_id}&idProva=${idProva}`);
      setPerguntas(data.questaoRespondidaDTOS);

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