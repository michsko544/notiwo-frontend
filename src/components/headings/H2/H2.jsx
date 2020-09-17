import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ThemeContext } from "../../App"

const H2Styled = styled.h2`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 24px;
  color: ${(props) => props.color};
`

const H2 = ({ children, ...props }) => {
    const { mode } = React.useContext(ThemeContext)

    return (
        <H2Styled {...props} color={mode.font}>
            {children}
        </H2Styled>
    )
}

H2.propTypes = {
    children: PropTypes.any,
}

H2.defaultProps = {
    children: null,
}

export default H2