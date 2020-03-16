import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #fff;
`;

export const Title = styled.Text`
  font-size: 20px;
  text-align: center;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #777;
`;

export const Submit = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  background-color: ${props => props.podeFinalizar ? '#000': '#0008' } ;
  padding: 15px 20px;
  margin: 10px 0;
  justify-content: center;
  align-items: center;
`;

export const SubmitText = styled.Text`
  font-size: 16px;
  color: ${props => props.podeFinalizar ? '#fff': '#fff8'}; 
`;

export const IconSend = styled(Icon)`
  margin-left: 5px;
  color: ${props => props.podeFinalizar ? '#fff': '#fff8'}; 
`;