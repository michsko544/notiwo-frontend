import styled from 'styled-components';

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
  background-color:${({ color }) => color.alternative};
  position:fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s cubic-bezier(0, 0.52, 0, 1);
  overflow: scroll;
  z-index: 50;

  ${({ visible }) => handleNavPanelDisplay(visible)}
`;