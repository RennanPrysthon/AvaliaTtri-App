import styled from 'styled-components/native';
import Icon from "react-native-vector-icons/MaterialIcons";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  justify-content:center;
  padding: 20px;
  background-color: #234;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const Menu = styled.View`
  flex: 1;
`;

export const MenuItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin: 10px 10px 2px 10px;
  padding: 10px;
  border-radius: 7px;
  background-color: ${props => props.selected ? '#4567': '#fff'};
  border: ${props => props.selected ? '0px': '1.5px'};
  border-color: #4567;
`;

export const MenuIcon = styled(Icon)`
  color: ${props => props.selected ? '#fff' : '#456d'};
`;

export const MenuLabel = styled.Text`
  color: ${props => props.selected ? '#fff' : '#456d'};
  font-weight: bold;
  margin-left: 5px;
`;

export const Footer = styled.View`
  background-color: #555;
`;

export const FooterAction = styled.View``;