import React, {
  useEffect,
  useState,
  useContext
} from 'react';

import {
  Container,
  Alternativa,
  TextoAlternativa,
  Indicador,
  Marked,
  Content
} from './styles'

import { RespostaContext } from "../Questao";

import Imagem from '../Imagem';

export default function AlternativasList() {

  const { data, onHandleSelect } = useContext(RespostaContext);
  const [alternativas, setAlternativas] = useState(data.alternativas);


  const selectAlternativa = (valor) => {
    onHandleSelect(valor)
  }

  return (
    <Container>
      {alternativas.map(alternativa =>
        <Alternativa
          active={alternativa.alternativa == data.respostaUsuario}
          onPress={() => selectAlternativa(alternativa.alternativa)}
        >            
          <Imagem tem_imagem={alternativa.temImagem != "" } link_imagem={alternativa.imagem}  />
          <Content>
            <Indicador active={alternativa.alternativa == data.respostaUsuario }>
              <Marked active={alternativa.alternativa == data.respostaUsuario}/>
            </Indicador>
            <TextoAlternativa>
              {alternativa.alternativa}) {alternativa.texto}
            </TextoAlternativa>
          </Content>
        </Alternativa>
      )}
    </Container>
  );
}