import React, {
  useState
} from 'react';

import {
  Image
} from 'react-native';

import { 
  Container,
  Header,
  Form,
  Input,
  Button,
  Text,
  EsqueciSenha,
  Link
} from "./styles";

import { Types } from "../../store/ducks/auth";
import { useSelector, useDispatch } from 'react-redux';
import api from '../../services/api';

export default function Login({ navigation }) {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const [emailValue, setEmailValue] = useState({ value: '', error: false, });
  const onEmailText = text => setEmailValue({ value: text, error: false, })

  const [passValue, setPassValue] = useState({ value: '', error: false, });
  const onPassText = text => setPassValue({ value: text, error: false, })

  const onHandlerLogar = () => {
  
    if(emailValue.value == '') {
      setEmailValue({...emailValue, "error": true})
    }

    if(passValue.value == '') {
      setPassValue({...passValue, "error": true})
    }

    if(passValue.value == '' || emailValue.value == '') return;

    onLogar();
  }

  const onLogar = async () => {
    await api.post('login', {
      email: emailValue.value,
      senha: passValue.value
    })
    .then(res => {
      dispatch({type: Types.LOGIN, id: res.data.user_id, token: res.data.token})
    })
    .catch(err => {
      setEmailValue({...emailValue, "error": true})
    });
  }

  return (
    <Container >
      <Header>
        <Image 
          style={{ width: 220, height: 220 }}
          source={require('../../uploads/logo.png')}
        />
      </Header>
      <Form>
        <Input 
          placeholder={"Email..."}
          onChangeText={onEmailText}
          value={emailValue.value}
          error={emailValue.error}        
          autoCapitalize='none'
          keyboardType='email-address'
        />
        <Input 
          placeholder={"Senha..."}
          onChangeText={onPassText}
          value={passValue.value}
          error={passValue.error}
          secureTextEntry={true}
        />
        <Button
          onPress={() => onHandlerLogar()}
        >
          <Text>
            Entrar
          </Text>
        </Button>
        <Link>
          <EsqueciSenha>
            Esqueci a senha
          </EsqueciSenha>
        </Link>
      </Form>
    </Container>
  );
}
