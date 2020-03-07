import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Reactotron } from 'reactotron-react-native';
import { Types, Creators } from '../../store/ducks/provas';

import api from '../../services/api';
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

export default function DetalheProva({ route }) {

  const dispacth = useDispatch();
  const provas = useSelector(state => state.provas);

  const onCarregarProva = async (id) => {
    await api.get(`provas/${id}`)
      .then(res => {
        let prova = res.data;

        prova.questoes.map(quest => {
          quest.respostaUsuario = "";
          quest.isRespondida = false;
          quest.idProva = prova.id;
        });
        console.log(provas);
        dispacth({type: Types.ADD_PROVA, enunciado: 'erer', id: 1, alternativas: [{'a': 'teste'}]});
        
        /*
        dispacth({type: Types.FINALIZAR});

        */
      });
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
          <Button onPress={() => dispacth({type: Types.FINALIZAR})}>
            <Link>Começar</Link>
          </Button>
        </Submit>
      </Header>
    </Container>
  );
}
