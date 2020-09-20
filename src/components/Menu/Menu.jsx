import React from 'react'
import Logo from "../Logo"
import { TopBar, LogoPosition, IconPosition } from "./Menu.style"
import NavLinks from "./NavLinks"
import MenuSlider from "./MenuSlider";
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
                {/* <NavLink to="/"> */}
                <Logo />
                {/* </NavLink> */}
            </LogoPosition>
            <IconPosition>
                <Burger handleMouseDown={toggleMenu} color={mode.font} />
            </IconPosition>
            <MenuSlider color={mode} visibility={visibleMenu} toggleMenu={toggleMenu}>
                <NavLinks />
            </MenuSlider>
        </TopBar>
    )
}

export default Menu
