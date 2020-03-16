import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 5px;
`;

export const Header = styled.View`
  padding: 10px;
  background-color: ${props => props.resposta ? "#44aa36" : "#df3406"};
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const Enunciado = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export const Body = styled.View`
  background-color: #333;
`;

export const List = styled.View`
  padding: 10px;
`;

export const ListItem = styled.View`
  flex-direction: row;
  margin: 5px;
  align-items: center;
`;

export const Key = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const Value = styled.Text`
  color: #fff;
  font-size: 14px;
  margin-left: 5px;
  padding-right: 5px;
`;

export const Footer = styled.Text`
  background-color: #222;
  padding: 20px 10px;
`;

export const Texto = styled.Text`
  font-size: 16px;
  color: #f5f5f5;
`;

export const Alternativa = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;

export const Resultado = styled.Text`
  font-size: 14px;
  color: #f5f5f5;
  font-weight: bold;
`;