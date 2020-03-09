import React from 'react';


import { 
  Container,
  Header, 
  Title,
  Menu,
  MenuItem,
  MenuLabel,
  MenuIcon,
  Footer,
  FooterAction
} from "./styles";

export default function SideBar({ state, navigation, descriptors}) {
  const routeName =state.routes[state.index].name;

  const onChange = name => {
    navigation.navigate(name);
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
          onPress={() =>onChange('Login')}
          selected={routeName == 'Login'}
        >
          <MenuIcon name="home" size={22} selected={routeName == 'Login'}/>
          <MenuLabel selected={routeName == 'Login'}>Home</MenuLabel>
        </MenuItem>
      </Menu>
      <Footer>
        <FooterAction>

        </FooterAction>
      </Footer>
    </Container>
  );
}
