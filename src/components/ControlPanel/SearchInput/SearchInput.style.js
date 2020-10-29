import styled from 'styled-components';

export const InputStyled = styled.input`
  border:none;
  background-color:inherit;
  color: ${({color})=>color.font};
  outline: none;
  border-bottom: 2px ${({color})=>color.font} solid;
  padding: 0 0 3px 0;
  font-family: "Open Sans";
  font-weight: bold;
  font-size: 14px;
  width:100%;
  max-width: 350px;
  height: 22px;
  margin-bottom: 9px;

  &::placeholder{
    color: ${({color})=>color.font};
    opacity:0.6
  }
`;

export const Label = styled.label`
  visibility: hidden;
  position:absolute;
`