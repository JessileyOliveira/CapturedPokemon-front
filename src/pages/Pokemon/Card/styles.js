import styled from 'styled-components/native';

export const CardContainer = styled.TouchableOpacity`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 2px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.captured ? 'rgba(0, 255, 0, 0.3)' : 'rgba(255, 255, 255, 0.5)'};
  padding: 2px;
  border: 1px solid #eee;
`;

export const PokemonImage = styled.Image`
  height: 60px;
  width: 60px;
`;

export const TitleAccess = styled.Text`
  font-size: 14px;
  color: ${(props) =>
    props.shiny
      ? props.captured
        ? '#FFF275'
        : '#FFb42b'
      : props.captured
      ? '#FFFFFF'
      : '#000000'};
  font-weight: bold;
  display: flex;
  flex-direction: row;
  padding: 0px 4px 0px 0px;
`;
