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


export default function Login({ navigation }) {

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

    navigation.navigate('Logged')
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
          placeholder={"Login..."}
          onChangeText={onEmailText}
          value={emailValue.value}
          error={emailValue.error}        
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
