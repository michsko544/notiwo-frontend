import styled from 'styled-components';

export const NavLinksStyled = styled.div`
  display: flex;
  flex-direction: column;
  top:122px;
  left:26px;

  @media(min-width: 1024px){
    flex-direction: row;
    position: absolute;
    top: 36px;
    right: 75px;
    left: unset;
    width: fit-content;
  }
`