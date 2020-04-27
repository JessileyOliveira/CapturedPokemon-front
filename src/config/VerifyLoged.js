import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import createNavigator from './Routes';
import {setNavigator} from './NavigationService';
import * as loginAction from '../store/actions/login';

export default function VerifyLoged() {
  let userLoggedData = useSelector(state => state.userData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      loginAction.verifyLogin(userLoggedData.username, userLoggedData.password),
    );
  }, []);

  const userLogged = userLoggedData.logged;

  const Routes = createNavigator(userLogged);

  return <Routes ref={setNavigator} />;
}
