import React from 'react';

import { ToastAndroid } from 'react-native';

import { 
  Container, 
  Title, 
  SubTitle,
  Submit,
  SubmitText,
  IconSend
} from './styles';

export default function FinalizarProva({nomeProva, idProva, podeFinalizar, onFinalizar}) {

  const onHandlerFinalizarProva = () => {
    onFinalizar(idProva)
  }

  return (
    <Container>
      <Title>{nomeProva}</Title>
      <SubTitle>Finalizar prova</SubTitle>
      <Submit
        onPress={() => podeFinalizar ? onHandlerFinalizarProva() : ToastAndroid.show("Responda as questões antes de finalizar a prova", ToastAndroid.SHORT)}
        podeFinalizar={podeFinalizar}
      >
        <SubmitText
          podeFinalizar={podeFinalizar}
        >Enviar</SubmitText>
        <IconSend 
          name="send"
          size={22}
          podeFinalizar={podeFinalizar}
        />
      </Submit>
    </Container>
  );
}
