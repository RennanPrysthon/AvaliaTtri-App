import styled from 'styled-components/native';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 5px;
  align-items: center;
`;

export const Link = styled.TouchableOpacity``;

export const Icon = styled(IconMaterial)`
  font-size: 35px;
`;

export const Count = styled.Text``;