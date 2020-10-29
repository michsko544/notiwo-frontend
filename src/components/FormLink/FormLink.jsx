import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import PropTypes from "prop-types"
import { ThemeContext } from "contexts"

const LinkStyled = styled(Link)`
  font-size: 12px;
  font-family: "Comfortaa";
  text-align: center;
  padding: 3px 0;
  text-decoration: none;
  color: ${({ color }) => color};
`

export const LinkWrapper = styled.div`
  margin: 27px auto;
  width: fit-content;
`

const FormLink = ({ children, ...restProps }) => {
  const { mode } = React.useContext(ThemeContext)

  return (
    <LinkStyled color={mode.font} {...restProps}>
      {children}
    </LinkStyled>
  )
}

FormLink.propTypes = {
  children: PropTypes.any.isRequired,
  to: PropTypes.string.isRequired,
}

export default FormLink
