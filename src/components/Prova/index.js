import React, { useEffect }from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { 
  Container, 
  Header,
  Titulo,
  SubTitulo,
  Rodape,
  RodapeTexto,
  Data
} from './styles';
import Reactotron from 'reactotron-react-native';

export default function Prova({ data }) {
  
  useEffect(() => {
    Reactotron.log(data);
  }, []);

  return (
    <Container>
      <Header>
        <Titulo>{data.titulo}</Titulo>
        <Icon name='ios-information-circle-outline' size={22} color="#52a" />
      </Header>
      <SubTitulo>{data.materia}</SubTitulo>
      <Rodape>
        <RodapeTexto>
          Quantidade de questoes: {data.qtd_questoes}
        </RodapeTexto>
        <Data>
          {data.data}
          
        </Data>
      </Rodape>
    </Container>
  );
}
