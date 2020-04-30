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
      {texto: data.alternativaA, valorAlternativa: 'A'},
      {texto: data.alternativaB, valorAlternativa: 'B'},
      {texto: data.alternativaC, valorAlternativa: 'C'},
      {texto: data.alternativaD, valorAlternativa: 'D'},
      {texto: data.alternativaE, valorAlternativa: 'E'},
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
          {alternativa.imagem &&  <Imagem tem_imagem={alternativa.imagem} link_imagem={alternativa.imagem.caminhoArquivo}  />}
          <Content>
            <Indicador active={alternativa.valorAlternativa == data.respostaUsuario }>
              <Marked active={alternativa.valorAlternativa == data.respostaUsuario}/>
            </Indicador>
            <TextoAlternativa>
              {alternativa.valorAlternativa}) {alternativa.texto}
            </TextoAlternativa>
          </Content>
        </Alternativa>
      )}
    </Container>
  );
}