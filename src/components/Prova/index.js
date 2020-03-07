import React, { useEffect }from 'react';

import { 
  Container, 
  Header,
  Titulo,
  SubTitulo,
  Rodape,
  RodapeTexto,
  Data,
  Submit,
  SubmitText
} from './styles';
import Reactotron from 'reactotron-react-native';

export default function Prova({ onVerResult, onFazerTest, data }) {
  
  useEffect(() => {
    Reactotron.log(data);
  }, []);
  
  const onHandleFazerTeste = id => {
    onFazerTest(id);
  }

  const onHandleVerResultado = id => onVerResult(id);
  
  return (
    <Container>
      <Header>
        <Titulo>{data.titulo}</Titulo>
      </Header>
      <SubTitulo>{data.materia}</SubTitulo>
      <Rodape>
        {data.status == 'FEITA' ? 
          <RodapeTexto>
            Pontuação: {data.pontuacao}
          </RodapeTexto>
          :
          <RodapeTexto>
            Quantidade de questoes: {data.qtd_questoes}
          </RodapeTexto>
        }
        
        <Data>
          {data.data}
        </Data>
      </Rodape>
      {data.status == 'NAO_FEITA' ?

        <Submit 
          feita={false}
          onPress={() => onHandleFazerTeste(data.id)}
          >
          <SubmitText>Fazer prova</SubmitText>
        </Submit>

        :

        <Submit feita={true}
          onPress={() => onHandleVerResultado(data.id)}
        >
          <SubmitText>Ver resultado</SubmitText>
        </Submit>
      }
    </Container>
  );
}
