import {put, call} from 'redux-saga/effects';
import axios from 'axios';

/** function that returns an axios call */
function getPokemon(jwt) {
  return axios.request({
    method: 'get',
    url: 'http://10.0.3.2:3333/pokemons',
    headers: {
      authorization: `Bearer ${jwt}`,
    },
  });
}

export function* asyncPokemon(action) {
  try {
    const response = yield call(getPokemon, action.payload.jwt);
    yield put({
      type: 'GET_POKEMON_SUCCESS',
      payload: response.data.content.data,
    });
  } catch (e) {
    yield put({type: 'GET_POKEMON_ERROR'});
  }
}
