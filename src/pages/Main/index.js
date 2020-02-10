import React, { useState, useEffect } from 'react';

import { FlatList } from 'react-native';
import { Container } from './styles';

import Reactotron from 'reactotron-react-native';
import api from '../../services/api';

import Prova from '../../components/Prova/index';
import { NavigationActions } from 'react-navigation';

export default function Main({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    Reactotron.log(navigation);
    setLoading(true);
    await api.get('/provas?id=12')
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
        renderItem={(data) => (<Prova onVerResult={(idProva, idUser) => {
          navigation.navigate('Resultado', {idProva: idProva, idUser: idUser});
        }} data={data.item} />)}
        onRefresh={() => loadData()}
        refreshing={loading}
      />
    </Container>
  );
}
