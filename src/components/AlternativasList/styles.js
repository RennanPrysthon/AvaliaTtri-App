import styled from 'styled-components/native';
import { StyleSheet } from 'react-native'
export const Container = styled.ScrollView`

`;

export const Alternativa = styled.TouchableOpacity`
  background-color: ${props => props.active ? '#eee' : '#fff'};
  flex-direction: column;
  justify-content: space-between;
`;


export const Content = styled.View`

`

export const TextoAlternativa = styled.Text`
  padding: 0 20px;
`;


export const Indicador = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: #000;
  justify-content: center;
  align-items: center;
  
`;

export const Marked = styled.View`
  width: 13px;
  height: 13px;
  border-radius: 13px;
  background-color: ${props => props.active ? '#000' : '#fff'};
`;
