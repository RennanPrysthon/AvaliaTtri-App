import React, { useEffect, useState } from 'react';

import { Container, Title } from './styles';
import { Reactotron } from 'reactotron-react-native';

export default function DetalheProva({ navigation }) {
  useEffect(() => {
    const data = navigation.state.params;

      console.log(data)
  }, [])

  return (
    <Container>
      <Title>{idProva}</Title>
    </Container>
  );
}
