import styled from 'styled-components/native';
export const Container = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const ContainerList = styled.ScrollView`
  flex: 1;
  background-color: #fff;
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput`
  background-color: #f0f0f0;
  padding: 8px 15px;
  border-width: ${props => props.error ? '1px' : '0px'};
  border-color: ${props => props.error ? '#d33032' : '#222'};
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  background-color: #333;
  border-radius: 2px;
  padding: 10px 20px;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: center;
`;

export const EsqueciSenha = styled.Text`
  color: #555;
`;

export const Link = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
`;
