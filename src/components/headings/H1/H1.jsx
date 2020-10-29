import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { ThemeContext } from "contexts"

const H1Styled = styled.h1`
  font-family: "Comfortaa", cursive;
  font-weight: bold;
  font-size: 36px;
  line-height: 46px;
  color: ${(props) => props.color};
`

export const TitleWrapper = styled.div`
  margin-top: 56px;
  margin-bottom: 50px;
`

export const H1Wrapper = styled.div`
  margin-bottom: 42px;
`

const H1 = ({ children, ...props }) => {
  const { mode } = React.useContext(ThemeContext)

  return (
    <H1Styled {...props} color={mode.font}>
      {children}
    </H1Styled>
  )
}

H1.propTypes = {
  children: PropTypes.any,
}

H1.defaultProps = {
  children: null,
}

export default H1
