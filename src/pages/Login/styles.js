import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #ffffff;
`;

export const Logo = styled.View`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 15px;
`;

export const LogoImage = styled.Image`
  width: 150px;
  height: 150px;
`;

export const LogoText = styled.Text`
  font-size: 22px;
  padding: 10px 0px;
  font-family: Ubuntu-Regular;
`;

export const ErrorText = styled.Text`
  font-size: 12px;
  padding: 5px 15px;
  font-family: Ubuntu-Regular;
  background-color: #f45b69;
  border-radius: 25px;
  color: #fff;
  margin-bottom: 10px;
`;
