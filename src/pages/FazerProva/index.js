import React, {useState, useEffect} from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Container, Loading } from './styles';
import Controles from '../../components/Controles';
import HeaderBack from '../../components/HeaderBack';
import Questao from '../../components/Questao';
import FinalizarProva from '../../components/FinalizarProva';

import { Creators as provaAction } from '../../store/ducks/provas';
import { Creators as questoesActions} from '../../store/ducks/questoes';
import { Api } from '../../services/api';

export default function FazerProva({route, navigation}) {
  const {id, title} = route.params;
  const [questoes, setQuestoes] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [podeFinalizar, setPodeFinalizar] = useState();

  const questoesState = useSelector(state => state.questoes);

  const auth = useSelector(state => state.auth);

  const dispatch = useDispatch();
  
  const mapearQuestoes = () => {
    setLoading(true);
    var data = [];
    questoesState.map(q => {
        if(q.idProva == id) {
          data.push(q);
        }
      }
    );
    setTotal(data.length - 1)
    setQuestoes(data);
    setLoading(false);
  }

  const podeFinalizarProva = () => {
    var valor = true;
    questoes.map(q => {
     if(q.respostaUsuario == '') {
       valor = false;
     } 
    });
    setPodeFinalizar(valor);
  }

  const montarProva = () => {
    var provaEnviada = {};
    provaEnviada.aluno_id = auth.user.user_id;
    provaEnviada.prova_id = id;
    provaEnviada.questaoRespondidaDTOS = [];

    questoes.map(
      q => {
        provaEnviada.questaoRespondidaDTOS.push(
          {
            id_questao: q.id,
            alternativa_usuario: q.respostaUsuario
          }
        )
      }
    );
    return provaEnviada;
  }
  
  async function enviarProva()  {
   
    var provaEnviada = await montarProva();
    try {
      await Api.post(`/provas/finalizar`, provaEnviada);
      dispatch(provaAction.finalizarProva(provaEnviada.prova_id));
      navigation.navigate('Home')
    } catch (error) {
      dispatch(provaAction.enviarProva(provaEnviada.prova_id));
      console.log('FazerProva: colocando como enviar');
    }
  }

  useEffect(() => {
    podeFinalizarProva();
  }, [page]);

  useEffect(() => {
    mapearQuestoes();
  }, []);

  useEffect(() => {
    mapearQuestoes();
  }, [questoesState]);

  return (
    <>
      <HeaderBack 
        navigation={navigation} 
        title={title}
      />
      <Controles 
        total={total + 1}
        page={page}
        onBack={() => setPage(page - 1)}
        onFoward={() => setPage(page + 1)}
      />
      <Container>
      {
        loading && 
        <Loading size="large" color="#234"/>
      }
      {
        !loading &&
        page < total + 1 &&
        <Questao 
          data={questoes[page]}
          onSelect={(resp) => {
            if(questoes[page].respostaUsuario == '') {
              dispatch(provaAction.responderQuestao(questoes[page].idProva))
            }
            dispatch(questoesActions.responderQuestao(questoes[page].id, resp))
          }}
        />}
      {
        !loading && page == total + 1 && 
        <FinalizarProva 
          nomeProva={title}
          podeFinalizar={podeFinalizar}
          idProva={id}
          onFinalizar={() => enviarProva()}
        />
      }
      </Container>
    </>
  );
}
