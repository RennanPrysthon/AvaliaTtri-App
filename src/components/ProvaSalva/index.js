import React, {
  useMemo
} from 'react';

import { 
  Container, 
  Header,
  Titulo,
  Rodape,
  Submit,
  SubmitText,
  Progress,
  Completed
} from './styles';

import { StatusProva } from '../../store/ducks/provas';

export default function ProvaSalva({ onVerResult, onContinuarTeste, data }) {
  const progresso = useMemo(() => {
    return (data.qtd_questoes_respondidas * 100) / data.qtd_questoes;
  }, [data])

  return (
    <Container>
      <Header>
        <Titulo>{data.titulo}</Titulo>
      </Header>
      <Rodape>
        {data.status == StatusProva.FINALIZADA ? 
          <></>
          :
          <Progress>
            <Completed progress={progresso}/>
          </Progress>
        }
        
      </Rodape>
      {data.status == StatusProva.FINALIZADA ? 
        <Submit
          onPress={() =>{
              console.log(data)
             //onVerResult(data.id)
            }}
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
