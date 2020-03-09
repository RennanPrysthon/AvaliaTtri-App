import React, { useEffect, useState }from 'react';
import { useSelector } from 'react-redux';

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

export default function Prova({ onVerResult, onFazerTest, onContinuarTeste, data }) {

  const provas = useSelector(state => state.provas);
  const [provaSalva, setProvaSalva] = useState(false);

  useEffect(() => {
    var test = provas.filter(p => p.id == data.id);
    if(test[0] != null) {
      setProvaSalva(true);
    }
  }, [provas]);
  
  const onHandleFazerTeste = () => {
    onFazerTest();
  }

  const onHandleVerResultado = id => onVerResult(id);

  const onHandleContinuarTeste = (id) => {
    onContinuarTeste(id);
  };

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
        
        provaSalva ? 
          <Submit 
            feita={false}
            onPress={() => onHandleContinuarTeste(data.id)}
            >
            <SubmitText>Continuar teste</SubmitText>
          </Submit>
          :
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
