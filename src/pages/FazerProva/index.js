import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Controle, Link, Counter, Submit, Text} from './styles';
import {useSelector, useDispatch} from 'react-redux';

import Questao from '../../components/Questao/index';
import {Types} from '../../store/ducks/questoes';
import HeaderBack from '../../components/HeaderBack/index';

export default function FazerProva({route, navigation}) {

  const {id, title} = route.params;
  const [position, setPosition] = useState(0);
  const [podeFinalizar, setPodeFinalizar] = useState(false);

  const questoes = useSelector(state => state.questoes);

  var data = questoes.filter(q => q.idProva == id);

  var count = 0;

  data.map(p => count++);

  const dispatch = useDispatch();

  var Finalizar = () =>{
    return (
      <Submit
        podeFinalizar={false}
        onPress={() => console.log('faz nada')} 
      >
        <Text>Finalizar prova</Text>
      </Submit>
    );
  } 

  useEffect(() => {
    data = questoes.filter(q => q.idProva == id);

    var podeFinalizar = false;
    data.map(q => {
      if(q.respostaUsuario != '') {
        podeFinalizar = true;
      } else {
        podeFinalizar = false;
      }
    });
    setPodeFinalizar(podeFinalizar);
  }, [position]);

  const Selected = () => (
    <Questao
      data={data[position]}
      onSelect={resp => {
        dispatch({
          type: Types.RESPONDER_QUESTAO,
          id: data[position].id,
          resp: resp,
        });
      }}
    />
  );

  return (
    <>
      <HeaderBack navigation={navigation} title={title}/>
      <Container>
        <Controle>
          <Link
            onPress={() => {
              if (position >= 1) setPosition(position - 1);
            }}>
            <Icon name="skip-previous" size={28} color="#000" />
          </Link>
          <Counter>
            {position + 1}/{count}
          </Counter>
          <Link
            onPress={() => {
              if (position < count - 1) setPosition(position + 1);
            }}>
            <Icon name="skip-next" size={28} color="#000" />
          </Link>
        </Controle>
        <Selected />
        {count == position + 1 && (
          <Submit
            podeFinalizar={podeFinalizar}
            onPress={() => {
              if(podeFinalizar) {
                console.log('Prova finalizada')
              }
            
            }} 
          >
            <Text>Finalizar prova</Text>
          </Submit>
        )}
      </Container>
    </>
  );
}
