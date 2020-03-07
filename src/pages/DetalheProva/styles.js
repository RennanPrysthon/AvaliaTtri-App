import styled from 'styled-components/native';

export const Container = styled.View`
  
`;

export const Header = styled.View`
  padding: 20px;
  background-color: #fff;
  margin: 5px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;

export const Info = styled.View`
  padding: 5px;
  margin: 15px 0;
`;

export const ListItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Chave = styled.Text`
  font-size: 14px;  
`;

export const Valor = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

export const Submit = styled.View`
  justify-content: center;
  align-items: center;
`

export const Button = styled.TouchableOpacity`
  padding: 15px 100px;
  background-color: #000;
`;

export const Link = styled.Text`
  color: #fff;
  font-size: 14px;
`;
