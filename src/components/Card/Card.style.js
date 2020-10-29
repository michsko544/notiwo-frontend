import styled from 'styled-components';
import {Link} from "react-router-dom"

export const Inner = styled(Link)`
    width: 100%;
    background-color: ${({color})=>color.alternative};
    border: 2px solid ${({color})=>color.alternative};
    max-width: 350px;
    cursor: pointer;
    height: fit-content;
`;

export const Container = styled.div`
  width:100%;
  display:grid;
  grid-gap: 24px;
  grid-template-columns: 1fr;

  @media(min-width: 1024px){
    justify-content:space-between;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Title = styled.h4`
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 15px;
  text-align:left;
  width:100%;
  color: ${({color})=>color.font};
`;

export const Break = styled.div`
  content: "";
  padding:5px;
`;

export const Image = styled.img`
    max-width:100%;
    height: auto;
`;

export const Price = styled.div`
  font-size: 18px;
  background: linear-gradient(100.8deg, ${({ color }) => color.second} 0%, ${({ color }) => color.first} 78.65%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: fit-content;
  font-weight:600;
  white-space:nowrap;
`;

export const Bottom = styled.div`
    display:flex;
    align-items: flex-end;
    width:100%;
    justify-content:space-between;
`;

export const Pane = styled.div`
    width:100%;
    padding: 13px;
    padding-top: 7px;
    display:flex;
    flex-direction:column;
`;