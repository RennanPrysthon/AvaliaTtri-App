import React, { useState, useEffect } from 'react';

import { FlatList } from 'react-native';
import { Container } from './styles';

import api from '../../services/api';

import Prova from '../../components/Prova/index';
import { useDispatch, useSelector } from 'react-redux';
import { Types as q} from '../../store/ducks/questoes';
import { Types as p} from '../../store/ducks/provas';

export default function Main({ navigation }) {
  const [data, setData] = useState();
  const [novos, setNovos] = useState();
  
  const [loading, setLoading] = useState(false);
  
  const dispacth = useDispatch();
  const provas = useSelector(state => state.provas);
  const auth = useSelector(state => state.auth);

  async function loadData() {
    setLoading(true);
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': auth.token
    }
    api.get(`/provas?id=${auth.user.user_id}`, {headers})    
    .then(resp => {
        setData(resp.data.content);
      })
      .catch(err => console.log(err));
    setLoading(false);
  }

  async function carregar() {
    setLoading(true);
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': auth.token
    }
    api.get(`/provas?id=${auth.user.user_id}?page=0`, {headers})    
    .then(resp => {
        setNovos(resp.data.content);
      })
      .catch(err => console.log(err));
    setLoading(false);
  }
  
  useEffect(() => {
    loadData();
  }, [provas])
 
  return (
    <Container >
      <FlatList 
        inverted={false}
        key="list"
        data={data}
        keyExtractor={data => String(data.id)}
        showsVerticalScrollIndicator={false}
        renderItem={(data) => (
          <Prova 
            onFazerTest= {
              () => navigation.navigate('DetalheProva', {
                prova: data.item
              })
            }
            onVerResult= {
              (idProva, idUser = 11) => navigation.navigate('Resultado', {
                idProva: idProva, 
                idUser: idUser
              })
            } 
            onContinuarTeste= {
              (id) => {
                navigation.navigate('FazerProva', {
                  id: id, 
                  title: data.item.titulo
                })  
                /*dispacth({type: q.RESPONDER_QUESTAO})
                dispacth({type: p.FINALIZAR})*/
              }
            }
            data={data.item} 
          />)
        }
        onRefresh={() => loadData()}
        refreshing={loading}
      />
    </Container>
  );
}
