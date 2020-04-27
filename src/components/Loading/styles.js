import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const LoadingImage = styled.ImageBackground`
  height: 44px;
  width: 44px;
  margin: 5px 10px;
  position: absolute;
  background: #fff;
  elevation: 2;
  top: 6px;
  border-radius: 50px;
`;
