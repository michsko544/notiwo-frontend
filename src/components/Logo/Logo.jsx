import React from 'react'
import styled from 'styled-components';
import { ThemeContext } from "../App"

const LogoStyled = styled.h3`
    font-size:20px;
    font-weight: bold;
    font-family: 'Comfortaa', cursive;
    background: linear-gradient(100.8deg, ${({ color }) => color.second} 0%, ${({ color }) => color.first} 78.65%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    width: fit-content;
`

const Logo = () => {
    const { color } = React.useContext(ThemeContext)

    return (
        <LogoStyled color={color}>
            Freelancer platform
        </LogoStyled>
    )
}

export default Logo
