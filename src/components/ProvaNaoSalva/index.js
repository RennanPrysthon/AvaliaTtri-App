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

  const acaoProva = () => {
    if(data.statusProva == 'FEITA'){
      onVerResult(data.resultado_id)
    } else {
      onFazerTest(data.id)
    }
  }

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
      <Submit feita={data.statusProva == 'FEITA'} onPress={acaoProva} >
        <SubmitText>{ data.statusProva == 'FEITA' ? 'Ver resultado' : 'Fazer prova'}</SubmitText>
      </Submit>
    </Container>
  );
}
