import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { ThemeContext } from "contexts"

const H3Styled = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: ${(props) => props.color};
`

const H3 = ({ children, ...props }) => {
  const { mode } = React.useContext(ThemeContext)

  return (
    <H3Styled {...props} color={mode.font}>
      {children}
    </H3Styled>
  )
}

H3.propTypes = {
  children: PropTypes.any,
}

H3.defaultProps = {
  children: null,
}

export default H3
