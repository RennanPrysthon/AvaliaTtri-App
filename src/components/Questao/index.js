import React, {
  useState,
  useEffect
} from 'react';
import {
  Container, 
  Enunciado,
  Header
} from './styles';
import Imagem from '../Imagem';
import AlternativasList from '../AlternativasList';
import { createContext } from 'react';

export const RespostaContext = createContext();

export default function Questao({data, onSelect}) {
  const [resp, setResp] = useState(null);
  const onHandleSelect = p => {
    onSelect(p)
  };
  return (
    <Container>
      <Header>
        <Imagem tem_imagem={data.temImagem} link_imagem={data.imagem}/>
        <Enunciado>{data.enunciado}a</Enunciado>
      </Header>
      <RespostaContext.Provider value={{data, resp, setResp, onHandleSelect}}>
        <AlternativasList />
      </RespostaContext.Provider>
    </Container>
  );
}


{/* <Header>
<Enunciado>{data.enunciado}</Enunciado>
{data.tem_imagem &&
  <Imagem 
    source={{uri: `${url_upload()}/${data.imagem_link}`}}
  />
}
</Header>
<Alternativas>
{alternativas.map(p => (<>
   {p.tem_imagem && <Imagem 
    source={{uri: `${url_upload()}/${p.imagem_link}`}}
  />}
  <Link 
    key={p.key} 
    onPress={() => onHandleSelect(p)}
    isPresent={p.key == resp}
  >
   
    <Alternativa
      isImagePresent={p.tem_imagem}
      isPresent={p.key == resp}>
      {p.key}) {p.value}
    </Alternativa>
  </Link>
  </>)
)}
</Alternativas> */}