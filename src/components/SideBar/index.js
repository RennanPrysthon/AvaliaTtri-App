import React from 'react';
import { useDispatch } from 'react-redux';
import { Types as AuthT} from '../../store/ducks/auth';
import { Types as QuestT} from '../../store/ducks/questoes';
import { Types as ProvaT} from '../../store/ducks/provas';

import { 
  Container,
  Header, 
  Title,
  Menu,
  MenuItem,
  MenuLabel,
  MenuIcon,
  Footer,
  FooterAction,
  GetOutButton,
  GetOutText,
  GetOutIcon
} from "./styles";

export default function SideBar({ state, navigation, descriptors}) {
  const routeName =state.routes[state.index].name;
  const dispatch = useDispatch();

  const onChange = name => {
    navigation.navigate(name);
  }

  const onLogout = () => {
    dispatch({type: AuthT.LOGOUT});
    dispatch({type: QuestT.RESETAR});
    dispatch({type: ProvaT.RESETAR});
  }

  return (
    <Container>
      <Header>
        <Title>AvaliaTRI</Title> 
      </Header>
      <Menu>
        <MenuItem 
          onPress={() => onChange('Home')}
          selected={routeName == 'Home'}
        >
          <MenuIcon name="home" size={22} selected={routeName == 'Home'}/>
          <MenuLabel selected={routeName == 'Home'}>Home</MenuLabel>
        </MenuItem>
        <MenuItem 
          onPress={() =>onChange('Perfil')}
          selected={routeName == 'Perfil'}
        >
          <MenuIcon name="person" size={22} selected={routeName == 'Perfil'}/>
          <MenuLabel selected={routeName == 'Perfil'}>Perfil</MenuLabel>
        </MenuItem>
      </Menu>
      <Footer>
        <FooterAction>
          <GetOutButton
            onPress={() => onLogout()}
          >
            <GetOutIcon name="exit-to-app" size={22}/>
            <GetOutText>Sair</GetOutText>
          </GetOutButton>
        </FooterAction>
      </Footer>
    </Container>
  );
}
