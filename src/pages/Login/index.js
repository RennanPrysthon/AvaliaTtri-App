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
import { useDispatch } from 'react-redux';
import api from '../../services/api';

export default function Login() {
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
    try {
      const { data } = await api.post('login', {
        email: emailValue.value,
        senha: passValue.value
      });
      dispatch({type: Types.LOGIN, id: data.user_id, token: data.token})
    } catch (e) {
      setEmailValue({...emailValue, "error": true})
    }
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
          placeholder={"Email.."}
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
