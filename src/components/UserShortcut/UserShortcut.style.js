import styled from 'styled-components';

export const Inner = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    cursor:pointer;
`;

export const Thumbnail = styled.img`
  height:45px;
  width: auto;
  border-radius:50%;
`;

export const Name = styled.div`
  width:100%;
  font-size: 15px;
  color: ${({color})=>color.font};
`;

export const Pane = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  padding: 0px 0 0px 10px;
`;