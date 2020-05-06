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
      {texto: data.alternativaA, valorAlternativa: 'A', imagemAlternativa: data.alternativaAImg},
      {texto: data.alternativaB, valorAlternativa: 'B', imagemAlternativa: data.alternativaBImg},
      {texto: data.alternativaC, valorAlternativa: 'C', imagemAlternativa: data.alternativaCImg},
      {texto: data.alternativaD, valorAlternativa: 'D', imagemAlternativa: data.alternativaDImg},
      {texto: data.alternativaE, valorAlternativa: 'E', imagemAlternativa: data.alternativaEImg},
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
          <Imagem tem_imagem={alternativa.imagemAlternativa != "" } link_imagem={alternativa.imagemAlternativa}  />
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