import React from 'react'
import PropTypes from 'prop-types'
import { LinkStyled } from "./Link.style"
import Dropdown from "./Dropdown"

const Link = ({ children, dropdown, color }) => {
    return (
        <LinkStyled color={color.font}>

            {children}
            {dropdown ? (
                <>
                    <div style={{ width: 19, height: 19 }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg></div>
                    <Dropdown color={color.main} />
                </>) : ""}
        </LinkStyled>
    )
}

Link.propTypes = {
    children: PropTypes.any.isRequired,
    dropdown: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    color: PropTypes.string,
}

export default Link
