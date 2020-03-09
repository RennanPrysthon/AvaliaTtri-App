import React from 'react';
import { Container, Link, Title } from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function HeaderBack({navigation, title}) {
  return (
    <Container>
      <Link
        onPress={
          () => navigation.goBack()
        }
      >
        <Icon name="navigate-before" size={30} color="#def" />
      </Link>
      <Title>
        {title}
      </Title>
    </Container>
  );
}