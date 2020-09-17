import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const H2Styled = styled.h2`
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 24px;
  color: ${(props) => props.color};
`

const H2 = ({ children, ...props }) => {

    return (
        <H2Styled {...props} color={"#363B46"}>
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