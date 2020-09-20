import React from 'react'
import { NavPanel } from "./MenuSlider.style"
import { IconPosition } from "../Menu.style"
import CloseBtn from "../CloseBtn"

const MenuSlider = ({ color, visibility, toggleMenu, children }) => {
    return (
        <NavPanel visible={visibility} color={color.alternative}>
            <IconPosition>
                <CloseBtn handleMouseDown={toggleMenu} color={color.font} />
            </IconPosition>
            {children}
        </NavPanel>
    )
}

export default MenuSlider
