import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const ErrorStyled = styled.p`
  font-size: 12px;
  padding: 4px 15px;
  color: ${({ color }) => color};
  width: 100%;
`

ErrorStyled.defaultProps = {
    color: '#363B46',
}

const InputError = ({ error, color }) => {
    return <ErrorStyled color={color}>{error}</ErrorStyled>
}

InputError.propTypes = {
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    color: PropTypes.string,
}

export default InputError