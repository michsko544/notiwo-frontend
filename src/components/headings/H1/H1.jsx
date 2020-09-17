import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ThemeContext } from "../../App"

const H1Styled = styled.h1`
  font-family: 'Comfortaa', cursive;
  font-weight: bold;
  font-size: 36px;
  color: ${(props) => props.color};
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