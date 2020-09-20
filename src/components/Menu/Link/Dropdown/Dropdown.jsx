import React from 'react'
import styled from 'styled-components';

export const DropdownStyled = styled.div`
    display:none;
    position:absolute;
    background-color: #BBB;
    -webkit-box-shadow: 1px 2px 6px -3px rgba(0,0,0,0.45);
    -moz-box-shadow: 1px 2px 6px -3px rgba(0,0,0,0.45);
    box-shadow: 1px 2px 6px -3px rgba(0,0,0,0.45);
    padding: 0 8px;
    z-index: 1;
    transform: translateY(38px);
    min-width: 156px;
    background-color: ${({ color }) => color};
`;

const Dropdown = ({ color }) => {
    return (
        <DropdownStyled color={color}>
            xd
            amdig
            amgoaeg
        </DropdownStyled>
    )
}

export default Dropdown
