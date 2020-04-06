import React from 'react';

import { 
  Container, 
  Header,
  Titulo,
  Rodape,
  RodapeTexto,
  Data,
  Submit,
  SubmitText
} from './styles';

export default function ProvaNaoSalva({ onVerResult, onFazerTest, data }) {  
  return (
    <Container>
      <Header>
        <Titulo>{data.titulo}</Titulo>
      </Header>
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
      {data.status == 'FEITA' ? 
        <Submit
          onPress={() => onVerResult(data.id)}
        >
          <SubmitText>Ver resultado</SubmitText>
        </Submit>
        :    
        <Submit
          onPress={() => onFazerTest(data.id)}
        >
          <SubmitText>Fazer teste</SubmitText>
        </Submit>
      }
    </Container>
  );
}
