import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #fff;
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Form = styled.View`
  flex:1;
  padding: 20px;
`;

export const Input = styled.TextInput`
  background-color: #f0f0f0;
  padding: 10px;
  border-bottom-width: 2px;
  border-bottom-color: ${props => props.error ? '#d33032' : '#222'};
  border-radius: 2px;
  margin-bottom: 20px;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  background-color: #222;
  border-radius: 2px;
  padding: 10px 20px;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: center;
`;

