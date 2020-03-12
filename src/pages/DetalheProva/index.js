import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import api from '../../services/api';

import { StatusProva } from '../../store/ducks/provas';

import { Types as provasTypes } from '../../store/ducks/provas';
import { Types as questoesTypes } from '../../store/ducks/questoes';

import {
  Container, 
  Header, 
  Title,
  Chave,
  Valor,
  Info,
  Submit,
  Button,
  Link,
  ListItem
} from './styles';

export default function DetalheProva({ route, navigation }) {

  const dispacth = useDispatch();
  const auth = useSelector(state => state.auth);

  const onCarregarProva = async (id) => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': auth.token
    }
    await api.get(`provas/${id}`, {headers})
      .then(res => {
        var prova = {}
        prova.id = res.data.id;
        prova.titulo = res.data.titulo;
        prova.status = StatusProva.INICIADA;
        
        var questoes = res.data.questoes

        questoes.map(q => {
          q.respondida = false,
          q.respostaUsuario = "",
          q.idProva = prova.id
        });

        dispacth({type: provasTypes.ADD_PROVA, provas: prova});
        dispacth({type: questoesTypes.ADD_QUESTOES, questoes: questoes});
      })
      .catch(err => console.log(err));
  }

  const { prova } = route.params;
  return (
    <Container>
      <Header>
        <Title>
          {prova.titulo}
        </Title>
        <Info>
          <ListItem>
            <Chave>Quantidade de questões</Chave>
            <Valor>{prova.qtd_questoes}</Valor>
          </ListItem>
          <ListItem>
            <Chave>Data de publicação</Chave>
            <Valor>{prova.data}</Valor>
          </ListItem>
        </Info>
        <Submit>
          <Button onPress={() => onCarregarProva(prova.id)}>
            <Link>Começar</Link>
          </Button>
        </Submit>
      </Header>
    </Container>
  );
}
