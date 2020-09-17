import React from 'react'
import styled from 'styled-components';

const CloseBtnIcon = styled.button`
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

const CloseBtn = ({ handleMouseDown, color }) => {
    return (
        <CloseBtnIcon onMouseDown={handleMouseDown} color={color} >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </CloseBtnIcon>
    )
}

export default CloseBtn