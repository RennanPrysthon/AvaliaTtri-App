import React, { useState, useEffect } from 'react';

import { FlatList } from 'react-native';
import { Container } from './styles';

import Reactotron from 'reactotron-react-native';
import api from '../../services/api';

import Prova from '../../components/Prova/index';

export default function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
     const loadData = async () => {
      await api.get('/provas?id=6')
        .then(resp => setData(resp.data))
        .catch(err => Reactotron.log(err))
    }

    loadData();
  }, [])

  return (
    <Container >
      <FlatList 
        data={data}
        keyExtractor={data => data.id}
        renderItem={(data) => (<Prova data={data.item} />)}
      />
    </Container>
  );
}
