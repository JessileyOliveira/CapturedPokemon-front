import React from 'react';
import {Container, HeaderText, TextContainer} from './styles';
import IconFE from 'react-native-vector-icons/dist/Feather';
import {withNavigation} from 'react-navigation';

function Header(props) {
  return (
    <Container>
      <IconFE
        name="menu"
        size={30}
        color="#000"
        onPress={() => props.navigation.openDrawer()}
      />
      <TextContainer>
        <HeaderText>{props.title}</HeaderText>
      </TextContainer>
    </Container>
  );
}

export default withNavigation(Header);
