import styled from 'styled-components';
import { DropdownStyled } from "./Dropdown"

const CustomLink = styled.div`
  font-size: 14px;
  font-family: 'Comfortaa', cursive;
  font-weight: bold;
  margin-bottom: 9px;
  line-height:19px;
  padding: 8px 0;

  @media(min-width: 1024px){
    margin-bottom: 0px;
    margin-left: 75px;
  }
`;

export const LinkStyled = styled(CustomLink)`
  color: ${({ color }) => color};
  display: flex;
  flex-direction: row;
  align-items: center;
  position: inline-block;

  &:hover ${DropdownStyled} {
    display: block;
  }
`
LinkStyled.defaultProps = {
  color: '#363B46',
}

export const SpecialLink = styled(CustomLink)`
  background: linear-gradient(97.6deg, ${({ firstcolor }) => firstcolor} 0%, ${({ secondcolor }) => secondcolor} 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: fit-content;
`

SpecialLink.defaultProps = {
  firstcolor: '#E42C64',
  secondcolor: "#614AD3",
}