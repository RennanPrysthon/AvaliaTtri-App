import React from 'react';
import {Container, Enunciado, Alternativas, Alternativa} from './styles';

export default function Questao({data, onSelect}) {
  const alternativas = [
    {
      key: 'A',
      value: data.allternativa_A,
      selected: false,
    },
    {
      key: 'B',
      value: data.allternativa_B,
      selected: false,
    },
    {
      key: 'C',
      value: data.allternativa_C,
      selected: false,
    },
    {
      key: 'D',
      value: data.allternativa_D,
      selected: false,
    },
    {
      key: 'E',
      value: data.allternativa_E,
      selected: false,
    },
  ];
  var resp = data.respostaUsuario;

  const onHandleSelect = p => onSelect(p.key);
  
  return (
    <Container>
      <Enunciado>{data.enunciado}</Enunciado>
      <Alternativas>
        {alternativas.map(p => (
          <Alternativa
            onPress={() => onHandleSelect(p)}
            isPresent={() => (p.key == resp ? '#456' : '#1234')}>
            {p.key}){p.value}
          </Alternativa>
        ))}
      </Alternativas>
    </Container>
  );
}
