import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-start;
    padding: 12px;
    border-bottom-width: 1px;
    border-color: #ccc;
    background-color: #FFFFFF;
    shadow-color: #000000;
    shadow-offset: { width: 0, height: 0 };
    shadow-radius: 2px;
    elevation: 8;
`;

export const TextContainer = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const HeaderText = styled.Text`
  font-size: 20px;
`;
