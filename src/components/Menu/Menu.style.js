import styled from 'styled-components';

export const TopBar = styled.div`
  height:80px;
  width: 100%;
  background-color: "#FBFBFB";
  top:0;
  left:0;

  @media(min-width:1024px){
    height: 100px;
  }
`;

export const LogoPosition = styled.div`
  position: absolute;
  left:32px;
  top: 28px;

  @media(min-width:1024px){
    top: 38px;
    left: 75px;
  }
`

export const IconPosition = styled.div`
  position: absolute;
  right:30px;
  top: 29px;
`