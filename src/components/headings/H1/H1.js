import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const H1Styled = styled.h1`
  font-family: 'Comfortaa';
  font-weight: bold;
  font-size: 36px;
  color: ${(props) => props.color};
`

const H1 = ({ children, ...props }) => {

    return (
        <H1Styled {...props} color={"#363B46"}>
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