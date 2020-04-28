import React, {
  useEffect,
  useState
} from 'react';

import {
  Alert,
  Animated,
  Keyboard
} from 'react-native';

import { 
  Container,
  Header,
  Input,
  Button,
  Text,
  ContainerList
} from "./styles";

import { Types } from "../../store/ducks/auth";
import { useDispatch } from 'react-redux';
import api from '../../services/api';
import errorMessage from '../../utils/errorMessage';

export default function Login() {
  const dispatch = useDispatch();

  const [emailValue, setEmailValue] = useState({ value: '', error: false, });
  const onEmailText = text => setEmailValue({ value: text, error: false, })

  const [passValue, setPassValue] = useState({ value: '', error: false, });
  const onPassText = text => setPassValue({ value: text, error: false, })

  const onHandlerLogar = () => {
    if(emailValue.value == '') {
      errorMessage('Email não pode estar vazio')
      setEmailValue({...emailValue, "error": true})
      return;
    }

    if(passValue.value == '') {
      errorMessage('Senha não pode estar vazia')
      setPassValue({...passValue, "error": true})
      return;
    }

    if(passValue.value == '' || emailValue.value == '') return;
    onLogar();
  }

  const onLogar = async () => {
    try {
      const { data } = await api.post('/login', {
        email: emailValue.value,
        senha: passValue.value
      },  {
        headers: {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
          'Content-Type': 'application/json',
        }
      });
      dispatch({type: Types.LOGIN, id: data.user_id, token: data.token})
    } catch (e) {
      console.log(e)
      errorMessage(e)
      setEmailValue({...emailValue, "error": true})
    }
  }

  const [index] = useState(new Animated.Value(0))
  const [imgSize] = useState(new Animated.ValueXY({x: 220, y:220}));
  const onHideKeyboard = () => {
    Animated.parallel([
      Animated.timing(imgSize.x, {
        toValue: 220,
        duration: 200
      }),
      Animated.timing(imgSize.y, {
        toValue: 220,
        duration: 200
      }),
    ]).start();
    
  }
  const onShowKeyboard = () => {
    Animated.parallel([
      Animated.timing(imgSize.x, {
        toValue: 120,
        duration: 200
      }),
      Animated.timing(imgSize.y, {
        toValue: 120,
        duration: 200
      }),
    ]).start();
  }

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", onShowKeyboard)
    Keyboard.addListener("keyboardDidHide", onHideKeyboard)
    Animated.timing(index, {
      toValue: 1,
      duration: 200
    }).start()
  }, [])

  return (
    <Container>
      <ContainerList >
        <Header>
          <Animated.Image 
            style={{ width: imgSize.x, height: imgSize.y }}
            source={require('../../uploads/logo.png')}
          />
        </Header>
        <Animated.View
          style={[{flex: 1, padding: 20}, {opacity: index}]}
        >
          <Input 
            placeholder={"Email"}
            onChangeText={onEmailText}
            value={emailValue.value}
            error={emailValue.error}        
            autoCapitalize='none'
            keyboardType='email-address'
          />
          <Input 
            placeholder={"Senha"}
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
          {/*<Link>
            <EsqueciSenha>
              Esqueci a senha
            </EsqueciSenha>
          </Link>*/}
        </Animated.View>
      </ContainerList>
    </Container>
  );
}
