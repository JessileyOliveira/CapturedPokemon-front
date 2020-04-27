import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.width ? props.width : '80%')};
`;

export const Buttom = styled.TouchableOpacity`
  background: ${(props) => (props.background ? props.background : '#4DB6AC')};
  width: 100%;
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : '50px'};
  align-items: center;
  font-weight: bold;
`;

export const TextButtom = styled.Text`
  color: ${(props) => (props.color ? props.color : '#FFFFFF')};
  padding: 5px 10px;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '18px')};
`;

export const LoadingImage = styled.ImageBackground`
  height: 44px;
  width: 44px;
  margin: 5px 10px;
`;
