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
  const [alternativas, setAlternativas] = useState([]);
  useEffect(()=>{
    const alternativaList = [
      {...data.alternativa_A},
      {...data.alternativa_B},
      {...data.alternativa_C},
      {...data.alternativa_D},
      {...data.alternativa_E},
    ]
    setAlternativas(alternativaList)
  },[data])

  const selectAlternativa = (valor) => {
    onHandleSelect(valor)
  }


  return (
    <Container>
      {alternativas.map(alternativa =>
        <Alternativa
          active={alternativa.valorAlternativa == data.respostaUsuario}
          onPress={() => selectAlternativa(alternativa.valorAlternativa)}
        >
          <Indicador active={alternativa.valorAlternativa == data.respostaUsuario }>
            <Marked active={alternativa.valorAlternativa == data.respostaUsuario}/>
          </Indicador>
          <Content>
            {alternativa.imagem &&  <Imagem tem_imagem={alternativa.imagem} link_imagem={alternativa.imagem.caminhoArquivo}  />}
            <TextoAlternativa>
              {alternativa.textoAlternativa}
            </TextoAlternativa>
          </Content>
        </Alternativa>
      )}
    </Container>
  );
}