import React from 'react';
import {Container, Enunciado, Alternativas, Alternativa, Header, Link} from './styles';
import { Image } from "react-native";
import { url_upload } from '../../services/upload';
export default function Questao({data, onSelect}) {
  const alternativas = [
    {
      key: 'A',
      value: data.alternativa_A.textoAlternativa,
      tem_imagem: data.alternativa_A.temImagem,
      imagem_link: data.alternativa_A.temImagem ? data.alternativa_A.imagem.caminhoArquivo: '',
      selected: false,
    },
    {
      key: 'B',
      value: data.alternativa_B.textoAlternativa,
      tem_imagem: data.alternativa_B.temImagem,
      imagem_link: data.alternativa_B.temImagem ? data.alternativa_B.imagem.caminhoArquivo: '',
      selected: false,
    },
    {
      key: 'C',
      value: data.alternativa_C.textoAlternativa,
      tem_imagem: data.alternativa_C.temImagem,
      imagem_link: data.alternativa_C.temImagem ? data.alternativa_C.imagem.caminhoArquivo: '',
      selected: false,
    },
    {
      key: 'D',
      value: data.alternativa_D.textoAlternativa,
      tem_imagem: data.alternativa_D.temImagem,
      imagem_link: data.alternativa_D.temImagem ? data.alternativa_D.imagem.caminhoArquivo: '',
      selected: false,
    },
    {
      key: 'E',
      value: data.alternativa_E.textoAlternativa,
      tem_imagem: data.alternativa_E.temImagem,
      imagem_link: data.alternativa_E.temImagem ? data.alternativa_E.imagem.caminhoArquivo: '',
      selected: false,
    },
  ];

  var resp = data.respostaUsuario;

  const onHandleSelect = p => onSelect(p.key);
  console.log(data)
  return (
    <Container>
      <Header>
        <Enunciado>{data.enunciado}</Enunciado>
        {data.tem_imagem &&
          <Image 
            style={{
              width: 200, 
              height: 200
            }}
            source={{uri: `${url_upload()}/${data.imagem_link}`}}
          />
        }
      </Header>
      <Alternativas>
        {alternativas.map(p => (
          <Link key={p.key} onPress={() => onHandleSelect(p) }isPresent={p.key == resp}>
            {p.tem_imagem && <Image 
              style={{
                width: 200, 
                height: 200
              }}
              source={{uri: `${url_upload()}/${p.imagem_link}`}}
            />}
            <Alternativa
              isImagePresent={p.tem_imagem}
              isPresent={p.key == resp}>
              {p.key}) {p.value}
            </Alternativa>
          </Link>
          )
        )}
      </Alternativas>
    </Container>
  );
}
