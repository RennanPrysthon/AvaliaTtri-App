import React from 'react';

import { 
  Container, 
  Header,
  Titulo,
  Rodape,
  RodapeTexto,
  Submit,
  SubmitText
} from './styles';

import { StatusProva } from '../../store/ducks/provas';

export default function ProvaSalva({ onVerResult, onContinuarTeste, data }) {
  return (
    <Container>
      <Header>
        <Titulo>{data.titulo}</Titulo>
      </Header>
      <Rodape>
        {data.status == StatusProva.FINALIZADA ? 
          <RodapeTexto>
            Pontuação: {data.pontuacao}
          </RodapeTexto>
          :
          <RodapeTexto>
            Quantidade de questoes: {data.qtd_questoes}
          </RodapeTexto>
        }
        
      </Rodape>
      {data.status == StatusProva.FINALIZADA ? 
        <Submit
          onPress={() => onVerResult(data.id)}
        >
          <SubmitText>Ver resultado</SubmitText>
        </Submit>
        :    
        <Submit
          onPress={() => onContinuarTeste(data.id)}
        >
          <SubmitText>Continuar teste</SubmitText>
        </Submit>
      }
    </Container>
  );
}
