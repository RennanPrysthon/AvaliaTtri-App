import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px;  
`;

export const Enunciado = styled.Text`
  font-size: 20px;
`;

export const Header = styled.View`
  padding: 15px 10px;
  background-color: #fff;
`;

export const Alternativas = styled.View`
  padding: 10px;
`;

export const Alternativa = styled.Text`
  font-size: 18px;
  padding: 10px;
  margin-bottom: 7px;
  color: ${props => props.isPresent ? '#fff' : '#222'};
  background-color: ${props => props.isPresent ? '#348' : '#bbb'};
  border: ${props => props.isPresent ? '1px' : '2px'};
  border-color: ${props => props.isPresent ? '#34f' : '#222'};
  border-radius: 3px;
`;
