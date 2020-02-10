import React from 'react';

import { 
  Container,
  Enunciado,
  Texto,
  Alternativa,
  Header,
  Resultado,
  Body,
  List,
  ListItem,
  Key,
  Footer,
  Value
} from './styles';

export default function Pergunta({ data }) {
  return (
    <Container>
      <Header
        resposta={data.resposta == 'CORRETA'}
      >
        <Enunciado>
          {data.enunciado}
        </Enunciado>
        {data.resposta == 'CORRETA' ? 
            <Resultado>
              Correta
            </Resultado>
            :
            <Resultado>
              Incorreta
            </Resultado>
          }
      </Header>
      <Body>
        <List>
          <ListItem>
            <Key>A)</Key><Value>Valor alternativa</Value>  
          </ListItem>
          <ListItem>
            <Key>B)</Key><Value>Valor alternativa</Value>  
          </ListItem>
          <ListItem>
            <Key>C)</Key><Value>Valor alternativa</Value>  
          </ListItem>
          <ListItem>
            <Key>D)</Key><Value>Valor alternativa</Value>  
          </ListItem>
          <ListItem>
            <Key>E)</Key><Value>Valor alternativa</Value>  
          </ListItem>
        </List>
      </Body>
      <Footer>
        <Texto>
          Sua resposta: <Alternativa>{data.alternativa_usuario})</Alternativa>
        </Texto>
      </Footer>
      
    </Container>
  )
}