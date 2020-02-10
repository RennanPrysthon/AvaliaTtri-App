import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 8px;
`;

export const Pergunta = styled.View`
  background-color: ${props => props.resposta ? "#44aa36" : "#df3406"};
  margin-bottom: 5px;
  padding: 10px 15px;
`;

export const Enunciado = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 5px;
`;

export const Texto = styled.Text`
  color: #f5f5f5;
`;

export const Alternativa = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;