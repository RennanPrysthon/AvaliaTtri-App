import styled from 'styled-components/native';

export const Container = styled.View`
`;

export const Enunciado = styled.Text`
  font-size: 20px;
`;

export const Header = styled.View`
  padding: 15px 20px;
  background-color: #fff;
  margin-bottom: 5px;  
  border-bottom-width: 2px;
  border-color: #444;
`;

export const Alternativas = styled.View`
  padding: 20px;
`;

export const Alternativa = styled.Text`
  font-size: 16px;
  margin: 5px 0px;  
  border: 2px;
  border-radius: 5px;
  padding: 15px;
  background-color: ${props => props.isPresent ? '#000' : "#fafafa"};
  color: ${props => props.isPresent ? "#fafafa" : "#000"};
`;

export const Link = styled.TouchableOpacity`

`;