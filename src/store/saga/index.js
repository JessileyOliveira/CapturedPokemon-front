import {takeLatest, takeEvery} from 'redux-saga/effects';
import * as login from './login';
import * as pokemon from './pokemon';

export default function* root() {
  yield takeLatest('REQUEST_LOGIN', login.asyncLogin);
  yield takeLatest('REQUEST_VERIFY_LOGIN', login.asyncVerifyLogin);
  yield takeEvery('REQUEST_GET_POKEMON', pokemon.asyncPokemon);
}
