import React, { useState, useEffect } from 'react';

import { FlatList } from 'react-native';
import { Container } from './styles';

import api from '../../services/api';

import Prova from '../../components/Prova/index';

export default function Main({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    setLoading(true);

    await api.get('/provas?id=11')
      .then(resp => {
        setData(resp.data);
        console.log(resp.data);
        console.log(data);
      })
      .catch(err => console.log(err));

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
        renderItem={(data) => (
          <Prova 
            onFazerTest={
              () => navigation.navigate('DetalheProva', {
                prova: data.item
              })
            }
            onVerResult={
              (idProva, idUser = 11) => navigation.navigate('Resultado', {
                idProva: idProva, 
                idUser: idUser
              })
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
