import React, {useState, useEffect} from 'react';

import {RefreshControl} from 'react-native';
import {Container} from './styles';

import {useDispatch, useSelector} from 'react-redux';
import {Creators} from '../../store/ducks/feed';

import api from '../../services/api';

import Prova from '../../components/Prova/index';

export default function Main({navigation}) {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(null);

  const dispacth = useDispatch();
  const provas = useSelector(state => state.provas);
  const auth = useSelector(state => state.auth);
  const feed = useSelector(state => state.feed);
  
  const list = 
      feed.map(prova => (
        <Prova
          key={prova.id}
          onFazerTest={() =>
            navigation.navigate('DetalheProva', {
              prova: prova,
            })
          }
          onVerResult={(idProva, idUser = 11) =>
            navigation.navigate('Resultado', {
              idProva: idProva,
              idUser: idUser,
            })
          }
          onContinuarTeste={id => {
            navigation.navigate('FazerProva', {
              id: id,
              title: prova.titulo,
            });
          }}
          data={prova}
        />
      ));

  const loadMemoryData = () => {
    dispacth(Creators.refreshFeed(provas));
  }

  const loadData = async () => {
    if (loading) return;

    setLoading(true);
    setPage(0);
    const headers = {
      'Content-Type': 'application/json',
      Authorization: auth.token,
    };
    api
      .get(`/provas?id=${auth.user.user_id}&page=0`, {headers})
      .then(resp => {
        dispacth(Creators.refreshFeed([]));
        dispacth(Creators.refreshFeed(resp.data.content));
        setTotalPages(resp.data.totalPages);
        setPage(1);
      })
      .catch(err => {
        loadMemoryData();
      });
    setLoading(false);
  };

  const carregar = async () => {
    if (totalPages <= page) return;
    if (page == 0) return;
    if (loading) return;

    console.log('carregar');

    setPage(page + 1);
    setLoading(true);

    const headers = {
      'Content-Type': 'application/json',
      Authorization: auth.token,
    };
    api
      .get(`/provas?id=${auth.user.user_id}&page=${page}`, {headers})
      .then(resp => {
        dispacth(Creators.loadFeed(resp.data.content));
      })
      .catch(err => console.log(err));

    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, [provas]);

  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 1;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  return (
    <Container
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={loadData} />
      }
      onScroll={({nativeEvent}) => {
        if (isCloseToBottom(nativeEvent)) {
          carregar();
        }
      }}>
      {!loading && list}
    </Container>
  );
}
