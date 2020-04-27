import {put, call} from 'redux-saga/effects';
import axios from 'axios';
import * as NavigationService from '../../config/NavigationService';

export function* asyncLogin(action) {
  try {
    const response = yield call(
      axios.post,
      'http://10.0.3.2:3333/authenticate',
      {
        username: action.payload.username,
        password: action.payload.password,
      },
    );
    if (!response.data.error) {
      const data = response.data.content;

      let payload = {
        jwt: data.tokenData.token,
        isAdmin: data.data[0].isAdmin,
        id: data.data[0].id,
        username: action.payload.username,
        password: action.payload.password,
        name: data.data[0].name,
      };
      NavigationService.navigate('HomeScreen');

      yield put({type: 'LOGIN_SUCCESS', payload: payload});
    } else {
      yield put({type: 'USER_INATIVE'});
    }
  } catch (e) {
    yield put({type: 'LOGIN_ERROR'});
  }
}

export function* asyncVerifyLogin(action) {
  try {
    const response = yield call(
      axios.post,
      'http://10.0.3.2:3333/authenticate',
      {
        username: action.payload.username,
        password: action.payload.password,
      },
    );

    if (!response.data.error) {
      yield put({type: 'VERIFY_LOGIN_SUCCESS'});
    } else {
      NavigationService.navigate('Login');
      yield put({type: 'LOGOFF'});
      yield put({type: 'USER_INATIVE'});
    }
  } catch (e) {
    NavigationService.navigate('Login');
    yield put({type: 'LOGOFF'});
    yield put({type: 'LOGIN_ERROR'});
  }
}
