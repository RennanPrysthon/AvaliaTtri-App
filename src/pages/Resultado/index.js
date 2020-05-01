import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import { useSelector } from 'react-redux';

import { ActivityIndicator} from 'react-native';

import { 
  Container,
  Questao
} from './styles';
import errorMessage from '../../utils/errorMessage';
export default function Resultado({ route,  navigation }) {

  const [questoes, setQuestoes] = useState([]);
  const [loading, setLoading] = useState(false);

  const auth = useSelector(state => state.auth);

  useEffect(() => {
    const { idProva} = route.params;
    
    const loadResult = async (idProva) => {
      setLoading(true);
      try {
        const data = await api.get(`usuarios/${auth.user.user_id}/resultados/${idProva}`);
        console.log(data)
              
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
      {questoes.map(q => (
        <Questao>
          
        </Questao>
      ))}
    </Container>
  );
}