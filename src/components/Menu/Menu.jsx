import React from 'react'
import Logo from "../Logo"
import { TopBar, LogoPosition, IconPosition } from "./Menu.style"
import NavLinks from "./NavLinks";
import { ThemeContext } from "../App"
import Burger from "./Burger";

const Menu = () => {
    const [visibleMenu, setVisibleMenu] = React.useState(false);
    const { mode } = React.useContext(ThemeContext)
    const toggleMenu = () => {
        setVisibleMenu(!visibleMenu);
    }

    return (
        <TopBar>
            <LogoPosition>
                <Logo />
            </LogoPosition>
            <IconPosition>
                <Burger handleMouseDown={toggleMenu} color={mode.font} />
            </IconPosition>
            <NavLinks color={mode} visibility={visibleMenu} toggleMenu={toggleMenu} />
        </TopBar>
    )
}

export default Menu
