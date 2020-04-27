import React from 'react';
import {Container, Buttom, TextButtom, LoadingImage} from './styles';
import loading from '../../assets/images/loading.gif';

export default function MyButtom(props) {
  return (
    <Container>
      <Buttom
        background={props.background}
        width={props.width}
        color={props.color}
        borderRadius={props.borderRadius}
        fontSize={props.fontSize}
        activeOpacity={0.8}
        onPress={props.onPress}>
        {props.disabled ? (
          <LoadingImage source={loading} />
        ) : (
          <TextButtom>{props.text}</TextButtom>
        )}
      </Buttom>
    </Container>
  );
}
