import styled from 'styled-components/native';
import { StyleSheet } from "react-native";
export const Container = styled.View`
  padding: 2px;
`;

export const Enunciado = styled.Text`
  font-size: 20px;
`;


export const Header = styled.View`
  padding: 15px 20px;
  background-color: #fff;
  margin-bottom: 25px;  
  border-bottom-width: 1.5px;
  border-color: #444;
`;

export const Alternativas = styled.View`
  padding: 20px;
`;

export const Alternativa = styled.Text`
  
  margin-top: ${props => props.isImagePresent ? '20px' : "0"};
  font-size: 16px;
  color: ${props => props.isPresent ? "#fafafa" : "#000"};
  align-self: flex-start;
`;

export const Link = styled.TouchableOpacity`
  margin: 5px 0px;  
  border: 2px;
  border-radius: 5px;
  padding: 15px;
  background-color: ${props => props.isPresent ? '#000' : "#fafafa"};
  align-items: center;
`; 