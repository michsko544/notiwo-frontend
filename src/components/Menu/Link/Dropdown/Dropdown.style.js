import styled from "styled-components"
import {Link} from "react-router-dom"

export const DropdownStyled = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  min-width: 156px;
  padding: 15px 8px;

  @media (min-width: 1025px) {
    background-color: ${({ color }) => color};
    -webkit-box-shadow: 1px 2px 6px -3px rgba(0, 0, 0, 0.45);
    -moz-box-shadow: 1px 2px 6px -3px rgba(0, 0, 0, 0.45);
    box-shadow: 1px 2px 6px -3px rgba(0, 0, 0, 0.45);
    padding: 15px 10px 15px 22px;
    transform: translateY(5px);
  }
`

export const DropdownLink = styled(Link)`
  padding: 8px 0;
  font-size: 15px;
  font-weight: bold;
`
