import React from 'react'
import { NavPanel } from "./NavLinks.style"
import { IconPosition } from "../Menu.style"
import CloseBtn from "../CloseBtn"

const NavLinks = ({ color, visibility, toggleMenu }) => {
    return (
        <NavPanel visible={visibility} color={color}>
            <IconPosition>
                <CloseBtn handleMouseDown={toggleMenu} color={color.font} />
            </IconPosition>
        </NavPanel>
    )
}

export default NavLinks
