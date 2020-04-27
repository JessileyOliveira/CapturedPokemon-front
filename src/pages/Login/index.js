import React, {useState} from 'react';
import {Container, Logo, LogoImage} from './styles';
import Input from '../../components/Input';
import Buttom from '../../components/Buttom';
import Error from '../../components/ErrorBox';
import {useSelector, useDispatch} from 'react-redux';
import * as loginAction from '../../store/actions/login';

export default function Login() {
  const stateLogin = useSelector((state) => {
    return state.login;
  });
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (value) => {
    setUsername(value);
  };
  const handlePassword = (value) => {
    setPassword(value);
  };

  const acess = () => {
    dispatch(loginAction.login(username, password));
  };

  return (
    <Container>
      <Logo>
        <LogoImage source={require('../../assets/images/logo.png')} />
      </Logo>
      {stateLogin.error && <Error message={stateLogin.errorMessage} />}

      <Input label="Login" inputStateCallback={handleLogin} />
      <Input
        secureTextEntry={true}
        label="Password"
        inputStateCallback={handlePassword}
      />
      <Buttom
        text="Logar"
        background="#1E87E4"
        onPress={acess}
        disabled={stateLogin.loading}
      />
    </Container>
  );
}
