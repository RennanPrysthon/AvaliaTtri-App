import React, { useEffect, useState }from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { 
  Container, 
  Header,
  Titulo,
  Rodape,
  RodapeTexto,
  Data,
  Submit,
  SubmitText,
  Loading
} from './styles';

import { StatusProva, Creators } from '../../store/ducks/provas';
import { montarProva } from './utils';
import api from '../../services/api';

export default function Prova({ onVerResult, onFazerTest, onContinuarTeste, data }) {
  const [provaSalva, setProvaSalva] = useState(null);
  const [isSalva, setIsSalva] = useState(false);
  const [loading, setLoading] = useState(false);

  const provas = useSelector(state => state.provas);
  const questoes = useSelector(state => state.questoes);
  const auth = useSelector(state => state.auth);

  const dispatch = useDispatch();

  async function verificarStatusProva() {
    var test = {} 
    provas.filter(p => p.id == data.id ? test = p : {});
    if(test.status == StatusProva.ENVIANDO){
      const provaEnviar = await montarProva(test, questoes, auth.user.user_id);

      const headers = {
        'Content-Type': 'application/json',
        Authorization: auth.token,
      };
      try {
        await api.post(`/provas/finalizar`, provaEnviar, {headers})
        .then(res => {
          dispatch(Creators.finalizarProva(provaEnviar.prova_id));
          console.log('FazerProva: colocando como finalizada');
        });
      } catch (e) {
        dispatch(Creators.enviarProva(provaEnviar.prova_id));
        console.log('FazerProva: colocando como enviar' + e);
      }
    }
    
  }

  const reload = () => {
    setLoading(true); 
    if(loading === true) {
      return;
    }
    var test = provas.filter(p => p.id == data.id);
    if(test[0] != null) {
      setProvaSalva(test[0]);
      setIsSalva(true);
    } else {
      setProvaSalva(null);
      setIsSalva(false);
    }
    setLoading(false);
  }
  useEffect(() => {
    reload();
  }, []);
  useEffect(() => {
    reload();
  }, [provas]);
  
  const onHandleFazerTeste = () => {
    onFazerTest();
  }

  const onHandleVerResultado = id => onVerResult(id);

  const onHandleContinuarTeste = (id) => {
    onContinuarTeste(id);
  };
  
  const ActionButton = () => {
    if(isSalva) {
      switch(provaSalva.status) {
        case StatusProva.INICIADA:
          return (
            <Submit 
              feita={false}
              onPress={() => onHandleContinuarTeste(data.id)}
            >
              <SubmitText>Continuar teste</SubmitText>
            </Submit>
          );
        case StatusProva.ENVIANDO:
          return (
            <Submit 
              feita={false}
              onPress={() => {}}
            >
              <SubmitText>Enviando </SubmitText><Loading size="small" color="#fff"/>
            </Submit>
          );
        case StatusProva.FINALIZADA:
          return (
            <Submit feita={true}
              onPress={() => onHandleVerResultado(data.id)}
            >
              <SubmitText>Ver resultado</SubmitText>
            </Submit>
          );
      }
    } else {
      if(data.status == 'FEITA') {
        return (
          <Submit feita={true}
            onPress={() => onHandleVerResultado(data.id)}
          >
            <SubmitText>Ver resultado</SubmitText>
          </Submit>
        );
      } else {
        return (<Submit 
          feita={false}
          onPress={() => onHandleFazerTeste(data.id)}
        >
          <SubmitText>Fazer prova</SubmitText>
        </Submit>);
      }
    }
  }

  
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
      <ActionButton />
    </Container>
  );
}
