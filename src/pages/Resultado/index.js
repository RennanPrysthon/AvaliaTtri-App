import React, { useEffect, useState, useMemo
 } from 'react';

import api from '../../services/api';
import { useSelector } from 'react-redux';

import { ActivityIndicator} from 'react-native';

import { 
  Container,
  Header,
  Info,
  Value,
  Key,
  Questao,
  Questoes,
  Enunciado,
  QuestaoHeader,
  Alternativas,
  Alternativa
} from './styles';
import errorMessage from '../../utils/errorMessage';
export default function Resultado({ route,  navigation }) {

  const [prova, setProva] = useState({});
  const [questoes, setQuestoes] = useState([])
  const [loading, setLoading] = useState(false);

  const auth = useSelector(state => state.auth);

  useEffect(() => {
    const { idProva } = route.params;
    
    async function loadResult(idProva) {
      setLoading(true);
      try {
        const {data} = await api.get(`usuarios/${auth.user.user_id}/resultados/${idProva}`);
        
        setProva(data);
        setQuestoes(data.questoes_respondidas)
        console.log(questoes)
        setLoading(false)
      } catch (error) {
        console.log(error)
        errorMessage(error)
      }
    }
    loadResult(idProva);
  }, []);
  
  if (loading) return <ActivityIndicator size="large" color="#234"/>;

  return (
    <Container>
      <Header>
        <Info>
          <Value>
            Titulo da prova
          </Value>
          <Key>
            { prova.titulo }
          </Key>
        </Info>
        <Info>
          <Value>
            Nota
          </Value>
          <Key>
            { prova.nota }
          </Key>
        </Info>
        <Info>
          <Value>
            Respondida em
          </Value>
          <Key>
            { prova.respondida_em }
          </Key>
        </Info>
        <Info>
          <Value>
            Observação
          </Value>
          <Key>
            { prova.observacao }
          </Key>
        </Info>
      </Header>
      <Questoes>
     {   
       questoes.map(q => (
         <Questao key={q.id}>
          <QuestaoHeader correta={q.is_correta}>
            <Enunciado>
              {q.enunciado}
            </Enunciado>
          </QuestaoHeader>
          <Alternativas>
            <Alternativa>
              A) {q.alternativaA}
            </Alternativa>
            <Alternativa>
              B) {q.alternativaB}
            </Alternativa>
            <Alternativa>
              C) {q.alternativaC}
            </Alternativa>
            <Alternativa>
              D) {q.alternativaD}
            </Alternativa>
            <Alternativa>
              E) {q.alternativaE}
            </Alternativa>
          </Alternativas>
         </Questao>
      ))}
      </Questoes>
    </Container>
  );
}