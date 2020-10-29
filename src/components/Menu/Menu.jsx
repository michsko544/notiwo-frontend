import React from "react"
import Logo from "../Logo"
import { TopBar, LogoPosition, IconPosition } from "./Menu.style"
import NavLinks from "./NavLinks"
import MenuSlider from "./MenuSlider"
import { ThemeContext } from "contexts"
import Burger from "./Burger"
import { NavLink } from "react-router-dom"

const Menu = () => {
  const [visibleMenu, setVisibleMenu] = React.useState(false)
  const { mode, color } = React.useContext(ThemeContext)
  const toggleMenu = () => {
    setVisibleMenu(!visibleMenu)
  }

  return (
    <TopBar>
      <LogoPosition>
        <NavLink to="/notices/it">
          <Logo />
        </NavLink>
      </LogoPosition>
      <IconPosition>
        <Burger handleMouseDown={toggleMenu} color={mode.font} />
      </IconPosition>
      <MenuSlider mode={mode} color={color} visibility={visibleMenu} toggleMenu={toggleMenu}>
        <NavLinks handleMenuClose={() => setVisibleMenu(false)} />
      </MenuSlider>
    </TopBar>
  )
}

export default Menu
