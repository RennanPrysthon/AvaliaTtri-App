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
  const [loading, setLoading] = useState(false);
  
  const dispacth = useDispatch();
  const provas = useSelector(state => state.provas);

  async function loadData() {
    setLoading(true);
    await api.get(`/provas?id=11`)
      .then(resp => {
        setData(resp.data);
      })
      .catch(err => console.log(err));
    setLoading(false);
  }

  async function carregar() {
    loadData();
  }
  
  useEffect(() => {
    loadData();
  }, [provas])
 
  return (
    <Container >
      <FlatList 
        data={data}
        keyExtractor={data => data.id}
        extraData={data}
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
        onRefresh={() => carregar()}
        refreshing={loading}
      />
    </Container>
  );
}
