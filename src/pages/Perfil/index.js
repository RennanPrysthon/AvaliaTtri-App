import React, {
  useEffect,
  useState
} from 'react';

import {Api} from '../../services/api';
import { useSelector } from 'react-redux';
import { ActivityIndicator , RefreshControl} from 'react-native';
import { 
  Container, 
  Header,
  Content,
  Name,
  Email,
  Prova,
  Title,
  Nota
} from './styles';

export default function Perfil() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({})
  const auth = useSelector(state => state.auth);

  async function loadUserInfo() {
    setLoading(true);
    const data = await Api.get(`/usuarios/${auth.user.user_id}/resultados`)

    setUser(data)
    setLoading(false);
    return data;
  }

  useEffect(() => {
    loadUserInfo()
  }, [])

  if(loading) return <ActivityIndicator size="large"/>

  const reload = () => {
    console.log('reloaded')
    loadUserInfo()
  }

  return (
    <Container
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={reload} />
      }
    >
      <Header>
        <Name>
          {user.user_name}
        </Name>

        <Email>
          {user.user_email}
        </Email>
      </Header>
      <Content>
        {user.quantidade_provas_respondidas > 0 &&
          
          user.provas_respondidas.map(p =>
            <Prova>
              <Title>
                {p.titulo}
              </Title>
              <Nota nota ={p.nota}>
                pontuação {p.nota}
              </Nota>
            </Prova>
          )
        }
      </Content>
    </Container>
  );
}
