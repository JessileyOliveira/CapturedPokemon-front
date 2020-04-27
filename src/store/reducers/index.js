import {combineReducers} from 'redux';

import login from './login';
import pokemon from './pokemon';
import userData from './userData';
import filterPokemon from './filterPokemon';

export default combineReducers({
  login,
  pokemon,
  userData,
  filterPokemon,
});
