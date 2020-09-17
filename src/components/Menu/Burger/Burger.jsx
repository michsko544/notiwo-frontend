import React from 'react'
import styled from 'styled-components';

const BurgerIcon = styled.button`
    background:none;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 24px;
    width: 24px;
    height: 24px;
    outline: none;
    border: none;
    color: ${({ color }) => color};
    cursor: pointer;
`;

const Burger = ({ handleMouseDown, color }) => {
    return (
        <BurgerIcon onMouseDown={handleMouseDown} color={color} >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </BurgerIcon>
    )
}

export default Burger
