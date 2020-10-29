import React from "react"
import PropTypes from "prop-types"
import { ThemeContext } from "contexts"
import styled from "styled-components"

const ButtonStyled = styled.input`
  width: 100%;
  font-size: 16px;
  color: ${({ color }) => color.main};
  background-color: ${({ color }) => color.font};
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  text-align: center;
  outline: none;
  padding: 14px 15px;
  border: none;
  cursor: pointer;
`

const Button = ({ text, handleOnClick, type, ...props }) => {
  const { mode } = React.useContext(ThemeContext)

  return (
    <div>
      <ButtonStyled type={type} value={text} color={mode} onClick={handleOnClick} {...props} />
      <svg
        style={{ position: "absolute", width: 25, height: 25, top: 11, right: 12, color: mode.main }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </div>
  )
}

Button.defaultProps = {
  type: "button",
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  handleOnClick: PropTypes.func,
}

export default Button
