import React, {useState, memo} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ToastAndroid} from 'react-native';

import {CardContainer, TitleAccess, PokemonImage} from './styles';
import axios from 'axios';

function Pokemon(props) {
  const stateLogin = useSelector((state) => {
    return state.userData;
  });

  const [captured, setCaptured] = useState(
    parseInt(props.captured) > 0 ? true : false,
  );

  const markCaptured = async (val) => {
    if (val == false) {
      await axios.delete(`http://10.0.3.2:3333/captured/${props.id}`, {
        headers: {
          Authorization: `Bearer ${stateLogin.jwt}`,
        },
      });
    } else {
      await axios.post(
        'http://10.0.3.2:3333/captured',
        {
          pokemon_id: props.id,
        },
        {
          headers: {Authorization: `Bearer ${stateLogin.jwt}`},
        },
      );
    }
    ToastAndroid.showWithGravityAndOffset(
      'Alterado com sucesso!!!',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
    setCaptured(val);
  };

  return (
    <CardContainer
      activeOpacity={0.6}
      captured={captured}
      onPress={() => markCaptured(!captured)}>
      <TitleAccess
        captured={captured}
        shiny={parseInt(props.shiny) === 1 ? true : false}>
        {props.number} {props.name}
      </TitleAccess>
      <PokemonImage source={{uri: props.image}} />
    </CardContainer>
  );
}

export default memo(Pokemon);
