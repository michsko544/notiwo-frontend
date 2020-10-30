import styled from 'styled-components';

export const Inner = styled.div`
  width:fit-content;
  max-height:28px;
  display:flex;
  flex-direction:row;
  align-items: center;
`;

export const Icon = styled.div`
  height:22px;
  color: ${({color})=>color.second};
`;

export const Number = styled.div`
  font-weight:600;
  color: ${({color})=>color.first};
  font-size: 16px;
  margin-left:2px;
`;

export const Elements = styled.div`
font-weight:600;
color: ${({mode})=>mode.font};
font-size: 16px;
margin-left:5px;
`;
