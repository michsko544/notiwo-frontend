import styled from "styled-components/macro"
import {Link} from "react-router-dom"

export const CustomLink = styled.div`
  font-size: 17px;
  font-family: "Comfortaa", cursive;
  font-weight: bold;
  line-height: 19px;
  white-space: nowrap;
  cursor: pointer;
  color: ${({color})=>color};

  @media (min-width: 1024px) {
    font-size: 15px;
    text-align: right;
    margin-bottom: 0px;
    margin-left: 75px;
    height: fit-content;
  }
`

export const RouterLink = styled(Link)`
  color: ${({color})=>color};
`

export const LinkStyled = styled(CustomLink)`
  display: flex;
  flex-direction: column;
  color: ${({color})=>color};
`

export const SpecialLink = styled(CustomLink)`
  margin-bottom: 28px;
`

export const RouterSpecialLink = styled(Link)`
  background: linear-gradient(97.6deg, ${({ firstcolor }) => firstcolor} 0%, ${({ secondcolor }) => secondcolor} 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: fit-content;
`

SpecialLink.defaultProps = {
  firstcolor: "#E42C64",
  secondcolor: "#614AD3",
}

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (min-width: 1024px) {
    margin-left: auto;
  }
`

export const IconStyle = styled.div`
  width: 19px;
  height: 19px;
  transition: 0.3s ease-out all;
  margin-left: 5px;
  transform: rotate(${({ rotate }) => (rotate==="true" ? "-180deg" : "0")});
`
