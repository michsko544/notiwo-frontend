import React from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from "../../App"
import styled from 'styled-components';

const ButtonStyled = styled.input`
    width: 100%;
    font-size: 14px;
    color: ${({ color }) => color.main};
    background-color: ${({ color }) => color.font};
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    text-align: center;
    outline: none;
    padding: 14px 15px;
    border: none;
`;


const Button = ({ text, handleOnClick, ...props }) => {
    const { mode } = React.useContext(ThemeContext)

    return (
        <div>
            <ButtonStyled type="submit" text={text} color={mode} onClick={handleOnClick} {...props} />
            <svg style={{ position: "absolute", width: 25, height: 25, top: 11, right: 12, color: mode.main }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {
                    // eslint-disable-next-line 
                }<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
        </div>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    handleOnClick: PropTypes.func,
}

export default Button