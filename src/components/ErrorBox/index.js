import React from 'react';
import {Container, ErrorText} from './styles';
import {withNavigation} from 'react-navigation';

function ErrorBox(props) {
  return (
    <Container>
      <ErrorText>{props.message}</ErrorText>
    </Container>
  );
}

export default withNavigation(ErrorBox);
