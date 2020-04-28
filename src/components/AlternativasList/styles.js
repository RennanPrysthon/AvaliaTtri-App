import styled from 'styled-components/native';
import { StyleSheet } from 'react-native'
export const Container = styled.ScrollView`

`;

export const Alternativa = styled.TouchableOpacity`
  background-color: ${props => props.active ? '#e0e0e0' : '#fff'};
  flex-direction: column;
  flex: 1;
  justify-content: center;
  border-width: ${StyleSheet.hairlineWidth}px;
`;


export const Content = styled.View`
  margin: 10px 0;
  padding: 20px;
  flex-direction: row;
  flex: 1;
  align-items: center;
`

export const TextoAlternativa = styled.Text`
  padding: 0 10px;
`;


export const Indicador = styled.View`

  position: relative;
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
