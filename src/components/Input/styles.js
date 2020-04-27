import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  width: 100%;
`;

export const InputContainer = styled.View`
  width: 80%;
  position: relative;
  margin: 5px auto 5px auto;
`;

export const Label = styled.Text`
  top: ${props =>
    props.inputReference.value !== '' || props.inputReference.focus === true
      ? '-48px'
      : '-28px'};
  color: ${props =>
    props.inputReference.value !== '' || props.inputReference.focus === true
      ? '#4DB6AC'
      : '#333333'};
  font-size: 12px;
  position: relative;
  padding-left: 5px;
  padding-right: 10px;
  background-color: ${props =>
    props.inputReference.value !== '' || props.inputReference.focus === true
      ? '#FFFFFF'
      : 'transparent'};
  margin-left: 15px;
  align-self: flex-start;
  z-index: 99;
`;

export const TextInput = styled.TextInput`
  width: 100%;
  position: relative;
  font-size: 12px;
  padding: 3px 0px 3px 20px;
  color: #004d40;
  background-color: transparent;
  border: none;
  border-width: 2px;
  border-color: #4db6ac;
  z-index: 20;
  border-radius: 20px;
`;
