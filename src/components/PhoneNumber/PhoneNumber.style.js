import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  outline: none;
  font-size:15px;
  font-family: "Open Sans";
  cursor:pointer;
  color: ${({mode})=> mode.font};
  background-color: ${({mode})=> mode.main};
  display:flex;
  align-items:center;
`;

export const Inner = styled.div`
  display:flex;
  align-items:center;
  height : 50px;
`;

export const Number = styled.div`
    font-size:18px;
    font-weight:600;
    background: linear-gradient(100.8deg, ${({ color }) => color.second} 0%, ${({ color }) => color.first} 78.65%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: fit-content;
`;