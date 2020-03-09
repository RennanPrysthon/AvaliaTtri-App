import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px;  
`;

export const Enunciado = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;


export const Alternativas = styled.View`
  padding: 10px;
`;

export const Alternativa = styled.Text`
  font-size: 18px;
  padding: 10px;
  margin-bottom: 5px;
  background-color: ${props => props.isPresent};
`;

