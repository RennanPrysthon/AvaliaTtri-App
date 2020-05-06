import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  padding: 10px;
  background-color: #fff;
`;

export const Header = styled.View`
  flex: 1;
  padding: 10px;
`
export const Info = styled.View`
  flex-direction: row;
  flex: 1;
  border-bottom-width: 1px;
`;

export const Value = styled.Text`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 10px 0;

`;
export const Key = styled.Text`
  flex:1;
  background-color: #f0f0f0;
  align-items: center;
  justify-content: center;
  padding: 10px 5px;
`;
export const Questoes = styled.ScrollView`
  padding: 15px;
`;

export const Questao = styled.View`
  margin-bottom: 10px;
`;

export const QuestaoHeader = styled.View`
  background-color: ${props => props.correta == true ? '#4aae5a': '#ee7171'};
  padding: 15px;
`;

export const Enunciado = styled.Text`
  color: #fff;
`;

export const Alternativas = styled.View`
  padding: 10px;
`;

export const Alternativa = styled.Text`
  padding:5px;
`;