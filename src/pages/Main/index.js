import React, { useState, useEffect } from 'react';

import { FlatList } from 'react-native';
import { Container } from './styles';

import Reactotron from 'reactotron-react-native';
import api from '../../services/api';

import Prova from '../../components/Prova/index';

import { useSelector, useDispatch} from 'react-redux';
import { Types } from '../../store/ducks/provas';

export default function Main({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const tests = useSelector(state => state.provas);
  const dispatch = useDispatch();

  const loadData = async () => {
    setLoading(true);
    await api.get('/provas?id=11')
      .then(resp => setData(resp.data))
      .catch(err => Reactotron.log(err))
    setLoading(false);
  }
  
  useEffect(() => {
    loadData();
  }, [])
 
  return (
    <Container >
      <FlatList 
        data={data}
        keyExtractor={data => data.id}
        renderItem={(data) => (<Prova 
          onFazerTest={ async (idProva, idUser) => {
              await api.get('/provas/' + idProva)
              .then(res => {
                Reactotron.log(res.data);
                let prova = res.data;
                prova.questoes.map(p => p.respostaUsuario = "");
                prova.questoes.map(p => p.respondida = false);
                dispatch({type: Types.ADD, test: prova});
                navigation.navigate('DetalheProva', {idProva: prova.id});

              })
              .catch(err => Reactotron.log(err));
            }
          }
          onVerResult={(idProva, idUser) => {
            navigation.navigate('Resultado', {idProva: idProva, idUser: idUser});
          }
        } 
        data={data.item} />)}
        onRefresh={() => loadData()}
        refreshing={loading}
      />
    </Container>
  );
}
