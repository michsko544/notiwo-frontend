import styled from 'styled-components';
import {Link} from "react-router-dom"

const handleNavPanelDisplay = (visibility) => {
    if (visibility === true) {
        return `
            transform: translate3d(0vw, 0, 0);
            overflow: hidden;
        `
    } else {
        return `
            transform: translate3d(100%, 0, 0);
        `
    }
}

export const NavPanel = styled.nav`
  min-height:100vh;
  width: 65%;
  background-color:${({ color }) => color};
  position:fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s cubic-bezier(0, 0.52, 0, 1);
  overflow: scroll;
  z-index: 50;

  ${({ visible }) => handleNavPanelDisplay(visible)}

  @media(min-width: 1025px){
      min-width: fit-content;
      height: 100px;
      min-height: unset;
      position: relative;
      transform: translate3d(0vw, 0, 0);
      float:right;
      background-color: rgba(0,0,0,0);
      overflow:unset;
  }
`;

export const ProfileLink = styled(Link)`
  color: ${({color})=>color.first};
  font-size: 15px;
  font-weight:600;
`;

export const UserShortcutWrapper = styled.div`
    position:absolute;
    bottom: 35px;
    left: 25px;

    @media(min-width: 1025px){
        display: none;
    }
`;