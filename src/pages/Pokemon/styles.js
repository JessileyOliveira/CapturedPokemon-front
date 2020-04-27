import styled from 'styled-components/native';
import RadioForm from 'react-native-simple-radio-button';

export const Container = styled.View`
  display: flex;
  flex: 1;
  background: #dddddd;
`;

export const NoItens = styled.Text`
  color: #111111;
  align-self: center;
  font-family: Ubuntu-Regular;
`;

export const HeaderModal = styled.View`
  display: flex;
  flex-direction: row;
  border-bottom-color: #eeeeee;
  border-bottom-width: 1;
`;

export const HeaderModalTitle = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
`;

export const PokemonList = styled.FlatList`
  flex: 1;
`;

export const ModalContainer = styled.View`
  margin: 12px;
`;

export const ModalRadioForm = styled(RadioForm)`
  margin-top: 4px;
  margin-left: 6px;
`;

export const CloseModal = styled.Text`
  margin-top: 4px;
  margin-right: 8px;
  font-size: 16px;
`;

export const Line = styled.View`
  flex: 1;
  border-bottom-color: #eee;
  border-bottom-width: 1px;
`;

export const CheckboxContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CardContainer = styled.View`
  /* flex: 1; */
  flex-direction: row;
  padding: 0px 2px;
`;
