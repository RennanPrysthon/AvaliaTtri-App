import React, { useEffect, useState } from 'react';

import { Api } from '../../services/api';
import Pergunta from '../../components/Pergunta/index';
import { useSelector } from 'react-redux';

import { ActivityIndicator} from 'react-native';

import { 
  Container
} from './styles';
import errorMessage from '../../utils/errorMessage';
export default function Resultado({ route,  navigation }) {

  const [perguntas, setPerguntas] = useState([]);
  const [loading, setLoading] = useState(false);

  const auth = useSelector(state => state.auth);

  useEffect(() => {
    const { idProva} = route.params;
    
    const loadResult = async (idProva) => {
      setLoading(true);
      try {
        const data = await Api.get(`usuarios/${auth.user.user_id}/resultados/${idProva}`);
        setPerguntas(data);
              
      setLoading(false)
      } catch (error) {
        errorMessage(error)
      }

    }
    loadResult(idProva);
  }, []);

  if(loading) return <ActivityIndicator size="large" color="#234"/>;
  return <></>;
  return (
    <Container>
      {perguntas.map(
        pergunta => <Pergunta key={pergunta.id} data={pergunta} />
      )}
    </Container>
  );
}