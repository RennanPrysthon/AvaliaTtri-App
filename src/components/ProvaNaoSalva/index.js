import React from 'react';

import { 
  Container, 
  Header,
  Titulo,
  Description,
  Rodape,
  RodapeTexto,
  Data,
  Submit,
  SubmitText
} from './styles';

export default function ProvaNaoSalva({ onVerResult, onFazerTest, data }) {  
  console.log(data)
  // isActivated
  return (
    <Container>
      <Header>
        <Titulo>{data.title}</Titulo>
        <Description>
          {data.description}
        </Description>
      </Header>
      <Rodape>
        {data.statusProva == 'FEITA' ? 
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
      {data.statusProva == 'FEITA' ? 
        <Submit
          onPress={() => { 
            onVerResult(data.resultado_id)
          }}
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
