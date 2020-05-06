import React, {useState, useEffect} from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Container, Loading } from './styles';
import Controles from '../../components/Controles';
import HeaderBack from '../../components/HeaderBack';
import Questao from '../../components/Questao';
import FinalizarProva from '../../components/FinalizarProva';

import { Creators as provaAction } from '../../store/ducks/provas';
import { Creators as questoesActions} from '../../store/ducks/questoes';
import api from '../../services/api';
import errorMessage from '../../utils/errorMessage';

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
    provaEnviada.usuario = auth.user.user_id;

    provaEnviada.questoes_respondidas = [];

    questoes.map(
      q => {
        provaEnviada.questoes_respondidas.push(
          {
            questao: q.id,
            alternativa_usuario: q.respostaUsuario
          }
        )
      }
    );
    return provaEnviada;
  }
  
  const enviarProva  = async () => {
   
    var provaEnviada = await montarProva();
    try {
      const response = await api.post(`/provas/${id}/responder`, provaEnviada);
      dispatch(provaAction.finalizarProva(id));
      navigation.navigate('Home')
    } catch (error) {
      errorMessage(error)
      dispatch(provaAction.enviarProva(id));
      console.log(error);
    }
  }

  useEffect(() => {
    podeFinalizarProva();
  }, [page, questoesState]);

  useEffect(() => {
    mapearQuestoes();
  }, []);

  useEffect(() => {
    mapearQuestoes();
  }, [questoesState]);


    
  if(loading) return <Loading size="large" color="#234"/>;
  
  if(page == total + 1){
    return[
      <HeaderBack 
        navigation={navigation} 
        title={title}
      />,
      <Controles 
        total={total + 1}
        page={page}
        onBack={() => setPage(page - 1)}
        onFoward={() => setPage(page + 1)}
      />,
      <FinalizarProva 
        nomeProva={title}
        podeFinalizar={podeFinalizar}
        idProva={id}
        onFinalizar={enviarProva}
      />
    ]
  }
  
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
       <Questao 
          data={questoes[page]}
          onSelect={(resp) => {
            if(questoes[page].respostaUsuario == '') {
              dispatch(provaAction.responderQuestao(questoes[page].idProva))
              setPage(p => p + 1)
            }
            dispatch(questoesActions.responderQuestao(questoes[page].id, resp))
            
          }}
        />
      </Container>
    </>
  );
}
