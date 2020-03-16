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
  console.log(data)
  return (
    <Container>
      <Header
        resposta={data.resposta == 'CORRETA'}
      >
        <Enunciado>
          {data.enunciado}
        </Enunciado>
      </Header>
      <Body>
        <List>
          <ListItem>
            <Key>A)</Key><Value>{data.alternativa_A}</Value>  
          </ListItem>
          <ListItem>
            <Key>B)</Key><Value>{data.alternativa_B}</Value>  
          </ListItem>
          <ListItem>
            <Key>C)</Key><Value>{data.alternativa_C}</Value>  
          </ListItem>
          <ListItem>
            <Key>D)</Key><Value>{data.alternativa_D}</Value>  
          </ListItem>
          <ListItem>
            <Key>E)</Key><Value>{data.alternativa_E}</Value>  
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