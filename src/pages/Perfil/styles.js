import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  
`;
export const Header = styled.View`
  padding:10px 20px;
  border-bottom-width:1px;
`

export const Name = styled.Text`
  font-size: 16px;

`

export const Email = styled.Text`
  font-size: 12px;
  opacity: 0.5;
`

export const Content = styled.ScrollView`
  padding: 20px;
  
`;

export const Prova = styled.TouchableOpacity`
  border-bottom-width: 0.8px;
  background-color: #ececec;
  border-radius: 3px;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px;
  margin-bottom: 10px;
`;

export const Title = styled.Text`

`

export const Nota = styled.Text`
  color: ${props => props.nota > 60 ? '#8fd1a3': '#ff7171'};
`;

export const respondidaEm = styled.Text ``;
